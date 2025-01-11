module.exports = {
  content: [
    './index.html', // Adjust this to your project's file paths
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust this to your project's file paths
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              color: '#111',
              fontWeight: '700',
            },
            h2: {
              color: '#222',
              fontWeight: '600',
            },
            p: {
              color: '#555',
            },
            a: {
              color: '#1d4ed8',
              textDecoration: 'underline',
            },
          },
        },
      },
  
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Ensure you install this plugin
  ],
};
