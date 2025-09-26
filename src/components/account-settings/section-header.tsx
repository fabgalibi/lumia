import React from 'react';

interface SectionHeaderProps {
  title: string;
  supportingText?: string;
  showDivider?: boolean;
  screenSize?: 'mobile' | 'desktop';
}

export function SectionHeader({ 
  title, 
  supportingText, 
  showDivider = true,
  screenSize = 'desktop'
}: SectionHeaderProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      gap: screenSize === 'mobile' ? '20px' : '20px', // Mobile: gap 20px conforme TODO
      width: '100%'
    }}>
      {/* Content */}
      <div style={{
        display: 'flex',
        alignSelf: 'stretch',
        gap: screenSize === 'mobile' ? '12px' : '16px', // Mobile: gap menor
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
          {/* Title - Text lg Semibold (mobile e desktop mantém mesmo tamanho) */}
          <h2 style={{
            fontFamily: 'Sora',
            fontWeight: '600',
            fontSize: '18px', // Mantém 18px em mobile e desktop
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
