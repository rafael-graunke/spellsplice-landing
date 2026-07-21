// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://spellsplice.com',
	integrations: [
		starlight({
			plugins: [
				starlightCatppuccin({
					dark: { flavor: 'mocha', accent: 'mauve' },
					light: { flavor: 'latte', accent: 'mauve' },
				}),
			],
			title: 'Spellsplice Docs',
			favicon: '/assets/favicon.svg',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'Spellsplice',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/rafael-graunke/spellsplice',
				},
			],
			// Landing page owns "/"; docs live under "/docs/*"
			// (content nested in src/content/docs/docs/).
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', slug: 'docs' },
						{ label: 'Getting Started', slug: 'docs/getting-started' },
					],
				},
				{
					label: 'Live Mode',
					items: [
						{ label: 'Overview', slug: 'docs/live' },
						{ label: 'Player Panel', slug: 'docs/live/player-panel' },
						{ label: 'Match Controls', slug: 'docs/live/match-controls' },
						{ label: 'Library', slug: 'docs/live/library' },
						{ label: 'Player Hand', slug: 'docs/live/hand' },
						{ label: 'Card Display', slug: 'docs/live/playing-cards' },
						{ label: 'Annotations', slug: 'docs/live/annotations' },
						{ label: 'Broadcasting to OBS', slug: 'docs/live/broadcasting-obs' },
					],
				},
				{
					label: 'Overlay',
					items: [
						{ label: 'Overview', slug: 'docs/overlay' },
						{ label: 'Anchors & Offsets', slug: 'docs/overlay/anchors-offsets' },
						{ label: 'Scoreboard', slug: 'docs/overlay/scoreboard' },
						{ label: 'Hand Stack', slug: 'docs/overlay/hand-stack' },
						{ label: 'Annotations', slug: 'docs/overlay/annotations' },
						{ label: 'Card Display', slug: 'docs/overlay/card-display' },
						{ label: 'Layer Order', slug: 'docs/overlay/layer-order' },
						{ label: 'Presets', slug: 'docs/overlay/presets' },
						{ label: 'Custom Scoreboard SVG', slug: 'docs/overlay/scoreboard-svg' },
					],
				},
			],
		}),
	],
});
