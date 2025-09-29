import { Goal, GoalsTableData } from '@/types/table';

export const goalsData: Goal[] = [
  {
    id: "1",
    topic: "Ética no Serviço Público",
    studyType: "Estudos de caso",
    timeStudied: "2h30",
    performance: "84%",
    mentorCommand: "Enviar resumo dos principais dilemas éticos",
    status: "in-progress", // Dot laranja no Figma
    relevance: "high",
    subjects: [
      "Princípios e valores do serviço público (legalidade, impessoalidade, moralidade, publicidade e eficiência);",
      "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal;",
      "Conduta ética e deveres do servidor;",
      "Vedações e conflitos de interesse;",
      "Transparência, sigilo e acesso à informação;",
      "Responsabilidade funcional e sanções éticas."
    ],
    materials: [
      "Lei 8.112/90 - Estatuto dos Servidores Públicos;",
      "Decreto 1.171/94 - Código de Ética Profissional;",
      "Lei 12.527/11 - Lei de Acesso à Informação;",
      "Jurisprudência do STF sobre ética no serviço público."
    ],
    mentorCommands: [
      "Elaborar resumo dos 5 princípios constitucionais;",
      "Analisar 3 casos práticos de conflito de interesse;",
      "Estudar as principais vedações do servidor público."
    ],
    additionalTips: [
      "Foque nos princípios constitucionais da administração pública;",
      "Estude bem as diferenças entre moralidade e legalidade;",
      "Pratique com questões sobre transparência e acesso à informação."
    ]
  },
  {
    id: "2",
    topic: "Noções de Direito Administrativo",
    studyType: "Mapas mentais",
    timeStudied: "3h15",
    performance: "84%",
    mentorCommand: "Liberar mapa mental sobre atos administrativos",
    status: "completed",
    relevance: "high"
  },
  {
    id: "3",
    topic: "Legislação Previdenciária",
    studyType: "Simulado",
    timeStudied: "2h",
    performance: "84%",
    mentorCommand: "Atualizar aluno sobre mudanças recentes no INSS",
    status: "completed",
    relevance: "medium"
  },
  {
    id: "4",
    topic: "Direito",
    studyType: "Revisão simulado",
    timeStudied: "2h45",
    performance: "84%",
    mentorCommand: "Aplicar quiz de revisão sobre princípios do Direito",
    status: "completed", // Verde no Figma
    relevance: "low"
  },
  {
    id: "5",
    topic: "Administração",
    studyType: "Resumo esquematizado",
    timeStudied: "3h",
    performance: "84%",
    mentorCommand: "Enviar checklist de temas mais cobrados",
    status: "completed", // Verde no Figma
    relevance: "low"
  },
  {
    id: "6",
    topic: "Perícia Médica",
    studyType: "Questões comentadas",
    timeStudied: "1h30",
    performance: "84%",
    mentorCommand: "Compartilhar estudo de caso prático",
    status: "completed", // Verde no Figma
    relevance: "low"
  },
  {
    id: "7",
    topic: "Noções de Direito Constitucional",
    studyType: "Vídeo-aula resumida",
    timeStudied: "3h30",
    performance: "84%",
    mentorCommand: "Liberar vídeo sobre controle de constitucionalidade",
    status: "completed",
    relevance: "medium"
  },
  {
    id: "8",
    topic: "Serviço Social",
    studyType: "Teste rápido",
    timeStudied: "4h",
    performance: "84%",
    mentorCommand: "Recomendar leitura sobre políticas públicas",
    status: "completed",
    relevance: "high"
  },
  {
    id: "9",
    topic: "Contabilidade",
    studyType: "Exercício contextual",
    timeStudied: "2h15",
    performance: "84%",
    mentorCommand: "Enviar exercícios de balanço patrimonial",
    status: "completed",
    relevance: "medium"
  },
  {
    id: "10",
    topic: "Instrumentalidade do Serviço Social",
    studyType: "Produção de relatório",
    timeStudied: "3h45",
    performance: "84%",
    mentorCommand: "Liberar roteiro de atuação profissional",
    status: "completed",
    relevance: "high"
  }
];

export const goalsTableData: GoalsTableData = {
  goals: goalsData,
  tabs: [
    { id: 'lista-topicos', label: 'Lista de Tópicos' },
    { id: 'sugestoes-revisao', label: 'Sugestões de revisão' }
  ]
};

export default goalsTableData;
