import React from 'react';
import { Check } from '@untitledui/icons';

interface CheckboxFieldProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  supportingText?: string;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  checked,
  onChange,
  label,
  supportingText,
  screenSize = 'desktop'
}) => {
  return (
    <div style={{
      display: 'flex',
      gap: '32px',
      flexWrap: 'wrap'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: '300px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <label style={{
            fontFamily: 'Sora',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#CECFD2'
          }}>
            {label}
          </label>
          {supportingText && (
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#CECFD2'
            }}>
              {supportingText}
            </span>
          )}
        </div>
        <div style={{
          display: 'flex',
          gap: '12px',
          width: '512px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '2px 0px 0px'
          }}>
            <button
              onClick={() => onChange(!checked)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                backgroundColor: checked ? '#F66649' : '#2D2D3B',
                border: checked ? 'none' : '1px solid #373A41',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = checked ? '#E55A3F' : '#3A3A4A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = checked ? '#F66649' : '#2D2D3B';
              }}
            >
              {checked && (
                <Check 
                  width="14" 
                  height="14" 
                  stroke="#FFFFFF" 
                  strokeWidth="2"
                />
              )}
            </button>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            flex: 1
          }}>
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#CECFD2'
            }}>
              Concordo com os Termos de Uso da plataforma.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

