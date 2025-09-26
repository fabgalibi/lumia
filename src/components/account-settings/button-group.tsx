import React from 'react';

interface ButtonGroupProps {
  options: { value?: string; id?: string; label: string }[];
  value?: string;
  selectedValue?: string;
  onChange: (value: string) => void;
  width?: string;
  fullWidth?: boolean;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  value,
  selectedValue,
  onChange,
  width = '137px',
  fullWidth = false,
  screenSize = 'desktop'
}) => {
  const currentValue = selectedValue || value || '';
  return (
    <div style={{
      display: 'flex',
      width: fullWidth ? '100%' : width,
      border: '1px solid transparent',
      borderRadius: '8px',
      backgroundImage: 'linear-gradient(#2F2F4D, #2F2F4D), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
      overflow: 'hidden'
    }}>
      {options.map((option, index) => {
        const optionValue = option.value || option.id || '';
        return (
          <button
            key={optionValue}
            onClick={() => onChange(optionValue)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: currentValue === optionValue ? '#2D2D45' : '#2F2F4D',
              border: 'none',
              borderRight: index < options.length - 1 ? '1px solid #373A41' : 'none',
              cursor: 'pointer',
              flex: 1,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (currentValue !== optionValue) {
                e.currentTarget.style.backgroundColor = '#3A3A5A';
              }
            }}
            onMouseLeave={(e) => {
              if (currentValue !== optionValue) {
                e.currentTarget.style.backgroundColor = '#2F2F4D';
              }
            }}
          >
            <span style={{
              fontFamily: 'Sora',
              fontWeight: currentValue === optionValue ? '600' : '400',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: currentValue === optionValue ? '#F48E2F' : '#CECFD2',
              transition: 'all 0.2s ease'
            }}>
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

