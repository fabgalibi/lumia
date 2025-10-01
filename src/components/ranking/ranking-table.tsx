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
}

export const RankingTable: React.FC<RankingTableProps> = ({ users, currentUserId }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '16px',
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
            gap: '12px',
            padding: '12px 20px',
            width: '140px',
            backgroundColor: '#2D2D45',
            borderRight: '1px solid #2C2C45'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#F0F0F1'
            }}
          >
            Posição
          </span>
          {/* Ícone de ordenação */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 3L8.5 5.5M6 3L3.5 5.5M6 3V9M6 9L8.5 6.5M6 9L3.5 6.5"
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
            borderRight: '1px solid #2C2C45'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#F0F0F1'
            }}
          >
            Nome do aluno
          </span>
          {/* Ícone de ordenação */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 3L8.5 5.5M6 3L3.5 5.5M6 3V9M6 9L8.5 6.5M6 9L3.5 6.5"
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
            gap: '12px',
            padding: '12px 20px',
            flex: 1,
            backgroundColor: '#2D2D45'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#F0F0F1'
            }}
          >
            Desempenho (%)
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
                padding: '16px 24px',
                width: '140px',
                borderRight: user.isCurrentUser ? 'none' : '1px solid #2C2C45'
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
                    fontSize: '20px',
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
                    d="M8 12L8 4M8 4L4 8M8 4L12 8"
                    stroke={user.trend === 'up' ? '#079455' : '#D92D20'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                borderRight: user.isCurrentUser ? 'none' : '1px solid #2C2C45'
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#22262F',
                  border: '1.5px solid #F48E2F',
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
                    fontSize: '16px',
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
                  fontSize: '14px',
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
                padding: '16px 20px',
                flex: 1
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
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

