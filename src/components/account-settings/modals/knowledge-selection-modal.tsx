import React, { useState, useEffect } from 'react';
import { ModalWrapper } from './modal-wrapper';
import { KnowledgeSelectionContent } from '@/components/profile-setup/step5-knowledge';

interface KnowledgeData {
  [subjectId: string]: 'never' | 'started' | 'finished' | 'polishing';
}

interface SelectedTopics {
  [subjectId: string]: string[];
}

interface Subject {
  id: string;
  name: string;
  description: string;
  topics: Array<{
    id: string;
    name: string;
    selected: boolean;
  }>;
}

interface KnowledgeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKnowledge?: string;
  onSave: (knowledgeData: KnowledgeData) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

// Dados das disciplinas (mesmos do contexto original)
const subjects: Subject[] = [
  { 
    id: 'etica', 
    name: 'Ética no Serviço Público', 
    description: 'Nenhum assunto selecionado',
    topics: [
      { id: '1', name: 'Teoria Geral do Direito Constitucional', selected: false },
      { id: '2', name: 'Constituição: Conceito, estrutura, supremacia e classificação', selected: false },
      { id: '3', name: 'Poder Constituinte', selected: false },
      { id: '4', name: 'Controle de Constitucionalidade', selected: false }
    ]
  },
  { 
    id: 'direito-admin', 
    name: 'Noções de Direito Administrativo', 
    description: 'Nenhum assunto selecionado',
    topics: [
      { id: '1', name: 'Princípios da Administração Pública', selected: false },
      { id: '2', name: 'Organização da Administração Pública', selected: false },
      { id: '3', name: 'Poderes Administrativos', selected: false },
      { id: '4', name: 'Atos Administrativos', selected: false }
    ]
  },
  { 
    id: 'legislacao-prev', 
    name: 'Legislação Previdenciária', 
    description: 'Nenhum assunto selecionado',
    topics: [
      { id: '1', name: 'Regime Geral de Previdência Social', selected: false },
      { id: '2', name: 'Regimes Próprios de Previdência Social', selected: false },
      { id: '3', name: 'Benefícios Previdenciários', selected: false },
      { id: '4', name: 'Financiamento da Seguridade Social', selected: false }
    ]
  },
  { 
    id: 'direito', 
    name: 'Direito', 
    description: 'Nenhum assunto selecionado',
    topics: [
      { id: '1', name: 'Direito Civil', selected: false },
      { id: '2', name: 'Direito Penal', selected: false },
      { id: '3', name: 'Direito Processual', selected: false },
      { id: '4', name: 'Direito Tributário', selected: false }
    ]
  },
  { 
    id: 'administracao', 
    name: 'Administração',
    description: 'Nenhum assunto selecionado',
    topics: [
      { id: '1', name: 'Gestão Pública', selected: false },
      { id: '2', name: 'Planejamento Estratégico', selected: false },
      { id: '3', name: 'Controle Interno', selected: false },
      { id: '4', name: 'Licitações e Contratos', selected: false }
    ]
  },
  { 
    id: 'pericia-medica', 
    name: 'Perícia Médica', 
    description: 'Nenhum assunto selecionado',
    topics: [
      { id: '1', name: 'Fundamentos da Perícia médica', selected: false },
      { id: '2', name: 'Avaliação de Incapacidade', selected: false },
      { id: '3', name: 'Doenças Profissionais', selected: false },
      { id: '4', name: 'Aposentadoria por Invalidez', selected: false }
    ]
  },
  { 
    id: 'direito-const', 
    name: 'Noções de Direito Constitucional', 
    description: 'Nenhum assunto selecionado',
    topics: [
      { id: '1', name: 'Teoria Geral do Direito Constitucional', selected: false },
      { id: '2', name: 'Constituição: Conceito, estrutura, supremacia e classificação', selected: false },
      { id: '3', name: 'Poder Constituinte', selected: false },
      { id: '4', name: 'Controle de Constitucionalidade', selected: false }
    ]
  }
];

export const KnowledgeSelectionModal: React.FC<KnowledgeSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedKnowledge,
  onSave,
  screenSize = 'desktop'
}) => {
  const [knowledgeData, setKnowledgeData] = useState<KnowledgeData>({});
  const [selectedTopics, setSelectedTopics] = useState<SelectedTopics>({});

  // Reset knowledge data when modal opens
  useEffect(() => {
    if (isOpen) {
      setKnowledgeData({});
      setSelectedTopics({});
    }
  }, [isOpen]);

  const handleLevelChange = (subjectId: string, level: 'never' | 'started' | 'finished' | 'polishing') => {
    setKnowledgeData(prev => ({
      ...prev,
      [subjectId]: level
    }));
  };

  const handleSelectSubjects = (subjectId: string, topics: string[]) => {
    setSelectedTopics(prev => ({
      ...prev,
      [subjectId]: topics
    }));
  };

  const handleSave = () => {
    onSave(knowledgeData);
    onClose();
  };

  const handleCancel = () => {
    setKnowledgeData({});
    setSelectedTopics({});
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
      title="Conhecimentos"
      subtitle="Referente ao seu nível geral de conhecimentos."
      onSave={handleSave}
      onCancel={handleCancel}
      canSave={Object.keys(knowledgeData).length > 0}
    >
      <KnowledgeSelectionContent
        subjects={subjects}
        knowledgeData={knowledgeData}
        selectedTopics={selectedTopics}
        onLevelChange={handleLevelChange}
        onSelectSubjects={handleSelectSubjects}
        screenSize={convertScreenSize(screenSize)}
        showTitles={true}
      />
    </ModalWrapper>
  );
};
