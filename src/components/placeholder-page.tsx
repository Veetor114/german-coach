interface PlaceholderPageProps {
  title: string;
  description: string;
  phase: number;
}

export function PlaceholderPage({ title, description, phase }: PlaceholderPageProps) {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <p className="text-sm text-muted-foreground">Planned for Phase {phase}.</p>
    </section>
  );
}
