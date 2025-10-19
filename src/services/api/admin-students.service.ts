/**
 * Admin Students Service
 * Serviço para buscar dados dos alunos no dashboard administrativo
 */

import { apiClient } from './api-client';

export interface Aluno {
  idAluno: number;
  nomeAluno: string;
  emailAluno: string;
  cpfAluno: string | null;
  planoAtivo: string | null;
  dataCadastro: string; // YYYY-MM-DD
  dataNascimento?: string | null; // YYYY-MM-DD
  status: 'ativo' | 'inativo';
}

export interface Paginacao {
  pagina: number;
  limite: number;
  total: number;
  totalPaginas: number;
}

export interface AdminStudentsResponse {
  alunos: Aluno[];
  paginacao: Paginacao;
}

export interface AdminStudentsParams {
  pagina?: number;
  limite?: number;
}

export const adminStudentsService = {
  /**
   * Busca lista de alunos com paginação
   */
  async getStudents(params?: AdminStudentsParams): Promise<AdminStudentsResponse> {
    const queryParams = new URLSearchParams();
    
    if (params?.pagina) {
      queryParams.append('pagina', params.pagina.toString());
    }
    
    if (params?.limite) {
      queryParams.append('limite', params.limite.toString());
    }
    
    const queryString = queryParams.toString();
    const url = `/admin/dashboard/alunos${queryString ? `?${queryString}` : ''}`;
    
    console.log('🔍 Buscando alunos na URL:', url);
    console.log('🔍 Parâmetros:', params);
    
    try {
      const response = await apiClient.get(url);
      console.log('✅ Resposta da API de alunos:', response);
      return response.data as AdminStudentsResponse;
    } catch (error) {
      console.error('❌ Erro na API de alunos:', error);
      throw error;
    }
  }
};
