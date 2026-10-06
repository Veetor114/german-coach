export type Level = "A2" | "B1" | "B2" | "B2+";

export interface Bilingual {
  de: string;
  en: string;
}

export interface VocabItem {
  de: string;
  en: string;
}

export interface TopicOption {
  /** Short label, e.g. "Selbst kochen" */
  title: string;
  /** German explanation (Genauere Erklärung) */
  explanation: string;
  /** English meaning of the explanation */
  en: string;
  vocab: readonly VocabItem[];
  /** One sentence the learner can say aloud */
  sentence: string;
}

export interface Opinion extends Bilingual {
  /** Reusable frame to adapt, not to memorize */
  frame: string;
}

export interface SpeakingAnswer {
  full: string;
  easy: string;
  keywords: readonly string[];
}

export interface Topic {
  slug: string;
  title: string;
  titleEn: string;
  level: Level;
  /** Extra search terms (German and English) */
  tags: readonly string[];
  thema: Bilingual;
  options: readonly [TopicOption, TopicOption, TopicOption];
  pros: readonly string[];
  cons: readonly string[];
  opinion: Opinion;
  conclusion: Bilingual;
  answer: SpeakingAnswer;
}
