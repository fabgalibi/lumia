import React from 'react';

interface CardContentProps {
  children: React.ReactNode;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
  layout?: 'single' | 'multiple';
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  screenSize = 'desktop',
  layout: _layout = 'multiple'
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: screenSize === 'mobile' ? '8px' : '16px',
        padding: screenSize === 'mobile' ? '0px 10px' : '0px 24px'
      }}
    >
      {children}
    </div>
  );
};
