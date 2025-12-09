import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#003049',
				'primary-darker': '#002133',
				secondary: '#669BBC',
				textPrimary: '#FDF0D5',
				accent: '#780000'
			},
			fontFamily: {
				serif: ['"Vazirmatn"', '"DM Serif Display"', 'serif'],
				sans: ['Vazirmatn', 'sans-serif']
			}
		}
	},

	plugins: []
} as Config;
