/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Trust score colors (used in FudFeed)
        trust: {
          high: '#10b981',   // green
          medium: '#f59e0b', // orange
          low: '#f43f5e',    // red
        },

        // Accent colors for status indicators
        accent: {
          success: '#10b981',
          danger: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
        },

        // Base UI colors – replace these with your actual design values
        bg: {
          primary: '#0f0f0f',   // main background
          card: '#1a1a1a',      // card background
          hover: '#2a2a2a',     // hover state
          elevated: '#2e2e2e',  // subtle background for progress bars etc.
          subtle: '#1e1e1e',    // very subtle background
        },
        ink: {
          primary: '#ffffff',    // main text
          secondary: '#a0a0a0',  // secondary text
          muted: '#6b6b6b',      // muted text
        },
        border: {
          DEFAULT: '#2e2e2e',    // default border color
          strong: '#4a4a4a',     // stronger border for hover/active
        },

        // You can keep the existing inline style colors (indigo, rose, emerald) as needed
        indigo: {
          DEFAULT: '#6366f1',
          bright: '#818cf8',
          dim: '#312e81',
        },
        rose: {
          DEFAULT: '#f43f5e',
          bright: '#fb7185',
          dim: '#4c1d3a',
        },
        emerald: {
          DEFAULT: '#10b981',
        },
      },
    },
  },
  plugins: [],
}