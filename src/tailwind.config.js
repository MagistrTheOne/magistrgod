// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#0f0f0f',       // почти чёрный
          secondary: '#1a1a1a',     // для секций
          accent: '#a855f7',        // фиолетовый
          neon: '#d946ef',          // яркий фиолет
        },
      },
    },
    plugins: [],
  }
  