"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { BookOpen, Clock, Flame, Target } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DEFAULT_DAILY_PLAN, totalMinutes } from "@/lib/daily-plan";
import { NAV_ITEMS } from "@/lib/nav";
import {
  getDailyCompletionSnapshot,
  getPracticeHistorySnapshot,
  getVocabularyProgressSnapshot,
  subscribeProgress,
  type PracticeEntry,
} from "@/lib/progress-store";
import { TOPICS } from "@/data/topics";

export default function DashboardPage() {
  const historySnapshot = useSyncExternalStore(subscribeProgress, getPracticeHistorySnapshot, () => "[]");
  const dailySnapshot = useSyncExternalStore(subscribeProgress, getDailyCompletionSnapshot, () => "{}");
  const vocabularySnapshot = useSyncExternalStore(subscribeProgress, getVocabularyProgressSnapshot, () => "{}");
  const history = JSON.parse(historySnapshot) as PracticeEntry[];
  const dailyData = JSON.parse(dailySnapshot) as { date?: string; completed?: Record<string, boolean> };
  const vocabulary = JSON.parse(vocabularySnapshot) as Record<string, { repetitions: number }>;
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const practicedDates = new Set(history.map((entry) => entry.completedAt.slice(0, 10)));
  let streakDays = 0;
  const streakStart = practicedDates.has(today) ? new Date(now) : new Date(now.getTime() - 86400000);
  streakStart.setHours(0, 0, 0, 0);
  while (practicedDates.has(streakStart.toISOString().slice(0, 10))) {
    streakDays += 1;
    streakStart.setDate(streakStart.getDate() - 1);
  }
  const weekCutoff = now.getTime() - 7 * 86400000;
  const weeklySpeakingMinutes = Math.round(history.filter((entry) => Date.parse(entry.completedAt) >= weekCutoff).reduce((sum, entry) => sum + entry.seconds, 0) / 60);
  const uniqueTopics = new Set(history.filter((entry) => ["goethe", "topics", "alltag"].includes(entry.category)).map((entry) => entry.title));
  const goetheTopics = new Set(history.filter((entry) => entry.category === "goethe").map((entry) => entry.title));
  const completedToday = dailyData.date === today ? Object.values(dailyData.completed ?? {}).filter(Boolean).length : 0;
  const stats = {
    streakDays,
    weeklySpeakingMinutes,
    topicsCompleted: uniqueTopics.size,
    vocabularyLearned: Object.values(vocabulary).filter((item) => item.repetitions >= 3).length,
    goetheProgressPct: Math.round((goetheTopics.size / Math.max(1, TOPICS.length)) * 100),
    overallProgressPct: Math.round((completedToday / 6) * 100),
  };
  const lastRating = history[0]?.rating;
  const planMinutes = totalMinutes(DEFAULT_DAILY_PLAN);

  const statCards = [
    { label: "Streak", value: `${stats.streakDays} days`, icon: Flame, color: "bg-brand-pink" },
    { label: "Speaking this week", value: `${stats.weeklySpeakingMinutes} min`, icon: Clock, color: "bg-brand-mint" },
    { label: "Topics completed", value: String(stats.topicsCompleted), icon: Target, color: "bg-brand-lavender" },
    { label: "Vocabulary learned", value: String(stats.vocabularyLearned), icon: BookOpen, color: "bg-brand-ochre" },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Guten Tag!</h1>
        <p className="text-muted-foreground">
          {history.length === 0
            ? "No practice yet. Start today's practice below."
            : `${history.length} speaking ${history.length === 1 ? "attempt" : "attempts"} · ${practicedDates.size} ${practicedDates.size === 1 ? "day" : "days"} practiced`}
        </p>
      </header>

      <Card>
        <CardHeader>
            <CardTitle>Today: {planMinutes} minutes</CardTitle>
            <CardDescription>{lastRating === "Difficult" || lastRating === "Very difficult" ? "Your last turn felt tough. Start gently and use the easy versions." : "Your practice plan for today"}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-1 text-sm">
            {DEFAULT_DAILY_PLAN.map((item, index) => (
              <li key={item.id}>
                {index + 1}. {item.minutes} min {item.label.toLowerCase()}
              </li>
            ))}
          </ol>
          <Link href="/practice" className={buttonVariants({ size: "lg" })}>
            Start Today&apos;s Practice
          </Link>
        </CardContent>
      </Card>

      <section aria-label="Statistics" className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className={color}>
            <CardContent className="space-y-1 p-4">
              <Icon className="size-4 text-muted-foreground" aria-hidden />
              <div className="text-xl font-semibold">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Goethe B2 topics practiced</span>
              <span>{stats.goetheProgressPct}%</span>
            </div>
            <Progress value={stats.goetheProgressPct} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Today&apos;s session</span>
              <span>{stats.overallProgressPct}%</span>
            </div>
            <Progress value={stats.overallProgressPct} />
          </div>
        </CardContent>
      </Card>

      <section aria-label="Sections" className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {NAV_ITEMS.filter((item) => item.href !== "/").map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-lg border bg-card p-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Icon className="size-4" aria-hidden />
            {label}
          </Link>
        ))}
      </section>
    </div>
  );
}
