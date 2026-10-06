import { TOPICS } from "@/data/topics";
import type { Topic } from "@/types/topic";

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}

export function searchTopics(topics: readonly Topic[], query: string): readonly Topic[] {
  const q = query.trim().toLowerCase();
  if (!q) return topics;
  return topics.filter((topic) =>
    [topic.title, topic.titleEn, ...topic.tags].some((field) => field.toLowerCase().includes(q)),
  );
}
