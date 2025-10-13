import React from 'react';
import { SuccessNotification } from './success-notification';

interface GoalSuccessNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  goalName: string;
}

export const GoalSuccessNotification: React.FC<GoalSuccessNotificationProps> = ({ 
  isVisible, 
  onClose, 
  goalName 
}) => {
  return (
    <SuccessNotification
      isVisible={isVisible}
      onClose={onClose}
      title="Meta concluída com sucesso!"
      message="Você concluiu a meta '{goalName}'. Continue avançando rumo à sua aprovação!"
      goalName={goalName}
    />
  );
};
