import { apiClient } from './api/api-client';
import type { DashboardSprintAtual } from '@/types';

class SprintService {
  /**
   * Endpoint de inicialização (chamado antes do dashboard)
   * GET /sprint-atual
   */
  async inicializarSprint(): Promise<void> {
    try {
      console.log('Inicializando sprint...');
      await apiClient.get('/sprint-atual');
      console.log('Sprint inicializado com sucesso');
    } catch (error) {
      console.error('Erro ao inicializar sprint:', error);
      // Não lança erro para não quebrar o fluxo principal
    }
  }

  /**
   * Busca o dashboard do sprint atual
   * GET /sprint-atual/dashboard
   */
  async buscarDashboardSprintAtual(): Promise<DashboardSprintAtual> {
    try {
      // Sempre chamar inicialização antes do dashboard
      await this.inicializarSprint();
      
      const response = await apiClient.get<DashboardSprintAtual>('/sprint-atual/dashboard');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dashboard do sprint atual:', error);
      throw error;
    }
  }

  /**
   * Conclui uma meta atualizando os dados de desempenho
   * PUT /sprints/meta/{id}
   */
  async concluirMeta(
    metaId: string,
    dados: {
      tempoEstudado: string; // Formato: "HH:MM"
      totalQuestoes: number;
      questoesCorretas: number;
    }
  ): Promise<void> {
    try {
      console.log(`Concluindo meta ${metaId} com dados:`, dados);
      
      await apiClient.put(`/sprints/meta/${metaId}`, dados);
    } catch (error) {
      console.error(`Erro ao concluir meta ${metaId}:`, error);
      throw error;
    }
  }
}

export const sprintService = new SprintService();

