export interface SprintDetail {
  id: string;
  title: string;
  objective: string;
  status: 'em-andamento' | 'bloqueada' | 'concluida';
  progress: number;
  period: string;
  goalsRemaining?: number;
  startDate?: string;
  endDate?: string;
  image?: string;
  // Campos da API
  performance?: number;
  totalGoals?: number;
  totalDisciplines?: number;
  lastUpdate?: string;
  averageTimePerGoal?: string;
  apiGoals?: Array<{
    idMeta: number;
    nomeDisciplina: string;
  }>;
}

export interface SprintDetailApiResponse {
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
