/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      },
      colors: {
        accent: {
          500: "#6366F1",
          600: "#4F46E5"
        }
      }
    }
  },
  plugins: []
};

