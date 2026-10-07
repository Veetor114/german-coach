import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Image analysis can take longer than the default serverless timeout.
export const maxDuration = 30;

// Best-effort per-IP limit so one visitor cannot use up the shared Gemini quota.
// Serverless instances do not share memory, so this is a safety net, not a hard cap.
const RATE_LIMIT_MAX_REQUESTS = 30;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(ip, recent);
  if (requestLog.size > 5000) {
    for (const [key, times] of requestLog) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
    }
  }
  return false;
}

function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

type CoachAction = "image" | "conversation" | "feedback" | "simplify";
type ChatRole = "user" | "assistant";

interface CoachRequest {
  action: CoachAction;
  message?: string;
  imageDataUrl?: string;
  history?: { role: ChatRole; content: string }[];
}

const SYSTEM_PROMPTS: Record<CoachAction, string> = {
  image: "You are a practical German B2 speaking coach. Read the uploaded task image and identify the topic, instructions, questions, requirements, and keywords. Then prepare a concise speaking outline with exactly 3 realistic possibilities; German explanation and brief English meaning for each; advantages; disadvantages; an adaptable opinion frame; a short conclusion; full, easy, and keyword versions. Use natural, speakable German. If text is unclear, name exactly what cannot be read. Do not invent unreadable task text.",
  conversation: "You are a natural conversation partner in Germany and a supportive German coach. Continue the role-play in German, one concise turn at a time. Stay in character and do not interrupt to correct ordinary mistakes. Match the requested difficulty. Use natural practical German, not academic language.",
  feedback: "You are a supportive German speaking coach. Give concise feedback on the learner's German: corrections with improved natural wording, a few useful vocabulary items, only important grammar points, and separate 1-5 estimates for grammar, vocabulary, fluency, naturalness, and pronunciation (pronunciation is not assessable from text; say so rather than guessing). End with one specific next practice goal. Do not overwhelm.",
  simplify: "You are a practical German language coach. Rewrite the given German text at the requested level, preserving its meaning. Give the natural German version and a short English meaning only if requested. Keep it speakable and concise.",
};

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI coaching is not configured. Add GEMINI_API_KEY to the server environment and restart the app." },
      { status: 503 },
    );
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "You have used the AI coach a lot in a short time. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } },
    );
  }

  let body: CoachRequest;
  try {
    body = (await request.json()) as CoachRequest;
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (!(body.action in SYSTEM_PROMPTS)) {
    return NextResponse.json({ error: "Unsupported coaching action." }, { status: 400 });
  }

  const prompt = body.message?.trim() ?? "";
  if (body.action !== "image" && !prompt) {
    return NextResponse.json({ error: "A message is required." }, { status: 400 });
  }
  if (prompt.length > 12000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 413 });
  }
  if (body.action === "image" && (!body.imageDataUrl || body.imageDataUrl.length > 8_000_000)) {
    return NextResponse.json({ error: "Upload a supported image under 6 MB." }, { status: 400 });
  }
  if (body.action === "image" && !/^data:image\/(png|jpe?g|webp);base64,/.test(body.imageDataUrl ?? "")) {
    return NextResponse.json({ error: "Use a PNG, JPG, or WebP image." }, { status: 400 });
  }

  const history = (body.history ?? [])
    .filter((turn) => (turn.role === "user" || turn.role === "assistant") && typeof turn.content === "string")
    .slice(-12)
    .map((turn) => ({ role: turn.role, content: turn.content.slice(0, 4000) }));

  const contents = [
    ...(body.action === "conversation"
      ? history.map((turn) => ({
          role: turn.role === "assistant" ? "model" : "user",
          parts: [{ text: turn.content }],
        }))
      : []),
    {
      role: "user",
      parts: body.action === "image"
        ? [
            { text: "Analyze this German speaking task image and prepare the requested structured speaking outline." },
            {
              inlineData: {
                mimeType: body.imageDataUrl!.match(/^data:(image\/(?:png|jpe?g|webp));base64,/)![1],
                data: body.imageDataUrl!.split(",", 2)[1],
              },
            },
          ]
        : [{ text: prompt }],
    },
  ];

  try {
    const model = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPTS[body.action],
        temperature: 0.6,
        maxOutputTokens: 1600,
        // Gemini 2.5 Flash "thinking" tokens count against maxOutputTokens and can leave the reply empty or cut off.
        ...(/2\.5-flash/.test(model) ? { thinkingConfig: { thinkingBudget: 0 } } : {}),
      },
    });
    const content = response.text?.trim();
    if (!content) return NextResponse.json({ error: "The AI service returned an empty response." }, { status: 502 });
    return NextResponse.json({ content });
  } catch (error) {
    console.error("Coach provider connection failed:", error);
    if (error instanceof Error && /api key not valid|invalid api key|invalid authentication credentials|api_key_invalid/i.test(error.message)) {
      return NextResponse.json(
        { error: "Google rejected GEMINI_API_KEY. Check that it is an active Google AI Studio key with Gemini API access, then restart the app." },
        { status: 503 },
      );
    }
    if (error instanceof Error && /429|quota|rate limit|resource_exhausted/i.test(error.message)) {
      return NextResponse.json({ error: "The AI coach is busy right now. Please try again in a minute." }, { status: 429 });
    }
    return NextResponse.json({ error: "Could not connect to the AI service." }, { status: 502 });
  }
}
