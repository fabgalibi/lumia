import React from 'react';
import { GoalStatus } from '@/types/goal';
import { getStatusColor } from '@/constants/status-colors';

interface StatusDotProps {
  status: GoalStatus;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Componente de Status Dot
 * 
 * Renderiza um dot colorido baseado no status
 */
export const StatusDot: React.FC<StatusDotProps> = ({ status, size = 'lg' }) => {

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
        backgroundColor: getStatusColor(status),
        flexShrink: 0,
      }}
    />
  );
};

export default StatusDot;
