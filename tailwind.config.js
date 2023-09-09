/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Hemenix: "Hemenix",
        Nba_Lakers: "NBA Lakers",
        Robuck: "Robuck",
      },
      fontSize: {},
      colors: {
        /* Primary Color*/
        /* Secondary Color*/
      },
    },
  },
  plugins: [],
};
