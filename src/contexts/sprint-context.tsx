import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DashboardSprintAtual } from '@/types/sprint';
import { sprintService } from '@/services/sprint.service';

interface SprintContextType {
  progress: number;
  setProgress: (progress: number) => void;
  updateProgress: (increment: number) => void;
  sprintData: DashboardSprintAtual | null;
  isLoading: boolean;
  error: string | null;
  refreshSprint: () => Promise<void>;
}

const SprintContext = createContext<SprintContextType | undefined>(undefined);

export const useSprint = () => {
  const context = useContext(SprintContext);
  if (!context) {
    throw new Error('useSprint must be used within a SprintProvider');
  }
  return context;
};

interface SprintProviderProps {
  children: ReactNode;
}

export const SprintProvider: React.FC<SprintProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState(0); // Inicializar com 0, será atualizado pela API
  const [sprintData, setSprintData] = useState<DashboardSprintAtual | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProgress = (increment: number) => {
    setProgress(prev => Math.min(prev + increment, 100));
  };

  const refreshSprint = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await sprintService.buscarDashboardSprintAtual();
      setSprintData(data);
      // Atualizar o progress com o percentual real
      if (data?.metricas?.percentualConclusao !== undefined) {
        console.log('Atualizando progresso do contexto:', data.metricas.percentualConclusao);
        setProgress(data.metricas.percentualConclusao);
      }
    } catch (err) {
      console.error('Erro ao carregar sprint:', err);
      setError('Erro ao carregar dados da sprint');
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar dados ao montar
  useEffect(() => {
    refreshSprint();
  }, []);

  return (
    <SprintContext.Provider value={{ 
      progress, 
      setProgress, 
      updateProgress, 
      sprintData, 
      isLoading, 
      error, 
      refreshSprint 
    }}>
      {children}
    </SprintContext.Provider>
  );
};
