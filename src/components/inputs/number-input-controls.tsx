import React from 'react';

interface NumberInputControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

export const NumberInputControls: React.FC<NumberInputControlsProps> = ({ 
  onIncrement, 
  onDecrement
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      gap: '0px',
      flexShrink: 0
    }}>
      <button
        type="button"
        onClick={onIncrement}
        style={{
          width: '16px',
          height: '8px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg width="6.67" height="10.67" viewBox="0 0 6.67 10.67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3L3.33 1L5.67 3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        type="button"
        onClick={onDecrement}
        style={{
          width: '16px',
          height: '8px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg width="6.67" height="10.67" viewBox="0 0 6.67 10.67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7.67L3.33 9.67L5.67 7.67" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
