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
        // Monochrome Theme Design Tokens
        light: {
          bg: "#FAFAFA",
          alt: "#F1F1F1",
          card: "#FFFFFF",
          text: "#111111",
          muted: "#555555",
          border: "#DADADA",
          primary: "#111111",
          primaryHover: "#262626",
        },
        dark: {
          bg: "#090909",
          alt: "#111111",
          card: "#171717",
          text: "#F5F5F5",
          muted: "#B5B5B5",
          border: "#303030",
          primary: "#F5F5F5",
          primaryHover: "#E5E5E5",
        },
        brand: {
          paper: "#FAFAFA",
          white: "#FFFFFF",
          ink: "#111111",
          muted: "#555555",
          rust: "#111111",
          rustHover: "#262626",
          border: "#DADADA",
          dark: "#090909",
          mist: "#F1F1F1",
        },
      },
      borderRadius: {
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 4px 16px -2px rgba(0, 0, 0, 0.05)",
        dropdown: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
