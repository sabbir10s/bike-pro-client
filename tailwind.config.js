module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4461F2",

          "secondary": "#131a4f",

          "accent": "#67CBA0",

          "neutral": "#181A2A",

          "base-100": "#FFFFFF",

          "base-200": "#e6eef8",
          "base-300": "#748DA6",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

// #ff634e