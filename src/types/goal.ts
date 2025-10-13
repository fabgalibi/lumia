/**
 * Interface unificada para metas
 * Usada tanto na tabela quanto no modal
 */
export interface Goal {
  // Dados da tabela
  id: string;
  metaNumber: string; // posição formatada (01, 02, etc)
  discipline: string;
  subject: string;
  studyType: string;
  timeStudied: string;
  performance: string;
  status: 'concluido' | 'pendente';
  relevance: RelevanceLevel;
  
  // Dados do modal (virão da API)
  subjects: string[]; // lista de assuntos abordados
  materials: string[]; // materiais de estudo (links, PDFs, etc)
  commands: string[]; // comandos do mentor
  links: string[]; // links úteis relacionados à meta
  additionalTips: string[]; // dicas adicionais
}

export type RelevanceLevel = 'high' | 'medium' | 'low';
export type GoalStatus = 'concluido' | 'pendente';
