import React from 'react';
import { Plus } from 'lucide-react';

interface AdminEntityHeaderProps {
  title: string;
  totalCount: number;
  buttonText: string;
  onEntityCreated?: () => void;
}

export const AdminEntityHeader: React.FC<AdminEntityHeaderProps> = ({
  title,
  totalCount,
  buttonText,
  onEntityCreated
}) => {
  return (
    <div 
      className="admin-entity-header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '16px'
      }}
    >
      {/* Title */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <h1 style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '1.3333333333333333em',
          color: '#F7F7F7',
          margin: 0
        }}>
          {title} ({totalCount})
        </h1>
      </div>

      {/* Actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <button
          onClick={onEntityCreated}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: '10px 14px',
            background: '#C74228',
            border: 'none',
            borderRadius: '8px',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#FFFFFF',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#D55A3A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#C74228';
          }}
        >
          <Plus size={20} color="#FFFFFF" strokeWidth={1.67} />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};
