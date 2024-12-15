/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
				larger: '376px', // screens 376px and above
			},
      colors: {
        Purple: {
          '100': 'hsl(254, 88%, 90%)',
          '500': 'hsl(256, 67%, 59%)',
        },
        Yellow: {
          '100': 'hsl(31, 66%, 93%)',
          '500': 'hsl(39, 100%, 71%)',
        },
        Neutral: {
          'White': 'hsl(0, 0%, 100%)',
          'Black': 'hsl(0, 0%, 7%)',
        },
      },

      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'body': '18px',
      }
    },
  },
  plugins: [],
}

