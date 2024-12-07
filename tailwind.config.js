/** @type {import('tailwindcss').Config} */
import { themeConfig } from '@/config'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Tailwind가 스타일을 적용할 파일 경로
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}

