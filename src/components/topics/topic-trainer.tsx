"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Headphones } from "lucide-react";
import { PracticeControls, speakGerman } from "@/components/practice/practice-controls";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Topic } from "@/types/topic";

type Version = "full" | "easy" | "keywords";

const VERSIONS: readonly { id: Version; label: string }[] = [
  { id: "full", label: "Full" },
  { id: "easy", label: "Easy" },
  { id: "keywords", label: "Keywords" },
];

function Line({ de, en, showEnglish }: { de: string; en?: string; showEnglish: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="space-y-0.5">
        <p>{de}</p>
        {showEnglish && en ? <p className="text-sm text-muted-foreground">{en}</p> : null}
      </div>
      <Button size="icon" variant="ghost" aria-label="Listen to German sentence" title="Listen" onClick={() => speakGerman(de)}>
        <Headphones aria-hidden />
      </Button>
    </div>
  );
}

function KeywordChips({ keywords }: { keywords: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {keywords.map((keyword) => (
        <li key={keyword}>
          <Badge variant="outline" className="px-3 py-1 text-sm">
            {keyword}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export function TopicTrainer({ topic }: { topic: Topic }) {
  const [version, setVersion] = useState<Version>("full");
  const [showEnglish, setShowEnglish] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [help, setHelp] = useState(false);

  const showKeywordsOnly = hidden || version === "keywords";

  return (
    <div className="space-y-6">
      <Link
        href="/topics"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden /> All topics
      </Link>

      <header className="space-y-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">{topic.title}</h1>
          <Badge variant="secondary">{topic.level}</Badge>
        </div>
        {showEnglish ? <p className="text-muted-foreground">{topic.titleEn}</p> : null}
      </header>

      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Controls">
        {VERSIONS.map(({ id, label }) => (
          <Button
            key={id}
            size="sm"
            variant={version === id ? "default" : "outline"}
            aria-pressed={version === id}
            onClick={() => setVersion(id)}
          >
            {label}
          </Button>
        ))}
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden />
        <Button
          size="sm"
          variant={showEnglish ? "outline" : "default"}
          aria-pressed={!showEnglish}
          onClick={() => setShowEnglish((value) => !value)}
        >
          {showEnglish ? "🇬🇧 English support" : "🇩🇪 German mode"}
        </Button>
        <Button size="sm" variant="outline" onClick={() => setHidden((value) => !value)}>
          {hidden ? (
            <>
              <Eye className="size-4" aria-hidden /> Show answer
            </>
          ) : (
            <>
              <EyeOff className="size-4" aria-hidden /> Hide answer
            </>
          )}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setHelp((value) => !value)}>
          {help ? "Hide hint" : "Help me"}
        </Button>
      </div>

      {help && <p className="rounded-md bg-muted p-3 text-sm"><span className="font-semibold">Start with:</span> {topic.answer.keywords.slice(0, 3).join(" · ")}</p>}

      <Card>
        <CardHeader>
          <CardTitle>
            {showKeywordsOnly ? "Keywords: speak freely" : version === "easy" ? "Easy version" : "Full version"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showKeywordsOnly ? (
            <KeywordChips keywords={topic.answer.keywords} />
          ) : (
            <p className="leading-relaxed">{topic.answer[version]}</p>
          )}
        </CardContent>
      </Card>

      {hidden ? null : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Thema</CardTitle>
            </CardHeader>
            <CardContent>
              <Line de={topic.thema.de} en={topic.thema.en} showEnglish={showEnglish} />
            </CardContent>
          </Card>

          <section aria-label="3 Möglichkeiten" className="space-y-3">
            <h2 className="text-lg font-semibold">3 Möglichkeiten</h2>
            {topic.options.map((option, index) => (
              <Card key={option.title}>
                <CardHeader>
                  <CardTitle>
                    {String.fromCharCode(65 + index)}. {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Line de={option.explanation} en={option.en} showEnglish={showEnglish} />
                  <ul className="flex flex-wrap gap-2">
                    {option.vocab.map((word) => (
                      <li key={word.de}>
                        <Badge variant="outline">
                          {word.de}
                          {showEnglish ? ` = ${word.en}` : ""}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between gap-2 rounded-md bg-muted p-3 text-sm font-medium"><p>{option.sentence}</p><Button size="icon" variant="ghost" aria-label="Listen to example sentence" onClick={() => speakGerman(option.sentence)}><Headphones aria-hidden /></Button></div>
                </CardContent>
              </Card>
            ))}
          </section>

          <div className="grid gap-3 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vorteile</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {topic.pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nachteile</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {topic.cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Meine Meinung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="rounded-md bg-muted p-3 text-sm font-medium">{topic.opinion.frame}</p>
              <Line de={topic.opinion.de} en={topic.opinion.en} showEnglish={showEnglish} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schluss</CardTitle>
            </CardHeader>
            <CardContent>
              <Line de={topic.conclusion.de} en={topic.conclusion.en} showEnglish={showEnglish} />
            </CardContent>
          </Card>
        </>
      )}

      <PracticeControls title={topic.title} category="topics" prompt={topic.thema.de} phrases={[topic.answer.full]} initialMinutes={2} />
    </div>
  );
}
