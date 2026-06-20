export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F172A',
        surface: 'rgba(15,23,42,0.7)',
        surface2: 'rgba(15,23,42,0.9)',
        accent: '#22C55E',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(15,23,42,0.35)',
      },
      backdropBlur: {
        xs: '3px',
      },
    },
  },
  plugins: [],
}
