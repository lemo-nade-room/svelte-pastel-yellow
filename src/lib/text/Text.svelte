<script lang="ts">
	import {
		fontSizeFromTextStyle,
		fontWeightFromTextStyle,
		textKindFromTextStyle,
		letterSpacingFromKindAndFontSize,
		lineHeightFromTextStyle,
		TextStyle
	} from '$lib/text/TextStyle.js';

	const { style = TextStyle.std17N170, text = '' } = $props<{
		style?: TextStyle;
		text?: string;
	}>();

	let kind = $derived(textKindFromTextStyle(style));
	let fontWeight = $derived(fontWeightFromTextStyle(style));
	let lineHeight = $derived(lineHeightFromTextStyle(style));
	let fontSize = $derived(fontSizeFromTextStyle(style));
	let letterSpacing = $derived(letterSpacingFromKindAndFontSize(kind, fontSize));
</script>

<span
	style:line-height={lineHeight}
	style:font-weight={fontWeight}
	style:font-size={`${fontSize}px`}
	style:letter-spacing={letterSpacing}
	class={kind}>{text}</span
>

<style>
	.Display {
		font-family:
			'Hiragino Kaku Gothic ProN',
			'Hiragino Sans',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI Variable',
			'Segoe UI',
			'Yu Gothic',
			'YuGothic',
			'Meiryo',
			Roboto,
			'Noto Sans CJK JP',
			'Noto Sans JP',
			'Noto Sans',
			'Helvetica Neue',
			Arial,
			sans-serif;
	}

	.Standard {
		font-family:
			'Hiragino Kaku Gothic ProN',
			'Hiragino Sans',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI Variable',
			'Segoe UI',
			'Yu Gothic UI',
			'Yu Gothic',
			'YuGothic',
			'Meiryo',
			Roboto,
			'Noto Sans CJK JP',
			'Noto Sans JP',
			'Noto Sans',
			'Helvetica Neue',
			Arial,
			sans-serif;
	}

	.Dense {
		font-family:
			'Hiragino Sans',
			'HiraKakuProN-W3',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			'Segoe UI Variable',
			'Yu Gothic UI',
			'Yu Gothic',
			'Meiryo',
			Roboto,
			'Noto Sans JP',
			'Noto Sans',
			Arial,
			'Helvetica Neue',
			sans-serif;
	}

	.Oneline {
		font-family:
			'Hiragino Sans',
			'Hiragino Kaku Gothic ProN',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			'Segoe UI Variable',
			'Yu Gothic UI',
			'Yu Gothic',
			Roboto,
			'Noto Sans JP',
			'Noto Sans',
			'Helvetica Neue',
			Arial,
			sans-serif;
	}

	.Mono {
		font-family:
			'SF Mono',
			'Menlo',
			'Hiragino Maru Gothic Pro',
			/* macOS */ 'Consolas',
			'Courier New',
			/* Windows */ 'Roboto Mono',
			'Noto Sans Mono CJK JP',
			/* Android/Linux */ monospace;
	}
</style>
