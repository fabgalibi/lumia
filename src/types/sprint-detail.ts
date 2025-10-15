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
}
