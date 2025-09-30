import React, { useState, useEffect } from 'react';
import { ModalWrapper } from './modal-wrapper';
import { AvailabilitySelectionContent } from '@/components/profile-setup/step3-availability';

interface AvailabilityData {
  selectedStudyTime: string;
  selectedStartDate: string;
  selectedDate?: Date;
}

interface AvailabilitySelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAvailability?: string;
  onSave: (availabilityData: AvailabilityData) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const AvailabilitySelectionModal: React.FC<AvailabilitySelectionModalProps> = ({
  isOpen,
  onClose,
  selectedAvailability,
  onSave,
  screenSize = 'desktop'
}) => {
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData>({
    selectedStudyTime: selectedAvailability || 'normal',
    selectedStartDate: 'data-especifica',
    selectedDate: undefined
  });

  // Reset availability data when modal opens
  useEffect(() => {
    if (isOpen) {
      setAvailabilityData({
        selectedStudyTime: selectedAvailability || 'normal',
        selectedStartDate: 'data-especifica',
        selectedDate: undefined
      });
    }
  }, [isOpen, selectedAvailability]);

  const handleAvailabilityDataChange = (newData: Partial<AvailabilityData>) => {
    setAvailabilityData(prev => ({ ...prev, ...newData }));
  };

  const handleSave = () => {
    onSave(availabilityData);
    onClose();
  };

  const handleCancel = () => {
    setAvailabilityData({
      selectedStudyTime: selectedAvailability || 'normal',
      selectedStartDate: 'data-especifica',
      selectedDate: undefined
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
      title="Disponibilidade"
      subtitle="Referente ao tempo de dedicação ao estudos que você selecionou."
      onSave={handleSave}
      onCancel={handleCancel}
      canSave={!!availabilityData.selectedStudyTime}
    >
      <AvailabilitySelectionContent
        availabilityData={availabilityData}
        onAvailabilityDataChange={handleAvailabilityDataChange}
        screenSize={convertScreenSize(screenSize)}
        showTitles={true}
        showStartDateSection={false}
      />
    </ModalWrapper>
  );
};

