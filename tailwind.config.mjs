/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'futura': ['"futura-pt"', 'sans-serif'],
			},
			dropShadow: {
				custom: '0 20px 13px rgb(244 244 245 / 0.03)',

			}
		},
	},
	plugins: [],
}
