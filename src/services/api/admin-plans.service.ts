import { apiClient } from './api-client';

export interface PlanoMestre {
  idPlanoMestre: number;
  nome: string;
  codigo: string;
  status: boolean;
  totalDisciplinas: number;
  nomeCargo: string;
  dataCriacao: string;
}

export interface PlanosResponse {
  data: PlanoMestre[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
  status?: 'active' | 'inactive';
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

export const adminPlansService = {
  /**
   * Busca todos os planos mestres
   */
  async getPlans(): Promise<PlanoMestre[]> {
    try {
      console.log('🔍 Buscando planos na URL: /planos-mestre/mestre');

      const response = await apiClient.get('/planos-mestre/mestre');

      console.log('✅ Resposta da API de planos:', response);

      // A API retorna um objeto com data e meta
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      }

      // Se retornar um objeto com data (estrutura { data: [...], meta: {...} })
      if ((response as any).data && (response as any).data.data && Array.isArray((response as any).data.data)) {
        return (response as any).data.data;
      }

      console.error('❌ Estrutura de resposta inválida:', response);
      return [];

    } catch (error: any) {
      console.error('❌ Erro ao buscar planos:', error);
      throw new Error(error.message || 'Erro ao carregar planos');
    }
  },

  /**
   * Busca planos com paginação, busca e filtro de status
   */
  async getPlansPaginated(params: PaginationParams): Promise<PaginatedResponse<PlanoMestre>> {
    try {
      console.log('🔍 Buscando planos paginados:', params);

      const queryParams = new URLSearchParams({
        page: params.page.toString(),
        limit: params.limit.toString(),
        ...(params.search && { search: params.search }),
        ...(params.status && { status: params.status })
      });

      const response = await apiClient.get(`/planos-mestre/mestre?${queryParams}`);

      console.log('✅ Resposta da API de planos paginados:', response);

      // Se a API retorna dados paginados com metadados em data.meta
      if (response.data && (response.data as any).meta) {
        const responseData = response.data as any;
        return {
          data: responseData.data,
          pagination: {
            currentPage: responseData.meta.page || params.page,
            totalPages: responseData.meta.totalPages || Math.ceil(responseData.meta.total / params.limit),
            totalItems: responseData.meta.total || responseData.data.length,
            itemsPerPage: params.limit
          }
        };
      }

      // Fallback: Se a API retorna dados paginados com metadados em meta
      if (response.data && (response as any).meta) {
        const responseMeta = (response as any).meta;
        return {
          data: response.data as PlanoMestre[],
          pagination: {
            currentPage: responseMeta.page || params.page,
            totalPages: responseMeta.totalPages || Math.ceil(responseMeta.total / params.limit),
            totalItems: responseMeta.total || (response.data as PlanoMestre[]).length,
            itemsPerPage: params.limit
          }
        };
      }

      // Se retorna array direto, simular paginação
      if (Array.isArray(response.data)) {
        const startIndex = (params.page - 1) * params.limit;
        const endIndex = startIndex + params.limit;
        const paginatedData = response.data.slice(startIndex, endIndex);

        return {
          data: paginatedData,
          pagination: {
            currentPage: params.page,
            totalPages: Math.ceil(response.data.length / params.limit),
            totalItems: response.data.length,
            itemsPerPage: params.limit
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
          itemsPerPage: params.limit
        }
      };

    } catch (error: any) {
      console.error('❌ Erro ao buscar planos paginados:', error);
      throw new Error(error.message || 'Erro ao carregar planos');
    }
  },

  /**
   * Atualiza o status de um plano
   */
  async updatePlanStatus(idPlanoMestre: number, status: boolean): Promise<void> {
    try {
      console.log(`🔄 Atualizando status do plano ${idPlanoMestre} para ${status}`);

      await apiClient.patch(`/planos-mestre/${idPlanoMestre}/status`, { status });

      console.log(`✅ Status do plano ${idPlanoMestre} atualizado com sucesso.`);
    } catch (error: any) {
      console.error(`❌ Erro ao atualizar status do plano ${idPlanoMestre}:`, error);
      throw new Error(error.message || 'Erro ao atualizar status do plano');
    }
  }
};