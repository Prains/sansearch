/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./images/**/*.{svg,js}",
  ],
  theme: {
    fontFamily: {
      text: "Microsoft Tai Le, sans-serif",
    },
    extend: { 
      colors: {
        "white-orange": "#FFC56D",
        "darker-orange": "#FFB443",
        "white-grey": "#E9F3F3",
        "white-black": "#939393",
        "full-black": "#000000",
        "full-white": "#FFFFFF",
      },
      dropShadow: {
        roundedButton: "3px 3px 4px rgba(0, 0, 0, 0.25)",
      },

      backgroundImage: {
        silver: 'url("/silver.png")',
      },
    },
  },
  plugins: [],
};
