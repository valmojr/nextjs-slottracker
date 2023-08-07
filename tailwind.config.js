/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        DarkLightest: "#424549",
        DarkLighten: "#36393e",
        DarkDarken: "#282b30",
        DarkDarkest: "#1e2124",
        Blurple: "#5865F2",
        Green: "#57F287",
        Yellow: "#FEE75C",
        Fuchsia: "#EB459E",
        Red: "#ED4245",
      },
    },
  },
  plugins: [],
}
