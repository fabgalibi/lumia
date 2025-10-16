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

export interface MetaDetailResponse {
  disciplina: string;
  status: string;
  assunto: string;
  tipoEstudo: string;
  comandosMentor: string;
  relevancia: number;
  desempenho: number;
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
  },

  async getMetaDetail(sprintId: string, metaId: string): Promise<MetaDetailResponse> {
    console.log('🔵 SERVICE: getMetaDetail chamado', { sprintId, metaId });
    
    // Validar se os IDs são números válidos
    const numericSprintId = parseInt(sprintId, 10);
    const numericMetaId = parseInt(metaId, 10);
    
    console.log('🔵 SERVICE: IDs convertidos', { numericSprintId, numericMetaId });
    
    if (isNaN(numericSprintId) || numericSprintId <= 0) {
      console.error('❌ SERVICE: Sprint ID inválido');
      throw new Error(`ID da sprint deve ser um número válido: ${sprintId}`);
    }
    
    if (isNaN(numericMetaId) || numericMetaId <= 0) {
      console.error('❌ SERVICE: Meta ID inválido');
      throw new Error(`ID da meta deve ser um número válido: ${metaId}`);
    }
    
    const url = `/sprints/aluno/historico/detalhes/${numericSprintId}/meta/${numericMetaId}`;
    console.log('🔵 SERVICE: Fazendo requisição para:', url);
    
    const response = await apiClient.get(url);
    console.log('✅ SERVICE: Resposta recebida:', response.data);
    return response.data as MetaDetailResponse;
  }
};
