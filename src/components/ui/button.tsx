
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-white",
        destructive: "text-white",
        outline: "border text-gray-800 hover:text-gray-900",
        secondary: "text-gray-800",
        ghost: "hover:text-gray-800",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Safari-compatible explicit styles
    const getVariantStyles = () => {
      switch (variant) {
        case 'default':
          return {
            backgroundColor: '#1e293b',
            color: '#ffffff',
            ...style
          };
        case 'destructive':
          return {
            backgroundColor: '#ef4444',
            color: '#ffffff',
            ...style
          };
        case 'outline':
          return {
            backgroundColor: '#ffffff',
            borderColor: '#cbd5e1',
            borderWidth: '1px',
            color: '#1e293b',
            ...style
          };
        case 'secondary':
          return {
            backgroundColor: '#f1f5f9',
            color: '#1e293b',
            ...style
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: '#1e293b',
            ...style
          };
        case 'link':
          return {
            backgroundColor: 'transparent',
            color: '#2563eb',
            ...style
          };
        default:
          return style;
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={getVariantStyles()}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
