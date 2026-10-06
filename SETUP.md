# Deutsch Coach - Phase 1

1. Scaffold the project (skip if already done):
   npx create-next-app@latest german-coach --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   cd german-coach
   npx shadcn@latest init
   npx shadcn@latest add button card progress badge
   npm install lucide-react

2. Copy the `src` folder from this zip into the project root.
   Overwrite when asked (layout.tsx and page.tsx are replaced).

3. Run:
   npm run dev
   npm run build

4. Commit and push:
   git add . && git commit -m "feat: phase 1 shell, navigation, dashboard" && git push
