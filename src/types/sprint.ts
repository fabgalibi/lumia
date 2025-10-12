/**
 * Tipos relacionados ao Sprint
 */

export interface Sprint {
  id: number;
  nome: string;
  posicao: number;
  dataInicio: string | null;
  dataFim: string | null;
  planoId: number;
  status: string;
}

export interface MetricasSprint {
  sprintId: number;
  totalMetas: number;
  metasConcluidas: number;
  percentualConclusao: number;
  desempenhoMedio: number;
  totalHorasEstudadas: string;
  questoesTotaisResolvidas: number;
  mediaHorasDiaria: string;
  totalDisciplinas: number;
}

export interface MetaSprint {
  id: number;
  disciplinaId: number;
  disciplina: string;
  tipo: string; // Tipo de estudo (teoria, pratica, etc)
  assuntoId: number;
  assunto: string;
  comandos: string; // Comandos do mentor
  link: string; // Link para material
  relevancia: number; // 1-3 (número de estrelas preenchidas)
  tempoEstudado: string; // Formato "HH:MM"
  desempenho: string; // Formato "XX.XX"
  status: string; // "Pendente" ou "Concluído" (será convertido para lowercase)
  totalQuestoes: number;
  questoesCorretas: number;
  createdAt: string;
  updatedAt: string;
  sprintId: number;
  metaMestreId: number;
  posicao: number; // Número da meta
}

export interface DashboardSprintAtual {
  sprint: Sprint;
  metas: MetaSprint[];
  metricas: MetricasSprint;
}
