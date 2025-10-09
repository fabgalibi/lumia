import React from 'react';

interface MonthNavigationProps {
  currentMonth: string;
  onPrevious: () => void;
  onNext: () => void;
}

export const MonthNavigation: React.FC<MonthNavigationProps> = ({
  currentMonth,
  onPrevious,
  onNext
}) => {
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
      }}
    >
      <button
        onClick={onPrevious}
        style={{
          padding: '8px 12px',
          background: '#2F2F4D',
          border: 'none',
          borderRight: '1px solid #373A41',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="#F0F0F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        style={{
          padding: '8px 16px',
          background: '#2F2F4D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontSize: '14px',
            fontWeight: 600,
            color: '#CECFD2',
          }}
        >
          {currentMonth}
        </span>
      </div>
      <button
        onClick={onNext}
        style={{
          padding: '8px 12px',
          background: '#2F2F4D',
          border: 'none',
          borderLeft: '1px solid #373A41',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="#F0F0F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

