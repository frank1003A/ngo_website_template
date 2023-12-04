import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    keyframes: {
      progress: {
        "0%": { width: "0%" },
        "100%": { width: "inherit" },
      },
      animloader: {
        "0%": { height: "100%" },
        "100%": { height: "0%" },
      },
      fill: {
        "0%": {
          boxShadow: "0 0  inset",
        },
        "100%": {
          boxShadow: "0 -48px inset",
        },
      },
    },
    tokens: {
      colors: {
        primary: { value: "#00696d" },
        secondary: { value: "#f9f4ee" },
        header: { value: "#020106" },
        text: { value: "#676968" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
