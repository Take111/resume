# Resume — Chikato Takenouchi

竹ノ内 愛斗 (Chikato Takenouchi) の職務経歴書サイト。

- iOS / Flutter / React Native エンジニア（モバイル約 6 年）
- セキュリティ領域へ踏み出すべく BSCP 取得を準備中

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

### 初回設定

1. GitHub リポジトリの **Settings → Pages → Source** を **GitHub Actions** に設定
2. リポジトリ名が `resume` 以外の場合は `vite.config.ts` の `base` を `/<repo-name>/` に変更

## 経歴データ

経歴は `src/data/resume.ts` に型付きで構造化されています。更新はそちらを編集してください。
