import { apiClient } from './api-client';

export interface StudentData {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  dataNascimento?: string;
  grupo: 'aluno';
}

export interface StudentCompleteData extends StudentData {
  planoMestreId: number;
  associarPlano: boolean;
}

export interface PlanoMestre {
  id: number;
  nome: string;
  codigo: string;
  cargo: string;
  descricao: string;
  duracao: number;
  versao: string;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GeneratedPassword {
  senha: string;
}

export const studentService = {
  // Cadastro simples sem plano
  async createStudent(data: StudentData) {
    const response = await apiClient.post('/usuarios', data);
    return response.data;
  },

  // Cadastro completo com plano
  async createStudentComplete(data: StudentCompleteData) {
    const response = await apiClient.post('/usuarios/cadastro-completo', data);
    return response.data;
  },

  // Listar planos mestre
  async getPlansMaster() {
    const response = await apiClient.get('/planos-mestre/mestre');
    return response.data;
  },

  // Gerar senha automática
  async generatePassword() {
    const response = await apiClient.post('/usuarios/gerar-senha');
    return response.data;
  }
};
