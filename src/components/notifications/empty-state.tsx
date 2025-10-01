import React from 'react';
import { FeaturedIcon } from '@/components/ui';

export interface EmptyStateProps {
  icon?: 'bell' | 'check-circle';
  title?: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'bell',
  title = 'Nenhuma notificação',
  description = 'Você não tem notificações no momento.'
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '48px 24px',
        flex: 1
      }}
    >
      <FeaturedIcon icon={icon} />
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <h3
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'center'
          }}
        >
          {title}
        </h3>
        
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#CECFD2',
            margin: 0,
            textAlign: 'center'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

