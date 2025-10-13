import React from 'react';
import { PerformanceModal } from "../performance-modal";
import { GoalDetailsHeader, GoalDetailsContent, GoalDetailsFooter, SkipGoalModal, useGoalDetailsModal } from './index';
import type { Goal } from '@/types/goal';

interface GoalDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  goal: Goal;
  onCompleteGoal?: () => void;
  onSkipGoal?: (goalName: string) => void;
}

export const GoalDetailsModal: React.FC<GoalDetailsModalProps> = ({ 
  isOpen, 
  onClose, 
  goal,
  onCompleteGoal,
  onSkipGoal
}) => {
  const {
    expandedSections,
    isFullscreen,
    showPerformanceModal,
    showSkipModal,
    toggleSection,
    setIsFullscreen,
    handlePularMeta,
    handleConcluirMeta,
    handlePerformanceClose,
    handlePerformanceSave,
    handleSkipClose,
    handleSkipGoal
  } = useGoalDetailsModal({
    isOpen,
    goal,
    onCompleteGoal,
    onSkipGoal
  });

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 flex ${isFullscreen ? 'items-center justify-center p-4' : 'items-end justify-end p-4'}`}
        style={{
          backgroundColor: isFullscreen ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999
        }}
      >
        <div
          className={`relative flex flex-col ${isFullscreen ? 'w-[95vw] h-[95vh]' : 'w-[617px] max-h-[90vh]'}`}
          style={{
            background: '#202028',
            border: '1px solid #272737',
            borderRadius: '16px',
            boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.3)',
            minHeight: isFullscreen ? '95vh' : '500px',
            maxWidth: isFullscreen ? '95vw' : '617px',
            margin: isFullscreen ? '0' : '0 16px 16px 0',
            width: isFullscreen ? '95vw' : '617px',
            height: isFullscreen ? '95vh' : 'auto',
            padding: '0',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <GoalDetailsHeader
            goal={goal}
            isFullscreen={isFullscreen}
            onClose={onClose}
            onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
          />

          {/* Content */}
          <GoalDetailsContent
            goal={goal}
            expandedSections={expandedSections}
            onToggleSection={toggleSection}
            isFullscreen={isFullscreen}
          />

          {/* Footer */}
          {goal.status !== 'concluido' && (
            <GoalDetailsFooter
              goal={goal}
              isFullscreen={isFullscreen}
              onPularMeta={handlePularMeta}
              onConcluirMeta={handleConcluirMeta}
            />
          )}
        </div>
      </div>

      {/* Performance Modal */}
      <PerformanceModal
        isOpen={showPerformanceModal}
        onClose={handlePerformanceClose}
        onSave={handlePerformanceSave}
        metaId={goal.id}
      />

      {/* Skip Goal Modal */}
      <SkipGoalModal
        isOpen={showSkipModal}
        onClose={handleSkipClose}
        onSkip={handleSkipGoal}
        goalName={goal.discipline}
      />
    </>
  );
};
