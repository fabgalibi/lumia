import React from 'react';

interface ButtonGroupProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  width?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  value,
  onChange,
  width = '137px'
}) => {
  return (
    <div style={{
      display: 'flex',
      width: width,
      border: '1px solid transparent',
      borderRadius: '8px',
      backgroundImage: 'linear-gradient(#1A1A2E, #1A1A2E), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
      overflow: 'hidden'
    }}>
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: value === option.value ? '#2D2D45' : '#2F2F4D',
            border: 'none',
            borderRight: index < options.length - 1 ? '1px solid #373A41' : 'none',
            cursor: 'pointer',
            flex: 1,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            if (value !== option.value) {
              e.currentTarget.style.backgroundColor = '#3A3A5A';
            }
          }}
          onMouseLeave={(e) => {
            if (value !== option.value) {
              e.currentTarget.style.backgroundColor = '#2F2F4D';
            }
          }}
        >
          <span style={{
            fontFamily: 'Sora',
            fontWeight: value === option.value ? '600' : '400', // 600 = Semibold, 400 = Medium/Regular
            fontSize: '14px',
            lineHeight: '1.4285714285714286em', // Exato do Figma
            color: value === option.value ? '#F48E2F' : '#CECFD2',
            transition: 'all 0.2s ease'
          }}>
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
};
