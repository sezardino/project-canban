module.exports = {
  content: ['./src/**/*.{html,tsx, jsx}'],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.blue,
        secondary: colors.purple,
        tertiary: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
      }),
    },
  },
  plugins: [],
};
