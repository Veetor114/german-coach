"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, RotateCcw, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getVocabularyProgressSnapshot, subscribeProgress, VOCABULARY_STORAGE_KEY } from "@/lib/progress-store";
import { TOPICS } from "@/data/topics";
import { speakGerman } from "@/components/practice/practice-controls";

const INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;
type WordProgress = { repetitions: number; dueAt: string };
type Word = { id: string; de: string; en: string; topic: string; example: string };

const WORDS: Word[] = TOPICS.flatMap((topic) => topic.options.flatMap((option) =>
  option.vocab.map((word) => ({
    id: `${topic.slug}:${word.de}`,
    de: word.de,
    en: word.en,
    topic: topic.title,
    example: option.sentence,
  })),
));

export function VocabularyReview() {
  const snapshot = useSyncExternalStore(subscribeProgress, getVocabularyProgressSnapshot, () => "{}");
  const progress = JSON.parse(snapshot) as Record<string, WordProgress>;
  const [seenThisSession, setSeenThisSession] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const knownCount = Object.values(progress).filter((item) => item.repetitions >= 3).length;
  const dueWords = WORDS.filter((word) => !seenThisSession.includes(word.id) && (!progress[word.id] || new Date(progress[word.id].dueAt) <= new Date()));
  const current = dueWords[0];

  const rate = (remembered: boolean) => {
    if (!current) return;
    const previous = progress[current.id]?.repetitions ?? 0;
    const repetitions = remembered ? previous + 1 : 0;
    const due = new Date();
    if (remembered) due.setDate(due.getDate() + INTERVAL_DAYS[Math.min(repetitions - 1, INTERVAL_DAYS.length - 1)]);
    else due.setMinutes(due.getMinutes() + 10);
    const next = { ...progress, [current.id]: { repetitions, dueAt: due.toISOString() } };
    window.localStorage.setItem(VOCABULARY_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("deutsch-coach-progress"));
    setSeenThisSession((items) => [...items, current.id]);
    setRevealed(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3">
        <div className="space-y-1"><CardTitle>Practice vocabulary from your topics</CardTitle><p className="text-sm text-muted-foreground">Words come from the speaking situations you study. Review again sooner when a word feels difficult.</p></div>
        <Badge variant="secondary">{knownCount} mastered</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {current ? (
          <div className="rounded-lg bg-muted/70 p-4">
            <p className="text-xs font-semibold uppercase text-muted-foreground">{current.topic}</p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <button className="text-left text-2xl font-semibold" onClick={() => speakGerman(current.de)}>{current.de}</button>
              <Button size="icon" variant="outline" aria-label="Listen to word" onClick={() => speakGerman(current.de)}><Volume2 aria-hidden /></Button>
            </div>
            {revealed ? <div className="mt-3 space-y-3"><p>{current.en}</p><p className="text-sm text-muted-foreground">{current.example}</p><div className="flex flex-wrap gap-2"><Button variant="outline" onClick={() => rate(false)}><RotateCcw aria-hidden /> Review again soon</Button><Button onClick={() => rate(true)}><Check aria-hidden /> I remember</Button></div></div> : <Button className="mt-4" variant="secondary" onClick={() => setRevealed(true)}>Show meaning</Button>}
          </div>
        ) : (
          <div className="rounded-lg bg-muted/70 p-4"><p className="font-medium">You&apos;re caught up for now.</p><p className="mt-1 text-sm text-muted-foreground">Practice a topic to add more useful words, or come back when reviews are due.</p></div>
        )}
        <div className="flex flex-wrap justify-between gap-2 border-t pt-3 text-sm text-muted-foreground"><span>{dueWords.length} words left in this session</span><span>Intervals grow from 1 to 30 days</span></div>
      </CardContent>
    </Card>
  );
}