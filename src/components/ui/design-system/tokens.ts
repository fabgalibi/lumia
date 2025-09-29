/**
 * Design System Tokens
 * Centralizando todos os tokens de design para uso consistente em todo o projeto
 */

// CORES - Baseado no theme.css
export const colors = {
  // Backgrounds
  bg: {
    primary: '#0C0E12',      // --color-bg-primary (dark)
    secondary: '#1A1D23',    // --color-bg-secondary
    tertiary: '#22262F',     // --color-bg-tertiary
    elevated: '#2D2D3B',     // Backgrounds elevados (cards, inputs)
  },
  
  // Textos
  text: {
    primary: '#FFFFFF',      // --color-text-primary (dark mode)
    secondary: '#CECFD2',    // Texto secundário
    tertiary: '#94979C',     // Texto terciário
    disabled: '#85888E',     // Texto desabilitado
    placeholder: '#6B7280',  // Placeholders
  },
  
  // Bordas
  border: {
    primary: '#373A41',      // Bordas principais
    secondary: '#22262F',    // Bordas secundárias
    focus: '#F48E2F',        // Bordas de foco (brand)
    error: '#E66B59',        // Bordas de erro
  },
  
  // Brand
  brand: {
    primary: '#F48E2F',      // Cor principal da marca
    secondary: '#C74228',    // Cor secundária (botões)
    tertiary: '#718D50',     // Verde da logo
  },
  
  // Estados
  error: '#E66B59',
  success: '#10B981',
  warning: '#F59E0B',
  info: '#3B82F6',
} as const;

// TIPOGRAFIA - Baseado no Sora + Inter
export const typography = {
  fontFamily: {
    primary: '"Sora", -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    secondary: '"Inter", -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    mono: 'ui-monospace, "Roboto Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  
  fontSize: {
    xs: '12px',    // --text-xs
    sm: '14px',    // --text-sm  
    md: '16px',    // --text-md
    lg: '18px',    // --text-lg
    xl: '20px',    // --text-xl
    '2xl': '24px', // --text-display-xs
    '3xl': '30px', // --text-display-sm
    '4xl': '36px', // --text-display-md
  },
  
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

// ESPAÇAMENTOS - Sistema baseado em 4px
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

// BREAKPOINTS
export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;

// BORDAS E RAIOS
export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

// SOMBRAS
export const shadows = {
  none: 'none',
  sm: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
  md: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
  lg: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
  xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// TIPOS PARA TYPESCRIPT
export type Color = keyof typeof colors;
export type Spacing = keyof typeof spacing;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type Radius = keyof typeof radius;
export type Shadow = keyof typeof shadows;

// SCREEN SIZES (para responsividade)
export type ScreenSize = 'mobile' | 'tablet' | 'notebook' | 'desktop';

// HELPER FUNCTIONS
export const getResponsiveValue = <T>(
  value: T | { mobile?: T; tablet?: T; notebook?: T; desktop?: T },
  screenSize: ScreenSize
): T => {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const responsiveValue = value as { mobile?: T; tablet?: T; notebook?: T; desktop?: T };
    return responsiveValue[screenSize] ?? responsiveValue.desktop ?? responsiveValue.notebook ?? responsiveValue.tablet ?? responsiveValue.mobile as T;
  }
  return value as T;
};

export const getSpacing = (size: Spacing): string => spacing[size];
export const getColor = (colorPath: string): string => {
  const keys = colorPath.split('.');
  let result: any = colors;
  for (const key of keys) {
    result = result[key];
  }
  return result || colorPath;
};
