import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  onEdit,
  children
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        border: '1px solid #2C2C45',
        borderRadius: '8px',
        backgroundColor: '#202028'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '12px',
          padding: '16px',
          backgroundColor: '#252532',
          borderBottom: '1px solid #2C2C45',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
            flex: 1
          }}
        >
          {icon}
          <h3
            style={{
              fontFamily: 'DM Sans',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#F0F0F1',
              margin: 0
            }}
          >
            {title}
          </h3>
        </div>
        
        <button
          onClick={onEdit}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(240, 240, 241, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#FFFFFF'
            }}
          >
            Editar informações
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V8.75"
              stroke="#FFFFFF"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.375 1.25C14.7444 0.880625 15.2556 0.880625 15.625 1.25L18.75 4.375C19.1194 4.74438 19.1194 5.25562 18.75 5.625L10 14.375L6.25 15L6.875 11.25L14.375 1.25Z"
              stroke="#FFFFFF"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          alignSelf: 'stretch',
          gap: '8px',
          padding: '20px 16px',
          backgroundColor: '#272737'
        }}
      >
        {children}
      </div>
    </div>
  );
};
