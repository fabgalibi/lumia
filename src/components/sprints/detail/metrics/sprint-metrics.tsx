import React from 'react';
import { PerformanceCard } from '../performance';

interface SprintMetricsProps {
  lastUpdate: string;
}

export const SprintMetrics: React.FC<SprintMetricsProps> = ({ lastUpdate }) => {
  return (
    <div className="flex items-end justify-between" style={{ gap: '24px' }}>
      <div className="flex items-end" style={{ gap: '24px' }}>
        {/* Desempenho Geral */}
        <PerformanceCard percentage={50} />

        {/* Separator */}
        <div
          style={{
            width: '1px',
            height: '32px',
            background: '#2C2C45',
          }}
        />

        {/* Metas Totais */}
        <div className="flex flex-col" style={{ gap: '12px', width: 'fit-content' }}>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
              textAlign: 'right',
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
              textAlign: 'left',
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
        <div className="flex flex-col" style={{ gap: '12px', width: 'fit-content' }}>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
              textAlign: 'right',
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
              textAlign: 'left',
              width: '41px',
            }}
          >
            10
          </span>
        </div>
      </div>

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
  );
};
