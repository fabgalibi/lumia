import React from 'react';
import { ReactNode } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  icon?: ReactNode;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'password' | 'select';
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  screenSize?: 'mobile' | 'desktop';
  error?: boolean;
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
  screenSize = 'desktop',
  error: _error = false
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
    alignItems: type === 'textarea' ? 'flex-start' : 'center',
    gap: screenSize === 'mobile' ? '6px' : '8px',
    padding: type === 'textarea' 
      ? (screenSize === 'mobile' ? '12px 14px' : '12px 14px') 
      : (screenSize === 'mobile' ? '8px 12px' : '10px 14px'),
    backgroundColor: disabled ? '#22262F' : '#2D2D3B',
    border: `1px solid ${disabled ? '#22262F' : '#373A41'}`,
    borderRadius: '8px',
    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
    transition: 'all 0.2s ease',
    height: type === 'textarea' && screenSize === 'mobile' ? '200px' : 'auto',
    minHeight: type === 'textarea' && screenSize !== 'mobile' ? '120px' : 'auto',
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
              height: '100%',
              minHeight: screenSize === 'mobile' ? 'unset' : '100px',
              resize: 'none'
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
          fontSize: '12px', // Figma: Text xs Regular (12px)
          lineHeight: '1.5em', // Figma: 1.5em
          color: '#94979C', // Figma: cor exata
          textAlign: 'right',
          alignSelf: 'flex-end'
        }}>
          {value.length}/{maxLength} caracteres
        </span>
      )}
    </div>
  );
};

