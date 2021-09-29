module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flexGrow: { 2: 2 },
    extend: {
      flex: {
        full: "0 0 100%",
      },
      colors: {
        "slate-100": "#D6DBDF",
        "slate-200": "#AEB6BF",
        "slate-300": "#85929E",
        "slate-400": "#5D6D7E",
        "slate-500": "#34495E",
        "slate-600": "#2E4053",
        "slate-700": "#283747",
        "slate-800": "#212F3C",
        "slate-900": "#1B2631",
        "navy-100": "#527bc7",
        "navy-200": "#3e6cc1",
        "navy-300": "#3861ad",
        "navy-400": "#32569a",
        "navy-500": "#2c4c87",
        "navy-600": "#254174",
        "navy-700": "#203863",
        "navy-800": "#192b4d",
        "navy-900": "#13203a",
      },
    },
  },
  variants: {
    extend: {
      translate: ["responsive", "hover", "focus", "group-hover"],
      margin: ["last"]
    },
  },
  plugins: [],
}
