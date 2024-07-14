/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["Afacad", "Arial", "sans-serif"],
      heading: ["Afacad", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          50: "#FFF9E5",
          100: "#FFF2CC",
          200: "#FFE79E",
          300: "#FFDA6B",
          400: "#FFCD38",
          500: "#FFC107",
          DEFAULT: "#FFC107",
          600: "#D19D00",
          700: "#9E7700",
          800: "#6B5000",
          900: "#332600",
          950: "#191300",
        },
        accent: {
          50: "#E4E4EC",
          100: "#C9C9D9",
          200: "#9797B5",
          300: "#64648C",
          400: "#3E3E56",
          500: "#191923",
          DEFAULT: "#191923",
          600: "#13131B",
          700: "#0F0F15",
          800: "#0B0B0F",
          900: "#040406",
          950: "#020203",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
      aspectRatio: {
        landscape: "4 / 3",
        portrait: "3 / 4",
        large: "5 / 8",
        ultrawide: "18 / 5",
        golden: "1.6180 / 1",
        rrss: "1.91 / 1",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "9999",
      },
      gridTemplateColumns: {
        "1-2": "minmax(0, 1fr) minmax(0, 2fr)",
        "2-1": "minmax(0, 2fr) minmax(0, 1fr)",
        "1-3": "minmax(0, 1fr) minmax(0, 3fr)",
        "3-1": "minmax(0, 3fr) minmax(0, 1fr)",
        "1-4": "minmax(0, 1fr) minmax(0, 4fr)",
        "4-1": "minmax(0, 4fr) minmax(0, 1fr)",
        "2-3": "minmax(0, 2fr) minmax(0, 3fr)",
        "3-2": "minmax(0, 3fr) minmax(0, 2fr)",
        "1-2-1": "minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)",
        "1-4-1": "minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr)",
      },
      animation: {
        border: "border 4s linear infinite",
        "infinite-scroll": "infinite-scroll 150s linear infinite",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", require("tailwindcss-animated")],
};
