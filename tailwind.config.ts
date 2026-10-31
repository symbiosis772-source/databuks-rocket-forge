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
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Devanagari"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"Plus Jakarta Sans"', '"Noto Sans Devanagari"', "system-ui", "-apple-system", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"Noto Sans Devanagari"', "system-ui", "-apple-system", "sans-serif"],
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
        brand: {
          ivory: "#F6F5EF",
          white: "#FFFFFF",
          forest: "#123B32",
          forestDark: "#0B2620",
          forestLight: "#1B4F43",
          dark: "#182822",
          secondary: "#53635C",
          sage: "#E5ECE5",
          border: "#D8E0D8",
          lime: "#D6F279",
        },
      },
      borderRadius: {
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(24, 40, 34, 0.05), 0 1px 2px -1px rgba(24, 40, 34, 0.05)",
        card: "0 2px 8px -2px rgba(24, 40, 34, 0.06), 0 1px 4px -1px rgba(24, 40, 34, 0.04)",
        cardHover: "0 12px 24px -6px rgba(18, 59, 50, 0.09), 0 4px 8px -2px rgba(18, 59, 50, 0.04)",
        dropdown: "0 10px 30px -5px rgba(18, 59, 50, 0.12), 0 4px 6px -2px rgba(18, 59, 50, 0.05)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
