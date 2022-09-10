module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to top,rgba(253,253,253,0.3) 0%,rgba(193,218,255,0.3) 100%)",
        'handmade':
          "linear-gradient(360deg,rgba(193,218,255,0.3) 0%,rgba(253,253,253,0.3) 80%)",
        'btn-handmade':
          "linear-gradient(135deg,#82b5ff 0%,#3c89f6 100%)",
        'btn-custom':
          "linear-gradient(to right bottom,#82b5ff 0%,#3c89f6 0%)",
      },
    },
  },
  plugins: [],
}