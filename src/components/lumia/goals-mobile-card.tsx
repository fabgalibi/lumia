import React from 'react';
import { Goal } from '@/types/table';
import { RelevanceStars, type RelevanceLevel } from './relevance-stars';

interface GoalsMobileCardProps {
  goal: Goal;
  onGoalClick: (goal: Goal) => void;
  width?: string | number;
  fullWidth?: boolean;
}

/**
 * Componente Mobile Card para Goals
 * 
 * Layout baseado no Figma mobile - cards verticais com todas as informações
 * organizadas de forma compacta e responsiva.
 */
export const GoalsMobileCard: React.FC<GoalsMobileCardProps> = ({
  goal,
  onGoalClick,
  width = '306px',
  fullWidth = false
}) => {
  const getStatusColor = () => {
    switch (goal.status) {
      case 'completed':
        return '#17B26A'; // Verde
      case 'in-progress':
        return '#F79009'; // Laranja
      case 'pending':
        return '#94979C'; // Cinza para pending
      default:
        return '#94979C';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
        width: fullWidth ? '100%' : width,
        backgroundColor: '#272738',
        border: '1px solid #2C2C45',
        borderRadius: '8px',
        boxSizing: 'border-box',
        cursor: 'pointer'
      }}
      onClick={() => onGoalClick(goal)}
    >
      {/* Header com dot e título */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: getStatusColor(),
            flexShrink: 0
          }}
        />
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '-0.16px',
            color: '#F0F0F1'
          }}
        >
          {goal.topic}
        </span>
      </div>

      {/* Grid de informações */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}
      >
        {/* Relevância */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              color: '#85888E'
            }}
          >
            Relevância
          </span>
          <div style={{ width: '72px', height: '16px' }}>
            <RelevanceStars level={(goal.relevance as RelevanceLevel) || 'low'} />
          </div>
        </div>

        {/* Tipo de estudo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              color: '#85888E'
            }}
          >
            Tipo de estudo
          </span>
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#F0F0F1'
            }}
          >
            {goal.studyType}
          </span>
        </div>

        {/* Tempo estudado */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              color: '#85888E'
            }}
          >
            Tempo estudado
          </span>
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#F0F0F1'
            }}
          >
            {goal.timeStudied}
          </span>
        </div>

        {/* Desempenho */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              color: '#85888E'
            }}
          >
            Desempenho
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <div style={{ width: '16px', height: '16px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.67" stroke="#85888E" strokeWidth="1.33"/>
                <path d="M6.06 6.67a2 2 0 0 1 3.88 0.67c0 1.33-2 2-2 2" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 11.33h.01" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#F0F0F1'
              }}
            >
              {goal.performance}
            </span>
          </div>
        </div>
      </div>

      {/* Comandos do mentor */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#85888E'
          }}
        >
          Comandos do mentor
        </span>
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#F0F0F1'
          }}
        >
          {goal.mentorCommand}
        </span>
      </div>

      {/* Botão Visualizar meta */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onGoalClick(goal);
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          backgroundColor: '#2D2D45',
          border: '1px solid #2C2C45',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          width: '100%'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#3A3A52';
          e.currentTarget.style.borderColor = '#3A3A52';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2D2D45';
          e.currentTarget.style.borderColor = '#2C2C45';
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M1.8 10.33C1.8 10.33 4.8 4.33 8.19 4.33C11.58 4.33 14.58 10.33 14.58 10.33C14.58 10.33 11.58 16.33 8.19 16.33C4.8 16.33 1.8 10.33 1.8 10.33Z"
            stroke="#CECFD2"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="8.19"
            cy="10.33"
            r="2.67"
            stroke="#CECFD2"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#CECFD2'
          }}
        >
          Visualizar meta
        </span>
      </button>
    </div>
  );
};

export default GoalsMobileCard;
