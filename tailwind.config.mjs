/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Paleta corporativa - ajusta a los colores de la marca
        primary: {
          50: "#f6f7f7",
          100: "#e3e6e6",
          200: "#c7cccc",
          300: "#aab1b1",
          400: "#8B908D", // gris medio real
          500: "#6f7573",
          600: "#545B5C", // gris fuerte real
          700: "#3e4445",
          800: "#2a2f30",
          900: "#1E2224", // gris oscuro fondo
          950: "#121516",
        },
        accent: {
          // Color de acento (CTAs, links). Cambia segun la marca
          DEFAULT: "#FDC10F",
          dark: "#c9980b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-up": "fadeUp 0.8s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
