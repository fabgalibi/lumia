import { Goal, GoalsTableData } from '@/types/table';

export const goalsData: Goal[] = [
          {
            id: "1",
            metaNumber: "01",
            discipline: "Ética no Serviço Público",
            subject: "Compreensão de Texto e Interpretação de Questões",
            studyType: "Estudos de caso",
            timeStudied: "2h30",
            performance: "84%",
            status: "pendente",
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
            commands: [
              "Elaborar resumo dos 5 princípios constitucionais;",
              "Analisar 3 casos práticos de conflito de interesse;",
              "Estudar as principais vedações do servidor público."
            ],
            links: [
              "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm",
              "https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm",
              "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm"
            ],
            additionalTips: [
              "Foque nos princípios constitucionais da administração pública;",
              "Estude bem as diferenças entre moralidade e legalidade;",
              "Pratique com questões sobre transparência e acesso à informação."
            ]
  },
  {
    id: "2",
    metaNumber: "02",
    discipline: "Noções de Direito Administrativo",
    subject: "Ortografia e Gramática Aplicada",
    studyType: "Mapas mentais",
    timeStudied: "3h15",
    performance: "84%",
    status: "concluido",
    relevance: "high",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "3",
    metaNumber: "03",
    discipline: "Legislação Previdenciária",
    subject: "Raciocínio Lógico e Matemático",
    studyType: "Simulado",
    timeStudied: "2h",
    performance: "84%",
    status: "concluido",
    relevance: "medium",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "4",
    metaNumber: "04",
    discipline: "Direito",
    subject: "Noções de Direito Constitucional",
    studyType: "Revisão simulado",
    timeStudied: "2h45",
    performance: "84%",
    status: "concluido", // Verde no Figma
    relevance: "low",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "5",
    metaNumber: "05",
    discipline: "Administração",
    subject: "Noções de Direito Administrativo",
    studyType: "Resumo esquematizado",
    timeStudied: "3h",
    performance: "84%",
    status: "concluido", // Verde no Figma
    relevance: "low",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "6",
    metaNumber: "06",
    discipline: "Perícia Médica",
    subject: "Atualidades e Cenário Político Brasileiro",
    studyType: "Questões comentadas",
    timeStudied: "1h30",
    performance: "84%",
    status: "concluido", // Verde no Figma
    relevance: "low",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "7",
    metaNumber: "07",
    discipline: "Noções de Direito Constitucional",
    subject: "Informática e Segurança da Informação",
    studyType: "Vídeo-aula resumida",
    timeStudied: "3h30",
    performance: "84%",
    status: "concluido",
    relevance: "medium",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "8",
    metaNumber: "08",
    discipline: "Serviço Social",
    subject: "Gestão Pública e Ética no Serviço Público",
    studyType: "Teste rápido",
    timeStudied: "4h",
    performance: "84%",
    status: "concluido",
    relevance: "high",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "9",
    metaNumber: "09",
    discipline: "Contabilidade",
    subject: "Análise e Resolução de Questões Comentadas",
    studyType: "Exercício contextual",
    timeStudied: "2h15",
    performance: "84%",
    status: "concluido",
    relevance: "medium",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
  },
  {
    id: "10",
    metaNumber: "10",
    discipline: "Instrumentalidade do Serviço Social",
    subject: "Simulado Avaliativo – Desempenho por Disciplina",
    studyType: "Produção de relatório",
    timeStudied: "3h45",
    performance: "84%",
    status: "concluido",
    relevance: "high",
    subjects: [],
    materials: [],
    commands: [],
    links: [],
    additionalTips: []
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
