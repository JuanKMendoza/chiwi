// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://chiwicolombia.com",

  // Esto fuerza el trailing slash
  trailingSlash: "ignore",

  build: {
    format: "directory" // Asegura que todo tenga /
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});