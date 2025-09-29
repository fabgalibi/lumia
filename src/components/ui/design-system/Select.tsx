import React from 'react';
import { colors, spacing, radius, shadows, typography, type ScreenSize } from './tokens';
import { Container } from './Container';
import { Text } from './Text';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  supportingText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  screenSize?: ScreenSize;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Select - Componente de seleção padronizado
 * 
 * Usado para campos de seleção com opções pré-definidas.
 * Inclui label, texto de apoio, validação e responsividade.
 */
export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  label,
  supportingText,
  error,
  required = false,
  disabled = false,
  icon,
  screenSize = 'desktop',
  className = '',
  style = {},
}) => {
  const hasError = !!error;
  
  const selectStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: screenSize === 'mobile' ? typography.fontSize.sm : typography.fontSize.md,
    lineHeight: typography.lineHeight.normal,
    color: disabled ? colors.text.disabled : colors.text.primary,
    appearance: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    paddingRight: icon ? '0' : '32px', // Espaço para seta dropdown
    ...style,
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[2],
    padding: screenSize === 'mobile' ? `${spacing[2]} ${spacing[3]}` : `${spacing[3]} ${spacing[4]}`,
    backgroundColor: disabled ? colors.bg.secondary : colors.bg.elevated,
    border: `1px solid ${hasError ? colors.border.error : (disabled ? colors.bg.secondary : colors.border.primary)}`,
    borderRadius: radius.md,
    boxShadow: shadows.sm,
    transition: 'all 0.2s ease',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
  };

  return (
    <Container gap={2} screenSize={screenSize}>
      {/* Label */}
      {label && (
        <Text
          variant="label"
          color={colors.text.secondary}
          screenSize={screenSize}
        >
          {label}
          {required && <span style={{ color: colors.error }}> *</span>}
        </Text>
      )}
      
      {/* Supporting Text */}
      {supportingText && (
        <Text
          variant="caption"
          color={colors.text.tertiary}
          screenSize={screenSize}
        >
          {supportingText}
        </Text>
      )}
      
      {/* Select Container */}
      <div
        className={className}
        style={containerStyle}
        onMouseEnter={(e) => {
          if (!disabled && !hasError) {
            (e.currentTarget as HTMLElement).style.borderColor = colors.border.focus;
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !hasError) {
            (e.currentTarget as HTMLElement).style.borderColor = colors.border.primary;
          }
        }}
      >
        {/* Leading Icon */}
        {icon && (
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {icon}
          </div>
        )}
        
        {/* Select Element */}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          style={selectStyle}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Dropdown Arrow */}
        {!icon && (
          <div style={{
            position: 'absolute',
            right: spacing[3],
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
          }}>
            {screenSize === 'mobile' || screenSize === 'tablet' ? (
              // Edit icon para mobile/tablet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.333 6L8 9.333 4.667 6" stroke={colors.text.disabled} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              // Dropdown arrow para desktop
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke={colors.text.disabled} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        )}
      </div>
      
      {/* Error Message */}
      {error && (
        <Text
          variant="caption"
          color={colors.error}
          screenSize={screenSize}
        >
          {error}
        </Text>
      )}
    </Container>
  );
};
