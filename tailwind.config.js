/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#442359",
          mid: "#8f7b9b",
          light: "#dad3de",
        },
        secondary: {
          default: "#e64e00",
          mid: "#f09566",
          light: "#fad9d1",
        },
        tertiary: {
          default: "#44b4a6",
          mid: "#8fd2ca",
          light: "#daf0ed",
        },
        accent: {
          default: "#a58b3f",
          mid: "#c9b98c",
          light: "#ede8d9",
        },
        neutral: {
          white: "#ffffff",
          "light-grey": "#EEEEEE",
          "medium-grey": "#DDDDDD",
          grey: "#BBBBBB",
          "dark-grey": "#333333",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
}
