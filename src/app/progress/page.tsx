"use client";

import { useState, useSyncExternalStore } from "react";
import { BarChart3, Plus, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getPracticeHistorySnapshot, subscribeProgress, type PracticeEntry } from "@/lib/progress-store";

const MISTAKE_KEY = "deutsch-coach-mistakes-v1";
const MISTAKE_TYPES = ["Word order", "Articles", "Cases", "Verb forms", "Prepositions", "Vocabulary", "Pronunciation", "Sentence structure"];
type Mistake = { id: string; type: string; note: string; createdAt: string };

function getMistakesSnapshot(): string {
  return typeof window === "undefined" ? "[]" : window.localStorage.getItem(MISTAKE_KEY) ?? "[]";
}

export default function ProgressPage() {
  const historySnapshot = useSyncExternalStore(subscribeProgress, getPracticeHistorySnapshot, () => "[]");
  const mistakesSnapshot = useSyncExternalStore(subscribeProgress, getMistakesSnapshot, () => "[]");
  const history = JSON.parse(historySnapshot) as PracticeEntry[];
  const mistakes = JSON.parse(mistakesSnapshot) as Mistake[];
  const [type, setType] = useState(MISTAKE_TYPES[0]);
  const [note, setNote] = useState("");

  const now = new Date();
  const weekly = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(now);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    const seconds = history.filter((entry) => entry.completedAt.slice(0, 10) === key).reduce((sum, entry) => sum + entry.seconds, 0);
    return { key, label: date.toLocaleDateString("en", { weekday: "short" }), minutes: Math.round(seconds / 60) };
  });
  const totalMinutes = Math.round(history.reduce((sum, entry) => sum + entry.seconds, 0) / 60);
  const practicedDays = new Set(history.map((entry) => entry.completedAt.slice(0, 10))).size;
  const uniqueTopics = new Set(history.filter((entry) => ["goethe", "topics", "alltag"].includes(entry.category)).map((entry) => entry.title)).size;
  const difficultCount = history.filter((entry) => entry.rating === "Difficult" || entry.rating === "Very difficult").length;
  const maxMinutes = Math.max(1, ...weekly.map((day) => day.minutes));

  const addMistake = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!note.trim()) return;
    const next: Mistake[] = [{ id: crypto.randomUUID(), type, note: note.trim(), createdAt: new Date().toISOString() }, ...mistakes].slice(0, 50);
    window.localStorage.setItem(MISTAKE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("deutsch-coach-progress"));
    setNote("");
  };

  const removeMistake = (id: string) => {
    window.localStorage.setItem(MISTAKE_KEY, JSON.stringify(mistakes.filter((item) => item.id !== id)));
    window.dispatchEvent(new Event("deutsch-coach-progress"));
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">YOUR PRACTICE, OVER TIME</p>
        <h1 className="text-2xl font-semibold tracking-tight">Progress</h1>
        <p className="text-muted-foreground">A record of your speaking practice and what you want to work on next.</p>
      </header>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Practice summary">
        {[
          { value: `${totalMinutes}`, label: "Speaking minutes", suffix: "min", color: "bg-brand-mint" },
          { value: `${history.length}`, label: "Speaking attempts", suffix: "", color: "bg-brand-pink" },
          { value: `${practicedDays}`, label: "Days practiced", suffix: "", color: "bg-brand-lavender" },
          { value: `${uniqueTopics}`, label: "Topics practiced", suffix: "", color: "bg-brand-ochre" },
        ].map((item) => (
          <Card key={item.label} className={item.color}>
            <CardContent className="space-y-1 p-4"><p className="text-2xl font-semibold tabular-nums">{item.value}<span className="ml-1 text-sm">{item.suffix}</span></p><p className="text-xs">{item.label}</p></CardContent>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><BarChart3 className="size-5" aria-hidden /> Speaking minutes this week</CardTitle></CardHeader>
        <CardContent>
          {history.length === 0 ? <p className="text-sm text-muted-foreground">Rate a timed speaking session to start your chart.</p> : (
            <div className="grid grid-cols-7 gap-2" role="img" aria-label="Speaking minutes for the last seven days">
              {weekly.map((day) => (
                <div key={day.key} className="flex min-w-0 flex-col items-center gap-2">
                  <span className="text-xs tabular-nums text-muted-foreground">{day.minutes}m</span>
                  <div className="flex h-32 w-full items-end rounded-t bg-muted"><div className="w-full rounded-t bg-brand-teal" style={{ height: `${Math.max(day.minutes ? 6 : 0, (day.minutes / maxMinutes) * 100)}%` }} /></div>
                  <span className="text-xs text-muted-foreground">{day.label}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2" aria-label="Speaking habits">
        <Card>
          <CardHeader><CardTitle>Confidence check-ins</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {history.length === 0 ? <p className="text-sm text-muted-foreground">Your self-ratings appear here after timed practice.</p> : <>
              <div className="flex items-center justify-between text-sm"><span>Easy or okay</span><span>{history.length - difficultCount} / {history.length}</span></div>
              <Progress value={((history.length - difficultCount) / history.length) * 100} aria-label="Easy or okay self-rating percentage" />
              <p className="text-sm text-muted-foreground">{difficultCount ? `${difficultCount} attempts felt difficult. Try the easy version next time.` : "Keep using short speaking turns and build gradually."}</p>
            </>}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Practice areas</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {["daily", "goethe", "alltag", "interview", "conversation"].map((category) => {
              const count = history.filter((entry) => entry.category === category).length;
              return <div key={category} className="space-y-1"><div className="flex justify-between text-sm"><span className="capitalize">{category === "alltag" ? "Everyday situations" : category}</span><span className="tabular-nums text-muted-foreground">{count}</span></div><Progress value={history.length ? (count / history.length) * 100 : 0} aria-label={`${category} attempts`} /></div>;
            })}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader><CardTitle>My common mistakes</CardTitle><p className="text-sm text-muted-foreground">Add a pattern you noticed in practice. These notes stay on this device.</p></CardHeader>
        <CardContent className="space-y-4">
          <form className="grid gap-2 sm:grid-cols-[12rem_1fr_auto]" onSubmit={addMistake}>
            <label className="sr-only" htmlFor="mistake-type">Mistake type</label>
            <select id="mistake-type" value={type} onChange={(event) => setType(event.target.value)} className="h-9 rounded-md border bg-background px-3 text-sm">{MISTAKE_TYPES.map((item) => <option key={item}>{item}</option>)}</select>
            <label className="sr-only" htmlFor="mistake-note">Mistake or example to remember</label>
            <input id="mistake-note" value={note} onChange={(event) => setNote(event.target.value)} placeholder="Example: verb should be at the end after weil" className="h-9 rounded-md border bg-background px-3 text-sm" />
            <Button type="submit" disabled={!note.trim()}><Plus aria-hidden /> Add note</Button>
          </form>
          {mistakes.length ? <ul className="divide-y">{mistakes.map((item) => <li key={item.id} className="flex items-start justify-between gap-3 py-3"><div className="space-y-1"><Badge variant="secondary">{item.type}</Badge><p className="text-sm">{item.note}</p><p className="text-xs text-muted-foreground">{new Date(item.createdAt).toLocaleDateString()}</p></div><Button size="icon" variant="ghost" aria-label={`Remove ${item.type} mistake`} onClick={() => removeMistake(item.id)}><Trash2 aria-hidden /></Button></li>)}</ul> : <p className="text-sm text-muted-foreground">No notes yet. Add a recurring issue when you notice one.</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Recent speaking attempts</CardTitle></CardHeader>
        <CardContent>
          {history.length === 0 ? <p className="text-sm text-muted-foreground">Your rated practice attempts will appear here.</p> : (
            <ul className="divide-y">{history.slice(0, 12).map((entry, index) => <li key={`${entry.completedAt}-${index}`} className="flex flex-wrap items-center justify-between gap-2 py-3"><div><p className="font-medium">{entry.title}</p><p className="text-xs capitalize text-muted-foreground">{entry.category} · {new Date(entry.completedAt).toLocaleString()}</p></div><div className="flex items-center gap-3"><span className="text-sm tabular-nums">{Math.round(entry.seconds / 60)} min</span><Badge variant={entry.rating === "Easy" ? "secondary" : "outline"}>{entry.rating}</Badge></div></li>)}</ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
