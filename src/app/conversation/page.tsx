"use client";

import { useState } from "react";
import { Headphones, LoaderCircle, MessageCircle, RotateCcw, Send, Sparkles } from "lucide-react";
import { PracticeControls, speakGerman } from "@/components/practice/practice-controls";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SCENARIOS = [
  { title: "At the train station", level: "A2", role: "You are a helpful person at a German train station. The learner is looking for a platform and then asks about a delay.", first: "Guten Tag. Kann ich Ihnen helfen?" },
  { title: "At work", level: "B1", role: "You are the learner's friendly colleague in Germany. You need to coordinate a shared task and discuss a small problem.", first: "Guten Morgen! Hast du schon gesehen, dass sich die Abgabe für unser Projekt geändert hat?" },
  { title: "Job interview", level: "B2", role: "You are a professional but friendly interviewer for an Ausbildung or entry-level job in Germany. Ask one question at a time and respond naturally to the learner's answers.", first: "Guten Tag, schön, dass Sie da sind. Könnten Sie sich bitte kurz vorstellen?" },
  { title: "In a shop", level: "A2", role: "You work in a German shop. Help the learner find a product and answer a question about price or return policy.", first: "Guten Tag! Suchen Sie etwas Bestimmtes?" },
  { title: "Meeting someone new", level: "B1", role: "You have just met the learner through a colleague in Germany. Make natural small talk about the city, hobbies, and the weekend.", first: "Hallo, schön dich kennenzulernen! Bist du schon lange in der Stadt?" },
];

type Turn = { role: "user" | "assistant"; content: string };

export default function ConversationPage() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState("");
  const [english, setEnglish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const scenario = SCENARIOS[scenarioIndex];
  const visibleTurns: Turn[] = turns.length ? turns : [{ role: "assistant", content: scenario.first }];

  const reset = () => {
    setTurns([]);
    setDraft("");
    setFeedback("");
    setError("");
  };

  const sendTurn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = draft.trim();
    if (!message || loading) return;
    setLoading(true);
    setError("");
    setFeedback("");
    setDraft("");
    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "conversation",
          message: `Role-play: ${scenario.role}\nLearner level: ${scenario.level}. Stay in character. Reply in German with one natural, concise conversational turn and at most one follow-up question. Do not correct the learner now.\nLearner says: ${message}`,
          history: turns,
        }),
      });
      const result = await response.json() as { content?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not continue the conversation.");
      setTurns((previous) => [...previous, { role: "user", content: message }, { role: "assistant", content: result.content ?? "" }]);
    } catch (cause) {
      setDraft(message);
      setError(cause instanceof Error ? cause.message : "Could not continue the conversation.");
    } finally {
      setLoading(false);
    }
  };

  const requestFeedback = async () => {
    if (!turns.some((turn) => turn.role === "user")) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "feedback", message: `Role-play scenario: ${scenario.title}\n${turns.map((turn) => `${turn.role === "user" ? "Learner" : "Partner"}: ${turn.content}`).join("\n")}` }),
      });
      const result = await response.json() as { content?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not create feedback.");
      setFeedback(result.content ?? "");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not create feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">SPEAK WITHOUT INTERRUPTIONS</p>
        <h1 className="text-2xl font-semibold tracking-tight">Conversation practice</h1>
        <p className="text-muted-foreground">Have a natural exchange first. Ask for a short review only when you are ready.</p>
      </header>

      <div className="flex flex-wrap gap-2" aria-label="Choose role-play situation">
        {SCENARIOS.map((item, index) => <Button key={item.title} size="sm" variant={scenarioIndex === index ? "default" : "outline"} onClick={() => { setScenarioIndex(index); reset(); }}>{item.title}</Button>)}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <div className="space-y-1"><CardTitle className="flex items-center gap-2"><MessageCircle className="size-5" aria-hidden /> {scenario.title}</CardTitle><Badge variant="secondary">{scenario.level}</Badge></div>
          <Button variant="outline" size="icon" aria-label="Restart conversation" title="Restart conversation" onClick={reset}><RotateCcw aria-hidden /></Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="max-h-[28rem] space-y-3 overflow-y-auto rounded-md bg-muted/50 p-3" aria-live="polite" aria-label="Conversation transcript">
            {visibleTurns.map((turn, index) => (
              <div key={`${index}-${turn.role}`} className={`max-w-[90%] rounded-lg p-3 text-sm leading-relaxed ${turn.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-card ring-1 ring-border"}`}>
                <p className="mb-1 text-xs font-semibold opacity-70">{turn.role === "user" ? "You" : "Gesprächspartner"}</p>
                <p>{turn.content}</p>
                {turn.role === "assistant" && <button className="mt-2 inline-flex items-center gap-1 text-xs opacity-70 hover:opacity-100" onClick={() => speakGerman(turn.content)}><Headphones className="size-3" aria-hidden /> Listen</button>}
              </div>
            ))}
            {loading && <p className="flex items-center gap-2 p-2 text-sm text-muted-foreground"><LoaderCircle className="size-4 animate-spin" aria-hidden /> Thinking in German…</p>}
          </div>

          <form className="space-y-2" onSubmit={sendTurn}>
            <label className="sr-only" htmlFor="conversation-reply">Your reply in German</label>
            <textarea id="conversation-reply" value={draft} onChange={(event) => setDraft(event.target.value)} rows={3} placeholder="Write or dictate your reply in German…" className="w-full resize-y rounded-lg border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            <div className="flex flex-wrap justify-between gap-2">
              <Button type="button" variant="ghost" size="sm" onClick={() => setEnglish((value) => !value)}>{english ? "🇩🇪 German mode" : "🇬🇧 English support"}</Button>
              <Button type="submit" disabled={!draft.trim() || loading}><Send aria-hidden /> Send reply</Button>
            </div>
            {english && <p className="text-xs text-muted-foreground">Starter meaning: {scenario.first}</p>}
          </form>

          {error && <p role="alert" className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
          <div className="flex flex-wrap gap-2 border-t pt-4">
            <Button variant="secondary" disabled={loading || !turns.some((turn) => turn.role === "user")} onClick={requestFeedback}><Sparkles aria-hidden /> Review this conversation</Button>
            <p className="self-center text-xs text-muted-foreground">Your partner waits to correct you until you request a review.</p>
          </div>
          {feedback && <div className="whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4 text-sm leading-relaxed"><p className="mb-2 font-semibold">Session feedback</p>{feedback}</div>}
        </CardContent>
      </Card>

      <PracticeControls title={scenario.title} category="conversation" prompt={scenario.first} initialMinutes={3} />
    </div>
  );
}
