import React from 'react';
import { PerformanceCard } from '../performance';

interface SprintMetricsProps {
  lastUpdate: string;
  performance?: number;
  totalGoals?: number;
  completedGoals?: number;
  totalDisciplines?: number;
}

export const SprintMetrics: React.FC<SprintMetricsProps> = ({ 
  lastUpdate, 
  performance = 50, 
  totalGoals = 12, 
  completedGoals = 7, 
  totalDisciplines = 10 
}) => {
  return (
    <div className="flex items-end justify-between" style={{ gap: '24px' }}>
      <div className="flex items-end" style={{ gap: '24px' }}>
        {/* Desempenho Geral */}
        <PerformanceCard percentage={performance} />

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
            {completedGoals}/{totalGoals}
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
            {totalDisciplines}
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
