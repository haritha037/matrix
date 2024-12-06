/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            borderColor: "rgb(0, 255, 255)",
            boxShadow: "0 0 10px rgb(0, 255, 255)",
          },
          "50%": {
            borderColor: "rgb(0, 128, 255)",
            boxShadow: "0 0 20px rgb(0, 128, 255)",
          },
        },
        animation: {
          glow: "glow 2s infinite",
        },
      },
      colors: {
        crtGlow: "#00f7d2", // Add your luminous color
        background: {
          dark: "#131415",
          medium: "#161d20",
          light: "#1c2a2e",
        },
        primary: "#69d263",
        // backgroundImage: {
        //   "matrix-pattern": "url('bg-matrix.jpg')",
        // },
        fontFamily: {
          exo: ["Exo 2", "sans-serif"],
        },
      },
      boxShadow: {
        // colorful: "1px 1px 15px #00f7d2", // Custom red and green shadow
        colorful: "-5px -5px 15px #b92b27, 5px 5px 15px #1565C0", // Custom red and green shadow
      },
    },
  },
  plugins: [],
};
