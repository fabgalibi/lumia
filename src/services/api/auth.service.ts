/**
 * Auth Service - Serviço de autenticação
 * Gerencia login, logout e refresh de tokens
 */

import { apiClient, ApiResponse } from './api-client';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  usuario?: {
    id: number;
    login: string;
    situacao: boolean;
    nome: string;
    cpf: string;
    grupoId: number;
    createdAt: string;
    updatedAt: string;
    grupo: {
      id: number;
      nome: string;
      descricao: string;
    };
  };
}

export interface User {
  id: number;
  email: string;
  name: string;
  cpf?: string;
  grupoId?: number;
  grupo?: {
    id: number;
    nome: string;
    descricao: string;
  };
}

class AuthService {
  /**
   * Realiza login do usuário
   * @param credentials - Email e senha do usuário
   * @param grupo - Grupo do usuário (aluno ou administrador)
   * @returns Token de acesso e dados do usuário
   */
  async login(credentials: LoginRequest, grupo: 'aluno' | 'administrador' = 'aluno'): Promise<ApiResponse<LoginResponse>> {
    console.log('📡 Enviando requisição de login para:', '/auth/login');
    console.log('📦 Payload:', { login: credentials.email, senha: '***', grupo });
    
    const response = await apiClient.post<LoginResponse>('/auth/login', {
      login: credentials.email, // API usa "login" ao invés de "email"
      senha: credentials.password, // API usa "senha" ao invés de "password"
      grupo, // Grupo do usuário (aluno ou admin)
    });

    console.log('📥 Resposta recebida:', response);

    // Armazena o token no localStorage
    if (response.data.token) {
      console.log('💾 Salvando token no localStorage');
      this.setToken(response.data.token);
      
      // Armazena dados do usuário se disponível
      if (response.data.usuario) {
        console.log('👤 Salvando dados do usuário:', response.data.usuario);
        const user: User = {
          id: response.data.usuario.id,
          email: response.data.usuario.login,
          name: response.data.usuario.nome,
          cpf: response.data.usuario.cpf,
          grupoId: response.data.usuario.grupoId,
          grupo: response.data.usuario.grupo,
        };
        this.setUser(user);
      }
    }

    return response;
  }

  /**
   * Realiza login administrativo
   * @param credentials - Email e senha do administrador
   * @returns Token de acesso e dados do usuário
   */
  async loginAdmin(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return this.login(credentials, 'administrador');
  }

  /**
   * Realiza logout do usuário
   */
  logout(): void {
    this.removeToken();
    this.removeUser();
  }

  /**
   * Armazena o token no localStorage
   */
  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  /**
   * Obtém o token do localStorage
   */
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  /**
   * Remove o token do localStorage
   */
  removeToken(): void {
    localStorage.removeItem('auth_token');
  }

  /**
   * Armazena dados do usuário no localStorage
   */
  setUser(user: User): void {
    localStorage.setItem('user_data', JSON.stringify(user));
  }

  /**
   * Obtém dados do usuário do localStorage
   */
  getUser(): User | null {
    const userData = localStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  }

  /**
   * Remove dados do usuário do localStorage
   */
  removeUser(): void {
    localStorage.removeItem('user_data');
  }

  /**
   * Verifica se o usuário está autenticado
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

// Instância única do serviço de autenticação
export const authService = new AuthService();
