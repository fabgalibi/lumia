import React from 'react';

interface MessagesSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const MessagesSearch: React.FC<MessagesSearchProps> = ({ 
  searchQuery, 
  onSearchChange 
}) => (
  <div
    style={{
      padding: '24px 16px 16px',
      backgroundColor: 'rgba(29, 29, 46, 1)',
      borderBottom: '1px solid #2C2C45',
      borderTopLeftRadius: '16px'
    }}
  >
    {/* Input de busca */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        backgroundColor: '#2D2D3B',
        border: '1px solid #2D2D36',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
          stroke="#94979C"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 17.5L13.875 13.875"
          stroke="#94979C"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        placeholder="Buscar"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontSize: '16px',
          fontWeight: '400',
          color: '#D5D7DA',
          lineHeight: '1.5em',
          fontFamily: 'Sora'
        }}
      />
    </div>
  </div>
);

export default MessagesSearch;
