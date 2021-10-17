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
        "slate-100": "#d7d9db",
        "slate-200": "#bcbfc2",
        "slate-300": "#a1a6aa",
        "slate-400": "#878c92",
        "slate-500": "#6d7378",
        "slate-600": "#55595e",
        "slate-700": "#3d4043",
        "slate-800": "#303336",
        "slate-900": "#26282a",
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
      margin: ["last"],
    },
  },
  plugins: [],
}
