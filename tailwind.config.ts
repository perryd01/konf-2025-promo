import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        bg: {
          light: "#ddd9ce",
        },
        accent: {
          light: "#8d363d",
        },
        primary: {
          light: "#3e3f3f",
        },
      },
      fontFamily: {
        cy: ["CY Grotesk", "sans-serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;
