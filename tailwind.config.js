module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/layouts/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Space Mono", "sans-serif"],
      },

      colors: {
        primary: "hsl(172, 67%, 45%)",
        primaryDark: "hsl(183, 100%, 15%)",
        primaryLight: "hsl(185, 41%, 84%)",

        danger: "hsl(0, 87%, 67%)",
        para: "hsl(257, 7%, 63%)",
        head: "hsl(186, 14%, 43%)",
        fade: "hsl(189, 41%, 97%)",
      },
      screens: {
        // laptop: "1040px",
      },
      fontSize: {
        "2.5xl": "28px",
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        autofill: "repeat(auto-fill, minmax(120px, 1fr))",
      },

      width: {
        "90w": "90vw",
        card: "28rem",
        "card-md": "60rem",
      },
    },
  },
  plugins: [],
};
