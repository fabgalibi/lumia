import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout, KnowledgeTable, KnowledgeHeader } from '@/components/profile-setup';

type KnowledgeLevel = 'never' | 'started' | 'finished' | 'polishing';
type SubjectId = string;

interface Subject {
  id: SubjectId;
  name: string;
  description: string;
}

const subjects: Subject[] = [
  { id: 'etica', name: 'Ética no Serviço Público', description: 'Nenhum assunto selecionado' },
  { id: 'direito-admin', name: 'Noções de Direito Administrativo', description: 'Nenhum assunto selecionado' },
  { id: 'legislacao-prev', name: 'Legislação Previdenciária', description: 'Nenhum assunto selecionado' },
  { id: 'direito', name: 'Direito', description: 'Nenhum assunto selecionado' },
  { id: 'administracao', name: 'Administração', description: 'Nenhum assunto selecionado' },
  { id: 'pericia-medica', name: 'Perícia Médica', description: 'Nenhum assunto selecionado' },
  { id: 'direito-const', name: 'Noções de Direito Constitucional', description: 'Nenhum assunto selecionado' }
];


export default function KnowledgeStepScreen() {
  const navigate = useNavigate();
  const [knowledgeData, setKnowledgeData] = useState<Record<SubjectId, KnowledgeLevel>>({});

  const handleLevelChange = (subjectId: SubjectId, level: KnowledgeLevel) => {
    setKnowledgeData(prev => ({
      ...prev,
      [subjectId]: level
    }));
  };

  const handleSelectSubjects = (subjectId: SubjectId) => {
    // TODO: Implementar modal ou tela para seleção de assuntos específicos
    console.log('Selecionar assuntos para:', subjectId);
  };

  const canProceed = Object.keys(knowledgeData).length === subjects.length;

  return (
    <ProfileLayout
      currentStep={5}
      totalSteps={6}
      stepTitle="Conhecimentos"
      backButtonText="Voltar a etapa 4"
      onBack={() => navigate('/profile-setup/trajectory')}
      onNext={() => navigate('/final-step')}
      canProceed={canProceed}
      nextButtonText="Prosseguir para etapa 6"
    >
      {(screenSize) => (
        <>
          <KnowledgeHeader screenSize={screenSize} />
          <KnowledgeTable
            subjects={subjects}
            knowledgeData={knowledgeData}
            onLevelChange={handleLevelChange}
            onSelectSubjects={handleSelectSubjects}
          />
        </>
      )}
    </ProfileLayout>
  );
}
