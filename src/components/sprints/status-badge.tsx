import React from 'react';
import { SprintStatus } from '@/types/sprint-page';

interface StatusBadgeProps {
  status: SprintStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusConfig = (status: SprintStatus) => {
    switch (status) {
      case 'em-andamento':
        return {
          backgroundColor: '#3B2A1A',
          textColor: '#E98B39',
          text: 'Em Andamento'
        };
      case 'bloqueada':
        return {
          backgroundColor: '#5B5B5B',
          textColor: '#E0E0E0',
          text: 'Inativo'
        };
      case 'concluida':
        return {
          backgroundColor: '#243D2A',
          textColor: '#3DC462',
          text: 'Concluída'
        };
      default:
        return {
          backgroundColor: '#5B5B5B',
          textColor: '#E0E0E0',
          text: 'Inativo'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div
      className="flex items-center px-2 py-0.5 rounded-full"
      style={{
        background: config.backgroundColor,
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <span
        style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '1.5em',
          color: config.textColor,
        }}
      >
        {config.text}
      </span>
    </div>
  );
};
