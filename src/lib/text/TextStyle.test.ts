import { describe, test, expect } from 'vitest';
import {
	fontSizeFromTextStyle,
	fontWeightFromTextStyle,
	letterSpacingFromKindAndFontSize,
	lineHeightFromTextStyle,
	TextKind,
	textKindFromTextStyle,
	TextStyle
} from '$lib/text/TextStyle.js';

describe('TextStyleTests', () => {
	describe('TextKind', () => {
		test.each([
			{ style: TextStyle.dsp64B140, kind: TextKind.Display },
			{ style: TextStyle.std36B140, kind: TextKind.Standard },
			{ style: TextStyle.dns14B120, kind: TextKind.Dense },
			{ style: TextStyle.oln16N100, kind: TextKind.Oneline },
			{ style: TextStyle.mono14N150, kind: TextKind.Mono }
		])('TextStyleが$styleであれば種別は$kindである', ({ style, kind }) => {
			expect(textKindFromTextStyle(style)).toBe(kind);
		});
	});

	describe('letter-spacing', () => {
		test('Displayテキストであればletter-spacingは0である', () => {
			expect(letterSpacingFromKindAndFontSize(TextKind.Display, 64)).toBe('0');
		});

		test('Standardテキストでサイズが45pxであればletter-spacingは0である', () => {
			expect(letterSpacingFromKindAndFontSize(TextKind.Standard, 45)).toBe('0');
		});

		test.each([36, 32, 28])(
			'Standardテキストでサイズが28〜36pxであればletter-spacingは0.01emである',
			(size) => {
				expect(letterSpacingFromKindAndFontSize(TextKind.Standard, size)).toBe('0.01em');
			}
		);

		test('Standardテキストでサイズが26px以下であればletter-spacingは0.02emである', () => {
			expect(letterSpacingFromKindAndFontSize(TextKind.Standard, 26)).toBe('0.02em');
		});

		test('Denseテキストであればletter-spacingは0である', () => {
			expect(letterSpacingFromKindAndFontSize(TextKind.Dense, 16)).toBe('0');
		});

		test('Onelineテキストであればletter-spacingは0.02emである', () => {
			expect(letterSpacingFromKindAndFontSize(TextKind.Oneline, 17)).toBe('0.02em');
		});

		test('Monoテキストであればletter-spacingは0である', () => {
			expect(letterSpacingFromKindAndFontSize(TextKind.Mono, 14)).toBe('0');
		});
	});

	describe('Font Size', () => {
		test.each([
			{ style: TextStyle.dsp64B140, size: 64 },
			{ style: TextStyle.std36B140, size: 36 },
			{ style: TextStyle.dns14B120, size: 14 },
			{ style: TextStyle.oln17B100, size: 17 },
			{ style: TextStyle.mono16B150, size: 16 }
		])('TextStyleが$styleであればfont-sizeは $size pxである', ({ style, size }) => {
			expect(fontSizeFromTextStyle(style)).toBe(size);
		});
	});

	describe('Font Weight', () => {
		test.each([
			{ style: TextStyle.dsp64B140, weight: 'bold' },
			{ style: TextStyle.std36N140, weight: 'normal' }
		])('TextStyleが$styleであればfont-weightは $weight pxである', ({ style, weight }) => {
			expect(fontWeightFromTextStyle(style)).toBe(weight);
		});
	});

	describe('Line Height', () => {
		test.each([
			{ style: TextStyle.oln16B100, lineHeight: 1 },
			{ style: TextStyle.dns16B120, lineHeight: 1.2 },
			{ style: TextStyle.dns14B130, lineHeight: 1.3 },
			{ style: TextStyle.std36B140, lineHeight: 1.4 },
			{ style: TextStyle.mono17N150, lineHeight: 1.5 },
			{ style: TextStyle.std18B160, lineHeight: 1.6 },
			{ style: TextStyle.std17N170, lineHeight: 1.7 },
			{ style: TextStyle.std16N175, lineHeight: 1.75 }
		])('TextStyleが$styleであればline-heightは $lineHeight である', ({ style, lineHeight }) => {
			expect(lineHeightFromTextStyle(style)).toBe(lineHeight);
		});
	});
});
