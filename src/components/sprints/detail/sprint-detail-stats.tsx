import React from 'react';

interface SprintDetailStatsProps {
  goalsCompleted: number;
  timeStudied: string;
  questionsResolved: number;
  successRate: number;
  lastUpdate: string;
}

export const SprintDetailStats: React.FC<SprintDetailStatsProps> = ({
  goalsCompleted,
  timeStudied,
  questionsResolved,
  successRate,
  lastUpdate
}) => {
  return (
    <div className="flex flex-col" style={{ gap: '24px' }}>
      {/* Metrics Section */}
      <div className="flex items-end" style={{ gap: '24px' }}>
        {/* Desempenho Geral */}
        <div className="flex flex-col" style={{ gap: '12px' }}>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
            }}
          >
            Desempenho geral
          </span>
          
          <div className="flex items-center" style={{ gap: '12px' }}>
            {/* Progress Circle */}
            <div className="relative" style={{ width: '40px', height: '40px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="18.125"
                  fill="none"
                  stroke="#E9EAEB"
                  strokeWidth="3.75"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="18.125"
                  fill="none"
                  stroke="#F66649"
                  strokeWidth="3.75"
                  strokeDasharray={`${2 * Math.PI * 18.125}`}
                  strokeDashoffset={`${2 * Math.PI * 18.125 * (1 - 0.5)}`}
                  transform="rotate(-90 20 20)"
                />
              </svg>
            </div>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '1.56em',
                color: '#FFFFFF',
              }}
            >
              50%
            </span>
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            width: '1px',
            height: '32px',
            background: '#2C2C45',
          }}
        />

        {/* Metas Totais */}
        <div className="flex flex-col" style={{ gap: '12px' }}>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
            }}
          >
            Metas totais
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF',
              width: '41px',
            }}
          >
            7/12
          </span>
        </div>

        {/* Separator */}
        <div
          style={{
            width: '1px',
            height: '32px',
            background: '#2C2C45',
          }}
        />

        {/* Disciplinas da Sprint */}
        <div className="flex flex-col" style={{ gap: '12px' }}>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
            }}
          >
            Disciplinas da sprint
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF',
              width: '41px',
            }}
          >
            10
          </span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Last Update */}
        <div
          style={{
            width: '165px',
            textAlign: 'right',
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#CECFD2',
            }}
          >
            Última atualização: {lastUpdate}
          </span>
        </div>
      </div>
    </div>
  );
};
