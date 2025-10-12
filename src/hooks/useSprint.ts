import { useState, useEffect, useCallback } from 'react';
import { sprintService, type DashboardSprintAtual, type MetaSprint } from '@/services/sprint.service';

interface UseSprintReturn {
  dashboard: DashboardSprintAtual | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  concluirMeta: (metaId: string) => Promise<void>;
  pularMeta: (metaId: string, motivo?: string) => Promise<void>;
}

export const useSprint = (): UseSprintReturn => {
  const [dashboard, setDashboard] = useState<DashboardSprintAtual | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sprintService.buscarDashboardSprintAtual();
      setDashboard(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar dados do sprint');
      console.error('Erro ao buscar dashboard:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const concluirMeta = useCallback(async (metaId: string) => {
    try {
      await sprintService.concluirMeta(metaId);
      // Atualizar o dashboard após concluir a meta
      await fetchDashboard();
    } catch (err) {
      console.error('Erro ao concluir meta:', err);
      throw err;
    }
  }, [fetchDashboard]);

  const pularMeta = useCallback(async (metaId: string, motivo?: string) => {
    try {
      await sprintService.pularMeta(metaId, motivo);
      // Atualizar o dashboard após pular a meta
      await fetchDashboard();
    } catch (err) {
      console.error('Erro ao pular meta:', err);
      throw err;
    }
  }, [fetchDashboard]);

  return {
    dashboard,
    isLoading,
    error,
    refetch: fetchDashboard,
    concluirMeta,
    pularMeta,
  };
};

