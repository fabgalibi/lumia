import React from 'react';

interface CardKnowledgeItemProps {
  question: string;
  answer: string;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const CardKnowledgeItem: React.FC<CardKnowledgeItemProps> = ({
  question,
  answer,
  screenSize = 'desktop'
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: screenSize === 'mobile' ? 'column' : 'row',
        justifyContent: screenSize === 'mobile' ? 'flex-start' : 'space-between',
        alignItems: screenSize === 'mobile' ? 'flex-start' : 'center',
        alignSelf: 'stretch',
        gap: '8px',
        padding: screenSize === 'mobile' ? '0px 10px' : '0px 24px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
          alignSelf: screenSize === 'mobile' ? 'stretch' : 'auto'
        }}
      >
        <div
          style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#FFFFFF',
            borderRadius: '1px'
          }}
        />
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: screenSize === 'mobile' ? '14px' : '18px',
            lineHeight: screenSize === 'mobile' ? '1.43em' : '1.56em',
            color: '#FFFFFF'
          }}
        >
          {question}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: screenSize === 'mobile' ? '14px' : '18px',
          lineHeight: screenSize === 'mobile' ? '1.43em' : '1.56em',
          color: '#FFFFFF',
          width: screenSize === 'mobile' ? '290px' : 'auto',
          textAlign: 'left',
          alignSelf: 'auto',
          marginLeft: screenSize === 'mobile' ? '12px' : '0'
        }}
      >
        {answer}
      </span>
    </div>
  );
};
