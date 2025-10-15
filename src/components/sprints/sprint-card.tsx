import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprint } from '@/types/sprint-page';
import { SprintHeader } from './sprint-header';
import { SprintOverlay } from './sprint-overlay';
import { SprintInfo } from './sprint-info';
import { SprintButton } from './sprint-button';

interface SprintCardProps {
  sprint: Sprint;
  onClick?: () => void;
}

export const SprintCard: React.FC<SprintCardProps> = ({ sprint, onClick }) => {
  const navigate = useNavigate();
  const isBlocked = sprint.status === 'bloqueada';
  const isCompleted = sprint.status === 'concluida';

  const handleCardClick = () => {
    if (isBlocked) return;
    if (onClick) {
      onClick();
    } else {
      navigate(`/sprints/${sprint.id}`);
    }
  };

  return (
    <div
      className="flex flex-col items-center p-4 rounded-xl relative"
      style={{
        width: '361.33px',
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '12px',
        gap: '16px',
        opacity: isCompleted ? 0.6 : 1,
        cursor: isBlocked ? 'not-allowed' : 'pointer',
      }}
      onClick={handleCardClick}
    >
      {/* Overlay para sprints bloqueadas */}
      {isBlocked && (
        <SprintOverlay title={sprint.title} />
      )}

      {/* Conteúdo principal do card */}
      <div className="flex flex-col w-full" style={{ gap: '16px' }}>
        {/* Header com título e imagem */}
        <SprintHeader 
          title={sprint.title}
          objective={sprint.objective}
          imageUrl={sprint.image}
        />

        {/* Informações detalhadas */}
        <SprintInfo sprint={sprint} />
      </div>

      {/* Botão */}
      <SprintButton onClick={handleCardClick} disabled={isBlocked} />
    </div>
  );
};