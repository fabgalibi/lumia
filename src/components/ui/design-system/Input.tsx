import React, { useState } from 'react';
import { colors, spacing, radius, shadows, typography, type ScreenSize } from './tokens';
import { Text } from './Text';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'textarea';
  placeholder?: string;
  label?: string;
  supportingText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  screenSize?: ScreenSize;
  className?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  label,
  supportingText,
  error,
  required = false,
  disabled = false,
  icon,
  rows = 4,
  maxLength,
  showCharCount = false,
  screenSize = 'desktop',
  className = '',
  style = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';
  const inputType = isPasswordField ? (showPassword ? 'text' : 'password') : type;
  const hasError = !!error;
  
  const inputStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: screenSize === 'mobile' ? typography.fontSize.sm : typography.fontSize.md,
    lineHeight: typography.lineHeight.normal,
    color: disabled ? colors.text.disabled : colors.text.primary,
    resize: 'none',
    width: '100%',
    zIndex: 1,
    position: 'relative',
    pointerEvents: 'auto',
    padding: '0',
  };


  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: type === 'textarea' ? 'flex-start' : 'center',
    padding: type === 'textarea' 
      ? (screenSize === 'mobile' ? '12px' : '16px')
      : '8px 16px',
    backgroundColor: disabled ? colors.bg.secondary : colors.bg.elevated,
    border: `1px solid ${hasError ? colors.border.error : (disabled ? colors.bg.secondary : colors.border.primary)}`,
    borderRadius: radius.md,
    boxShadow: shadows.sm,
    transition: 'all 0.2s ease',
    minHeight: type === 'textarea' ? (screenSize === 'mobile' ? '140px' : '120px') : '44px',
    height: type === 'textarea' ? 'auto' : '44px',
    width: type === 'textarea' ? '100%' : (style?.width || '512px'),
    minWidth: type === 'textarea' ? 'auto' : (style?.minWidth || '400px'),
    maxWidth: type === 'textarea' ? '100%' : (style?.maxWidth || '512px'),
    boxSizing: 'border-box',
  };

  return (
    <div 
      className={className} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        ...style
      }}
    >
      {/* Label */}
      {label && (
        <Text
          variant="label"
          color={colors.text.secondary}
          screenSize={screenSize}
          style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}
        >
          {label}
          {required && (
            <Text color={colors.error} size="xs">*</Text>
          )}
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
      
      {/* Input Container */}
      <div 
        style={containerStyle}
        onFocus={(e) => {
          if (!disabled && !hasError) {
            e.currentTarget.style.borderColor = colors.border.focus;
          }
        }}
        onBlur={(e) => {
          if (!disabled && !hasError) {
            e.currentTarget.style.borderColor = colors.border.primary;
          }
        }}
      >
        {/* Icon */}
        {icon && (
          <div
            style={{ 
              flexShrink: 0,
              margin: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {icon}
          </div>
        )}
        
        {/* Input/Textarea */}
        {type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
            className="design-system-input"
            style={{
              ...inputStyle,
              height: '100%',
              minHeight: screenSize === 'mobile' ? '100px' : '80px',
              maxHeight: '300px',
              overflowY: 'auto',
              padding: '0',
              lineHeight: '1.5',
              resize: 'vertical',
            }}
          />
        ) : (
          <input
            type={inputType}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            className="design-system-input"
            style={{
              ...inputStyle,
              paddingRight: isPasswordField && value ? '40px' : '0',
            }}
          />
        )}
        
        {/* Password Toggle */}
        {isPasswordField && value && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: spacing[3],
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: colors.text.tertiary,
              padding: spacing[1],
            }}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
      
      {/* Character Count */}
      {showCharCount && maxLength && (
        <Text
          variant="caption"
          color={colors.text.tertiary}
          align="right"
          screenSize={screenSize}
        >
          {value.length}/{maxLength}
        </Text>
      )}
      
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
    </div>
  );
};
