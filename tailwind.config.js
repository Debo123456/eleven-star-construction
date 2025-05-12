/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			brand: {
  				green: '#00A651',
  				'green-light': '#00C561',
  				'green-dark': '#008542',
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'pulse-subtle': {
  				'0%, 100%': { opacity: '0.5' },
  				'50%': { opacity: '0.3' }
  			},
  			'glow-subtle': {
  				'0%, 100%': { 
  					opacity: '0.8',
  					transform: 'scale(1)'
  				},
  				'50%': { 
  					opacity: '0.4',
  					transform: 'scale(1.05)'
  				}
  			},
  			'blueprint-pan': {
  				'0%, 100%': { backgroundPosition: '0% 0%' },
  				'50%': { backgroundPosition: '100% 100%' }
  			},
  			'gradient-shift': {
  				'0%, 100%': { opacity: '0.3' },
  				'50%': { opacity: '0.1' }
  			},
  			'swing': {
  				'0%': { transform: 'rotate(-18deg)' },
  				'20%': { transform: 'rotate(12deg)' },
  				'40%': { transform: 'rotate(-8deg)' },
  				'60%': { transform: 'rotate(6deg)' },
  				'80%': { transform: 'rotate(-4deg)' },
  				'100%': { transform: 'rotate(0deg)' },
  			},
  			'bob': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-16px)' },
  			},
  			'barrow-rock': {
  				'0%, 100%': { transform: 'rotate(-8deg)' },
  				'50%': { transform: 'rotate(8deg)' },
  			},
  			'vest-pulse': {
  				'0%, 100%': { opacity: '1', transform: 'scale(1)' },
  				'50%': { opacity: '0.7', transform: 'scale(1.08)' },
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'glow-subtle': 'glow-subtle 3s ease-in-out infinite',
  			'blueprint-pan': 'blueprint-pan 30s linear infinite',
  			'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
  			'spin-slow': 'spin 1.2s linear infinite',
  			'swing': 'swing 1.4s cubic-bezier(.36,.07,.19,.97) infinite alternate',
  			'bob': 'bob 1.2s ease-in-out infinite',
  			'barrow-rock': 'barrow-rock 1.1s ease-in-out infinite',
  			'vest-pulse': 'vest-pulse 1.2s ease-in-out infinite',
  		},
  		backgroundImage: {
  			'blueprint': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066CC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

