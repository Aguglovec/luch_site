/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center:true,
      },
      backgroundImage: {
        mainBg: "url('./img/mainBg.png')",
        headerBg: "url('./modules/common/header/img/headerBg.jpg')",
        menuBg: "url('./modules/common/header/img/menuBg.png')",
      },
      fontFamily: {
        pattaya: 'Pattaya',
      }
    },
  },
  plugins: [],
}
