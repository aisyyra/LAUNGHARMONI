/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        warna: "#E3457B",
        header: "#FFFFFF",
        abu: "#616161",
        undangan: "#FFF2F3",
        pricelist: '#F6F6F6',
        bg: '#FC7B91',
        
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' },
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        Mustard: ["var(--font-Mustard)"],
        Dynalight: ["Dynalight", "cursive"],
        Suranna: ["Suranna", "serif"],
      },
    },
  },
  plugins: [
  
  ],
};
