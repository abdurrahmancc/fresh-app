// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13a662",
          secondary: "#000000",
          accent: "#fbc264",
          neutral: "#f4f1ed",
          "base-100": "#FFFFFF",
          info: "#ff5b34",
          success: "#15673b",
          warning: "#fda616",
          error: "#ff6c49",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
