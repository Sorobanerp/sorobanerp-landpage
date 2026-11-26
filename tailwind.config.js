/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        pulse: {
          canvas: "#F7F9F5",
          surface: "#FFFFFF",
          border: "#E6ECE2",
          primary: "#8CBA51",
          primaryDark: "#6E9839",
          lime: "#DEFF8B",
          ink: "#141D14",
          inkMuted: "#4D5E4D",
          peach: "#FBCEB5",
          peachInk: "#3D1E10",
          coral: "#FF5D6C",
        },
        primary: "#8CBA51",
        dark: "#141D14",
        black: "#141D14",
        "body-color": "#4D5E4D",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        pulse: "24px",
      },
      boxShadow: {
        pulse: "0 16px 40px -12px rgba(20, 29, 20, 0.07)",
        pulseHover: "0 24px 48px -12px rgba(140, 186, 81, 0.18)",
        pulseDark: "0 24px 56px -12px rgba(10, 15, 10, 0.45)",
      },
    },
  },
  plugins: [],
};
