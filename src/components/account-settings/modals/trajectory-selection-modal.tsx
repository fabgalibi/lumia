import React, { useState, useEffect } from 'react';
import { ModalWrapper } from './modal-wrapper';
import { TrajectorySelectionContent } from '@/components/profile-setup/step4-trajectory';

interface TrajectoryData {
  studyTime: string;
  isWorking: string;
}

interface TrajectorySelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrajectory?: string;
  onSave: (trajectoryData: TrajectoryData) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const TrajectorySelectionModal: React.FC<TrajectorySelectionModalProps> = ({
  isOpen,
  onClose,
  selectedTrajectory,
  onSave,
  screenSize = 'desktop'
}) => {
  const [trajectoryData, setTrajectoryData] = useState<TrajectoryData>({
    studyTime: selectedTrajectory || 'ouro',
    isWorking: 'sim'
  });

  // Reset trajectory data when modal opens
  useEffect(() => {
    if (isOpen) {
      setTrajectoryData({
        studyTime: selectedTrajectory || 'ouro',
        isWorking: 'sim'
      });
    }
  }, [isOpen, selectedTrajectory]);

  const handleTrajectoryDataChange = (newData: Partial<TrajectoryData>) => {
    setTrajectoryData(prev => ({ ...prev, ...newData }));
  };

  const handleSave = () => {
    onSave(trajectoryData);
    onClose();
  };

  const handleCancel = () => {
    setTrajectoryData({
      studyTime: selectedTrajectory || 'ouro',
      isWorking: 'sim'
    });
    onClose();
  };

  // Converter screenSize para o formato esperado pelo componente original
  const convertScreenSize = (size: 'mobile' | 'tablet' | 'desktop'): 'mobile' | 'tablet' | 'notebook' | 'desktop' => {
    if (size === 'tablet') return 'notebook';
    return size;
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Selecionar Trajetória"
      onSave={handleSave}
      onCancel={handleCancel}
      canSave={!!(trajectoryData.studyTime && trajectoryData.isWorking)}
    >
      <TrajectorySelectionContent
        trajectoryData={trajectoryData}
        onTrajectoryDataChange={handleTrajectoryDataChange}
        screenSize={convertScreenSize(screenSize)}
        showTitles={true}
        showWorkStatusSection={false}
      />
    </ModalWrapper>
  );
};
