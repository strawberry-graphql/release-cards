module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ['"Ubuntu Mono"', "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
