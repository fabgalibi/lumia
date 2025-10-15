import { SprintHistoricoResponse } from '@/services/sprints.service';
import { Sprint, SprintSection } from '@/types/sprint-page';
import { MetaSprint } from '@/types/sprint';
import { Goal, RelevanceLevel } from '@/types/goal';

export const mapApiToSprintSections = (data: SprintHistoricoResponse): SprintSection[] => {
  const sections: SprintSection[] = [];

  // Seção "Em andamento" - Sprint atual + sprints pendentes
  const emAndamentoSprints: Sprint[] = [];

  // Adicionar sprint atual se existir
  if (data.sprintAtual && data.sprintAtual.nomeSprint) {
    emAndamentoSprints.push({
      id: data.sprintAtual.idSprint ? data.sprintAtual.idSprint.toString() : 'sprint-atual', // Usar idSprint da API
      title: data.sprintAtual.nomeSprint || 'Sprint sem nome',
      objective: data.sprintAtual.cargoPlano || 'Objetivo não definido',
      status: 'em-andamento',
      progress: Math.round(data.sprintAtual.progressoSprint || 0),
      period: 'Finaliza em 5 dias', // TODO: Calcular baseado na data
      goalsRemaining: data.sprintAtual.metaPendentes || 0,
      image: '/images/sprints/sprint-placeholder.png'
    });
  }

  // Adicionar sprints pendentes como bloqueadas
  if (data.sprintsPendentes && Array.isArray(data.sprintsPendentes)) {
    data.sprintsPendentes.forEach((sprint, index) => {
      emAndamentoSprints.push({
        id: `sprint-pendente-${index}`,
        title: sprint.nomeSprint || 'Sprint sem nome',
        objective: 'Agente PRF', // TODO: Pegar do sprint atual ou outro lugar
        status: 'bloqueada',
        progress: 0,
        period: 'Inicia em 12 Jan 25', // TODO: Calcular baseado na data
        startDate: '12 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      });
    });
  }

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
  if (data.sprintsFinalizadas && data.sprintsFinalizadas.length > 0) {
    const finalizadasSprints: Sprint[] = data.sprintsFinalizadas.map((sprint) => ({
      id: sprint.idSprint ? sprint.idSprint.toString() : `sprint-finalizada-${Math.random()}`, // Usar idSprint da API
      title: sprint.nomeSprint || 'Sprint sem nome',
      objective: sprint.cargoPlano || 'Objetivo não definido',
      status: 'concluida' as const,
      progress: Math.round(sprint.progressoSprint || 0),
      period: `Finalizou ${formatDate(sprint.dataConclusaoSprint || '')}`,
      endDate: formatDate(sprint.dataConclusaoSprint || ''),
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

/**
 * Mapeia dados de metas da API para o formato usado na tabela de goals
 */
export const mapMetasSprintToGoals = (metas: MetaSprint[]): Goal[] => {
  return metas.map((meta) => {
    // Converter relevância numérica para nível de relevância
    const getRelevanceLevel = (relevancia: number): RelevanceLevel => {
      if (relevancia >= 3) return 'high';
      if (relevancia >= 2) return 'medium';
      return 'low';
    };

    // Converter status da API para formato da tabela
    const getStatus = (status: string): 'concluido' | 'pendente' => {
      return status.toLowerCase() === 'concluído' ? 'concluido' : 'pendente';
    };

    // Formatar número da meta com zero à esquerda
    const formatMetaNumber = (posicao: number): string => {
      return posicao.toString().padStart(2, '0');
    };

    // Formatar tempo estudado para exibição
    const formatTimeStudied = (tempoEstudado: string): string => {
      if (!tempoEstudado || tempoEstudado === '00:00') {
        return '0h 0min';
      }
      const [hours, minutes] = tempoEstudado.split(':');
      const h = parseInt(hours) || 0;
      const m = parseInt(minutes) || 0;
      return `${h}h ${m}min`;
    };

    // Formatar desempenho para exibição
    const formatPerformance = (desempenho: string): string => {
      if (!desempenho) return '0%';
      const percentage = parseFloat(desempenho);
      return isNaN(percentage) ? '0%' : `${percentage}%`;
    };

    return {
      id: meta.id.toString(),
      metaNumber: formatMetaNumber(meta.posicao),
      discipline: meta.disciplina,
      subject: meta.assunto,
      studyType: meta.tipo,
      timeStudied: formatTimeStudied(meta.tempoEstudado),
      performance: formatPerformance(meta.desempenho),
      status: getStatus(meta.status),
      relevance: getRelevanceLevel(meta.relevancia),
      
      // Dados do modal (expandidos da API)
      subjects: [meta.assunto],
      materials: meta.link ? [meta.link] : [],
      commands: meta.comandos ? [meta.comandos] : [],
      links: meta.link ? [meta.link] : [],
      additionalTips: []
    };
  });
};

const formatDate = (dateString: string): string => {
  try {
    // Verificar se a string não está vazia e tem o formato esperado
    if (!dateString || dateString.trim() === '') {
      return 'Data não disponível';
    }
    
    // A data vem no formato "2025-10-13", precisamos garantir que seja interpretada corretamente
    const [year, month, day] = dateString.split('-');
    
    // Verificar se todos os componentes da data existem
    if (!year || !month || !day) {
      return 'Data inválida';
    }
    
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    // Verificar se a data é válida
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }
    
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    });
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return 'Data inválida';
  }
};