import { type MetaSprint, type Goal, type RelevanceLevel } from '@/types';

/**
 * Converte os dados da API para o formato esperado pela tabela de metas
 */
export function mapMetaSprintToGoal(meta: MetaSprint): Goal {
  return {
    // Dados da tabela
    id: meta.id.toString(),
    metaNumber: meta.posicao.toString().padStart(2, '0'), // posição → metaNumber (formato 01, 02, etc)
    discipline: meta.disciplina,
    subject: meta.assunto,
    studyType: meta.tipo, // tipo → studyType
    timeStudied: meta.tempoEstudado,
    performance: `${meta.desempenho}%`, // Adiciona % ao desempenho
    status: mapStatusToLowercase(meta.status), // Converte status para lowercase
    relevance: mapRelevanciaToLevel(meta.relevancia), // Converte relevância numérica para level
    
    // Dados do modal
    subjects: [meta.assunto], // Por enquanto usa o assunto da tabela (API precisa enviar lista detalhada)
    materials: [], // TODO: API precisa enviar array de materiais
    commands: meta.comandos ? [meta.comandos] : [], // comandos do mentor
    links: meta.link ? [meta.link] : [], // Converte link singular para array
    additionalTips: [], // TODO: API precisa enviar array de dicas adicionais
  };
}

/**
 * Converte status da API para lowercase
 */
function mapStatusToLowercase(status: string): 'concluido' | 'pendente' {
  const statusLower = status.toLowerCase().trim();
  return statusLower === 'concluída' || statusLower === 'concluido' ? 'concluido' : 'pendente';
}

/**
 * Converte relevância numérica (número de estrelas) para level
 * relevancia: 1-3 (número de estrelas preenchidas da API)
 * level: 1-3 (sistema de 3 estrelas do componente)
 */
function mapRelevanciaToLevel(relevancia: number): RelevanceLevel {
  if (relevancia === 3) return 'high';   // 3 estrelas da API = alta relevância
  if (relevancia === 2) return 'medium'; // 2 estrelas da API = média relevância
  return 'low';                         // 1 estrela da API = baixa relevância
}

/**
 * Converte uma lista de metas da API para o formato da tabela
 */
export function mapMetasSprintToGoals(metas: MetaSprint[]): Goal[] {
  return metas.map(mapMetaSprintToGoal);
}

