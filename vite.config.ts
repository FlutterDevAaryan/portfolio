import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// Using relative base so it works from /docs on GitHub Pages
// Locally: npm run dev → http://localhost:5173/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: "docs"
  }
});

