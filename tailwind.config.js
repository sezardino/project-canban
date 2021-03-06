module.exports = {
  content: ['./src/**/*.{html,tsx,ts,js,jsx}'],
  mode: 'jit',
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
      animation: {
        show: 'show 0.8s linear',
        'bounce-200': 'bounce 1s infinite 200ms',
        'bounce-400': 'bounce 1s infinite 400ms',
      },
      keyframes: {
        show: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
