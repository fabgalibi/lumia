import { apiClient } from './api/api-client';

export interface DashboardSprintAtual {
  id: string;
  numeroSprint: number;
  dataInicio: string;
  dataFim: string;
  status: 'ativo' | 'concluido' | 'pendente';
  progresso: number;
  metas: MetaSprint[];
  estatisticas: {
    metasConcluidas: number;
    metasEmAndamento: number;
    metasPendentes: number;
    tempoTotalEstudado: string;
    desempenhoMedio: number;
  };
}

export interface MetaSprint {
  id: number;
  disciplinaId: number;
  disciplina: string;
  tipo: string; // Tipo de estudo (teoria, pratica, etc)
  assuntoId: number;
  assunto: string;
  comandos: string; // Comandos do mentor
  link: string; // Link para material
  relevancia: number; // 1-3 (número de estrelas preenchidas)
  tempoEstudado: string; // Formato "HH:MM"
  desempenho: string; // Formato "XX.XX"
  status: string; // "Pendente" ou "Concluído" (será convertido para lowercase)
  totalQuestoes: number;
  questoesCorretas: number;
  createdAt: string;
  updatedAt: string;
  sprintId: number;
  metaMestreId: number;
  posicao: number; // Número da meta
}

class SprintService {
  /**
   * Busca o dashboard do sprint atual
   * GET /sprint-atual/dashboard
   */
  async buscarDashboardSprintAtual(): Promise<DashboardSprintAtual> {
    try {
      const response = await apiClient.get<DashboardSprintAtual>('/sprint-atual/dashboard');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dashboard do sprint atual:', error);
      throw error;
    }
  }

  /**
   * Busca detalhes de uma meta específica
   * GET /sprint-atual/metas/{id}
   */
  async buscarDetalheMeta(metaId: string): Promise<MetaSprint> {
    try {
      const response = await apiClient.get<MetaSprint>(`/sprint-atual/metas/${metaId}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar detalhes da meta ${metaId}:`, error);
      throw error;
    }
  }

  /**
   * Marca uma meta como concluída
   * POST /sprint-atual/metas/{id}/concluir
   */
  async concluirMeta(metaId: string): Promise<void> {
    try {
      await apiClient.post(`/sprint-atual/metas/${metaId}/concluir`);
    } catch (error) {
      console.error(`Erro ao concluir meta ${metaId}:`, error);
      throw error;
    }
  }

  /**
   * Pula uma meta
   * POST /sprint-atual/metas/{id}/pular
   */
  async pularMeta(metaId: string, motivo?: string): Promise<void> {
    try {
      await apiClient.post(`/sprint-atual/metas/${metaId}/pular`, { motivo });
    } catch (error) {
      console.error(`Erro ao pular meta ${metaId}:`, error);
      throw error;
    }
  }
}

export const sprintService = new SprintService();

