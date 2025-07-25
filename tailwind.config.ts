
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '375px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				headline: ['Reckless', 'serif'],
			},
			fontWeight: {
				'headline': '500',
			},
			letterSpacing: {
				'headline': '0',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				'background-secondary': 'hsl(var(--background-secondary))',
				foreground: 'hsl(var(--foreground))',
				
				// Editorial color palette
				'electric-blue': 'hsl(var(--electric-blue))',
				'coral': 'hsl(var(--coral))',
				'warm-gray': 'hsl(var(--warm-gray))',
				'cool-gray': 'hsl(var(--cool-gray))',
				'charcoal': 'hsl(var(--charcoal))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'brand-blue': '#409EFF',
				'brand-red-bg': 'hsl(var(--brand-red-bg))',
				'brand-yellow-bg': 'hsl(var(--brand-yellow-bg))',
				'brand-blue-bg': 'hsl(var(--brand-blue-bg))',
				'brand-red': 'hsl(var(--brand-red))',
				'brand-yellow': 'hsl(var(--brand-yellow))',
				'brand-blue-accent': 'hsl(var(--brand-blue))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-purple-blue': 'var(--gradient-purple-blue)',
				'gradient-orange-red': 'var(--gradient-orange-red)',
				'gradient-teal-green': 'var(--gradient-teal-green)',
				'gradient-sunset': 'var(--gradient-sunset)',
				'gradient-ocean': 'var(--gradient-ocean)',
				'gradient-lavender': 'var(--gradient-lavender)',
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-mint': 'var(--gradient-mint)',
				'gradient-berry': 'var(--gradient-berry)',
				'gradient-flame': 'var(--gradient-flame)',
				'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
