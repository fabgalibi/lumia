import React, { useState } from 'react';
import { FormSection, SectionLabel, FormFieldArea, DisplayField, ErrorMessage, FormContainer, InfoMessage } from '../../index';
import { StudyAreaSelectionModal, PreparationSelectionModal, AvailabilitySelectionModal, TrajectorySelectionModal, KnowledgeSelectionModal } from '../../modals';
import { calculateGeneralLevel } from '@/components/profile-setup/step6-final/data-helpers';

interface ContentFormProps {
  formData: {
    studyArea: string;
    preparation: string;
    availability: string;
    trajectory: string;
    knowledge: string;
    startDate: string;
  };
  onInputChange: (field: string, value: string) => void;
  validationErrors?: {
    studyArea?: string;
    preparation?: string;
    availability?: string;
    trajectory?: string;
    knowledge?: string;
    startDate?: string;
  };
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const ContentForm: React.FC<ContentFormProps> = ({
  formData,
  onInputChange: _onInputChange,
  validationErrors = {},
  screenSize = 'desktop'
}) => {
  const [isStudyAreaModalOpen, setIsStudyAreaModalOpen] = useState(false);
  const [isPreparationModalOpen, setIsPreparationModalOpen] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [isTrajectoryModalOpen, setIsTrajectoryModalOpen] = useState(false);
  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState(false);

  // Função para obter descrição do nível de conhecimento
  const getLevelDescription = (level: number): string => {
    switch(level) {
      case 1: return 'Nunca estudei';
      case 2: return 'Comecei teoria, mas não terminei';
      case 3: return 'Terminei teoria, mas não tenho confiança';
      case 4: return 'Só falta aparar as arestas';
      default: return 'Nunca estudei';
    }
  };

  // Função para formatar valores para exibição
  const formatDisplayValue = (value: string, type: 'studyArea' | 'preparation' | 'availability' | 'trajectory' | 'knowledge') => {
    if (type === 'studyArea') {
      const areaMap: Record<string, string> = {
        'fiscal': 'Fiscal',
        'controle': 'Controle',
        'policial': 'Policial',
        'tribunais': 'Tribunais',
        'outros': 'Outros'
      };
      return areaMap[value] || value;
    }
    
    if (type === 'preparation') {
      const preparationMap: Record<string, string> = {
        'pre-edital': 'Pré-edital',
        'pos-edital': 'Pós-edital'
      };
      return preparationMap[value] || value;
    }
    
    if (type === 'availability') {
      const availabilityMap: Record<string, string> = {
        'facil': 'Fácil (20-29 horas semanais)',
        'normal': 'Normal (30-39 horas semanais)',
        'dificil': 'Difícil (40+ horas semanais)'
      };
      return availabilityMap[value] || value;
    }
    
    if (type === 'trajectory') {
      const trajectoryMap: Record<string, string> = {
        'ferro': 'Ferro (menos de 6 meses)',
        'bronze': 'Bronze (6 meses - 1 ano)',
        'prata': 'Prata (1 - 2 anos e meio)',
        'ouro': 'Ouro (2 anos e meio - 4 anos)',
        'diamante': 'Diamante (mais de 4 anos)'
      };
      return trajectoryMap[value] || value;
    }
    
    if (type === 'knowledge') {
      // Se value é um objeto de conhecimentos, calcular nível geral
      if (typeof value === 'object' && value !== null) {
        const generalLevel = calculateGeneralLevel(value as Record<string, string>);
        return `Nível ${generalLevel} (${getLevelDescription(generalLevel)})`;
      }
      
      // Se value é um ID simples, mapear diretamente
      const knowledgeMap: Record<string, string> = {
        'never': 'Nunca estudei',
        'started': 'Comecei teoria, mas não terminei',
        'finished': 'Terminei teoria, mas não tenho confiança',
        'polishing': 'Estou polindo e revisando'
      };
      return knowledgeMap[value] || value;
    }
    
    return value;
  };

  const handleStudyAreaSelect = (areaId: string) => {
    _onInputChange('studyArea', areaId);
    setIsStudyAreaModalOpen(false);
  };

  const handlePreparationSelect = (preparationData: any) => {
    // Para o modal de preparação, vamos usar o tipo selecionado
    _onInputChange('preparation', preparationData.selectedPreparationType);
    setIsPreparationModalOpen(false);
  };

  const handleAvailabilitySelect = (availabilityData: any) => {
    // Para o modal de disponibilidade, vamos usar o tempo de estudo selecionado
    _onInputChange('availability', availabilityData.selectedStudyTime);
    setIsAvailabilityModalOpen(false);
  };

  const handleTrajectorySelect = (trajectoryData: any) => {
    // Para o modal de trajetória, vamos usar o tempo de estudo selecionado
    _onInputChange('trajectory', trajectoryData.studyTime);
    setIsTrajectoryModalOpen(false);
  };

  const handleKnowledgeSelect = (knowledgeData: any) => {
    // Para o modal de conhecimentos, vamos usar o objeto completo de conhecimentos
    _onInputChange('knowledge', knowledgeData);
    setIsKnowledgeModalOpen(false);
  };

  return (
    <FormContainer screenSize={screenSize}>
      {/* Área de Estudo */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Área de Estudo"
          supportingText="Referente a área de estudo que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
          <DisplayField
            value={formatDisplayValue(formData.studyArea, 'studyArea')}
            screenSize={screenSize}
            onClick={() => setIsStudyAreaModalOpen(true)}
            clickable={true}
          />
          {validationErrors.studyArea && (
            <ErrorMessage 
              message={validationErrors.studyArea} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>

      {/* Preparação */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Preparação"
          supportingText="Referente ao tipo de preparação que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
          <DisplayField
            value={formatDisplayValue(formData.preparation, 'preparation')}
            screenSize={screenSize}
            onClick={() => setIsPreparationModalOpen(true)}
            clickable={true}
          />
          {validationErrors.preparation && (
            <ErrorMessage 
              message={validationErrors.preparation} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>

      {/* Disponibilidade */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Disponibilidade"
          supportingText="Referente ao tempo de dedicação ao estudos que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '100%'
          }}>
            <DisplayField
              value={formatDisplayValue(formData.availability, 'availability')}
              screenSize={screenSize}
              onClick={() => setIsAvailabilityModalOpen(true)}
              clickable={true}
            />
            
            <InfoMessage
              message={`Iniciou em: ${formData.startDate}`}
              screenSize={screenSize}
            />
            
            {validationErrors.availability && (
              <ErrorMessage 
                message={validationErrors.availability} 
                screenSize={screenSize} 
              />
            )}
          </div>
        </FormFieldArea>
      </FormSection>

      {/* Trajetória */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Trajetória"
          supportingText="Referente ao tempo estudado que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
            <DisplayField
              value={formatDisplayValue(formData.trajectory, 'trajectory')}
              screenSize={screenSize}
              onClick={() => setIsTrajectoryModalOpen(true)}
              clickable={true}
            />
          {validationErrors.trajectory && (
            <ErrorMessage 
              message={validationErrors.trajectory} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>

      {/* Conhecimentos */}
      <FormSection screenSize={screenSize} withDivider={false}>
        <SectionLabel 
          screenSize={screenSize}
          title="Conhecimentos"
          supportingText="Referente ao seu nível geral de conhecimentos."
        />
        <FormFieldArea screenSize={screenSize}>
            <DisplayField
              value={formatDisplayValue(formData.knowledge, 'knowledge')}
              screenSize={screenSize}
              onClick={() => setIsKnowledgeModalOpen(true)}
              clickable={true}
            />
          {validationErrors.knowledge && (
            <ErrorMessage 
              message={validationErrors.knowledge} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>

      {/* Modal de Seleção de Área de Estudo */}
      <StudyAreaSelectionModal
        isOpen={isStudyAreaModalOpen}
        onClose={() => setIsStudyAreaModalOpen(false)}
        selectedArea={formData.studyArea}
        onSave={handleStudyAreaSelect}
        screenSize={screenSize}
      />

      {/* Modal de Seleção de Tipo de Preparação */}
      <PreparationSelectionModal
        isOpen={isPreparationModalOpen}
        onClose={() => setIsPreparationModalOpen(false)}
        selectedPreparation={formData.preparation}
        onSave={handlePreparationSelect}
        screenSize={screenSize}
      />

      {/* Modal de Seleção de Disponibilidade */}
      <AvailabilitySelectionModal
        isOpen={isAvailabilityModalOpen}
        onClose={() => setIsAvailabilityModalOpen(false)}
        selectedAvailability={formData.availability}
        onSave={handleAvailabilitySelect}
        screenSize={screenSize}
      />

      {/* Modal de Seleção de Trajetória */}
      <TrajectorySelectionModal
        isOpen={isTrajectoryModalOpen}
        onClose={() => setIsTrajectoryModalOpen(false)}
        selectedTrajectory={formData.trajectory}
        onSave={handleTrajectorySelect}
        screenSize={screenSize}
      />

      {/* Modal de Seleção de Conhecimentos */}
      <KnowledgeSelectionModal
        isOpen={isKnowledgeModalOpen}
        onClose={() => setIsKnowledgeModalOpen(false)}
        selectedKnowledge={formData.knowledge}
        onSave={handleKnowledgeSelect}
        screenSize={screenSize}
      />
    </FormContainer>
  );
};
