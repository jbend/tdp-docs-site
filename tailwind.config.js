module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    colors : {
      modus: {
        // Modus Palette
        primary: '#0063a3',
        secondary: '#6a6e79',
        tertiary: '#cbcdd6',
        dark: '#252a2e',

        // Primary Palette
        "trimble-dark-blue": "#004f83",
        "trimble-blue": "#0063a3",
        "trimble-yellow": "#fbad26",
        "trimble-gray": "#252a2e",

        //Blue progression
        "blue-dark": "#0e416c",
        // "blue": "#0063a3",
        "blue-light": "#217cbb",
        "blue-pale": "#dcedf9",

        //Neutral progression
        "black": "#000000",
        "gray-10": "#171c1e",
        "gray-9": "#353a40",
        "gray-8": "#464b52",
        "gray-7": "#585c65",
        "gray-6": "#6a6e79",
        "gray-5": "#7d808d",
        "gray-4": "#90939f",
        "gray-3": "#a3a6b1",
        "gray-2": "#b7b9c3",
        "gray-1": "#cbcdd6",
        "gray-0": "#e0e1e9",
        "gray-light": "#f1f1f6",
        "white": "#ffffff",

        //Yellow progression
        "warning": "#e49325",
        // "yellow": "#fbad26",
        "yellow-light": "#fec157",
        "yellow-pale": "#fff5e4",

        //Red progression
        "red-dark": "#ab1f26",
        "danger": "#da212c",
        "red-light": "#e86363",
        "red-pale": "#fbd4d7",

        //Green progression
        "success": "#006638",
        "green": "#1e8a44",
        "green-light": "#4ea646",
        "green-pale": "#e0eccf",

        "header-blue": "#206aa5",

      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },    
    extend: {},
  },
  plugins: [],
}
