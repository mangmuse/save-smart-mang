/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        200: "800px",
      },
      width: {
        26: "104px",
        100: "400px",
        200: "800px",
      },
      height: {
        100: "400px",
      },
      colors: {
        custom: {
          brand: "#2ec4b6",
          blue: "#007bff",
          btnBg: "#f6f7fa",
          red: "#ff4d4d",
          expenseListBg: "#f9f9f9",
        },
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
