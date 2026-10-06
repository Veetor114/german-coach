export interface PlanItem {
  id: string;
  label: string;
  minutes: number;
}

export const DEFAULT_DAILY_PLAN: readonly PlanItem[] = [
  { id: "warmup", label: "Warm-up questions", minutes: 2 },
  { id: "pronunciation", label: "Pronunciation", minutes: 3 },
  { id: "everyday", label: "Everyday situation", minutes: 4 },
  { id: "goethe", label: "Goethe B2 speaking", minutes: 4 },
  { id: "interview", label: "Interview answer", minutes: 3 },
  { id: "free-speaking", label: "Free speaking", minutes: 2 },
];

export const totalMinutes = (plan: readonly PlanItem[]): number =>
  plan.reduce((sum, item) => sum + item.minutes, 0);
