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

<<<<<<< HEAD
      )}
"use client";

      )}
"use client";

      )}
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, Pause, Play, RotateCcw, Square, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
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
>>>>>>> 107d79a8230a688d4b5424b7b9cddb544aedf6cb

  {isRecording && (
    <p className="flex items-center gap-2 text-sm font-medium" role="status">
      <span className={`inline-block size-2.5 rounded-full bg-red-500 ${running ? "animate-pulse" : "opacity-50"}`} aria-hidden />
      <Mic className="size-4" aria-hidden /> {running ? "Recording…" : "Recording paused"}
    </p>
  )}

  {!isRecording && recordingUrl && !speechFeedbackLoading && (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={requestSpeechFeedback}
        disabled={speechFeedbackLoading}
      >
        {speechFeedbackLoading ? "Getting feedback…" : "Get AI feedback"}
      </Button>
    </div>
  )}

  {speechFeedbackLoading && (
    <p className="text-sm text-muted-foreground">
      Getting AI feedback...<span className="animate-pulse"> …</span>
    </p>
  )}

<<<<<<< HEAD
interface PracticeControlsProps {
  title: string;
  category: string;
  prompt?: string;
  phrases?: readonly string[];
  initialMinutes?: number;
}
=======
  {speechFeedbackError && (
    <p className="text-sm text-destructive">{speechFeedbackError}</p>
  )}
>>>>>>> 107d79a8230a688d4b5424b7b9cddb544aedf6cb

  {speechFeedback && (
    <div className="whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4">
      <p className="mb-2 font-semibold">AI Feedback on Speech</p>
      {speechFeedback}
    </div>
  )}

  {recordError && <p className="text-sm text-destructive" role="alert">{recordError}</p>}

<<<<<<< HEAD
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
  const [speechFeedbackLoading, setSpeechFeedbackLoading] = useState(false);
  const [speechFeedbackError, setSpeechFeedbackError] = useState<string | null>(null);
  const [speechFeedback, setSpeechFeedback] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
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

    // Stop speech recognition
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
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

    // Stop speech recognition
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

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

      // Initialize speech recognition for real-time transcription
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'de-DE';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
          if (event.results.length > 0) {
            const transcript = event.results[0][0].transcript;
            setTranscribeError(null);
          }
        };

        recognition.onerror = (event) => {
          setTranscribeError(`Speech recognition error: ${event.error}`);
        };

        recognition.onend = () => {
          // Speech recognition ended, try to restart if still recording
          if (isRecording) {
            setTimeout(() => {
              if (isRecording) {
                recognition.start();
              }
            }, 100);
          }
        };

        recognition.start();
        recognitionRef.current = recognition;
      }

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

    // Clear transcribed text and speech recognition state
    setTranscribeError(null);
    setSpeechFeedback(null);
    setSpeechFeedbackError(null);
    setSpeechFeedbackLoading(false);
    setTranscribing(false);
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


      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'de-DE';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      return new Promise<string | null>((resolve, reject) => {
        recognition.onresult = (event) => {
          if (event.results.length > 0) {
            const transcript = event.results[0][0].transcript;
            resolve(transcript);
          } else {
            resolve(null);
          }
        };

        recognition.onerror = (event) => {
          reject(new Error(`Speech recognition error: ${event.error}`));
        };

        recognition.onend = () => {
          // Clean up
          recognition.stop();
        };

        // Start recognition with the audio file
        recognition.start();

        // We need to play the audio into the microphone for recognition to work
        // This is a limitation - we can't directly feed an audio file to SpeechRecognition
        // For a proper implementation, we'd need to send the audio to a speech-to-text API
        setTranscribeError('Direct audio file transcription is not supported in browser. Please use a speech-to-text API for production use.');
        setTranscribing(false);
        resolve(null);
      });
    } catch (error) {
      setTranscribeError(error instanceof Error ? error.message : String(error));
      setTranscribing(false);
    }
  };

  const requestSpeechFeedback = async () => {
    if (!transcribedText || speechFeedbackLoading) return;

    setSpeechFeedbackLoading(true);
    setSpeechFeedbackError(null);
    setSpeechFeedback(null);

    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "feedback",
          message: `Spoken response: ${transcribedText}`,
        }),
      });
      const result = await response.json() as { content?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not get feedback.");
      setSpeechFeedback(result.content ?? "");
    } catch (cause) {
      setSpeechFeedbackError(cause instanceof Error ? cause.message : "Could not get feedback.");
    } finally {
      setSpeechFeedbackLoading(false);
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
=======
  {finished && (
    <div className=space-y-3 border-t pt-4" aria-live="polite">
      <p className="font-medium">Time to reflect: how did that feel?</p>
      {recordingUrl && <p className="text-sm text-muted-foreground">Press Listen above to hear your recording.</p>}
      <div className="flex flex-wrap gap-2">
        {RATINGS.map((rating) => (
>>>>>>> 107d79a8230a688d4b5424b7b9cddb544aedf6cb
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
  );
}

<<<<<<< HEAD
      <div className="flex flex-wrap items-center gap-4">
        <output className="min-w-28 font-mono text-4xl font-semibold tabular-nums" aria-live="off">
          {formatTime(remaining)}
        </output>
        <div className="flex flex-wrap gap-2">
          {running ? (
            <Button onClick={pause}><Pause aria-hidden /> Pause</Button>
          ) : (
            <Button onClick={start} disabled={starting}>
              <Play aria-hidden /> {starting ? "Startingâ€¦" : "Start"}
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
          <Mic className="size-4" aria-hidden /> {running ? "Recordingâ€¦" : "Recording paused"}
        </p>
      )}

      {!isRecording && recordingUrl && !transcribing && !speechFeedbackLoading && (
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={transcribeAudio}
            disabled={transcribing || speechFeedbackLoading}
          >
            {transcribing ? "Transcribingâ€¦" : "Transcribe speech"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={requestSpeechFeedback}
            disabled={!transcribedText || speechFeedbackLoading || transcribing}
          >
            {speechFeedbackLoading ? "Getting feedbackâ€¦" : "Get AI feedback"}
          </Button>
        </div>
      )}

      {transcribing && (
        <p className="text-sm text-muted-foreground">
          Transcribing audio...<span className="animate-pulse"> â€¦</span>
        </p>
      )}

      {speechFeedbackLoading && (
        <p className="text-sm text-muted-foreground">
          Getting AI feedback...<span className="animate-pulse"> â€¦</span>
        </p>
      )}

      {transcribeError && (
        <p className="text-sm text-destructive">{transcribeError}</p>
      )}

      {speechFeedbackError && (
        <p className="text-sm text-destructive">{speechFeedbackError}</p>
      )}

=======
export { speak as speakGerman };
>>>>>>> 107d79a8230a688d4b5424b7b9cddb544aedf6cb
