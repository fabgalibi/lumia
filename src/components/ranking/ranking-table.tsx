import React from 'react';

export interface RankingUser {
  position: number;
  name: string;
  initials: string;
  percentage: number;
  isCurrentUser?: boolean;
  trend: 'up' | 'down';
  avatarUrl?: string;
}

export interface RankingTableProps {
  users: RankingUser[];
  currentUserId?: number;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const RankingTable: React.FC<RankingTableProps> = ({ users, currentUserId, screenSize = 'desktop' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: screenSize === 'mobile' ? '8px' : '16px',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid #2C2C45'
        }}
      >
        {/* Coluna Posição */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: screenSize === 'mobile' ? '4px' : '12px',
            padding: screenSize === 'mobile' ? '12px 8px' : '12px 20px',
            width: screenSize === 'mobile' ? '60px' : '140px',
            backgroundColor: '#2D2D45',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: screenSize === 'mobile' ? '10px' : '12px',
              lineHeight: '1.5em',
              color: '#F0F0F1'
            }}
          >
            Posição
          </span>
          {/* Ícone de ordenação */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5"
              stroke="#85888E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Coluna Nome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 20px',
            flex: 1,
            backgroundColor: '#2D2D45',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: screenSize === 'mobile' ? '10px' : '12px',
              lineHeight: '1.5em',
              color: '#F0F0F1'
            }}
          >
            Nome do aluno
          </span>
          {/* Ícone de ordenação */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5"
              stroke="#85888E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Coluna Desempenho */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: screenSize === 'mobile' ? '12px 8px' : '12px 20px',
            width: screenSize === 'mobile' ? '80px' : 'auto',
            flex: screenSize === 'mobile' ? 'none' : 1,
            backgroundColor: '#2D2D45'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: screenSize === 'mobile' ? '10px' : '12px',
              lineHeight: '1.5em',
              color: '#F0F0F1'
            }}
          >
            {screenSize === 'mobile' ? 'Desemp.' : 'Desempenho (%)'}
          </span>
        </div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              backgroundColor: user.isCurrentUser ? '#2C2C3D' : 'transparent',
              borderBottom: index < users.length - 1 ? '1px solid #2C2C45' : 'none'
            }}
          >
            {/* Posição */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: screenSize === 'mobile' ? '16px 8px' : '16px 24px',
                width: screenSize === 'mobile' ? '60px' : '140px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: screenSize === 'mobile' ? '16px' : '20px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1',
                    textAlign: 'center',
                    width: '40px'
                  }}
                >
                  {user.position}
                </span>

                {/* Ícone de tendência */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    transform: user.trend === 'down' ? 'rotate(180deg)' : 'none'
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.823205 15.1391C0.433412 15.5289 0.777603 16.1599 1.36023 16.16L15.2639 16.1802C15.8466 16.1803 16.1908 15.5493 15.8009 15.1594L8.84866 8.20747C8.59383 7.95263 8.17794 7.95263 7.9231 8.20747L0.823205 15.1391Z"
                    fill={user.trend === 'up' ? '#079455' : '#D92D20'}
                    transform="translate(0, -4.08)"
                  />
                </svg>
              </div>
            </div>

            {/* Nome com Avatar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                flex: 1,
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: screenSize === 'mobile' ? '32px' : '40px',
                  height: screenSize === 'mobile' ? '32px' : '40px',
                  backgroundColor: '#22262F',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                {/* Borda interna de contraste */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '0.75px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '50%'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: screenSize === 'mobile' ? '14px' : '16px',
                    lineHeight: '1.5em',
                    color: '#94979C',
                    textAlign: 'center'
                  }}
                >
                  {user.initials}
                </span>
              </div>

              {/* Nome */}
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: screenSize === 'mobile' ? '12px' : '14px',
                  lineHeight: '1.43em',
                  letterSpacing: '-0.5%',
                  color: '#F0F0F1'
                }}
              >
                {user.name}
              </span>
            </div>

            {/* Desempenho */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: screenSize === 'mobile' ? '16px 8px' : '16px 20px',
                width: screenSize === 'mobile' ? '80px' : 'auto',
                flex: screenSize === 'mobile' ? 'none' : 1
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: screenSize === 'mobile' ? '12px' : '14px',
                  lineHeight: '1.43em',
                  letterSpacing: '-0.5%',
                  color: '#F0F0F1'
                }}
              >
                {user.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

