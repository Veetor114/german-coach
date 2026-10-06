"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, Pause, Play, RotateCcw, Square, Volume2 } from "lucide-react";
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

const RECORDING_MIME_TYPES = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"] as const;

function getSupportedMimeType(): string | undefined {
  if (typeof MediaRecorder === "undefined") return undefined;
  return RECORDING_MIME_TYPES.find((type) => MediaRecorder.isTypeSupported(type));
}

function canRecord(): boolean {
  return typeof window !== "undefined" && typeof MediaRecorder !== "undefined" && Boolean(navigator.mediaDevices?.getUserMedia);
}

function describeMicError(error: unknown): string {
  const name = error instanceof DOMException ? error.name : "";
  if (name === "NotAllowedError" || name === "SecurityError") return "Microphone access is blocked. Allow it in your browser settings to record. The timer still works.";
  if (name === "NotFoundError") return "No microphone found. The timer still works.";
  return "Couldn't start recording. The timer still works.";
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

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const sessionRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlRef = useRef<string | null>(null);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [starting, setStarting] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);

  const stopPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.onended = null;
      audio.onerror = null;
      audio.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  // Throws away the current recording (and any recorder still running).
  const discardRecording = useCallback(() => {
    sessionRef.current += 1; // invalidates any in-flight onstop / permission prompt
    const recorder = recorderRef.current;
    recorderRef.current = null;
    if (recorder) {
      recorder.ondataavailable = null;
      recorder.onstop = null;
      if (recorder.state !== "inactive") recorder.stop();
      recorder.stream.getTracks().forEach((track) => track.stop());
    }
    stopPlayback();
    chunksRef.current = [];
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
      urlRef.current = null;
    }
    setRecordingUrl(null);
    setIsRecording(false);
  }, [stopPlayback]);

  // Stops recording but keeps the audio so the learner can listen back.
  const finishRecording = useCallback(() => {
    const recorder = recorderRef.current;
    if (!recorder) return;
    recorderRef.current = null;
    setIsRecording(false);
    if (recorder.state === "inactive") {
      recorder.stream.getTracks().forEach((track) => track.stop());
      return;
    }
    recorder.stop(); // onstop builds the playable blob
  }, []);

  const beginRecording = useCallback(async () => {
    setRecordError(null);
    if (!canRecord()) {
      setRecordError("Recording isn't supported in this browser. The timer still works.");
      return;
    }
    const session = sessionRef.current;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (sessionRef.current !== session) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      const mimeType = getSupportedMimeType();
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        if (sessionRef.current !== session || chunksRef.current.length === 0) return;
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || mimeType || "audio/webm" });
        chunksRef.current = [];
        const url = URL.createObjectURL(blob);
        urlRef.current = url;
        setRecordingUrl(url);
      };
      recorder.onerror = () => {
        setRecordError("Recording failed. The timer still works.");
        setIsRecording(false);
      };
      recorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      setRecordError(describeMicError(error));
    }
  }, []);

  // Release the microphone and the audio URL when leaving the page.
  useEffect(() => discardRecording, [discardRecording]);

  useEffect(() => {
    if (!running) return;
    const intervalId = window.setInterval(() => {
      const next = Math.max(0, remainingRef.current - 1);
      remainingRef.current = next;
      setRemaining(next);
      if (next === 0) {
        setRunning(false);
        setFinished(true);
        finishRecording();
      }
    }, 1000);
    return () => window.clearInterval(intervalId);
  }, [running, finishRecording]);

  const selectDuration = (seconds: number) => {
    setRunning(false);
    discardRecording();
    setRecordError(null);
    setDuration(seconds);
    remainingRef.current = seconds;
    setRemaining(seconds);
    setFinished(false);
    setSavedRating(null);
  };

  const stop = () => {
    setRunning(false);
    setFinished(true);
    finishRecording();
  };

  const start = async () => {
    const recorder = recorderRef.current;
    if (recorder?.state === "paused") {
      recorder.resume();
      setRunning(true);
      return;
    }
    setStarting(true);
    discardRecording(); // a new attempt replaces the previous recording
    if (finished || remainingRef.current === 0) {
      remainingRef.current = duration;
      setRemaining(duration);
    }
    setFinished(false);
    setSavedRating(null);
    await beginRecording(); // wait for the mic permission before the clock starts
    setStarting(false);
    setRunning(true);
  };

  const pause = () => {
    setRunning(false);
    const recorder = recorderRef.current;
    if (recorder?.state === "recording") recorder.pause();
  };

  const reset = () => {
    setRunning(false);
    discardRecording();
    setRecordError(null);
    remainingRef.current = duration;
    setRemaining(duration);
    setFinished(false);
    setSavedRating(null);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }
    if (!recordingUrl) return;
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    const audio = new Audio(recordingUrl);
    const onDone = () => {
      audioRef.current = null;
      setIsPlaying(false);
    };
    audio.onended = onDone;
    audio.onerror = () => {
      onDone();
      setRecordError("Couldn't play the recording in this browser.");
    };
    audioRef.current = audio;
    setIsPlaying(true);
    audio.play().catch(() => {
      onDone();
      setRecordError("Couldn't play the recording in this browser.");
    });
  };

  const hearPrompt = (rate = 1) => {
    stopPlayback();
    speak(prompt ?? phrases.join(" "), rate);
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
          <p className="text-sm text-muted-foreground">Choose a time, press Start and speak. Your voice is recorded so you can listen back.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={!recordingUrl || isRecording}
            onClick={togglePlayback}
            aria-label={isPlaying ? "Stop playing your recording" : "Play your recording"}
          >
            {isPlaying ? <Square aria-hidden /> : <Volume2 aria-hidden />} {isPlaying ? "Stop" : "Listen"}
          </Button>
          {(prompt || phrases.length > 0) && (
            <>
              <Button variant="ghost" size="sm" onClick={() => hearPrompt()} aria-label="Hear the German prompt">
                Hear prompt
              </Button>
              <Button variant="ghost" size="sm" onClick={() => hearPrompt(0.75)} aria-label="Hear the German prompt slowly">
                Slow
              </Button>
            </>
          )}
        </div>
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
            <Button onClick={pause}><Pause aria-hidden /> Pause</Button>
          ) : (
            <Button onClick={start} disabled={starting}>
              <Play aria-hidden /> {starting ? "Starting…" : "Start"}
            </Button>
          )}
          <Button variant="outline" onClick={stop}><Square aria-hidden /> Stop</Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Reset timer"
            title="Reset timer"
            onClick={reset}
          >
            <RotateCcw aria-hidden />
          </Button>
        </div>
      </div>

      {isRecording && (
        <p className="flex items-center gap-2 text-sm font-medium" role="status">
          <span className={`inline-block size-2.5 rounded-full bg-red-500 ${running ? "animate-pulse" : "opacity-50"}`} aria-hidden />
          <Mic className="size-4" aria-hidden /> {running ? "Recording…" : "Recording paused"}
        </p>
      )}
      {recordError && <p className="text-sm text-destructive" role="alert">{recordError}</p>}

      {finished && (
        <div className="space-y-3 border-t pt-4" aria-live="polite">
          <p className="font-medium">Time to reflect: how did that feel?</p>
          {recordingUrl && <p className="text-sm text-muted-foreground">Press Listen above to hear your recording.</p>}
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
