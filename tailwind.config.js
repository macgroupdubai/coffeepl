/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        SecondaryColor: "#016DD4",
        BreadcrumColor: "#012648",
        placeholderWhite: "#E3E3E3",
        SectionBgColor: "#ECF2F7",
        CardBgColor: "#bdd7f0",
        desc: "#757575",
        greenColor: "#68D585",
        grayColor: "#909090",
        gradientColor: "#9c64d8",
        another: "#af69dd",
        lightprp: "#A96CDA",
        green: "#0EB05C",
        BLACK: "#2B2B2B",
        CREAM_BROWN: "#C6A67A",
        CREAM_WHITE: "#F4F1EC",
        COFFEE_BEAN_BROWN: "#5B3A29",
        SOFT_BEIGE: "#E6D7C3",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(315deg, #6a6fcd 0%, #9b4dca 74%)",
      },
    },
  },
  plugins: [],
};
