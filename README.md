# document for supply tool by astro
このリポジトリは、MDXを記述するだけで各種マニュアルをWeb上に公開するためのリポジトリです。

## 概要
`src/pages/`のなかに`.mdx`を記載するだけでマニュアルがWeb上に公開されます。

### example
https://obutora.github.io/document_for_supply_tool_by_astro/supplyTools/1_gettingStarted/

### 技術
- フレームワークとして[Astro](https://astro.build/)を利用しています。
- [Astro](https://astro.build/)はディレクトリ構造をそのままパスにルーティングしてくれます。
- `src/layouts/Layout.astro`で各ページのレイアウトを定義。
- Astroは`.mdx`の`frontmatter`を解釈できるため、サイドバーなどに利用しています。
- `master`ブランチに変更を`push`すると、GitHub Actionsを利用して自動でGitHub Pagesに変更が適用されます。
