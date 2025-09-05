import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  iconLeading?: React.ComponentType<{ className?: string }>;
  iconTrailing?: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    iconLeading: IconLeading, 
    iconTrailing: IconTrailing, 
    className, 
    children, 
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variantClasses = {
      primary: "bg-orange-600 text-white hover:bg-orange-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      tertiary: "bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white",
      ghost: "bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white"
    };
    
    const sizeClasses = {
      xs: "h-6 px-2 text-xs",
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {IconLeading && <IconLeading className="w-4 h-4 mr-2" />}
        {children}
        {IconTrailing && <IconTrailing className="w-4 h-4 ml-2" />}
      </button>
    );
  }
);

Button.displayName = "Button";
