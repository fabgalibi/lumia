/**
 * API Client - Cliente HTTP base para todas as requisições
 * Configuração centralizada com interceptors para token e tratamento de erros
 */

const API_URL = import.meta.env.VITE_API_URL || 'https://dev.lumia-app.com.br';

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Obtém o token de autenticação do localStorage
   */
  private getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  /**
   * Método genérico para fazer requisições HTTP
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = this.getAuthToken();
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    // Adiciona token se existir
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      
      // Trata erros HTTP
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || 'Erro na requisição',
          status: response.status,
          errors: errorData.errors,
        } as ApiError;
      }

      const data = await response.json();
      
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      // Se for um erro de rede ou erro não tratado
      if (error instanceof TypeError) {
        throw {
          message: 'Erro de conexão com o servidor',
          status: 0,
        } as ApiError;
      }
      
      // Re-lança erros já tratados
      throw error;
    }
  }

  /**
   * Requisição GET
   */
  async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  /**
   * Requisição POST
   */
  async post<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * Requisição PUT
   */
  async put<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * Requisição PATCH
   */
  async patch<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * Requisição DELETE
   */
  async delete<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

// Instância única do cliente API
export const apiClient = new ApiClient(API_URL);
