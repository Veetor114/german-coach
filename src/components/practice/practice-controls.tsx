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

  {speechFeedbackError && (
    <p className="text-sm text-destructive">{speechFeedbackError}</p>
  )}

  {speechFeedback && (
    <div className="whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4">
      <p className="mb-2 font-semibold">AI Feedback on Speech</p>
      {speechFeedback}
    </div>
  )}

  {recordError && <p className="text-sm text-destructive" role="alert">{recordError}</p>}

  {finished && (
    <div className=space-y-3 border-t pt-4" aria-live="polite">
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
  );
}

export { speak as speakGerman };
