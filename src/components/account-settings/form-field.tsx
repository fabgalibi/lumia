import React from 'react';
import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  supportingText?: string;
  required?: boolean;
  children: ReactNode;
  width?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  supportingText,
  required = false,
  children,
  width = '300px'
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: width
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: supportingText ? '6px' : '4px'
      }}>
        <label style={{
          fontFamily: 'Sora',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#CECFD2',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          {label}
          {required && (
            <span style={{
              color: '#E66B59',
              fontSize: '12px'
            }}>
              *
            </span>
          )}
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
      {children}
    </div>
  );
};
