import { RelevanceLevel } from '@/components/lumia/relevance-stars';

// Tipos base para a tabela
export interface BaseTableColumn {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
}

export interface TableColumn<T = any> extends BaseTableColumn {
  render?: (value: any, record: T, index: number) => React.ReactNode;
  dataIndex?: keyof T;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  emptyText?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Tipos específicos para Goals Table
export interface Goal {
  id?: string;
  metaNumber?: string; // Número sequencial da meta (01, 02, 03, etc.)
  discipline: string; // Disciplina (ex: "Ética no Serviço Público")
  subject: string; // Assunto específico (ex: "Compreensão de Texto e Interpretação de Questões")
  studyType: string;
  timeStudied: string;
  performance: string;
  mentorCommand: string;
  status: 'concluido' | 'pendente';
  relevance: RelevanceLevel;
  subjects?: string[];
  materials?: string[];
  mentorCommands?: string[];
  additionalTips?: string[];
}

// Tipo para o status visual da tabela
export type GoalStatusType = 'concluido' | 'pendente';

export interface GoalsTableData {
  goals: Goal[];
  tabs: {
    id: string;
    label: string;
  }[];
}

// Tipos para Review Suggestions
export interface ReviewSuggestion {
  id: string;
  topic: string;
  studyType: string;
  questionsCorrect: string;
  timeStudied: string;
  performance: string;
  priority: 'high' | 'medium' | 'low';
  mentorCommand: string;
  relevance: RelevanceLevel;
}

// Tipos para outras tabelas futuras
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Contest {
  id: string;
  name: string;
  institution: string;
  positions: number;
  deadline: string;
  status: 'open' | 'closed' | 'upcoming';
}
