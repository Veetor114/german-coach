export interface DashboardStats {
  level: string;
  streakDays: number;
  weeklySpeakingMinutes: number;
  topicsCompleted: number;
  vocabularyLearned: number;
  goetheProgressPct: number;
  overallProgressPct: number;
}

// Real empty state. Replaced by Firestore data in Phase 9.
export const EMPTY_STATS: DashboardStats = {
  level: "Not assessed",
  streakDays: 0,
  weeklySpeakingMinutes: 0,
  topicsCompleted: 0,
  vocabularyLearned: 0,
  goetheProgressPct: 0,
  overallProgressPct: 0,
};
