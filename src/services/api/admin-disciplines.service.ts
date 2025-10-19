import { apiClient } from './api-client';

export interface Disciplina {
  idDisciplina: number;
  nome: string;
  codigo: string;
  status: boolean; // true = ativa, false = inativa
  totalAssuntos: number;
  dataCriacao: string;
}

export interface DisciplinasResponse {
  disciplinas: Disciplina[];
  total: number;
}

export interface Assunto {
  nome: string;
}

export interface CreateDisciplinaRequest {
  nome: string;
  assuntos: Assunto[];
}

export interface PaginationParams {
  pagina: number;
  limite: number;
  search?: string;
  status?: 'active' | 'inactive' | 'all';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export const adminDisciplinesService = {
  /**
   * Lista todas as disciplinas (sem paginação - para compatibilidade)
   */
  async getDisciplines(): Promise<Disciplina[]> {
    try {
      console.log('🔍 Buscando disciplinas na URL: /disciplinas');
      
      const response = await apiClient.get('/disciplinas');
      
      console.log('✅ Resposta da API de disciplinas:', response);
      
      // A API retorna um array direto de disciplinas
      if (Array.isArray(response)) {
        return response;
      }
      
      // Se retornar um objeto com data (estrutura { data: [...], status: 200 })
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      }
      
      // Se retornar um objeto com disciplinas
      if ((response as any).disciplinas && Array.isArray((response as any).disciplinas)) {
        return (response as any).disciplinas;
      }
      
      console.error('❌ Estrutura de resposta inválida:', response);
      return [];
      
    } catch (error: any) {
      console.error('❌ Erro ao buscar disciplinas:', error);
      throw new Error(error.message || 'Erro ao carregar disciplinas');
    }
  },

  /**
   * Lista disciplinas com paginação
   */
  async getDisciplinesPaginated(params: PaginationParams): Promise<PaginatedResponse<Disciplina>> {
    try {
      console.log('🔍 Buscando disciplinas paginadas:', params);
      
      const queryParams = new URLSearchParams({
        pagina: params.pagina.toString(),
        limite: params.limite.toString(),
        ...(params.search && { search: params.search }),
        ...(params.status && params.status !== 'all' && { status: params.status })
      });
      
      const response = await apiClient.get(`/disciplinas?${queryParams}`);
      
      console.log('✅ Resposta da API de disciplinas paginadas:', response);
      
      // Se a API retorna dados paginados com metadados
      if ((response as any).data && (response as any).pagination) {
        return {
          data: (response as any).data,
          pagination: (response as any).pagination
        };
      }
      
      // Se retorna {data: Array, status: number} - simular paginação
      if ((response as any).data && Array.isArray((response as any).data)) {
        const allData = (response as any).data;
        const startIndex = (params.pagina - 1) * params.limite;
        const endIndex = startIndex + params.limite;
        const paginatedData = allData.slice(startIndex, endIndex);
        
        return {
          data: paginatedData,
          pagination: {
            currentPage: params.pagina,
            totalPages: Math.ceil(allData.length / params.limite),
            totalItems: allData.length,
            itemsPerPage: params.limite
          }
        };
      }
      
      // Se retorna array direto, simular paginação
      if (Array.isArray(response)) {
        const startIndex = (params.pagina - 1) * params.limite;
        const endIndex = startIndex + params.limite;
        const paginatedData = response.slice(startIndex, endIndex);
        
        return {
          data: paginatedData,
          pagination: {
            currentPage: params.pagina,
            totalPages: Math.ceil(response.length / params.limite),
            totalItems: response.length,
            itemsPerPage: params.limite
          }
        };
      }
      
      console.error('❌ Estrutura de resposta inválida:', response);
      return {
        data: [],
        pagination: {
          currentPage: 1,
          totalPages: 0,
          totalItems: 0,
          itemsPerPage: params.limite
        }
      };
      
    } catch (error: any) {
      console.error('❌ Erro ao buscar disciplinas paginadas:', error);
      throw new Error(error.message || 'Erro ao carregar disciplinas');
    }
  },

  /**
   * Atualiza o status de uma disciplina
   */
  async updateDisciplineStatus(idDisciplina: number, status: boolean): Promise<void> {
    try {
      console.log(`🔄 Atualizando status da disciplina ${idDisciplina} para ${status}`);
      
      await apiClient.put(`/disciplinas/${idDisciplina}/status`, { status });
      
      console.log('✅ Status da disciplina atualizado com sucesso');
      
    } catch (error: any) {
      console.error('❌ Erro ao atualizar status da disciplina:', error);
      throw new Error(error.message || 'Erro ao atualizar status da disciplina');
    }
  },

  /**
   * Cadastra uma nova disciplina com assuntos
   */
  async createDiscipline(data: CreateDisciplinaRequest): Promise<Disciplina> {
    try {
      console.log('📝 Cadastrando nova disciplina:', data);
      
      const response = await apiClient.post('/disciplinas', data);
      
      console.log('✅ Disciplina cadastrada com sucesso:', response);
      
      // Retorna a disciplina criada
      return (response.data || response) as Disciplina;
      
    } catch (error: any) {
      console.error('❌ Erro ao cadastrar disciplina:', error);
      throw new Error(error.message || 'Erro ao cadastrar disciplina');
    }
  }
};
