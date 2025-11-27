import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#003049',     // رنگ هدر / منو / فوتر
				secondary: '#669BBC',   // رنگ پس زمینه اصلی یا بخش‌ها
				textPrimary: '#FDF0D5', // رنگ متن‌ها
				accent: '#780000'       // رنگ hover / انتخاب / لینک‌ها
			}
		}
	},

	plugins: []
} as Config;
