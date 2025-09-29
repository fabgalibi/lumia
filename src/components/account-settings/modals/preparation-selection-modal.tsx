import React, { useState, useEffect } from 'react';
import { ModalWrapper } from './modal-wrapper';
import { PreparationSelectionContent } from '@/components/profile-setup/step2-preparation';

interface PreparationData {
  selectedPreparationType: string;
  temConcursoEspecifico: string;
  concursoEspecifico: string;
}

interface PreparationSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPreparation?: string;
  onSave: (preparationData: PreparationData) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const PreparationSelectionModal: React.FC<PreparationSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedPreparation,
  onSave,
  screenSize = 'desktop'
}) => {
  const [preparationData, setPreparationData] = useState<PreparationData>({
    selectedPreparationType: selectedPreparation || 'pre-edital',
    temConcursoEspecifico: 'sim',
    concursoEspecifico: ''
  });

  // Reset preparation data when modal opens
  useEffect(() => {
    if (isOpen) {
      setPreparationData({
        selectedPreparationType: selectedPreparation || 'pre-edital',
        temConcursoEspecifico: 'sim',
        concursoEspecifico: ''
      });
    }
  }, [isOpen, selectedPreparation]);

  const handlePreparationDataChange = (newData: Partial<PreparationData>) => {
    setPreparationData(prev => ({ ...prev, ...newData }));
  };

  const handleSave = () => {
    onSave(preparationData);
    onClose();
  };

  const handleCancel = () => {
    setPreparationData({
      selectedPreparationType: selectedPreparation || 'pre-edital',
      temConcursoEspecifico: 'sim',
      concursoEspecifico: ''
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
      title="Selecionar Tipo de Preparação"
      onSave={handleSave}
      onCancel={handleCancel}
      canSave={!!preparationData.selectedPreparationType}
    >
      <PreparationSelectionContent
        preparationData={preparationData}
        onPreparationDataChange={handlePreparationDataChange}
        screenSize={convertScreenSize(screenSize)}
        showTitles={true}
      />
    </ModalWrapper>
  );
};