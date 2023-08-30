/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html"],
  theme: {
    extend: {
      colors: {
        ungu: "#8b5cf6",
        merah: "#e11d48",
        biru: "#3b82f6",
        "abu-abu": "#a3a3a3",
        putih: "#f8fafc",
      },

      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [],
};
