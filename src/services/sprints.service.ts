import { apiClient } from './api';

export interface SprintHistoricoResponse {
  sprintAtual: {
    idSprint: number;
    nomeSprint: string;
    cargoPlano: string;
    metaPendentes: number;
    status: string;
    progressoSprint: number;
  };
  sprintsPendentes: Array<{
    idSprint: number;
    nomeSprint: string;
  }>;
  sprintsFinalizadas: Array<{
    idSprint: number;
    nomeSprint: string;
    cargoPlano: string;
    dataConclusaoSprint: string;
    statusSprint: string;
    progressoSprint: number;
  }>;
}

export const sprintsService = {
  async buscarHistoricoSprints(): Promise<SprintHistoricoResponse> {
    try {
      const response = await apiClient.get('/sprints/aluno/historico');
      console.log('Dados de sprints recebidos:', response.data);
      return response.data as SprintHistoricoResponse;
    } catch (error) {
      console.error('Erro ao buscar histórico de sprints:', error);
      throw error;
    }
  }
};
