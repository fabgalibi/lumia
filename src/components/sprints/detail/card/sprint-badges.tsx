import React from 'react';

interface SprintBadgesProps {
  status: 'em-andamento' | 'bloqueada' | 'concluida';
  goalsRemaining?: number;
}

export const SprintBadges: React.FC<SprintBadgesProps> = ({ status, goalsRemaining }) => {
  return (
    <div className="flex items-center" style={{ gap: '12px' }}>
      {/* Status Badge */}
      <div
        className="flex items-center px-2 py-0.5 rounded-full"
        style={{
          background: status === 'em-andamento' ? '#3B2A1A' : 
                     status === 'bloqueada' ? '#4B1A1A' : '#1A4B1A',
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
            color: status === 'em-andamento' ? '#E98B39' : status === 'bloqueada' ? '#F87171' : '#10B981',
          }}
        >
          {status === 'em-andamento' ? 'Em Andamento' : 
           status === 'bloqueada' ? 'Bloqueada' : 'Concluída'}
        </span>
      </div>
      
      {/* Goals Remaining Badge */}
      <div
        className="flex items-center px-2 py-0.5 rounded-full"
        style={{
          background: '#5B5B5B',
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
            color: '#E0E0E0',
          }}
        >
          {goalsRemaining ? `Restam ${goalsRemaining} metas` : 'Todas as metas concluídas'}
        </span>
      </div>
    </div>
  );
};
