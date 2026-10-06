"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { ArrowRight, Check, Clock3, Flame, RotateCcw } from "lucide-react";
import { PracticeControls } from "@/components/practice/practice-controls";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  getDailyCompletionSnapshot,
  getPracticeHistorySnapshot,
  saveDailyCompletion,
  subscribeProgress,
} from "@/lib/progress-store";

const DAILY_TASKS = [
  { id: "warmup", title: "Warm-up", time: "2 min", prompt: "Wie geht es Ihnen heute? Was haben Sie heute schon gemacht?", href: "/topics" },
  { id: "pronunciation", title: "Pronunciation", time: "3 min", prompt: "Sprich langsam und deutlich: Entschuldigung, könnten Sie mir bitte weiterhelfen?", href: "/alltag" },
  { id: "everyday", title: "Everyday situation", time: "4 min", prompt: "Du bist am Bahnhof. Dein Zug hat Verspätung. Frage nach einer Verbindung.", href: "/alltag" },
  { id: "goethe", title: "Goethe B2 speaking", time: "4 min", prompt: "Sollte man öfter mit öffentlichen Verkehrsmitteln fahren? Nenne Gründe und ein Beispiel.", href: "/goethe" },
  { id: "interview", title: "Interview question", time: "3 min", prompt: "Warum möchten Sie diese Ausbildung machen?", href: "/interview" },
  { id: "free-speaking", title: "Free speaking", time: "2 min", prompt: "Was möchten Sie in den nächsten Monaten in Deutschland lernen oder erleben?", href: "/topics" },
];

export default function PracticePage() {
  const [completedOverride, setCompletedOverride] = useState<Record<string, boolean> | null>(null);
  const dailySnapshot = useSyncExternalStore(subscribeProgress, getDailyCompletionSnapshot, () => "{}");
  const historySnapshot = useSyncExternalStore(subscribeProgress, getPracticeHistorySnapshot, () => "[]");
  const dailyData = JSON.parse(dailySnapshot) as { date?: string; completed?: Record<string, boolean> };
  const completed = completedOverride ?? (dailyData.date === new Date().toISOString().slice(0, 10) ? dailyData.completed ?? {} : {});
  const history = JSON.parse(historySnapshot) as { rating: string }[];
  const lastRating = history[0]?.rating ?? null;

  const doneCount = DAILY_TASKS.filter((task) => completed[task.id]).length;
  const setTaskDone = (id: string, isDone: boolean) => {
    const next = { ...completed, [id]: isDone };
    setCompletedOverride(next);
    saveDailyCompletion(next);
  };

  return (
        <div className="space-y-6">
          <header className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">DEIN TRAININGSPLAN</p>
              <h1 className="text-2xl font-semibold tracking-tight">Today&apos;s German</h1>
              <p className="text-muted-foreground">A short session built around speaking, not memorizing.</p>
            </div>
            <Badge variant="secondary"><Clock3 className="size-3" aria-hidden /> 18 minutes</Badge>
          </header>

          <Card className="bg-brand-peach text-foreground">
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5">
              <div className="space-y-1">
                <p className="text-sm font-medium">{lastRating === "Difficult" || lastRating === "Very difficult" ? "A gentler start today" : "Your next best step"}</p>
                <p className="text-lg font-semibold">{lastRating === "Difficult" || lastRating === "Very difficult" ? "Begin with the warm-up and use the easy versions." : "Complete one short speaking turn in each area."}</p>
              </div>
              <a href="#daily-session" className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground">
                Start today&apos;s practice <ArrowRight className="size-4" aria-hidden />
              </a>
            </CardContent>
          </Card>

          <section className="space-y-3" aria-labelledby="session-progress">
            <div className="flex items-center justify-between gap-3">
              <h2 id="session-progress" className="font-semibold">Session progress</h2>
              <span className="text-sm tabular-nums text-muted-foreground">{doneCount} of {DAILY_TASKS.length} complete</span>
            </div>
            <Progress value={(doneCount / DAILY_TASKS.length) * 100} aria-label="Daily session progress" />
          </section>

          <section id="daily-session" className="space-y-3" aria-label="Daily speaking session">
            {DAILY_TASKS.map((task, index) => (
              <Card key={task.id} className={completed[task.id] ? "border-secondary" : undefined}>
                <CardHeader className="flex grid-cols-[1fr_auto] items-start gap-3">
                  <div className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-sm font-semibold">{completed[task.id] ? <Check className="size-4" aria-hidden /> : index + 1}</span>
                    <div className="space-y-1">
                      <CardTitle>{task.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{task.prompt}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{task.time}</Badge>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pl-14">
                  <Link href={task.href} className="inline-flex h-8 items-center gap-1 rounded-md border px-2.5 text-sm hover:bg-muted">
                    Open practice <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                  <Button size="sm" variant={completed[task.id] ? "secondary" : "outline"} onClick={() => setTaskDone(task.id, !completed[task.id])}>
                    <Check aria-hidden /> {completed[task.id] ? "Completed" : "Mark complete"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </section>

          <PracticeControls
            title="Daily free speaking"
            category="daily"
            prompt="Was möchten Sie in den nächsten Monaten in Deutschland lernen oder erleben?"
            initialMinutes={2}
          />

          <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Flame className="size-4" aria-hidden /> Your completion stays on this device.</p>
            <Button size="sm" variant="ghost" onClick={() => { setCompletedOverride({}); saveDailyCompletion({}); }}>
              <RotateCcw aria-hidden /> Reset today
            </Button>
          </div>
        </div>
  );
}
