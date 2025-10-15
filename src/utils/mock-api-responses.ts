import { SprintDetailApiResponse } from '@/types/sprint-detail';

export const mockSprintDetailResponse: SprintDetailApiResponse = {
  cardResumo: {
    status: "em andamento",
    nomeSprint: "Sprint 1 - Fundamentos do Sistema",
    cargoPlano: "Plano de Estudos - Teste Final",
    desempenhoSprint: 90,
    metaPendentes: 3,
    totalMetas: 7,
    totalDisciplinas: 1,
    ultimaAtualizacao: "2025-10-12T23:13:24.214Z"
  },
  cardMetas: {
    listaMetas: [
      {
        idMeta: 126,
        nomeDisciplina: "Direito Constitucional"
      },
      {
        idMeta: 127,
        nomeDisciplina: "Direito Administrativo"
      },
      {
        idMeta: 128,
        nomeDisciplina: "Língua Portuguesa"
      },
      {
        idMeta: 129,
        nomeDisciplina: "Matemática"
      },
      {
        idMeta: 130,
        nomeDisciplina: "Informática"
      },
      {
        idMeta: 131,
        nomeDisciplina: "Atualidades"
      },
      {
        idMeta: 132,
        nomeDisciplina: "Ética no Serviço Público"
      }
    ]
  },
  cardComplemento: {
    progressoSprint: 33.33,
    dataInicio: "2025-10-09",
    dataFim: "2025-10-16",
    tempoMedioMeta: "01:15"
  }
};
