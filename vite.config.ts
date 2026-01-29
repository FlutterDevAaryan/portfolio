import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// Base must match GitHub Pages project path: https://<username>.github.io/portfolio/
// Locally: npm run dev → http://localhost:5173/portfolio/ , preview → http://localhost:4173/portfolio/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    port: 5173
  }
});

