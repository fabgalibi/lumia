/**
 * Admin Metrics Service
 * Serviço para buscar métricas do dashboard administrativo
 */

import { apiClient } from './api-client';

export interface AdminMetricsResponse {
  totalAlunosAtivos: number;
  alunosMatriculadosMes: number;
  percentualMetasConcluidasMes: number;
  tempoEstudoDiarioMedio: string;
}

export const adminMetricsService = {
  /**
   * Busca métricas do dashboard administrativo
   */
  async getMetrics(): Promise<AdminMetricsResponse> {
    const response = await apiClient.get('/admin/dashboard/metricas');
    return response.data as AdminMetricsResponse;
  }
};
