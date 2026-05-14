import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black:           '#0a0a0a',
        surface:         '#111111',
        'surface-2':     '#1a1a1a',
        border:          '#242424',
        'border-hi':     '#333333',
        t1:              '#f0ede6',
        t2:              '#9a9590',
        t3:              '#5a5652',
        accent:          '#d4a853',
        'accent-muted':  'rgba(212,168,83,0.1)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'xs':  ['13px', { lineHeight: '1.5' }],
        'sm':  ['15px', { lineHeight: '1.6' }],
        'base':['17px', { lineHeight: '1.6' }],
        'lg':  ['21px', { lineHeight: '1.5' }],
        'xl':  ['26px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '2xl': ['34px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '3xl': ['44px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '4xl': ['58px', { lineHeight: '0.96', letterSpacing: '-0.03em' }],
        '5xl': ['76px', { lineHeight: '0.94', letterSpacing: '-0.04em' }],
        '6xl': ['100px',{ lineHeight: '0.92', letterSpacing: '-0.04em' }],
        '7xl': ['132px',{ lineHeight: '0.90', letterSpacing: '-0.05em' }],
        '8xl': ['180px',{ lineHeight: '0.88', letterSpacing: '-0.05em' }],
      },
    },
  },
  plugins: [],
} satisfies Config
