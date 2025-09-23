import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout, KnowledgeTable, KnowledgeHeader } from '@/components/profile-setup';
import { useProfileSetup } from '@/contexts/profile-setup-context';


export default function KnowledgeStepScreen() {
  const navigate = useNavigate();
  const { state, updateKnowledgeData, updateSelectedTopics } = useProfileSetup();
  
  const { knowledgeData, selectedTopics, subjects } = state;

  const handleLevelChange = (subjectId: string, level: 'never' | 'started' | 'finished' | 'polishing') => {
    updateKnowledgeData(subjectId, level);
  };

  const handleSelectSubjects = (subjectId: string, selectedTopics: string[]) => {
    updateSelectedTopics(subjectId, selectedTopics);
    console.log('Assuntos selecionados para', subjectId, ':', selectedTopics);
  };

  const handleBackToStep4 = () => {
    // Salvar dados antes de voltar
    updateKnowledgeData('', 'never'); // Trigger para salvar estado atual
    navigate('/profile-setup/trajectory');
  };

  const handleNextToFinal = () => {
    // Salvar dados antes de avançar
    updateKnowledgeData('', 'never'); // Trigger para salvar estado atual
    navigate('/final-step');
  };

  // Lógica mais inteligente para habilitar o botão
  const canProceed = (() => {
    // 1. Todas as disciplinas devem ter uma seleção
    if (Object.keys(knowledgeData).length !== subjects.length) {
      return false;
    }
    
    // 2. Se selecionou opção diferente de "Nunca estudei", deve ter assuntos selecionados
    for (const subjectId of subjects.map(s => s.id)) {
      const level = knowledgeData[subjectId];
      if (level && level !== 'never') {
        // Se não é "Nunca estudei", deve ter assuntos selecionados
        const hasSelectedTopics = selectedTopics[subjectId] && selectedTopics[subjectId].length > 0;
        if (!hasSelectedTopics) {
          return false;
        }
      }
    }
    
    return true;
  })();

  return (
    <ProfileLayout
      currentStep={5}
      totalSteps={6}
      stepTitle="Conhecimentos"
      backButtonText="Voltar a etapa 4"
      onBack={handleBackToStep4}
      onNext={handleNextToFinal}
      canProceed={canProceed}
      nextButtonText="Prosseguir para etapa 6"
    >
      {(screenSize) => (
        <>
          <KnowledgeHeader screenSize={screenSize} />
          <KnowledgeTable
            subjects={subjects}
            knowledgeData={knowledgeData}
            selectedTopics={selectedTopics}
            onLevelChange={handleLevelChange}
            onSelectSubjects={handleSelectSubjects}
            screenSize={screenSize}
          />
        </>
      )}
    </ProfileLayout>
  );
}
