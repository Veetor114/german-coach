"use client";

import { useState } from "react";
import { BookOpenCheck, Eye, EyeOff, Headphones, Shuffle } from "lucide-react";
import { PracticeControls, speakGerman } from "@/components/practice/practice-controls";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DISCUSSION_TOPICS, type DiscussionPoint } from "@/data/discussion-topics";

export default function DiskussionPage() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [examMode, setExamMode] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [showEnglish, setShowEnglish] = useState(true);
  const topic = DISCUSSION_TOPICS[topicIndex];
  const speakingPrompt = `Thema: ${topic.title} Nennen Sie Vorteile und Nachteile.`;
  const speakingPhrases = [...topic.pros, ...topic.cons].map((point) => point.sentence);

  const selectTopic = (index: number) => {
    setTopicIndex(index);
    setRevealed(false);
    setHintVisible(false);
  };

  const selectRandomTopic = () => {
    const next = (topicIndex + 1 + Math.floor(Math.random() * Math.max(1, DISCUSSION_TOPICS.length - 1))) % DISCUSSION_TOPICS.length;
    selectTopic(next);
  };

  const renderPoints = (kind: "pros" | "cons", points: readonly DiscussionPoint[], heading: string) => {
    const isPros = kind === "pros";

    return (
      <section aria-label={heading} className="space-y-3">
        <div className="flex items-center gap-2">
          <span className={`size-2 rounded-full ${isPros ? "bg-brand-teal" : "bg-brand-coral"}`} aria-hidden />
          <h2 className="font-semibold">{heading}</h2>
          <Badge variant="outline">{points.length}</Badge>
        </div>
        <ol className="divide-y border-y">
          {points.map((point, index) => {
            return (
              <li key={`${kind}-${index}`} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_auto]">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">{isPros ? "Vorteil" : "Nachteil"} {index + 1}: {point.de}</p>
                  <p className="font-medium leading-relaxed">&ldquo;{point.sentence}&rdquo;</p>
                  {showEnglish && <p className="text-sm text-muted-foreground">{point.en}</p>}
                  <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Keywords">
                    {point.keywords.map((keyword) => <Badge key={keyword} variant="outline" className="font-normal">{keyword}</Badge>)}
                  </div>
                </div>
                <Button size="icon" variant="ghost" aria-label={`Listen to ${isPros ? "advantage" : "disadvantage"} ${index + 1}`} title="Listen" onClick={() => speakGerman(point.sentence)}>
                  <Headphones aria-hidden />
                </Button>
              </li>
            );
          })}
        </ol>
      </section>
    );
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">DISKUSSIONSTRAINER</p>
          <h1 className="text-2xl font-semibold tracking-tight">Vorteile und Nachteile</h1>
          <p className="text-muted-foreground">Find simple arguments, learn the key words, and speak in your own words.</p>
        </div>
        <Button variant={examMode ? "secondary" : "outline"} aria-pressed={examMode} onClick={() => { setExamMode((value) => !value); setRevealed(false); setHintVisible(false); }}>
          <BookOpenCheck aria-hidden /> {examMode ? "Exam mode" : "Study mode"}
        </Button>
      </header>

      <Card className="bg-brand-lavender text-foreground">
        <CardHeader className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <CardTitle className="text-xl">{topic.title}</CardTitle>
          </div>
          <Button variant="outline" size="sm" onClick={selectRandomTopic}><Shuffle aria-hidden /> Random topic</Button>
        </CardHeader>
        <CardContent className="flex flex-wrap items-end justify-between gap-3">
          <div className="w-full max-w-lg space-y-1">
            <label htmlFor="discussion-topic" className="text-sm font-medium">Choose a discussion topic</label>
            <select id="discussion-topic" value={topicIndex} onChange={(event) => selectTopic(Number(event.target.value))} className="h-10 w-full rounded-md border bg-background px-3 text-sm text-foreground">
              {DISCUSSION_TOPICS.map((item, index) => <option key={item.slug} value={index}>{item.title}</option>)}
            </select>
          </div>
          <Button variant="outline" size="sm" onClick={() => speakGerman(speakingPrompt)}><Headphones aria-hidden /> Listen to task</Button>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-2">
        {examMode && <>
          <Button variant="secondary" size="sm" onClick={() => setHintVisible((value) => !value)}>{hintVisible ? "Hide hint" : "Help me"}</Button>
          <Button variant="outline" size="sm" onClick={() => setRevealed((value) => !value)}>{revealed ? <EyeOff aria-hidden /> : <Eye aria-hidden />}{revealed ? "Hide points" : "Reveal points"}</Button>
        </>}
        <Button variant="outline" size="sm" onClick={() => setShowEnglish((value) => !value)}>{showEnglish ? "🇩🇪 German mode" : "🇬🇧 English support"}</Button>
      </div>

      {hintVisible && <p className="rounded-md bg-muted p-3 text-sm"><span className="font-semibold">Think about:</span> {topic.keywords.join(" · ")}</p>}

      {(!examMode || revealed) ? (
        <div className="grid gap-6 md:grid-cols-2">
          {renderPoints("pros", topic.pros, "Vorteile")}
          {renderPoints("cons", topic.cons, "Nachteile")}
        </div>
      ) : (
        <Card>
          <CardContent className="space-y-2 p-5">
            <p className="font-semibold">Your task</p>
            <p>{speakingPrompt}</p>
            <p className="text-sm text-muted-foreground">Prepare a few ideas first. The points stay hidden until you reveal them.</p>
          </CardContent>
        </Card>
      )}

      <PracticeControls
        title={`Diskussion: ${topic.title}`}
        category="discussion"
        prompt={speakingPrompt}
        phrases={examMode && !revealed ? [] : speakingPhrases}
        initialMinutes={2}
      />
    </div>
  );
}