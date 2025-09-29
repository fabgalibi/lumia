import React from 'react';
import { colors, spacing, radius, shadows, typography, type ScreenSize } from './tokens';
import { Text } from './Text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  screenSize?: ScreenSize;
  children?: React.ReactNode;
}

const variantStyles = {
  primary: {
    background: colors.brand.secondary,
    color: colors.text.primary,
    border: `1px solid ${colors.brand.secondary}`,
    hover: {
      background: '#B03A20',
      border: `1px solid #B03A20`,
    }
  },
  secondary: {
    background: colors.bg.elevated,
    color: colors.text.primary,
    border: `1px solid ${colors.border.primary}`,
    hover: {
      background: colors.border.primary,
      border: `1px solid ${colors.border.primary}`,
    }
  },
  tertiary: {
    background: 'transparent',
    color: colors.text.secondary,
    border: '1px solid transparent',
    hover: {
      background: colors.bg.tertiary,
      color: colors.text.primary,
    }
  },
  ghost: {
    background: 'transparent',
    color: colors.text.tertiary,
    border: '1px solid transparent',
    hover: {
      background: colors.bg.secondary,
      color: colors.text.primary,
    }
  },
  danger: {
    background: colors.error,
    color: colors.text.primary,
    border: `1px solid ${colors.error}`,
    hover: {
      background: '#DC2626',
      border: '1px solid #DC2626',
    }
  },
};

const sizeStyles = {
  xs: {
    height: '24px',
    padding: `0 ${spacing[2]}`,
    fontSize: typography.fontSize.xs,
  },
  sm: {
    height: '32px',
    padding: `0 ${spacing[3]}`,
    fontSize: typography.fontSize.sm,
  },
  md: {
    height: '40px',
    padding: `0 ${spacing[4]}`,
    fontSize: typography.fontSize.sm,
  },
  lg: {
    height: '48px',
    padding: `0 ${spacing[6]}`,
    fontSize: typography.fontSize.md,
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconLeading,
  iconTrailing,
  loading = false,
  fullWidth = false,
  screenSize = 'desktop',
  disabled,
  className = '',
  style = {},
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    borderRadius: radius.md,
    boxShadow: shadows.sm,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled || loading ? 0.6 : 1,
    ...sizeStyle,
    ...variantStyle,
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      Object.assign(e.currentTarget.style, variantStyle.hover);
    }
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.background = variantStyle.background;
      e.currentTarget.style.border = variantStyle.border;
      e.currentTarget.style.color = variantStyle.color;
    }
    onMouseLeave?.(e);
  };

  return (
    <button
      className={className}
      style={baseStyle}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {loading ? (
        <>
          <div
            style={{
              width: '16px',
              height: '16px',
              border: `2px solid ${colors.text.tertiary}`,
              borderTop: `2px solid ${variantStyle.color}`,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          {children && (
            <Text
              color={variantStyle.color}
              size={sizeStyle.fontSize as any}
              weight="medium"
              screenSize={screenSize}
            >
              {children}
            </Text>
          )}
        </>
      ) : (
        <>
          {iconLeading && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {iconLeading}
            </span>
          )}
          
          {children && (
            <Text
              color={variantStyle.color}
              size={sizeStyle.fontSize as any}
              weight="medium"
              screenSize={screenSize}
            >
              {children}
            </Text>
          )}
          
          {iconTrailing && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {iconTrailing}
            </span>
          )}
        </>
      )}
    </button>
  );
};

// CSS para animação de loading (pode ser adicionado ao CSS global)
const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Injetar CSS se não existir
if (typeof document !== 'undefined' && !document.getElementById('button-animations')) {
  const style = document.createElement('style');
  style.id = 'button-animations';
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}
