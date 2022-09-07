// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#76A713",
          secondary: "#000000",
          accent: "#fbc264",
          neutral: "#f4f1ed",
          "base-100": "#FFFFFF",
          info: "#ff5b34",
          success: "#227500",
          warning: "#fda616",
          error: "#ff6c49",
        },
      },
      {
        darkDashboard: {
          primary: "#556EE6",
          secondary: "#ffffff",
          accent: "#000000",
          neutral: "#FFFFFF",
          "base-100": "#2A3042",
          info: "#98A8DD",
          success: "#34C38F",
          warning: "#F1B44C",
          error: "#F46A6A",
        },
      },
      {
        lightDashboard: {
          primary: "#776ACF",
          secondary: "#000000",
          accent: "#000000",
          neutral: "#FFFFFF",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
