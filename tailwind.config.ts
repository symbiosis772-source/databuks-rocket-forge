import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-arcadia)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-arcadiadisplay)", "Manrope", "system-ui", "sans-serif"],
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
        "mercury-blue": "#5266eb",
        "ghost-blue": "#cdddff",
        "deep-space": "#171721",
        "midnight-slate": "#1e1e2a",
        graphite: "#272735",
        lead: "#70707d",
        starlight: "#ededf3",
        silver: "#c3c3cc",
        "pure-white": "#ffffff",
        navy: {
          DEFAULT: "hsl(var(--navy))",
          light: "hsl(var(--navy-light))",
        },
        blue: {
          50: "hsl(var(--blue-50))",
          100: "hsl(var(--blue-100))",
          500: "hsl(var(--blue-500))",
          600: "hsl(var(--blue-600))",
          700: "hsl(var(--blue-700))",
        },
        whatsapp: {
          DEFAULT: "hsl(142 76% 36%)",
          hover: "hsl(142 76% 30%)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        pill: "9999px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        glow: "var(--shadow-glow)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.5", letterSpacing: "0.24px" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0.28px" }],
        body: ["16px", { lineHeight: "1.5", letterSpacing: "0.16px" }],
        subheading: ["18px", { lineHeight: "1.4" }],
        "heading-sm": ["21px", { lineHeight: "1.35" }],
        heading: ["32px", { lineHeight: "1.2" }],
        "heading-lg": ["49px", { lineHeight: "1.15" }],
        display: ["65px", { lineHeight: "1.1", letterSpacing: "0.65px" }],
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "56": "56px",
        "72": "72px",
        "80": "80px",
        "112": "112px",
        "128": "128px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
