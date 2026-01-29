import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// Relative base works when served at https://<username>.github.io/portfolio/
// Locally: dev at http://localhost:5173/ , preview at http://localhost:4173/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5173
  }
});

