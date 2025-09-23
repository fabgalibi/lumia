import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos para o estado do profile setup
export type KnowledgeLevel = 'never' | 'started' | 'finished' | 'polishing';
export type SubjectId = string;

export interface Subject {
  id: SubjectId;
  name: string;
  description: string;
  topics: Array<{
    id: string;
    name: string;
    selected: boolean;
  }>;
}

export interface ProfileSetupState {
  // Etapa 1 - Área de Estudo
  selectedArea: string;
  
  // Etapa 2 - Preparação (exemplo)
  preparationData?: any;
  
  // Etapa 3 - Disponibilidade (exemplo)
  availabilityData?: any;
  
  // Etapa 4 - Trajetória (exemplo)
  trajectoryData?: any;
  
  // Etapa 5 - Conhecimentos
  knowledgeData: Record<SubjectId, KnowledgeLevel>;
  selectedTopics: Record<string, string[]>;
  subjects: Subject[];
}

interface ProfileSetupContextType {
  state: ProfileSetupState;
  updateSelectedArea: (area: string) => void;
  updatePreparationData: (data: any) => void;
  updateAvailabilityData: (data: any) => void;
  updateTrajectoryData: (data: any) => void;
  updateKnowledgeData: (subjectId: SubjectId, level: KnowledgeLevel) => void;
  updateSelectedTopics: (subjectId: string, topics: string[]) => void;
  resetState: () => void;
}

const ProfileSetupContext = createContext<ProfileSetupContextType | undefined>(undefined);

// Dados iniciais das disciplinas
const initialSubjects: Subject[] = [
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
      { id: '1', name: 'Fundamentos da Perícia Médica', selected: false },
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

// Estado inicial
const initialState: ProfileSetupState = {
  selectedArea: 'controle', // área pré-selecionada
  knowledgeData: {}, // Inicializar sem seleções (botão desabilitado)
  selectedTopics: {},
  subjects: initialSubjects
};

export const ProfileSetupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ProfileSetupState>(initialState);

  const updateSelectedArea = (area: string) => {
    setState(prev => ({ ...prev, selectedArea: area }));
  };

  const updatePreparationData = (data: any) => {
    setState(prev => ({ ...prev, preparationData: data }));
  };

  const updateAvailabilityData = (data: any) => {
    setState(prev => ({ ...prev, availabilityData: data }));
  };

  const updateTrajectoryData = (data: any) => {
    setState(prev => ({ ...prev, trajectoryData: data }));
  };

  const updateKnowledgeData = (subjectId: SubjectId, level: KnowledgeLevel) => {
    setState(prev => ({
      ...prev,
      knowledgeData: {
        ...prev.knowledgeData,
        [subjectId]: level
      }
    }));
  };

  const updateSelectedTopics = (subjectId: string, topics: string[]) => {
    setState(prev => ({
      ...prev,
      selectedTopics: {
        ...prev.selectedTopics,
        [subjectId]: topics
      }
    }));
  };

  const resetState = () => {
    setState(initialState);
  };

  const value: ProfileSetupContextType = {
    state,
    updateSelectedArea,
    updatePreparationData,
    updateAvailabilityData,
    updateTrajectoryData,
    updateKnowledgeData,
    updateSelectedTopics,
    resetState
  };

  return (
    <ProfileSetupContext.Provider value={value}>
      {children}
    </ProfileSetupContext.Provider>
  );
};

export const useProfileSetup = () => {
  const context = useContext(ProfileSetupContext);
  if (context === undefined) {
    throw new Error('useProfileSetup must be used within a ProfileSetupProvider');
  }
  return context;
};
