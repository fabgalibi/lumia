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
  showCharCount = false
}) => {
  const inputStyle = {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: 'Sora', // Conforme Figma
    fontWeight: '400', // Text md Regular
    fontSize: '16px', // Conforme Figma
    lineHeight: '1.5em', // Conforme Figma
    color: disabled ? '#85888E' : '#CECFD2', // Figma: #CECFD2
    resize: 'none' as const,
    width: '100%'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: type === 'textarea' ? 'flex-start' : 'center', // Figma: center for normal inputs
    gap: '8px', // Conforme Figma
    padding: type === 'textarea' ? '12px 14px' : '10px 14px', // Figma: 10px 14px
    backgroundColor: disabled ? '#22262F' : '#2D2D3B', // Figma: #2D2D3B
    border: `1px solid ${disabled ? '#22262F' : '#373A41'}`, // Figma: #373A41
    borderRadius: '8px', // Conforme Figma
    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)', // Figma: shadow-xs
    transition: 'all 0.2s ease',
    minHeight: type === 'textarea' ? '120px' : 'auto',
    width: '100%'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
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
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#94979C',
          textAlign: 'right'
        }}>
          {value.length}/{maxLength} caracteres
        </span>
      )}
    </div>
  );
};
