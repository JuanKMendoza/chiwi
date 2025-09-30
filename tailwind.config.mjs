import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rosa-titulos": "#FF8F8F",
        "naranja-principal": "#F4B08A",
        "naranja-botones": "#FFBFBF",
        "naranja-hover": "#F97316",
        "gris-textos": "#737070",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [typography], // 👈 aquí activas el plugin
};
