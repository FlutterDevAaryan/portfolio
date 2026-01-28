import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// For GitHub Pages: site lives at https://<username>.github.io/portfolio/
// If you use a repo named <username>.github.io, change base to '/'
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    port: 5173
  }
});

