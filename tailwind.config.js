/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          DEFAULT: "#01335a",
          foreground: "#FEFEFE",
        },
        secondary: {
          DEFAULT: "#004274",
          foreground: "#FEFEFE",
        },
        achent: {
          DEFAULT: "#00AEff",
          foreground: "#01335a",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: false, // name of one of the included themes for dark mode
  },
}
