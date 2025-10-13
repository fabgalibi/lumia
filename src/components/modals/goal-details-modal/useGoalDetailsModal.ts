import { useState, useEffect } from 'react';
import type { Goal } from '@/types/goal';

interface UseGoalDetailsModalProps {
  isOpen: boolean;
  goal: Goal;
  onCompleteGoal?: () => void;
  onSkipGoal?: (goalName: string) => void;
}

export const useGoalDetailsModal = ({
  isOpen,
  goal,
  onCompleteGoal,
  onSkipGoal
}: UseGoalDetailsModalProps) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    subjects: true,
    materials: false,
    commands: false,
    links: false,
    additionalTips: false
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPerformanceModal, setShowPerformanceModal] = useState(false);
  const [showSkipModal, setShowSkipModal] = useState(false);

  // Resetar estado quando o modal for fechado
  useEffect(() => {
    if (!isOpen) {
      setIsFullscreen(false);
    }
  }, [isOpen]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => {
      // Comportamento accordion: quando um abre, os outros fecham
      const newState = {
        subjects: false,
        materials: false,
        commands: false,
        links: false,
        additionalTips: false
      };
      
      // Se a seção clicada não estava aberta, abra ela
      if (!prev[section]) {
        (newState as any)[section] = true;
      }
      
      return newState;
    });
  };

  const handlePularMeta = () => {
    setShowSkipModal(true);
  };

  const handleConcluirMeta = () => {
    setShowPerformanceModal(true);
  };

  const handlePerformanceClose = () => {
    setShowPerformanceModal(false);
  };

  const handlePerformanceSave = (data: any) => {
    console.log('Performance data saved:', data);
    setShowPerformanceModal(false);
    onCompleteGoal?.();
  };

  const handleSkipClose = () => {
    setShowSkipModal(false);
  };

  const handleSkipGoal = (goalName: string) => {
    console.log('Goal skipped:', goalName);
    setShowSkipModal(false);
    onSkipGoal?.(goalName);
  };

  return {
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
  };
};
