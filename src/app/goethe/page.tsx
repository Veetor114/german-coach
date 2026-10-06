"use client";

import { useState } from "react";
import { BookOpenCheck, Eye, EyeOff, FileImage, Headphones, LoaderCircle, Shuffle } from "lucide-react";
import { PracticeControls, speakGerman } from "@/components/practice/practice-controls";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TOPICS } from "@/data/topics";

export default function GoethePage() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [examMode, setExamMode] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rewrite, setRewrite] = useState("");
  const topic = TOPICS[topicIndex];

  const chooseTopic = (index: number) => {
    setTopicIndex(index);
    setRevealed(false);
    setHintVisible(false);
    setRewrite("");
  };

  const loadImage = (file?: File) => {
    setError("");
    setAnalysis("");
    if (!file) return;
    if (!/^image\/(png|jpeg|webp)$/.test(file.type)) {
      setError("Choose a PNG, JPG, or WebP image. PDF upload is not enabled in this version.");
      return;
    }
    if (file.size > 6 * 1024 * 1024) {
      setError("This image is over 6 MB. Choose a smaller screenshot or image.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImageName(file.name);
      setImageDataUrl(String(reader.result ?? ""));
    };
    reader.onerror = () => setError("Could not read this image. Try another file.");
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    setLoading(true);
    setError("");
    setAnalysis("");
    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "image", imageDataUrl }),
      });
      const result = await response.json() as { content?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not analyze this image.");
      setAnalysis(result.content ?? "");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not analyze this image.");
    } finally {
      setLoading(false);
    }
  };

  const changeLevel = async (level: "A2" | "B2") => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "simplify", message: `Rewrite this German speaking answer at ${level} level, preserving meaning.\n\n${topic.answer.full}` }),
      });
      const result = await response.json() as { content?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not rewrite this answer.");
      setRewrite(result.content ?? "");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not rewrite this answer.");
    } finally {
      setLoading(false);
    }
  };

  const pickRandomTopic = () => {
    const next = (topicIndex + 1 + Math.floor(Math.random() * Math.max(1, TOPICS.length - 1))) % TOPICS.length;
    chooseTopic(next);
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">GOETHE-ZERTIFIKAT B2</p>
          <h1 className="text-2xl font-semibold tracking-tight">Sprechen Trainer</h1>
          <p className="text-muted-foreground">Understand the task, build your ideas, then speak without notes.</p>
        </div>
        <Button variant={examMode ? "secondary" : "outline"} aria-pressed={examMode} onClick={() => { setExamMode((value) => !value); setRevealed(false); }}>
          <BookOpenCheck aria-hidden /> {examMode ? "Exam mode" : "Study mode"}
        </Button>
      </header>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="space-y-4">
          <Card className="bg-brand-pink text-foreground">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="outline">{topic.level}</Badge>
                <Button size="sm" variant="outline" onClick={pickRandomTopic}><Shuffle aria-hidden /> Random topic</Button>
              </div>
              <CardTitle className="text-xl">{topic.title}</CardTitle>
              <p className="text-sm text-foreground/70">{topic.titleEn}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-semibold">Aufgabe</p>
              <p className="leading-relaxed">{topic.thema.de} Stellen Sie verschiedene Möglichkeiten vor und sagen Sie, welche Sie bevorzugen.</p>
              {!examMode || revealed ? <p className="text-sm text-foreground/70">English support: Explain the topic, compare options, and give a reasoned opinion.</p> : null}
              <Button variant="outline" size="sm" onClick={() => speakGerman(topic.thema.de)}><Headphones aria-hidden /> Listen</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>{examMode ? "Prepare, then speak" : "Topic preparation"}</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {examMode ? (
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="secondary" onClick={() => setHintVisible((value) => !value)}>{hintVisible ? "Hide hint" : "Help me"}</Button>
                  <Button variant="outline" onClick={() => setRevealed((value) => !value)}>{revealed ? <EyeOff aria-hidden /> : <Eye aria-hidden />}{revealed ? "Hide answer" : "Reveal answer"}</Button>
                </div>
              ) : null}
              {hintVisible && <p className="rounded-md bg-muted p-3 text-sm"><span className="font-semibold">Think about:</span> {topic.answer.keywords.slice(0, 4).join(" · ")}</p>}
              {(!examMode || revealed) && (
                <div className="space-y-4">
                  <div><p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Full version</p><p className="leading-relaxed">{topic.answer.full}</p></div>
                  <div className="rounded-md bg-muted p-3"><p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">Easy version</p><p>{topic.answer.easy}</p></div>
                  <div><p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Speak from these keywords</p><div className="flex flex-wrap gap-2">{topic.answer.keywords.map((word) => <Badge key={word} variant="outline">{word}</Badge>)}</div></div>
                  <div className="flex flex-wrap gap-2"><Button size="sm" variant="outline" onClick={() => speakGerman(topic.answer.full)}><Headphones aria-hidden /> Listen</Button><Button size="sm" variant="outline" disabled={loading} onClick={() => changeLevel("A2")}>Make it easier</Button><Button size="sm" variant="outline" disabled={loading} onClick={() => changeLevel("B2")}>Make it B2</Button></div>
                </div>
              )}
              {rewrite && <p className="whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4 text-sm leading-relaxed">{rewrite}</p>}
              {error && <p role="alert" className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
            </CardContent>
          </Card>

          <PracticeControls title={topic.title} category="goethe" prompt={topic.thema.de} phrases={[topic.answer.full]} initialMinutes={2} />
        </div>

        <aside className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Topic image</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">Upload a screenshot of a speaking task to extract the instructions and build a speaking outline.</p>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-sm font-medium hover:bg-muted">
                <FileImage className="size-4" aria-hidden /> Choose image
                <input className="sr-only" type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => loadImage(event.target.files?.[0])} />
              </label>
              {imageDataUrl && <><p className="truncate text-xs text-muted-foreground">{imageName}</p><div role="img" aria-label="Selected German speaking topic preview" className="h-48 w-full rounded-md border bg-background bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url("${imageDataUrl}")` }} /><Button className="w-full" disabled={loading} onClick={analyzeImage}>{loading ? <LoaderCircle className="animate-spin" aria-hidden /> : null} Analyze topic</Button></>}
              {analysis && <div className="whitespace-pre-wrap rounded-md bg-muted p-3 text-sm leading-relaxed">{analysis}</div>}
              <p className="text-xs text-muted-foreground">Image analysis requires `GEMINI_API_KEY`; images are sent to Google Gemini for analysis. PDF files are not supported yet.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Topic library</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <label className="sr-only" htmlFor="goethe-topic">Choose topic</label>
              <select id="goethe-topic" value={topicIndex} onChange={(event) => chooseTopic(Number(event.target.value))} className="h-10 w-full rounded-md border bg-background px-3 text-sm">
                {TOPICS.map((item, index) => <option key={item.slug} value={index}>{item.title}</option>)}
              </select>
              <p className="text-sm text-muted-foreground">Pick a topic, hide the outline, and speak from your own notes.</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
