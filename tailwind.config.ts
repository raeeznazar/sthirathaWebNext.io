import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Brand palette derived from the original Sthiratha site
        // (primary blue accent used on buttons/links, dark footer).
        primary: {
          DEFAULT: "#2f55d4",
          50: "#eef2fd",
          100: "#dbe3fb",
          200: "#b7c7f7",
          300: "#8ea8f1",
          400: "#5f83e8",
          500: "#2f55d4",
          600: "#2645ac",
          700: "#1f3789",
          800: "#182a68",
          900: "#121f4c",
        },
        dark: "#161e2d",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1320px",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(15, 23, 42, 0.08)",
        "card-hover": "0 16px 40px -8px rgba(15, 23, 42, 0.18)",
        soft: "0 2px 8px 0 rgba(15, 23, 42, 0.06)",
        glow: "0 0 0 1px rgba(47, 85, 212, 0.08), 0 8px 30px -6px rgba(47, 85, 212, 0.25)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.05)" },
          "66%": { transform: "translate(-2%, 3%) scale(0.97)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
        blob: "blob 16s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
