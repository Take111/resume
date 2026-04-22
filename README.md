# Resume — Chikato Takenouchi
## Tech

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Fraunces × Noto Sans JP

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:5173/resume/
pnpm build    # dist/ にビルド成果物
pnpm preview  # 本番ビルドのプレビュー
```

## Deploy

`main` ブランチにプッシュすると GitHub Actions (`.github/workflows/deploy.yml`) が GitHub Pages にデプロイします。

## 経歴データ

経歴は `src/data/resume.ts` に型付きで構造化されています。更新はそちらを編集してください。
