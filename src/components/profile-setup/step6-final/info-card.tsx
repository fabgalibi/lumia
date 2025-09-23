import React from 'react';
import { Edit03 } from '@untitledui/icons';

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
        borderRadius: '8px'
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
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0%',
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
              fontStyle: 'SemiBold',
              fontSize: '14px',
              lineHeight: '1.43em',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}
          >
            Editar informações
          </span>
          <Edit03
            width="20"
            height="20"
            stroke="#FFFFFF"
            strokeWidth="1.67"
          />
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
