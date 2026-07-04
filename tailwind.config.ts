import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3C5D',
          50: '#E8F0F6',
          100: '#C6D8E6',
          200: '#9FC0D6',
          300: '#6FA3C2',
          400: '#3D86AE',
          500: '#328CC1',
          600: '#1F6F9E',
          700: '#14557B',
          800: '#0B3C5D',
          900: '#072840',
        },
        secondary: {
          DEFAULT: '#328CC1',
          50: '#E8F4FB',
          100: '#C5E2F3',
          200: '#9DCEEB',
          300: '#6FB5E0',
          400: '#4A9FD6',
          500: '#328CC1',
          600: '#27709C',
          700: '#1D5477',
          800: '#143952',
          900: '#0B1E2D',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(11, 60, 93, 0.1), 0 1px 2px 0 rgba(11, 60, 93, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(11, 60, 93, 0.1), 0 4px 6px -2px rgba(11, 60, 93, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
