import React, { useState, useEffect } from 'react';
import { ModalWrapper } from './modal-wrapper';
import { StudyAreaSelectionContent } from '@/components/profile-setup/step1-area-selection';

interface StudyAreaSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedArea?: string;
  onSave: (areaId: string) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const StudyAreaSelectionModal: React.FC<StudyAreaSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedArea,
  onSave,
  screenSize = 'desktop'
}) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(selectedArea || '');

  // Reset selected area when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedAreaId(selectedArea || '');
    }
  }, [isOpen, selectedArea]);

  const handleAreaSelect = (areaId: string) => {
    setSelectedAreaId(areaId);
  };

  const handleSave = () => {
    if (selectedAreaId) {
      onSave(selectedAreaId);
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedAreaId(selectedArea || '');
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
      title="Selecionar Área de Estudo"
      onSave={handleSave}
      onCancel={handleCancel}
      canSave={!!selectedAreaId}
    >
      <StudyAreaSelectionContent
        selectedArea={selectedAreaId}
        onAreaSelect={handleAreaSelect}
        screenSize={convertScreenSize(screenSize)}
        showTitle={true}
      />
    </ModalWrapper>
  );
};