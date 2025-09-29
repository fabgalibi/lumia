import React from 'react';
import { typography, colors, type ScreenSize, type FontSize, type FontWeight, getResponsiveValue } from './tokens';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'label';
  size?: FontSize | { mobile?: FontSize; tablet?: FontSize; notebook?: FontSize; desktop?: FontSize };
  weight?: FontWeight;
  color?: string;
  align?: 'left' | 'center' | 'right';
  screenSize?: ScreenSize;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

const variantStyles = {
  h1: { size: '4xl' as FontSize, weight: 'bold' as FontWeight },
  h2: { size: '3xl' as FontSize, weight: 'bold' as FontWeight },
  h3: { size: '2xl' as FontSize, weight: 'semibold' as FontWeight },
  h4: { size: 'xl' as FontSize, weight: 'semibold' as FontWeight },
  body: { size: 'md' as FontSize, weight: 'regular' as FontWeight },
  caption: { size: 'sm' as FontSize, weight: 'regular' as FontWeight },
  label: { size: 'sm' as FontSize, weight: 'medium' as FontWeight },
};

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  size,
  weight,
  color = colors.text.primary,
  align = 'left',
  screenSize = 'desktop',
  className = '',
  style = {},
  as = 'span',
}) => {
  const variantStyle = variantStyles[variant];
  const finalSize = size || variantStyle.size;
  const finalWeight = weight || variantStyle.weight;
  
  const responsiveSize = getResponsiveValue(finalSize, screenSize);
  
  const Component = as;
  
  return (
    <Component
      className={className}
      style={{
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize[responsiveSize],
        fontWeight: typography.fontWeight[finalWeight],
        color,
        textAlign: align,
        margin: 0,
        padding: 0,
        lineHeight: typography.lineHeight.normal,
        ...style,
      }}
    >
      {children}
    </Component>
  );
};
