// tailwind.config.js
module.exports = {
    content: [
      './test.html',
      './src/**/*.{js,jsx,ts,tsx}',  // Add your file paths here
    ],
    theme: {
      extend: {
        colors: {
          'custom-gray': '#313131',  // Custom color name and hex value
        },
      },
    },
    plugins: [],
  }

