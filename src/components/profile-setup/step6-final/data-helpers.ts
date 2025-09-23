// Função para obter o nome da área de estudo
export const getAreaName = (areaId: string): string => {
  const areas: Record<string, string> = {
    'controle': 'Controle',
    'fiscal': 'Fiscal',
    'tribunais': 'Tribunais',
    'defensoria': 'Defensoria',
    'mp': 'Ministério Público'
  };
  return areas[areaId] || 'Controle';
};

// Função para obter o nome do tipo de preparação
export const getPreparationTypeName = (type: string): string => {
  const types: Record<string, string> = {
    'pre-edital': 'Pré-edital',
    'pos-edital': 'Pós-edital',
    'ambos': 'Ambos'
  };
  return types[type] || 'Pré-edital';
};

// Função para obter o nome do tempo de estudo
export const getStudyTimeName = (time: string): string => {
  const times: Record<string, string> = {
    'intensive': 'Intensivo (40+ horas semanais)',
    'normal': 'Normal (30-39 horas semanais)',
    'light': 'Leve (20-29 horas semanais)',
    'minimal': 'Mínimo (10-19 horas semanais)'
  };
  return times[time] || 'Normal (30-39 horas semanais)';
};

// Função para obter o nome da data de início
export const getStartDateName = (date: string): string => {
  const dates: Record<string, string> = {
    'immediate': 'Imediatamente',
    'next-week': 'Próxima semana',
    'next-month': 'Próximo mês',
    'specific': 'Data específica'
  };
  return dates[date] || 'Data específica (10/09/2025)';
};

// Função para obter o nome do tempo de estudo da trajetória
export const getTrajectoryStudyTimeName = (time: string): string => {
  const times: Record<string, string> = {
    'less-than-1': 'Menos de 1 ano',
    '1-to-2': '1 a 2 anos',
    '2-to-4': '2 anos e meio a 4 anos',
    'more-than-4': 'Mais de 4 anos'
  };
  return times[time] || '2 anos e meio a 4 anos';
};

// Função para obter o nome do status de trabalho
export const getWorkStatusName = (status: string): string => {
  const statuses: Record<string, string> = {
    'yes': 'Sim',
    'no': 'Não'
  };
  return statuses[status] || 'Sim';
};

// Função para obter o nome do nível de conhecimento
export const getKnowledgeLevelName = (level: string): string => {
  const levels: Record<string, string> = {
    'never': 'Nunca estudei',
    'started': 'Comecei teoria, mas não terminei',
    'finished': 'Terminei teoria, mas não tenho confiança',
    'polishing': 'Só falta aparar as arestas'
  };
  return levels[level] || 'Nunca estudei';
};

// Calcular nível geral baseado nas respostas
export const calculateGeneralLevel = (knowledgeData: Record<string, string>): number => {
  const levels = Object.values(knowledgeData);
  const levelCounts = levels.reduce((acc, level) => {
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Lógica simples: se a maioria é "finished" ou "polishing", nível 3
  if (levelCounts['polishing'] > 0 || levelCounts['finished'] > 2) {
    return 3;
  }
  if (levelCounts['started'] > 0 || levelCounts['finished'] > 0) {
    return 2;
  }
  return 1;
};
