/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#163D2B",
        brand: {
          DEFAULT: "#24734B",
          light: "#B9E5C6",
        },
        ink: {
          bg: "#101713",
          surface: "#F7F8F6",
          DEFAULT: "#202820",
          muted: "#69736C",
          border: "#E5EAE5",
        },
      },
      fontFamily: {
        sans: ["Vazirmatn", "system-ui", "Tahoma", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,23,19,0.04), 0 4px 16px rgba(16,23,19,0.06)",
        lift: "0 8px 30px rgba(16,23,19,0.12)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in": "slide-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
