module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A94A4A", // Kırmızı
        secondary: "#F4D793", // Sarı
        accent: "#FFF6DA", // Krem
        muted: "#889E73", // Yeşil
        background: "#FFF6DA", // Arka plan
        textPrimary: "#1A1A1A", // Yazı için koyu gri
        textSecondary: "#5A5A5A", // İkincil yazı rengi
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        custom: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

