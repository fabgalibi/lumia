import React from 'react';
import { GoalStatusType } from '@/types/table';

interface StatusDotProps {
  status: GoalStatusType;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Componente de Status Dot
 * 
 * Renderiza um dot colorido baseado no status:
 * - completed: Verde (#17B26A)
 * - in-progress: Laranja (#F79009) 
 * - pending: Cinza (#94979C)
 */
export const StatusDot: React.FC<StatusDotProps> = ({ status, size = 'lg' }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return '#17B26A'; // Verde
      case 'in-progress':
        return '#F79009'; // Laranja
      case 'pending':
        return '#94979C'; // Cinza
      default:
        return '#94979C';
    }
  };

  const getDotSize = () => {
    switch (size) {
      case 'sm':
        return 8;
      case 'md':
        return 12;
      case 'lg':
        return 16;
      default:
        return 16;
    }
  };

  const dotSize = getDotSize();

  return (
    <div
      style={{
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        borderRadius: '50%',
        backgroundColor: getStatusColor(),
        flexShrink: 0,
      }}
    />
  );
};

export default StatusDot;
