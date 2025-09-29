import React from 'react';
import { Text, colors } from '@/components/ui';

interface SectionHeaderProps {
  title: string;
  supportingText?: string;
  showDivider?: boolean;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
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
         gap: '20px', // Mantém 20px para todos os tamanhos
      width: '100%'
    }}>
      {/* Content */}
      <div style={{
        display: 'flex',
        alignSelf: 'stretch',
         gap: screenSize === 'mobile' ? '12px' : '16px', // Mobile: gap menor, Tablet/Desktop: 16px
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
          {/* Title */}
          <Text
            variant="h4"
            weight="semibold"
            color={colors.text.primary}
            style={{ margin: 0, width: '100%' }}
          >
            {title}
          </Text>
          
          {/* Supporting text */}
          {supportingText && (
            <Text
              variant="caption"
              color={colors.text.secondary}
              style={{ margin: 0, width: '100%' }}
            >
              {supportingText}
            </Text>
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
