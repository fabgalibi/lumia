import React from 'react';

const ProfileAvailabilitySection: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ marginBottom: isMobile ? '20px' : '24px' }}>
      {isMobile ? (
        // Layout Mobile
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <h3
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#F7F7F7',
              margin: 0
            }}
          >
            Disponibilidade
          </h3>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            {/* Status Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2px 8px',
                backgroundColor: 'rgba(5, 51, 33, 1)',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                  color: '#75E0A7'
                }}
              >
                Disponível agora
              </span>
            </div>

            {/* Horários e Chevron */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#F0F0F1'
                }}
              >
                08:00 - 19:00
              </span>
              
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        // Layout Desktop
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          {/* Título e Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <h3
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#F7F7F7',
                margin: 0
              }}
            >
              Disponibilidade
            </h3>
            
            {/* Status Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2px 8px',
                backgroundColor: 'rgba(5, 51, 33, 1)',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                  color: '#75E0A7'
                }}
              >
                Disponível agora
              </span>
            </div>
          </div>

          {/* Horários e Chevron */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F0F0F1'
              }}
            >
              08:00 - 19:00
            </span>
            
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAvailabilitySection;