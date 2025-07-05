# CLAUDE.md

## プロジェクト概要

これはSvelte 5 + SvelteKitを使用したコンポーネントライブラリ「svelte-pastel-yellow」です。

## 開発コマンド

package.jsonを参照

## 変更時のテスト

変更時には以下のものを確認する必要がある

```shell
# ビルドチェック
bun run build
# フォーマット・型チェック
bun run check
# リントとフォーマット
bun run lint
bun run format
# テスト
bun run test:unit:once
```

## 注意点

- 指示なく勝手にコミットすることは禁止されている
- bun run devやbun run test:unitなどのサーバー起動系など永遠に終わらないコマンドはscreenなどを使用してバックグラウンド実行をする必要がある
