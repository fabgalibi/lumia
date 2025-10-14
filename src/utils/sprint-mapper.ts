import { SprintHistoricoResponse } from '@/services/sprints.service';
import { Sprint, SprintSection } from '@/types/sprint-page';

export const mapApiToSprintSections = (data: SprintHistoricoResponse): SprintSection[] => {
  const sections: SprintSection[] = [];

  // Seção "Em andamento" - Sprint atual + sprints pendentes
  const emAndamentoSprints: Sprint[] = [];

  // Adicionar sprint atual se existir
  if (data.sprintAtual) {
    emAndamentoSprints.push({
      id: 'sprint-atual',
      title: data.sprintAtual.nomeSprint,
      objective: data.sprintAtual.cargoPlano,
      status: 'em-andamento',
      progress: Math.round(data.sprintAtual.progressoSprint),
      period: 'Finaliza em 5 dias', // TODO: Calcular baseado na data
      goalsRemaining: data.sprintAtual.metaPendentes,
      image: '/images/sprints/sprint-placeholder.png'
    });
  }

  // Adicionar sprints pendentes como bloqueadas
  data.sprintsPendentes.forEach((sprint, index) => {
    emAndamentoSprints.push({
      id: `sprint-pendente-${index}`,
      title: sprint.nomeSprint,
      objective: 'Agente PRF', // TODO: Pegar do sprint atual ou outro lugar
      status: 'bloqueada',
      progress: 0,
      period: 'Inicia em 12 Jan 25', // TODO: Calcular baseado na data
      startDate: '12 Jan 25',
      image: '/images/sprints/sprint-placeholder.png'
    });
  });

  if (emAndamentoSprints.length > 0) {
    // Contar apenas as sprints realmente em andamento (não as bloqueadas)
    const emAndamentoCount = emAndamentoSprints.filter(sprint => sprint.status === 'em-andamento').length;
    
    sections.push({
      title: `Em andamento (${emAndamentoCount})`,
      count: emAndamentoCount,
      sprints: emAndamentoSprints
    });
  }

  // Seção "Finalizadas"
  if (data.sprintsFinalizadas.length > 0) {
    const finalizadasSprints: Sprint[] = data.sprintsFinalizadas.map((sprint, index) => ({
      id: `sprint-finalizada-${index}`,
      title: sprint.nomeSprint,
      objective: sprint.cargoPlano,
      status: 'concluida' as const,
      progress: Math.round(sprint.progressoSprint),
      period: `Finalizou ${formatDate(sprint.dataConclusaoSprint)}`,
      endDate: formatDate(sprint.dataConclusaoSprint),
      image: '/images/sprints/sprint-placeholder.png'
    }));

    sections.push({
      title: `Finalizadas (${finalizadasSprints.length})`,
      count: finalizadasSprints.length,
      sprints: finalizadasSprints
    });
  }

  return sections;
};

const formatDate = (dateString: string): string => {
  try {
    // A data vem no formato "2025-10-13", precisamos garantir que seja interpretada corretamente
    const [year, month, day] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    });
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return dateString;
  }
};