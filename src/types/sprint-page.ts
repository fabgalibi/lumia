export interface Sprint {
  id: string;
  title: string;
  objective: string;
  status: 'em-andamento' | 'bloqueada' | 'concluida';
  progress: number; // 0-100
  period: string; // ex: "Finaliza em 5 dias"
  goalsRemaining?: number; // ex: "Restam X metas"
  startDate?: string;
  endDate?: string;
  image?: string;
}

export interface SprintSection {
  title: string;
  count: number;
  sprints: Sprint[];
}

export type SprintStatus = 'em-andamento' | 'bloqueada' | 'concluida';
