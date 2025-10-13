import { useState, useEffect, useCallback } from 'react';
import { sprintService } from '@/services/sprint.service';
import type { DashboardSprintAtual } from '@/types';

interface UseSprintReturn {
  dashboard: DashboardSprintAtual | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  concluirMeta: (metaId: string, dados?: { tempoEstudado: string; totalQuestoes: number; questoesCorretas: number }) => Promise<void>;
  // pularMeta: (metaId: string, motivo?: string) => Promise<void>; // Endpoint ainda não implementado
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
      
      // Log para debug - verificar se os dados estão chegando corretos
      console.log('Dashboard data received:', {
        metasConcluidas: data?.metricas?.metasConcluidas,
        metasPendentes: data?.metricas?.totalMetas - data?.metricas?.metasConcluidas,
        metas: data?.metas?.map(m => ({ id: m.id, status: m.status }))
      });
      
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

  const concluirMeta = useCallback(async (
    metaId: string, 
    dados?: { tempoEstudado: string; totalQuestoes: number; questoesCorretas: number }
  ) => {
    try {
      // Se tiver dados, chama a API. Se não, só faz o refetch (pois o modal já salvou)
      if (dados) {
        await sprintService.concluirMeta(metaId, dados);
      }
      // Atualizar o dashboard após concluir a meta
      await fetchDashboard();
    } catch (err) {
      console.error('Erro ao concluir meta:', err);
      throw err;
    }
  }, [fetchDashboard]);

  // const pularMeta = useCallback(async (metaId: string, motivo?: string) => {
  //   try {
  //     await sprintService.pularMeta(metaId, motivo);
  //     // Atualizar o dashboard após pular a meta
  //     await fetchDashboard();
  //   } catch (err) {
  //     console.error('Erro ao pular meta:', err);
  //     throw err;
  //   }
  // }, [fetchDashboard]);

  return {
    dashboard,
    isLoading,
    error,
    refetch: fetchDashboard,
    concluirMeta,
    // pularMeta, // Endpoint ainda não implementado
  };
};

