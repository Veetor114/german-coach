"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { searchTopics } from "@/lib/topics";
import type { Topic } from "@/types/topic";

export function TopicList({ topics }: { topics: readonly Topic[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchTopics(topics, query), [topics, query]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search: Arbeit, Verkehr, Gesundheit, Handy …"
          aria-label="Search topics"
          className="h-11 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {results.length === 0 ? (
        <p className="text-sm text-muted-foreground">No topics found for &quot;{query}&quot;.</p>
      ) : (
        <ul className="grid gap-3 md:grid-cols-2">
          {results.map((topic) => (
            <li key={topic.slug}>
              <Link href={`/topics/${topic.slug}`} className="block">
                <Card className="transition-colors hover:bg-muted">
                  <CardContent className="space-y-1 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="font-semibold">{topic.title}</h2>
                      <Badge variant="secondary">{topic.level}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{topic.titleEn}</p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
