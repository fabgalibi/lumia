import React from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeading?: React.ComponentType<{ className?: string }>;
  iconTrailing?: React.ComponentType<{ className?: string }>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ iconLeading: IconLeading, iconTrailing: IconTrailing, className, ...props }, ref) => {
    return (
      <div className="relative">
        {IconLeading && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <IconLeading className="w-4 h-4 text-gray-400" />
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
            IconLeading && "pl-10",
            IconTrailing && "pr-10",
            className
          )}
          {...props}
        />
        {IconTrailing && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <IconTrailing className="w-4 h-4 text-gray-400" />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
