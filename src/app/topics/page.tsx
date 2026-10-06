import { TopicList } from "@/components/topics/topic-list";
import { VocabularyReview } from "@/components/topics/vocabulary-review";
import { TOPICS } from "@/data/topics";

export default function TopicsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Topic Library</h1>
        <p className="text-muted-foreground">
          Pick a topic, learn the structure, then speak it from keywords.
        </p>
      </header>
      <VocabularyReview />
      <TopicList topics={TOPICS} />
    </div>
  );
}
