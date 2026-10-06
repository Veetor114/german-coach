# Deutsch Coach

A personal German speaking coach built with the existing Next.js App Router, React, TypeScript, Tailwind CSS, Base UI/shadcn primitives, and Lucide icons. The Clay palette is documented in `DESIGN.md` and applied through the shared theme tokens.

## Run Locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run lint` and `npm run build` to check the project.

## Learning Areas

- Dashboard and an 18-minute, six-part daily speaking routine.
- Goethe B2 topic preparation, hide/reveal exam mode, hints, timed attempts, and image-task analysis.
- Searchable speaking topics with full, easy, and keyword answers, bilingual support, and browser speech playback.
- Topic-derived vocabulary review with expanding 1-to-30-day intervals.
- Alltag scenarios covering shopping, transport, work, Ausbildung, authorities, healthcare, restaurants, and social life.
- Job and Ausbildung interview questions with answer structures, model answers, drafts, and optional AI feedback.
- Scenario-based AI role-play with feedback requested at the learner's pace.
- Progress history, weekly speaking chart, self-ratings, and a learner-maintained common-mistake log.

## AI Setup

The server route at `/api/coach` supports image-topic analysis, German conversation turns, feedback, and answer rewriting. It calls the Google Gemini API from the server; the API key is never exposed as a public client variable.

Copy `.env.example` to `.env.local`, set `GEMINI_API_KEY` to a key from Google AI Studio, and restart the development server. `GEMINI_MODEL` is optional and defaults to `gemini-2.5-flash`. Keep the key in `.env.local`; never use a `NEXT_PUBLIC_` prefix or commit the real key. AI actions return an explicit setup error when the key is missing. Image analysis accepts PNG, JPG, and WebP images up to 6 MB. PDF extraction is not implemented.

Uploaded images are sent to the configured AI provider for analysis. Do not upload sensitive personal documents.

## Data and Browser Features

Practice history, daily checklist completion, vocabulary intervals, and mistake notes are stored in the current browser's `localStorage`. They are not backed up or synchronized between devices. Browser speech playback uses the Web Speech API; voice availability depends on the browser and operating system.

There is no account system or remote database configured. For cross-device sync and durable user accounts, add a database/auth service such as Firebase or Supabase and move the local stores behind authenticated server APIs.
