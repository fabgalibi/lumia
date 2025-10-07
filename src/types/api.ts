/**
 * API Types - Tipos compartilhados para requisições e respostas da API
 */

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface ApiSuccessResponse<T> {
  data: T;
  message?: string;
}
