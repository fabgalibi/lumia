import React from 'react';
import { Goal } from '@/types/goal';

interface SprintDetailGoalsProps {
  goals: Goal[];
}

export const SprintDetailGoals: React.FC<SprintDetailGoalsProps> = ({ goals }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'concluido':
        return '#17B26A';
      case 'pendente':
        return '#F79009';
      case 'em-andamento':
        return '#F66649';
      default:
        return '#CECFD2';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'concluido':
        return 'Concluída';
      case 'pendente':
        return 'Pendente';
      case 'em-andamento':
        return 'Em Andamento';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div className="flex flex-col p-6 rounded-lg" style={{
      background: '#252532',
      border: '1px solid #2C2C45',
      borderRadius: '8px',
      gap: '24px',
    }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '1.56em',
          color: '#FFFFFF',
        }}>
          Metas da Sprint
        </h3>
        
        <span style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#CECFD2',
        }}>
          {goals.length} metas
        </span>
      </div>

      {/* Goals List */}
      <div className="flex flex-col" style={{ gap: '16px' }}>
        {goals.map((goal, index) => (
          <div
            key={goal.id}
            className="flex items-center justify-between p-4 rounded-lg"
            style={{
              background: '#2D2D45',
              border: '1px solid #373A41',
              borderRadius: '8px',
              gap: '16px',
            }}
          >
            {/* Goal Info */}
            <div className="flex items-center flex-1" style={{ gap: '16px' }}>
              {/* Goal Number */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '32px',
                  height: '32px',
                  background: '#373A41',
                  borderRadius: '8px',
                }}
              >
                <span style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#FFFFFF',
                }}>
                  {index + 1}
                </span>
              </div>

              {/* Goal Details */}
              <div className="flex flex-col flex-1" style={{ gap: '4px' }}>
                <span style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF',
                }}>
                  {goal.subject}
                </span>
                <span style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#CECFD2',
                }}>
                  {goal.discipline}
                </span>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center" style={{ gap: '8px' }}>
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: getStatusColor(goal.status),
                }}
              />
              <span style={{
                fontFamily: 'Sora',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: getStatusColor(goal.status),
              }}>
                {getStatusText(goal.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
