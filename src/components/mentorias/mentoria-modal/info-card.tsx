import React, { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  gap?: '12px' | '16px' | '20px';
  padding?: '16px' | '12px 16px';
}

export const InfoCard: React.FC<InfoCardProps> = ({ 
  icon, 
  label, 
  value, 
  gap = '12px',
  padding = '16px'
}) => {
  return (
    <div
      style={{
        backgroundColor: '#272737',
        border: '1px solid #2C2C45',
        borderRadius: '8px',
        padding,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: gap === '20px' ? '16px' : '12px' }}>
        {icon}
        <span
          style={{
            fontFamily: 'Sora',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.43em',
            textAlign: 'center',
            color: '#ECECED',
          }}
        >
          {label}
        </span>
      </div>
      {value}
    </div>
  );
};

