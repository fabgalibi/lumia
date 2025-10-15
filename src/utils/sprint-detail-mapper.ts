import { SprintDetail, SprintDetailApiResponse } from '@/types/sprint-detail';

// Função para mapear status da API para status do componente
const mapApiStatusToComponentStatus = (apiStatus: string): 'em-andamento' | 'bloqueada' | 'concluida' => {
  switch (apiStatus.toLowerCase()) {
    case 'em andamento':
    case 'em-andamento':
    case 'ativo':
      return 'em-andamento';
    case 'bloqueada':
    case 'bloqueado':
    case 'pausada':
      return 'bloqueada';
    case 'concluida':
    case 'concluído':
    case 'finalizada':
      return 'concluida';
    default:
      return 'em-andamento'; // Default para em-andamento
  }
};

export const mapApiResponseToSprintDetail = (
  apiResponse: SprintDetailApiResponse,
  sprintId: string
): SprintDetail => {
  const { cardResumo, cardComplemento } = apiResponse;
  
  // Formatar data de última atualização
  const lastUpdateDate = new Date(cardResumo.ultimaAtualizacao);
  const formattedLastUpdate = lastUpdateDate.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Formatar datas de início e fim (adicionar timezone local para evitar diferença de dia)
  const startDateObj = new Date(cardComplemento.dataInicio + 'T00:00:00');
  const endDateObj = new Date(cardComplemento.dataFim + 'T00:00:00');
  const startDate = startDateObj.toLocaleDateString('pt-BR');
  const endDate = endDateObj.toLocaleDateString('pt-BR');

  // Calcular período restante
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysRemaining = Math.ceil((endDateObj.getTime() - todayStart.getTime()) / (1000 * 60 * 60 * 24));
  const period = daysRemaining > 0 ? `Finaliza em ${daysRemaining} dias` : 'Finalizada';

  return {
    id: sprintId,
    title: cardResumo.nomeSprint,
    objective: cardResumo.cargoPlano,
    status: mapApiStatusToComponentStatus(cardResumo.status),
    progress: Math.round(cardComplemento.progressoSprint),
    period,
    goalsRemaining: cardResumo.metaPendentes,
    startDate,
    endDate,
    performance: cardResumo.desempenhoSprint,
    totalGoals: cardResumo.totalMetas,
    totalDisciplines: cardResumo.totalDisciplinas,
    lastUpdate: formattedLastUpdate,
    averageTimePerGoal: cardComplemento.tempoMedioMeta,
    image: '/images/sprint-prf.png', // Imagem padrão
    apiGoals: apiResponse.cardMetas.listaMetas // Incluir dados das metas da API
  };
};
