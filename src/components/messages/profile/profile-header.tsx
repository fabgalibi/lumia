import React from 'react';

interface ProfileHeaderProps {
  contactName: string;
  contactAvatar: string;
  isOnline: boolean;
  onClose: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ contactName, contactAvatar, isOnline, onClose }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '20px 16px',
        backgroundColor: '#252532',
        borderTopRightRadius: '12px',
        borderBottom: '1px solid #2C2C45'
      }}
    >
      <button
        onClick={onClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="#85888E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <h2
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '1.56em',
          letterSpacing: '0%',
          color: '#F7F7F7',
          margin: 0
        }}
      >
        Ver perfil
      </h2>
    </div>
  );
};

export default ProfileHeader;