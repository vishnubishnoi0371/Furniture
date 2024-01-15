/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: { "100%": "100% 100%" },
      boxShadow: {
        crd_sh_1: "6px 13px 38px 0px rgba(0, 0, 0, 0.12);",
        btn_sh_2: "0px 100px 200px 0px rgba(1, 23, 54, 0.10)",
      },
      dropShadow: {
        sh_btn: "(2px 7px 16px rgba(0, 0, 0, 0.08))",
      },

      fontFamily: {
        "ff-rob": "Roboto, sans-serif",
        "ff-pop": "Poppins, sans-serif",
      },
      screens: {
        xs: "310px",
        xsm: "380px",
        910: "910px",
        xxs: "450px",
      },
    },
  },
  plugins: [],
};
