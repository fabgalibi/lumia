import React from 'react';
import { spacing, radius, shadows, type ScreenSize, type Spacing, type Radius, type Shadow, getResponsiveValue } from './tokens';

interface ContainerProps {
  children: React.ReactNode;
  padding?: Spacing | { mobile?: Spacing; tablet?: Spacing; notebook?: Spacing; desktop?: Spacing };
  margin?: Spacing | { mobile?: Spacing; tablet?: Spacing; notebook?: Spacing; desktop?: Spacing };
  gap?: Spacing | { mobile?: Spacing; tablet?: Spacing; notebook?: Spacing; desktop?: Spacing };
  background?: string;
  border?: string;
  borderRadius?: Radius;
  shadow?: Shadow;
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: boolean;
  flex?: number | string;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  screenSize?: ScreenSize;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  padding,
  margin,
  gap,
  background,
  border,
  borderRadius = 'md',
  shadow,
  direction = 'column',
  align = 'stretch',
  justify = 'flex-start',
  wrap = false,
  flex,
  width = '100%',
  maxWidth,
  height,
  minHeight,
  screenSize = 'desktop',
  className = '',
  style = {},
  as = 'div',
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const Component = as;
  
  const getResponsiveSpacing = (value?: Spacing | { mobile?: Spacing; tablet?: Spacing; desktop?: Spacing }) => {
    if (!value) return undefined;
    const responsiveValue = getResponsiveValue(value, screenSize);
    return spacing[responsiveValue];
  };

  return (
    <Component
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: getResponsiveSpacing(gap),
        padding: getResponsiveSpacing(padding),
        margin: getResponsiveSpacing(margin),
        backgroundColor: background,
        border: border,
        borderRadius: radius[borderRadius],
        boxShadow: shadow ? shadows[shadow] : undefined,
        flex: flex,
        width: typeof width === 'number' ? `${width}px` : width,
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </Component>
  );
};
