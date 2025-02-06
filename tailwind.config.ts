import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        dark: {
          xl: "#1d1d1d",
          m: "#2b2b2b",
          sm: "#5e5e5e",
          blue: "#4f9cf9"
        },
        light: {
          xl: "#ffffff",
          m: "#ffffff",
          sm: "#ffffff",
          blue: "#4f9cf9"
        }
      }
    },
  },
  // darkMode: "class",
  plugins: [],
} satisfies Config;
