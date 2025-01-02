import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow-Regular', ...defaultTheme.fontFamily.sans],
				serif: ['Bellefair-Regular', ...defaultTheme.fontFamily.serif],
				'sans-codensed': ['BarlowCondensed-Regular'],
			},
			colors: {
				'theme-blue-300': '#D0D6F9',
				'theme-blue-900': '#0B0D17',
			}
		},
	},
	plugins: [],
}
