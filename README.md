# svelte-pastel-yellow

Svelte 5 + SvelteKit を使用したコンポーネントライブラリです。

## 謝辞

このライブラリの一部のコンポーネントは、以下のリソースを参考にしています：

- **Textコンポーネント**: [デジタル庁デザインシステム](https://design.digital.go.jp/foundations/typography/) のタイポグラフィ仕様を参考に実装しました。フォントファミリー、サイズ、行間、字間などの仕様を独自に実装・改変しています。

## ライセンス

このプロジェクトは MIT License の下で公開されています。詳細は [LICENSE](./LICENSE) ファイルを参照してください。

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
bunx sv create

# create a new project in my-app
bunx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `bun install` (or `bun install` or `yarn`), start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
bun run package
```

To create a production version of your showcase app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [bun](https://www.bunjs.com):

```bash
bun publish
```
