// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://chiwicolombia.com",
  trailingSlash: "always", // Esto fuerza el trailing slash
  build: {
    format: "directory" // Asegura que todo tenga /
  },
  vite: {
    plugins: [tailwindcss()],
  },
});