import React from 'react';
import { ReactNode } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  icon?: ReactNode;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  screenSize?: 'mobile' | 'desktop';
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  icon,
  type = 'text',
  rows = 4,
  maxLength,
  showCharCount = false,
  screenSize = 'desktop'
}) => {
  const inputStyle = {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: 'Sora', // Conforme Figma
    fontWeight: '400', // Text sm/md Regular
    fontSize: screenSize === 'mobile' ? '14px' : '16px', // Mobile: 14px (sm), Desktop: 16px (md)
    lineHeight: screenSize === 'mobile' ? '1.4285714285714286em' : '1.5em', // Mobile: sm line-height, Desktop: md
    color: disabled ? '#85888E' : '#CECFD2', // Figma: #CECFD2
    resize: 'none' as const,
    width: '100%'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: type === 'textarea' ? 'flex-start' : 'center', // Figma: center for normal inputs
    gap: screenSize === 'mobile' ? '6px' : '8px', // Mobile: gap menor
    padding: type === 'textarea' 
      ? (screenSize === 'mobile' ? '10px 12px' : '12px 14px') 
      : (screenSize === 'mobile' ? '8px 12px' : '10px 14px'), // Mobile: padding menor (size sm)
    backgroundColor: disabled ? '#22262F' : '#2D2D3B', // Figma: #2D2D3B
    border: `1px solid ${disabled ? '#22262F' : '#373A41'}`, // Figma: #373A41
    borderRadius: '8px', // Conforme Figma
    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)', // Figma: shadow-xs
    transition: 'all 0.2s ease',
    minHeight: type === 'textarea' ? (screenSize === 'mobile' ? '100px' : '120px') : 'auto', // Mobile: altura menor
    width: '100%'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: screenSize === 'mobile' ? '4px' : '6px' // Mobile: gap menor
    }}>
      <div style={containerStyle}>
        {icon && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {icon}
          </div>
        )}
        {type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
            style={{
              ...inputStyle,
              flex: 1,
              minHeight: '100px'
            }}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            style={inputStyle}
          />
        )}
      </div>
      {showCharCount && maxLength && (
        <span style={{
          fontFamily: 'Sora',
          fontWeight: '400',
          fontSize: screenSize === 'mobile' ? '12px' : '14px', // Mobile: 12px, Desktop: 14px
          lineHeight: screenSize === 'mobile' ? '1.5em' : '1.43em', // Mobile: line-height ajustado
          color: '#94979C',
          textAlign: 'right'
        }}>
          {value.length}/{maxLength} caracteres
        </span>
      )}
    </div>
  );
};
