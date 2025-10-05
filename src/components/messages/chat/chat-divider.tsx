import React from 'react';

interface ChatDividerProps {
  text: string;
}

const ChatDivider: React.FC<ChatDividerProps> = ({ text }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '24px'
      }}
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#22262F'
        }}
      />
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '1.5em',
          color: '#94979C',
          padding: '0 12px',
          textTransform: 'capitalize',
          letterSpacing: '0.01em'
        }}
      >
        {text}
      </span>
      <div
        style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#22262F'
        }}
      />
    </div>
  );
};

export default ChatDivider;
