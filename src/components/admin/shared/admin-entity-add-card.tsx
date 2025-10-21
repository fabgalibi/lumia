import React from 'react';

interface AdminEntityAddCardProps {
  onAddEntity: () => void;
  addText: string;
}

export const AdminEntityAddCard: React.FC<AdminEntityAddCardProps> = ({ 
  onAddEntity, 
  addText 
}) => {
  return (
    <div 
      className="admin-entity-add-card"
      onClick={onAddEntity}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '16px',
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '12px',
        width: 'calc(33.333% - 16px)',
        minWidth: '300px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_16243_32349" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="88" height="88">
          <rect width="88" height="88" fill="url(#paint0_linear_16243_32349)"/>
        </mask>
        <g mask="url(#mask0_16243_32349)">
          <circle cx="44" cy="44" r="43.2143" fill="#4E1D09" stroke="#93370D" strokeWidth="1.57143"/>
        </g>
        <rect x="15.7143" y="15.7144" width="56.5714" height="56.5714" rx="28.2857" fill="#DC6803"/>
        <path d="M43.9999 34.833V53.1663M34.8333 43.9997H53.1666" stroke="white" strokeWidth="2.09943" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_16243_32349" x1="44" y1="0" x2="44" y2="88" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <h3 style={{
        fontFamily: 'Sora',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '1.5em',
        color: '#F7F7F7',
        textAlign: 'center',
        margin: 0
      }}>
        {addText}
      </h3>
    </div>
  );
};
