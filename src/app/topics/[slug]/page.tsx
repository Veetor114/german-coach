import { notFound } from "next/navigation";
import { TopicTrainer } from "@/components/topics/topic-trainer";
import { TOPICS } from "@/data/topics";
import { getTopic } from "@/lib/topics";

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ slug: topic.slug }));
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  return <TopicTrainer topic={topic} />;
}
