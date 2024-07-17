/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
			fontFamily: {
				plusJakartaSans: ['Plus Jakarta Sans Variable', 'sans-serif'],
			},
			colors: {
				lime: 'hsl(61, 70%, 52%)',
				'lime-opacity-20': 'hsla(61, 70%, 52%, 20%)',
				'lime-opacity-80': 'hsla(61, 70%, 52%, 80%)',
				red: 'hsl(4, 69%, 50%)',
				white: 'hsl(0, 0%, 100%)',
				'slate-100': 'hsl(202, 86%, 94%)',
				'slate-300': 'hsl(203, 41%, 72%)',
				'slate-500': 'hsl(200, 26%, 54%)',
				'slate-700': 'hsl(200, 24%, 40%)',
				'slate-900': 'hsl(202, 55%, 16%)',
				'black-40': 'rgba(0,0,0, 0.4)',
			},
			keyframes: {
				'fade-in': {
					'0%': {opacity: '0%'},
					'100%': {opacity: '100%'},
				},
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-in-out',
			},
			backgroundImage: {
				'radio-selected': "url('/icon-radio-selected.svg')",
			},
		},
	},
	plugins: [],
};
