/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000000",
      gray: {
        dark: "#53535C",
        light: "#BCBBBD",
      },
      orange: "#D67F4B",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
