import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', '"Noto Sans Devanagari"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"Instrument Sans"', '"Noto Sans Devanagari"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Premium Futuristic Theme Palette
        dark: {
          bg: "#080D16",         // Main background
          alt: "#101827",        // Alternate section background
          card: "#151F30",       // Card surfaces
          text: "#F4F7FC",       // Primary text
          muted: "#B5C1D3",      // Secondary text
          blue: "#2563EB",       // Primary blue
          blueHover: "#1D4ED8",  // Blue hover
          cyan: "#67E8F9",       // Cyan accent
          border: "#2A3850",     // Borders
        },
        brand: {
          paper: "#080D16",
          white: "#151F30",
          ink: "#F4F7FC",
          muted: "#B5C1D3",
          rust: "#2563EB",
          rustHover: "#1D4ED8",
          peach: "#1A263D",
          mist: "#101827",
          olive: "#132035",
          border: "#2A3850",
          dark: "#05080E",
          darkMuted: "#B5C1D3",
          cyan: "#67E8F9",
          // Backward-compat aliases
          ivory: "#080D16",
          forest: "#2563EB",
          forestDark: "#1D4ED8",
          forestLight: "#3B82F6",
          sage: "#101827",
          lime: "#67E8F9",
        },
      },
      borderRadius: {
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)",
        card: "0 4px 20px -2px rgba(3, 7, 18, 0.6), 0 2px 6px -2px rgba(3, 7, 18, 0.4)",
        dropdown: "0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.6)",
        glow: "0 0 25px -5px rgba(37, 99, 235, 0.35)",
        cyanGlow: "0 0 20px -4px rgba(103, 232, 249, 0.25)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
