export const PRACTICE_STORAGE_KEY = "deutsch-coach-practice-v1";
export const DAILY_STORAGE_KEY = "deutsch-coach-daily-v1";
export const VOCABULARY_STORAGE_KEY = "deutsch-coach-vocabulary-v1";

export interface PracticeEntry {
  category: string;
  title: string;
  seconds: number;
  rating: "Easy" | "Okay" | "Difficult" | "Very difficult";
  completedAt: string;
}

export function getPracticeHistory(): PracticeEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(PRACTICE_STORAGE_KEY) ?? "[]");
    return Array.isArray(value) ? value as PracticeEntry[] : [];
  } catch {
    return [];
  }
}

export function savePracticeEntry(entry: PracticeEntry): void {
  if (typeof window === "undefined") return;
  const next = [entry, ...getPracticeHistory()].slice(0, 200);
  window.localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("deutsch-coach-progress"));
}

export function getDailyCompletion(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const stored = JSON.parse(window.localStorage.getItem(DAILY_STORAGE_KEY) ?? "{}") as {
      date?: string;
      completed?: Record<string, boolean>;
    };
    if (stored.date !== new Date().toISOString().slice(0, 10)) return {};
    return stored.completed ?? {};
  } catch {
    return {};
  }
}

export function saveDailyCompletion(completed: Record<string, boolean>): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify({
    date: new Date().toISOString().slice(0, 10),
    completed,
  }));
  window.dispatchEvent(new Event("deutsch-coach-progress"));
}

export function subscribeProgress(listener: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener("deutsch-coach-progress", listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener("deutsch-coach-progress", listener);
    window.removeEventListener("storage", listener);
  };
}

export function getDailyCompletionSnapshot(): string {
  return typeof window === "undefined" ? "{}" : window.localStorage.getItem(DAILY_STORAGE_KEY) ?? "{}";
}

export function getPracticeHistorySnapshot(): string {
  return typeof window === "undefined" ? "[]" : window.localStorage.getItem(PRACTICE_STORAGE_KEY) ?? "[]";
}

export function getVocabularyProgressSnapshot(): string {
  return typeof window === "undefined" ? "{}" : window.localStorage.getItem(VOCABULARY_STORAGE_KEY) ?? "{}";
}
