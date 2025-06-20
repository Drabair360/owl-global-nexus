
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
		extend: {
			fontFamily: {
				'heading': ['Playfair Display', 'Oswald', 'serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
				'condensed': ['Oswald', 'Inter', 'sans-serif'],
			},
			fontSize: {
				'display': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
				'hero': ['clamp(2rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'section': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '0.05em' }],
				'body-large': ['clamp(1.125rem, 2.5vw, 1.5rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				'institutional': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				institutional: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617'
				},
				amber: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
					950: '#451a03'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'sophisticated-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.98)',
						filter: 'blur(4px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'institutional-rise': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px) rotateX(10deg)'
					},
					'60%': {
						opacity: '0.8',
						transform: 'translateY(-5px) rotateX(0deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				},
				'elegant-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9) rotateY(10deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotateY(0deg)'
					}
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-10px) rotate(180deg)'
					}
				},
				'geometric-pulse': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.05)'
					}
				},
				'scroll-ticker': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'sophisticated-fade': 'sophisticated-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'institutional-rise': 'institutional-rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'elegant-scale': 'elegant-scale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'particle-float': 'particle-float 6s ease-in-out infinite',
				'geometric-pulse': 'geometric-pulse 4s ease-in-out infinite',
				'scroll-ticker': 'scroll-ticker 60s linear infinite'
			},
			backdropBlur: {
				'xs': '2px',
			},
			boxShadow: {
				'institutional': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'elegant': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
				'sophisticated': '0 32px 64px -12px rgba(0, 0, 0, 0.35)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
