import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'icon';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon';
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
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variantClasses = {
      primary: "bg-[#C74228] text-white hover:bg-[#B03A20] hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-[#E55A3A] relative overflow-hidden group",
      secondary: "bg-white text-gray-900 hover:bg-gray-50 hover:shadow-md transition-all duration-200",
      tertiary: "bg-transparent text-[#F5F5F5] hover:bg-[#333346] hover:text-white transition-all duration-200",
      ghost: "bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200",
      icon: "bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white border-none transition-all duration-200"
    };
    
    const sizeClasses = {
      xs: "h-6 px-2 text-xs",
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-11 w-11 p-2"
    };

    const getButtonStyle = () => {
      if (variant === 'primary') {
        return {
          background: '#C74228',
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
          borderRadius: '8px'
        };
      }
      return {};
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
        style={getButtonStyle()}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.background = '#B03A20';
            e.currentTarget.style.borderImage = 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%) 1';
            e.currentTarget.style.boxShadow = '0px 1px 2px 0px rgba(255, 255, 255, 0.1), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.1), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.25)';
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.background = '#C74228';
            e.currentTarget.style.borderImage = 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1';
            e.currentTarget.style.boxShadow = '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)';
          }
        }}
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
