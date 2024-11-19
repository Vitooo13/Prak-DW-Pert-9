module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class', // Menambahkan opsi dark mode
  theme: {
    extend: {
      colors: {
        primary: '#CDC1FF', // Warna biru khusus
        secondary: '#9694FF', // Warna kuning khusus
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
}