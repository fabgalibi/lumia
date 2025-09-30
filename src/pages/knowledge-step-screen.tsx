import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout, KnowledgeSelectionContent } from '@/components/profile-setup';
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
    // Navegar diretamente sem adicionar chave vazia
    navigate('/profile-setup/trajectory');
  };

  const handleNextToFinal = () => {
    // Navegar diretamente sem adicionar chave vazia
    navigate('/profile-setup/final');
  };

  // Lógica mais inteligente para habilitar o botão
  const canProceed = (() => {
    // 1. Todas as disciplinas devem ter uma seleção (filtrar chaves vazias)
    const validKeys = Object.keys(knowledgeData).filter(key => key !== '');
    if (validKeys.length !== subjects.length) {
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
        <KnowledgeSelectionContent
          subjects={subjects}
          knowledgeData={knowledgeData}
          selectedTopics={selectedTopics}
          onLevelChange={handleLevelChange}
          onSelectSubjects={handleSelectSubjects}
          screenSize={screenSize}
          showTitles={true}
        />
      )}
    </ProfileLayout>
  );
}
