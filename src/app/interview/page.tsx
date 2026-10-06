"use client";

import { useState } from "react";
import { BriefcaseBusiness, Headphones, LoaderCircle } from "lucide-react";
import { PracticeControls, speakGerman } from "@/components/practice/practice-controls";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QUESTIONS = [
  { question: "Erzählen Sie etwas über sich.", en: "Tell us something about yourself.", level: "B1", structure: ["Present your current situation", "Mention one relevant experience", "Connect it to this role"], full: "Gern. Mein Name ist ___. Ich interessiere mich besonders für ___ und habe bereits erste Erfahrungen in ___ gesammelt. Dabei habe ich gelernt, zuverlässig im Team zu arbeiten. Jetzt möchte ich meine Kenntnisse in Ihrem Unternehmen weiterentwickeln.", easy: "Ich heiße ___. Ich interessiere mich für ___. Ich habe Erfahrung mit ___. Ich arbeite gern im Team und möchte viel dazulernen.", keywords: ["aktuelle Situation", "Erfahrung", "Stärke", "Bezug zur Stelle"] },
  { question: "Warum möchten Sie diese Ausbildung machen?", en: "Why would you like to do this vocational training?", level: "B1", structure: ["Name what interests you about the occupation", "Give one personal reason", "Say what you want to learn"], full: "Ich möchte diese Ausbildung machen, weil mich die Verbindung von praktischem Arbeiten und neuen Fachkenntnissen interessiert. Besonders spannend finde ich ___. Ich lerne gern Schritt für Schritt und möchte mich langfristig in diesem Beruf entwickeln.", easy: "Der Beruf interessiert mich, weil ich gern praktisch arbeite. Ich möchte viel lernen und später in diesem Bereich arbeiten.", keywords: ["Beruf interessiert mich", "praktisch arbeiten", "Fachkenntnisse", "langfristig"] },
  { question: "Warum möchten Sie in Deutschland arbeiten?", en: "Why would you like to work in Germany?", level: "B1", structure: ["Give a personal motivation", "Mention a realistic professional goal", "Connect it to learning German"], full: "Ich möchte in Deutschland arbeiten, weil ich hier neue berufliche Erfahrungen sammeln und mich fachlich weiterentwickeln möchte. Außerdem gefällt mir die Möglichkeit, im internationalen Umfeld zu arbeiten. Mein Deutsch verbessere ich kontinuierlich, damit ich mich im Team sicher verständigen kann.", easy: "Ich möchte in Deutschland arbeiten und neue Erfahrungen sammeln. Ich lerne Deutsch, damit ich gut mit meinem Team sprechen kann.", keywords: ["Erfahrungen sammeln", "mich weiterentwickeln", "im Team", "Deutsch verbessern"] },
  { question: "Was sind Ihre Stärken?", en: "What are your strengths?", level: "B1", structure: ["Name two relevant strengths", "Support one with a short example", "Relate them to the role"], full: "Zu meinen Stärken gehören Zuverlässigkeit und Lernbereitschaft. In meiner letzten Aufgabe habe ich darauf geachtet, Termine einzuhalten und bei Schwierigkeiten früh nachzufragen. Ich denke, das hilft mir auch in dieser Position.", easy: "Ich bin zuverlässig und lerne schnell. Wenn ich eine Frage habe, frage ich nach. Das ist für diese Arbeit wichtig.", keywords: ["zuverlässig", "lernbereit", "Beispiel", "passt zur Stelle"] },
  { question: "Was sind Ihre Schwächen?", en: "What are your weaknesses?", level: "B2", structure: ["Choose a manageable development area", "Show what you are doing about it", "End with progress"], full: "Manchmal brauche ich etwas zu lange, um eine Aufgabe perfekt zu machen. Deshalb setze ich mir inzwischen klare Zeitlimits und frage früh nach Feedback. So kann ich sorgfältig arbeiten und trotzdem effizient bleiben.", easy: "Manchmal prüfe ich meine Arbeit zu oft. Jetzt setze ich mir ein Zeitlimit. Das hilft mir, schneller fertig zu werden.", keywords: ["Entwicklungsbereich", "konkrete Maßnahme", "Fortschritt", "positiv abschließen"] },
  { question: "Warum sollten wir Sie einstellen?", en: "Why should we hire you?", level: "B2", structure: ["Match two strengths to their needs", "Give evidence or an example", "Show motivation to contribute"], full: "Ich bringe großes Interesse an ___ und eine zuverlässige Arbeitsweise mit. Durch meine Erfahrung mit ___ kann ich mich schnell in Aufgaben einarbeiten. Gleichzeitig bin ich offen für Feedback und möchte Ihr Team engagiert unterstützen.", easy: "Ich bin zuverlässig und interessiere mich sehr für die Stelle. Ich lerne schnell und unterstütze gern das Team.", keywords: ["Anforderungen", "Stärken", "Beispiel", "Beitrag zum Team"] },
  { question: "Wie gehen Sie mit Problemen um?", en: "How do you deal with problems?", level: "B2", structure: ["Explain your first step", "Describe how you communicate", "Give a brief example"], full: "Zuerst versuche ich, das Problem genau zu verstehen und die wichtigsten Informationen zu sammeln. Wenn ich allein keine Lösung finde, bespreche ich es rechtzeitig mit dem Team. So vermeiden wir Missverständnisse und können gemeinsam eine passende Lösung finden.", easy: "Zuerst schaue ich mir das Problem genau an. Wenn ich Hilfe brauche, spreche ich mit meinem Team. Zusammen finden wir eine Lösung.", keywords: ["Problem verstehen", "Informationen sammeln", "rechtzeitig Bescheid sagen", "Lösung finden"] },
  { question: "Wie arbeiten Sie im Team?", en: "How do you work in a team?", level: "B1", structure: ["Describe how you communicate", "Mention reliability or listening", "Add a concrete example"], full: "Ich arbeite gern im Team und finde offene Kommunikation wichtig. Ich höre anderen zu, teile Informationen rechtzeitig und übernehme meine Aufgaben zuverlässig. Wenn es unterschiedliche Meinungen gibt, suche ich nach einer gemeinsamen Lösung.", easy: "Ich höre meinen Kollegen zu und erledige meine Aufgaben zuverlässig. Wenn wir anderer Meinung sind, sprechen wir darüber.", keywords: ["zuhören", "Informationen teilen", "zuverlässig", "gemeinsame Lösung"] },
  { question: "Wo sehen Sie sich in fünf Jahren?", en: "Where do you see yourself in five years?", level: "B2", structure: ["Show a realistic direction", "Mention a skill you want to build", "Stay open to learning"], full: "In fünf Jahren möchte ich in meinem Beruf sicher und selbstständig arbeiten. Bis dahin möchte ich meine fachlichen Kenntnisse und mein Deutsch weiter verbessern. Wichtig ist mir, mich Schritt für Schritt weiterzuentwickeln und Verantwortung zu übernehmen.", easy: "In fünf Jahren möchte ich mehr Erfahrung haben und selbstständiger arbeiten. Ich möchte weiterlernen und mehr Verantwortung übernehmen.", keywords: ["realistisches Ziel", "Kenntnisse verbessern", "selbstständig", "Verantwortung"] },
];

export default function InterviewPage() {
  const [selected, setSelected] = useState(0);
  const [english, setEnglish] = useState(true);
  const [showExample, setShowExample] = useState(false);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const item = QUESTIONS[selected];

  const requestFeedback = async () => {
    setLoading(true);
    setError("");
    setFeedback("");
    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "feedback", message: `Interview question: ${item.question}\nLearner response: ${answer}` }),
      });
      const result = await response.json() as { content?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not get feedback.");
      setFeedback(result.content ?? "");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not get feedback.");
    } finally {
      setLoading(false);
    }
  };

  const changeQuestion = (index: number) => {
    setSelected(index);
    setShowExample(false);
    setAnswer("");
    setFeedback("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><BriefcaseBusiness className="size-4" aria-hidden /> JOB & AUSBILDUNG</p>
        <h1 className="text-2xl font-semibold tracking-tight">Vorstellungsgespräch Trainer</h1>
        <p className="text-muted-foreground">Build your own answer from a clear structure. Use examples as support, not scripts to memorize.</p>
      </header>

      <div className="grid gap-5 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <nav className="space-y-2" aria-label="Interview questions">
          {QUESTIONS.map((question, index) => (
            <Button key={question.question} variant={selected === index ? "secondary" : "outline"} className="h-auto w-full justify-start whitespace-normal py-2 text-left" onClick={() => changeQuestion(index)}>
              <span className="mr-1 text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>{question.question}
            </Button>
          ))}
        </nav>

        <div className="space-y-4">
          <Card className="bg-brand-lavender text-foreground">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1"><Badge variant="outline">{item.level}</Badge><CardTitle className="text-xl">{item.question}</CardTitle></div>
                <Button variant="outline" size="icon" aria-label="Listen to question" onClick={() => speakGerman(item.question)}><Headphones aria-hidden /></Button>
              </div>
            </CardHeader>
            {english && <CardContent><p className="text-sm text-foreground/70">{item.en}</p></CardContent>}
          </Card>

          <Card>
            <CardHeader><CardTitle>Answer structure</CardTitle></CardHeader>
            <CardContent><ol className="list-decimal space-y-2 pl-5">{item.structure.map((step) => <li key={step}>{step}</li>)}</ol></CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Try yourself</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <textarea value={answer} onChange={(event) => setAnswer(event.target.value)} rows={5} placeholder="Write keywords or draft a short answer. You can also answer aloud without writing first." className="w-full resize-y rounded-lg border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => setShowExample((value) => !value)}>{showExample ? "Hide example" : "Show B1/B2 example"}</Button>
                <Button variant="outline" onClick={() => setEnglish((value) => !value)}>{english ? "🇩🇪 German mode" : "🇬🇧 English support"}</Button>
                <Button variant="secondary" disabled={!answer.trim() || loading} onClick={requestFeedback}>{loading ? <LoaderCircle className="animate-spin" aria-hidden /> : null} Get feedback</Button>
              </div>
              {showExample && <div className="space-y-3 rounded-md bg-muted p-4"><div><p className="text-xs font-semibold uppercase text-muted-foreground">Example answer</p><p className="mt-1 leading-relaxed">{item.full}</p></div><div><p className="text-xs font-semibold uppercase text-muted-foreground">Easier answer</p><p className="mt-1">{item.easy}</p></div><p className="text-sm text-muted-foreground">Keywords: {item.keywords.join(" · ")}</p><Button size="sm" variant="outline" onClick={() => speakGerman(item.full)}><Headphones aria-hidden /> Listen</Button></div>}
              {error && <p role="alert" className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
              {feedback && <div className="whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4 text-sm leading-relaxed">{feedback}</div>}
            </CardContent>
          </Card>

          <PracticeControls title={item.question} category="interview" prompt={item.question} phrases={[item.full]} initialMinutes={2} />
        </div>
      </div>
    </div>
  );
}
