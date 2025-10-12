import React, { useState, useEffect } from 'react';
import { UserMenu } from '../../lumia/user-menu';
import { ViewTypeToggle } from './view-type-toggle';

interface MentoriasHeaderProps {
  viewType: 'month' | 'week' | 'day';
  onViewTypeChange: (type: 'month' | 'week' | 'day') => void;
}

export const MentoriasHeader: React.FC<MentoriasHeaderProps> = ({
  viewType,
  onViewTypeChange
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '16px' : '24px 32px',
        borderBottom: isMobile ? 'none' : '1px solid #272737',
        borderBottomLeftRadius: isMobile ? '16px' : '0',
        borderBottomRightRadius: isMobile ? '16px' : '0',
      }}
    >
      {isMobile ? (
        <>
          {/* Layout Mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#24212D',
                border: '1px solid #272737',
                borderRadius: '40px',
                cursor: 'pointer',
                padding: '10px',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H21M3 12H21M3 18H21"
                  stroke="#F66649"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h1
              style={{
                fontFamily: 'Sora',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '1.5em',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              Mentorias
            </h1>
          </div>

          <UserMenu />
        </>
      ) : (
        <>
          {/* Layout Desktop */}
          <h1
            style={{
              fontFamily: 'Sora',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '1.56em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Mentorias
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <ViewTypeToggle
              viewType={viewType}
              onViewTypeChange={onViewTypeChange}
            />

            <UserMenu />
          </div>
        </>
      )}
    </div>
  );
};

