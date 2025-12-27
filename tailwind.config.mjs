/**
 * Tailwind CSS Configuration
 * Custom design tokens and theme extensions
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /* Custom color palette with opacity-based tokens */
      colors: {
        bg: '#0B0D10',
        panel: 'rgba(255, 255, 255, 0.03)',
        border: 'rgba(255, 255, 255, 0.08)',
        text: 'rgba(255, 255, 255, 0.90)',
        muted: 'rgba(255, 255, 255, 0.60)',
        faint: 'rgba(255, 255, 255, 0.42)',
        accent: 'rgba(255, 255, 255, 0.12)',
      },
      
      /* Consistent spacing scale */
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        24: '24px',
        32: '32px',
        48: '48px',
      },
      
      /* Content width constraints */
      maxWidth: {
        reading: '700px', // Optimal reading width
        home: '840px',    // Homepage content width
      },
      
      /* Typography */
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      letterSpacing: {
        tight: '-0.02em',
      },
      
      lineHeight: {
        body: '1.65',
      },
    },
  },
  plugins: [],
}
