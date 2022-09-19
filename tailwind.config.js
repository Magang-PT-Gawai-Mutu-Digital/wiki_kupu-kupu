module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'phone' : '390px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {},
    colors: {
      primary: {
        green: "#39B54A",
        lightGreen: "#D5F2D9",
        black: "#000000",
        gray: "#B0B0B0",
        lightGray: "#F2F2F2",
        white: "#FFFFFF",

      }
    },
  },
  plugins: [],
};
