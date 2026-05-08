/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
          400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
          800: '#166534', 900: '#145231',
        },
        earth: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        } ,
      },
      fontFamily: {
        sans:  ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(26px, 4vw, 40px)', { lineHeight: '1.2' }], // fluid section titles
        'body':    ['15px',   { lineHeight: '1.7' }],                  // general body copy
        'fine':    ['13px',   { lineHeight: '1.5' }],                  // emails, small labels
        'nav':     ['13.5px', { lineHeight: '1'   }],                  // nav links
        'brand':   ['17px',   { lineHeight: '1'   }],                  // navbar wordmark
      },
      letterSpacing: {
        'display': '-0.025em', // large fluid headings
        'snug':    '-0.02em',  // section h2, stat numbers
        'title':   '-0.01em',  // subheadings, names, h3
        'brand':   '0.18em',   // navbar eyebrow label
      },
    },
  },
  plugins: [],
};