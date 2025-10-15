import { apiClient } from './api/api-client';

export interface SprintDetailResponse {
  cardResumo: {
    status: string;
    nomeSprint: string;
    cargoPlano: string;
    desempenhoSprint: number;
    metaPendentes: number;
    totalMetas: number;
    totalDisciplinas: number;
    ultimaAtualizacao: string;
  };
  cardMetas: {
    listaMetas: Array<{
      idMeta: number;
      nomeDisciplina: string;
    }>;
  };
  cardComplemento: {
    progressoSprint: number;
    dataInicio: string;
    dataFim: string;
    tempoMedioMeta: string;
  };
}

export const sprintDetailService = {
  async getSprintDetail(sprintId: string): Promise<SprintDetailResponse> {
    // Validar se o sprintId é um número válido
    const numericId = parseInt(sprintId, 10);
    if (isNaN(numericId) || numericId <= 0) {
      throw new Error(`ID da sprint deve ser um número válido: ${sprintId}`);
    }
    
    const response = await apiClient.get(`/sprints/aluno/historico/detalhes/${numericId}`);
    console.log('API Response from server:', response.data);
    return response.data as SprintDetailResponse;
  }
};
