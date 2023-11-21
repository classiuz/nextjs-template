import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['var(--font-tajawal)']
      },
      backgroundColor: {
        'current-shadow': 'color-mix(in srgb, currentColor 10%, transparent)'
      },
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--on-primary) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        'on-background': 'rgb(var(--on-background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'on-surface': 'rgb(var(--on-surface) / <alpha-value>)',
        'surface-varient': 'rgb(var(--surface-varient) / <alpha-value>)',
        outline: 'rgb(var(--outline) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        'on-error': 'rgb(var(--on-error) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        'on-warning': 'rgb(var(--on-warning) / <alpha-value>)',
        done: 'rgb(var(--done) / <alpha-value>)',
        'on-done': 'rgb(var(--on-done) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        'on-info': 'rgb(var(--on-info) / <alpha-value>)'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        marquee: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        text: 'text 5s ease infinite'
      }
    }
  },
  plugins: []
} satisfies Config
