<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Text from '$lib/text/Text.svelte';
	import { TextStyle } from '$lib/text/TextStyle.js';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Typography/Text',
		component: Text,
		tags: ['autodocs'],
		argTypes: {
			text: {
				control: { type: 'text' }
			},
			style: {
				control: { type: 'select' },
				options: Object.values(TextStyle)
			}
		}
	});
</script>

<Story
	name="Std-17N-170"
	args={{
		style: TextStyle.std17N170,
		text: 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。'
	}}
/>
