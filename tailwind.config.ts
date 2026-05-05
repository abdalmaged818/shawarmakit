import type { Config } from 'tailwindcss'

// إعداد Tailwind CSS لمشروع شاورما كيت
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // الألوان الرئيسية لهوية شاورما كيت
      colors: {
        bg: '#FFFEF1',
        bgWarm: '#FBF5DC',
        primary: '#B04000',
        primaryDark: '#8A3300',
        secondary: '#F09000',
        accent: '#F0D000',
        brownLight: '#C75826',
        ink: '#2A1A0A',
        muted: '#7A5A40',
        line: '#E6D8B8',
      },
      // الخطوط
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        amiri: ['var(--font-amiri)', 'serif'],
      },
      // حركات مخصصة
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      // ظلال مخصصة
      boxShadow: {
        card: '0 2px 8px rgba(42, 26, 10, 0.08)',
        'card-hover': '0 8px 24px rgba(42, 26, 10, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
