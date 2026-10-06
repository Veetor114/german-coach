"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Square, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "deutsch-coach-practice-v1";
const DURATIONS = [30, 60, 120, 180, 300] as const;
const RATINGS = ["Easy", "Okay", "Difficult", "Very difficult"] as const;

export type PracticeRating = (typeof RATINGS)[number];

interface SavedPractice {
  category: string;
  title: string;
  seconds: number;
  rating: PracticeRating;
  completedAt: string;
}

interface PracticeControlsProps {
  title: string;
  category: string;
  prompt?: string;
  phrases?: readonly string[];
  initialMinutes?: number;
}

function speak(text: string, rate = 1) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}

export function PracticeControls({
  title,
  category,
  prompt,
  phrases = [],
  initialMinutes = 2,
}: PracticeControlsProps) {
  const initialSeconds = Math.max(30, initialMinutes * 60);
  const [duration, setDuration] = useState(initialSeconds);
  const [remaining, setRemaining] = useState(initialSeconds);
  const remainingRef = useRef(initialSeconds);
  const [customMinutes, setCustomMinutes] = useState(String(initialMinutes));
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [savedRating, setSavedRating] = useState<PracticeRating | null>(null);

  useEffect(() => {
    if (!running) return;
    const intervalId = window.setInterval(() => {
      const next = Math.max(0, remainingRef.current - 1);
      remainingRef.current = next;
      setRemaining(next);
      if (next === 0) {
        setRunning(false);
        setFinished(true);
      }
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, [running]);

  const selectDuration = (seconds: number) => {
    setRunning(false);
    setDuration(seconds);
    remainingRef.current = seconds;
    setRemaining(seconds);
    setFinished(false);
    setSavedRating(null);
  };

  const stop = () => {
    setRunning(false);
    setFinished(true);
  };

  const saveRating = (rating: PracticeRating) => {
    const session: SavedPractice = {
      category,
      title,
      seconds: duration - remaining,
      rating,
      completedAt: new Date().toISOString(),
    };
    try {
      const previous = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]") as SavedPractice[];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([session, ...previous].slice(0, 200)));
      window.dispatchEvent(new Event("deutsch-coach-progress"));
      setSavedRating(rating);
    } catch {
      setSavedRating(rating);
    }
  };

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  return (
    <section className="space-y-4 rounded-xl border bg-card p-4 md:p-5" aria-label="Speaking practice controls">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-semibold">Speak aloud</h2>
          <p className="text-sm text-muted-foreground">Choose a time, speak freely, then reflect.</p>
        </div>
        {(prompt || phrases.length > 0) && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => speak(prompt ?? phrases.join(" "))} aria-label="Listen to German prompt">
              <Volume2 aria-hidden /> Listen
            </Button>
            <Button variant="ghost" size="sm" onClick={() => speak(prompt ?? phrases.join(" "), 0.75)} aria-label="Listen slowly">
              Slow
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Speaking duration">
        {DURATIONS.map((seconds) => (
          <Button
            key={seconds}
            size="sm"
            variant={duration === seconds ? "secondary" : "outline"}
            aria-pressed={duration === seconds}
            onClick={() => selectDuration(seconds)}
          >
            {seconds < 60 ? `${seconds}s` : `${seconds / 60} min`}
          </Button>
        ))}
        <form
          className="flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            const minutes = Math.min(30, Math.max(1, Number(customMinutes) || 1));
            setCustomMinutes(String(minutes));
            selectDuration(minutes * 60);
          }}
        >
          <label className="sr-only" htmlFor="custom-speaking-minutes">Custom minutes</label>
          <input
            id="custom-speaking-minutes"
            type="number"
            min={1}
            max={30}
            value={customMinutes}
            onChange={(event) => setCustomMinutes(event.target.value)}
            className="h-8 w-16 rounded-md border bg-background px-2 text-sm"
          />
          <Button size="sm" variant="outline" type="submit">Custom</Button>
        </form>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <output className="min-w-28 font-mono text-4xl font-semibold tabular-nums" aria-live="off">
          {formatTime(remaining)}
        </output>
        <div className="flex flex-wrap gap-2">
          {running ? (
            <Button onClick={() => setRunning(false)}><Pause aria-hidden /> Pause</Button>
          ) : (
            <Button onClick={() => { if (remaining === 0) { remainingRef.current = duration; setRemaining(duration); } setFinished(false); setRunning(true); }}>
              <Play aria-hidden /> Start
            </Button>
          )}
          <Button variant="outline" onClick={stop}><Square aria-hidden /> Stop</Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Reset timer"
            title="Reset timer"
            onClick={() => { setRunning(false); remainingRef.current = duration; setRemaining(duration); setFinished(false); setSavedRating(null); }}
          >
            <RotateCcw aria-hidden />
          </Button>
        </div>
      </div>

      {finished && (
        <div className="space-y-3 border-t pt-4" aria-live="polite">
          <p className="font-medium">Time to reflect: how did that feel?</p>
          <div className="flex flex-wrap gap-2">
            {RATINGS.map((rating) => (
              <Button
                key={rating}
                size="sm"
                variant={savedRating === rating ? "secondary" : "outline"}
                aria-pressed={savedRating === rating}
                disabled={savedRating !== null}
                onClick={() => saveRating(rating)}
              >
                {rating}
              </Button>
            ))}
          </div>
          {savedRating && <p className="text-sm text-muted-foreground">Saved to your practice history.</p>}
        </div>
      )}
    </section>
  );
}

export { speak as speakGerman };