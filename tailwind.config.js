module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "band-sketch": "url('./images/band-art-sketch.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
