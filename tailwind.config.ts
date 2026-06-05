import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EE",
        ink: "#111111",
        muted: "#6B6B66",
        hairline: "#E6E2D8",
        accent: "#1F4D3A",
        "accent-soft": "#E7EDE8",
        highlight: "#FF5A36",
        "highlight-soft": "#FFE3D9",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        editorial: "72rem",
      },
      spacing: {
        section: "10rem",
        "section-sm": "6rem",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "ping-soft": "ping-soft 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float-chip": "float-chip 3.6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ping-soft": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "80%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "float-chip": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
