export const TextStyle = {
	dsp64B140: 'Dsp-64B-140',
	dsp64N140: 'Dsp-64N-140',
	dsp57B140: 'Dsp-57B-140',
	dsp57N140: 'Dsp-57N-140',
	dsp48B140: 'Dsp-48B-140',
	dsp48N140: 'Dsp-48N-140',
	std45B140: 'Std-45B-140',
	std45N140: 'Std-45N-140',
	std36B140: 'Std-36B-140',
	std36N140: 'Std-36N-140',
	std32B150: 'Std-32B-150',
	std32N150: 'Std-32N-150',
	std28B150: 'Std-28B-150',
	std28N150: 'Std-28N-150',
	std26B150: 'Std-26B-150',
	std26N150: 'Std-26N-150',
	std24B150: 'Std-24B-150',
	std24N150: 'Std-24N-150',
	std22B150: 'Std-22B-150',
	std22N150: 'Std-22N-150',
	std20B150: 'Std-20B-150',
	std20N150: 'Std-20N-150',
	std18B160: 'Std-18B-160',
	std18N160: 'Std-18N-160',
	std17B170: 'Std-17B-170',
	std17N170: 'Std-17N-170',
	std16B170: 'Std-16B-170',
	std16N170: 'Std-16N-170',
	std16B175: 'Std-16B-175',
	std16N175: 'Std-16N-175',
	dns17B130: 'Dns-17B-130',
	dns17N130: 'Dns-17N-130',
	dns17B120: 'Dns-17B-120',
	dns17N120: 'Dns-17N-120',
	dns16B130: 'Dns-16B-130',
	dns16N130: 'Dns-16N-130',
	dns16B120: 'Dns-16B-120',
	dns16N120: 'Dns-16N-120',
	dns14B130: 'Dns-14B-130',
	dns14N130: 'Dns-14N-130',
	dns14B120: 'Dns-14B-120',
	dns14N120: 'Dns-14N-120',
	oln17B100: 'Oln-17B-100',
	oln17N100: 'Oln-17N-100',
	oln16B100: 'Oln-16B-100',
	oln16N100: 'Oln-16N-100',
	oln14B100: 'Oln-14B-100',
	oln14N100: 'Oln-14N-100',
	mono17B150: 'Mono-17B-150',
	mono17N150: 'Mono-17N-150',
	mono16B150: 'Mono-16B-150',
	mono16N150: 'Mono-16N-150',
	mono14B150: 'Mono-14B-150',
	mono14N150: 'Mono-14N-150'
} as const;
export type TextStyle = (typeof TextStyle)[keyof typeof TextStyle];

export const TextKind = {
	Display: 'Display',
	Standard: 'Standard',
	Dense: 'Dense',
	Oneline: 'Oneline',
	Mono: 'Mono'
} as const;
export type TextKind = (typeof TextKind)[keyof typeof TextKind];

export function textKindFromTextStyle(textStyle: TextStyle): TextKind {
	if (textStyle.startsWith('Dsp')) return TextKind.Display;
	if (textStyle.startsWith('Dns')) return TextKind.Dense;
	if (textStyle.startsWith('Oln')) return TextKind.Oneline;
	if (textStyle.startsWith('Mono')) return TextKind.Mono;
	return TextKind.Standard;
}

export function letterSpacingFromKindAndFontSize(kind: TextKind, size: number): string {
	switch (kind) {
		case TextKind.Display:
			return '0';
		case TextKind.Standard:
			if (size > 36) return '0';
			if (size > 26) return '0.01em';
			return '0.02em';
		case TextKind.Dense:
			return '0';
		case TextKind.Oneline:
			return '0.02em';
		case TextKind.Mono:
			return '0';
	}
}

export function fontSizeFromTextStyle(textStyle: TextStyle): number {
	return Number(textStyle.split('-')[1].slice(0, -1));
}
export function fontWeightFromTextStyle(textStyle: TextStyle): 'bold' | 'normal' {
	return textStyle.split('-')[1].endsWith('B') ? 'bold' : 'normal';
}
export function lineHeightFromTextStyle(textStyle: TextStyle): number {
	return Number(textStyle.split('-')[2]) / 100;
}
