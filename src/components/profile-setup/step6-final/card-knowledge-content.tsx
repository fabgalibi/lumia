import React from 'react';

interface CardKnowledgeContentProps {
  children: React.ReactNode;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const CardKnowledgeContent: React.FC<CardKnowledgeContentProps> = ({
  children,
  screenSize = 'desktop'
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: screenSize === 'mobile' ? '12px' : '16px'
      }}
    >
      {children}
    </div>
  );
};
