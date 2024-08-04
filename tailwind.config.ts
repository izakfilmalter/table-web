import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    transitionDelay: {
      ...defaultTheme.transitionDelay,
      0: '0ms',
    },
    keyframes: {
      ...defaultTheme.keyframes,
      'fade-in': {
        from: { opacity: '0', transform: 'translateY(-10px)' },
        to: { opacity: '1', transform: 'none' },
      },
      'image-rotate': {
        '0%': { transform: 'rotateX(25deg)' },
        '25%': { transform: 'rotateX(25deg) scale(0.9)' },
        '60%': { transform: 'none' },
        '100%': { transform: 'none' },
      },
      'image-glow': {
        '0%': {
          opacity: '0',
          'animation-timing-function': 'cubic-bezier(0.74,0.25,0.76,1)',
        },
        '10%': {
          opacity: '1',
          'animation-timing-function': 'cubic-bezier(0.12,0.01,0.08,0.99)',
        },
        '100%': {
          opacity: '0.2',
        },
      },
      'sketch-lines': {
        '0%': { 'stroke-dashoffset': '1' },
        '50%': { 'stroke-dashoffset': '0' },
        '99%': { 'stroke-dashoffset': '0' },
        '100%': { visiblity: 'hidden' },
      },
      'glow-line-horizontal': {
        '0%': { opacity: '0', transform: 'translateX(0)' },
        '5%': { opacity: '1', transform: 'translateX(0)' },
        '90%': { opacity: '1' },
        '100%': { opacity: '0', transform: 'translateX(min(60vw, 45rem))' },
      },
      'glow-line-vertical': {
        '0%': { opacity: '0', transform: 'translateY(0)' },
        '5%': { opacity: '1', transform: 'translateY(0)' },
        '90%': { opacity: '1' },
        '100%': { opacity: '0', transform: 'translateY(min(21vw, 45rem))' },
      },
      zap: {
        '0%, 9%, 11%, 100% ': {
          fill: 'transparent',
        },
        '10%': {
          fill: 'white',
        },
      },
      bounce: {
        '50%': {
          transform: 'scale(0.98)',
        },
      },
    },
    animation: {
      ...defaultTheme.animation,
      'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
      'image-rotate': 'image-rotate 1400ms ease forwards',
      'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
      'sketch-lines': 'sketch-lines 1200ms ease-out forwards',
      'glow-line-horizontal':
        'glow-line-horizontal var(--animation-duration) ease-in forwards',
      'glow-line-vertical':
        'glow-line-vertical var(--animation-duration) ease-in forwards',
      zap: 'zap 2250ms calc(var(--index) * 20ms) linear infinite',
      bounce: '240ms ease 0s 1 running bounce',
    },
    extend: {
      spacing: {
        'navigation-height': 'var(--navigation-height)',
      },
      flex: {
        '2': '2 2 0%',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse 2s cubic-bezier(.4,0,.6,1) infinite',
        hide: 'hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        // Accordion
        accordionOpen: 'accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)',
        accordionClose: 'accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)',
        // Dialog
        dialogOverlayShow:
          'dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        dialogContentShow:
          'dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [animate],
} satisfies Config

export default config
