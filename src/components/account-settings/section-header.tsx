import React from 'react';

interface SectionHeaderProps {
  title: string;
  supportingText?: string;
  showDivider?: boolean;
}

export function SectionHeader({ 
  title, 
  supportingText, 
  showDivider = true 
}: SectionHeaderProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      gap: '20px',
      width: '100%'
    }}>
      {/* Content */}
      <div style={{
        display: 'flex',
        alignSelf: 'stretch',
        gap: '16px',
        width: '100%'
      }}>
        {/* Text and supporting text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'stretch',
          gap: '4px',
          flex: 1
        }}>
          {/* Title - Text lg Semibold */}
          <h2 style={{
            fontFamily: 'Sora',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '1.5555555555555556em', // 28px / 18px = 1.556
            color: '#F7F7F7',
            margin: 0,
            width: '100%'
          }}>
            {title}
          </h2>
          
          {/* Supporting text - Text sm Regular */}
          {supportingText && (
            <p style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em', // 20px / 14px = 1.429
              color: '#E9EAEB',
              margin: 0,
              width: '100%'
            }}>
              {supportingText}
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      {showDivider && (
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#22262F'
        }} />
      )}
    </div>
  );
}
