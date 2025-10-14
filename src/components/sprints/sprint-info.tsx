import React from 'react';
import { Sprint } from '@/types/sprint-page';
import { StatusBadge } from './status-badge';
import { SprintProgressBar } from './sprint-progress-bar';

interface SprintInfoProps {
  sprint: Sprint;
}

export const SprintInfo: React.FC<SprintInfoProps> = ({ sprint }) => {
  const isCompleted = sprint.status === 'concluida';

  const getInfoLabel = () => {
    if (sprint.status === 'em-andamento') {
      return 'Metas:';
    } else if (sprint.status === 'concluida') {
      return 'Conclusão:';
    }
    return 'Período:';
  };

  const getInfoValue = () => {
    if (sprint.status === 'em-andamento' && sprint.goalsRemaining) {
      return `Restam ${sprint.goalsRemaining} metas`;
    }
    return sprint.period;
  };

  return (
    <div className="flex flex-col w-full" style={{ gap: '12px' }}>
      {/* Período/Metas */}
      <div className="flex items-center justify-between w-full" style={{ gap: '6px' }}>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#ECECED',
          }}
        >
          {getInfoLabel()}
        </span>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#F0F0F1',
            textAlign: 'right',
          }}
        >
          {getInfoValue()}
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center justify-between w-full" style={{ gap: '6px' }}>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#ECECED',
          }}
        >
          Status:
        </span>
        <StatusBadge status={sprint.status} />
      </div>

      {/* Progresso */}
      <div className="flex items-center justify-between w-full" style={{ gap: '6px' }}>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#ECECED',
          }}
        >
          Progresso:
        </span>
        <SprintProgressBar progress={sprint.progress} />
      </div>
    </div>
  );
};
