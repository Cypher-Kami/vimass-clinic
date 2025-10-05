import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",    // marfil cálido
        foreground: "#1D1D1B",
        accent: "#CBB79A",        // champagne/dorado suave
        blush: "#EADFD6",         // rosa pálido
        border: "rgba(0,0,0,0.06)",
        // Colores para shadcn/ui
        card: "#FAF9F6",
        "card-foreground": "#1D1D1B",
        popover: "#FAF9F6",
        "popover-foreground": "#1D1D1B",
        primary: "#1D1D1B",
        "primary-foreground": "#FAF9F6",
        secondary: "#EADFD6",
        "secondary-foreground": "#1D1D1B",
        muted: "#EADFD6",
        "muted-foreground": "#1D1D1B",
        destructive: "#ef4444",
        "destructive-foreground": "#FAF9F6",
        input: "rgba(0,0,0,0.06)",
        ring: "#CBB79A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config