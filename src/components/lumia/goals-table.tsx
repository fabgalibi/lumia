import { useState } from "react";
import { ReviewSuggestionCard } from "./review-suggestion-card";
import { GoalDetailsModal, GoalSuccessNotification } from "./goal-details-modal";
// Imports removidos - usando SVGs inline do Figma

export const GoalsTable = () => {
  const [activeTab, setActiveTab] = useState("Lista de Tópicos");
  const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [completedGoalName, setCompletedGoalName] = useState<string>("");

  const handleReviewGoal = (goal: any) => {
    // Converter sugestão de revisão para formato de meta se necessário
    const modalGoal = {
      topic: goal.topic,
      studyType: goal.studyType || "Revisão",
      timeStudied: goal.timeStudied || "0h",
      performance: goal.performance,
      mentorCommand: goal.mentorCommand || "Revisar conteúdo",
      status: goal.status || "pending",
      subjects: goal.subjects ? goal.subjects : [
        "Conteúdo para revisão",
        "Tópicos importantes",
        "Pontos de atenção"
      ],
      materials: goal.materials ? goal.materials : [
        "Material de apoio",
        "Exercícios práticos"
      ],
      mentorCommands: goal.mentorCommands ? goal.mentorCommands : [
        "Revisar conteúdo",
        "Praticar exercícios"
      ],
      additionalTips: goal.additionalTips ? goal.additionalTips : [
        "Foque nos pontos mais importantes",
        "Pratique com questões similares"
      ]
    };
    
    setSelectedGoal(modalGoal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGoal(null);
  };

  const handlePerformanceSave = (data: any) => {
    console.log('Performance data saved:', data);
    // Armazenar o nome da meta antes de fechar o modal
    setCompletedGoalName(selectedGoal?.topic || "Ética no Serviço Público");
    setShowSuccessNotification(true);
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 5000);
  };

  const goals = [
    {
      topic: "Ética no Serviço Público",
      studyType: "Estudos de caso",
      timeStudied: "2h30",
      performance: "84%",
      mentorCommand: "Enviar resumo dos principais dilemas éticos",
      status: "pending",
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
      topic: "Noções de Direito Administrativo",
      studyType: "Mapas mentais",
      timeStudied: "3h15",
      performance: "84%",
      mentorCommand: "Liberar mapa mental sobre atos administrativos",
      status: "pending"
    },
    {
      topic: "Legislação Previdenciária",
      studyType: "Simulado",
      timeStudied: "2h",
      performance: "84%",
      mentorCommand: "Atualizar aluno sobre mudanças recentes no INSS",
      status: "completed"
    },
    {
      topic: "Direito",
      studyType: "Revisão simulado",
      timeStudied: "2h45",
      performance: "84%",
      mentorCommand: "Aplicar quiz de revisão sobre princípios do Direito",
      status: "in-progress"
    },
    {
      topic: "Administração",
      studyType: "Resumo esquematizado",
      timeStudied: "3h",
      performance: "84%",
      mentorCommand: "Enviar checklist de temas mais cobrados",
      status: "in-progress"
    },
    {
      topic: "Perícia Médica",
      studyType: "Questões comentadas",
      timeStudied: "1h30",
      performance: "84%",
      mentorCommand: "Compartilhar estudo de caso prático",
      status: "in-progress"
    },
    {
      topic: "Noções de Direito Constitucional",
      studyType: "Vídeo-aula resumida",
      timeStudied: "3h30",
      performance: "84%",
      mentorCommand: "Liberar vídeo sobre controle de constitucionalidade",
      status: "in-progress"
    },
    {
      topic: "Serviço Social",
      studyType: "Teste rápido",
      timeStudied: "4h",
      performance: "84%",
      mentorCommand: "Recomendar leitura sobre políticas públicas",
      status: "in-progress"
    },
    {
      topic: "Contabilidade",
      studyType: "Exercício contextual",
      timeStudied: "2h15",
      performance: "84%",
      mentorCommand: "Enviar exercícios de balanço patrimonial",
      status: "in-progress"
    },
    {
      topic: "Instrumentalidade do Serviço Social",
      studyType: "Produção de relatório",
      timeStudied: "3h45",
      performance: "84%",
      mentorCommand: "Liberar roteiro de atuação profissional",
      status: "in-progress"
    }
  ];

  const reviewSuggestions = [
    {
      id: "1",
      topic: "Princípios Constitucionais Fundamentais",
      studyType: "Teste rápido",
      questionsCorrect: "10/32 questões acertadas",
      timeStudied: "Estudos de caso",
      performance: "45%",
      priority: "high" as const
    },
    {
      id: "2",
      topic: "Legislação Previdenciária",
      studyType: "Simulado",
      questionsCorrect: "10/32 questões acertadas",
      timeStudied: "Estudos de caso",
      performance: "45%",
      priority: "medium" as const
    },
    {
      id: "3",
      topic: "Instrumentalidade do Serviço Social",
      studyType: "Produção de relatório",
      questionsCorrect: "10/32 questões acertadas",
      timeStudied: "Estudos de caso",
      performance: "45%",
      priority: "medium" as const
    },
    {
      id: "4",
      topic: "Serviço social",
      studyType: "Teste rápido",
      questionsCorrect: "10/32 questões acertadas",
      timeStudied: "Estudos de caso",
      performance: "45%",
      priority: "low" as const
    },
    {
      id: "5",
      topic: "Princípios Constitucionais Fundamentais",
      studyType: "Estudo de caso",
      questionsCorrect: "10/32 questões acertadas",
      timeStudied: "Estudos de caso",
      performance: "45%",
      priority: "low" as const
    },
    {
      id: "6",
      topic: "Princípios Constitucionais Fundamentais",
      studyType: "Estudo de caso",
      questionsCorrect: "10/32 questões acertadas",
      timeStudied: "Estudos de caso",
      performance: "45%",
      priority: "low" as const
    },
    {
      id: "7",
      topic: "Princípios Constitucionais Fundamentais",
      studyType: "Estudo de caso",
      questionsCorrect: "10/32 questões acertadas",
      timeStudied: "Estudos de caso",
      performance: "45%",
      priority: "low" as const
    }
  ];

  return (
    <div 
      className="rounded-2xl border shadow-lg"
      style={{
        background: 'rgba(37, 37, 50, 1)',
        borderColor: '#2C2C45',
        borderRadius: '16px',
        borderWidth: '1px'
      }}
    >
      {/* Header */}
      <div 
        className="flex flex-col"
        style={{ gap: '20px' }}
      >
        <div 
          className="flex items-center"
          style={{ gap: '16px', padding: '20px 24px 0px' }}
        >
          <div 
            className="flex items-center"
            style={{ gap: '10px' }}
          >
            <div 
              className="w-6 h-6 flex items-center justify-center"
              style={{ width: '24px', height: '24px' }}
            >
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 18V15H4C2.34315 15 1 16.3431 1 18M5.8 21H13.8C14.9201 21 15.4802 21 15.908 20.782C16.2843 20.5903 16.5903 20.2843 16.782 19.908C17 19.4802 17 18.9201 17 17.8V4.2C17 3.07989 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z" stroke="#F0F0F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 
              className="text-white"
              style={{
                fontFamily: 'var(--font-sora)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.75em'
              }}
            >
              Suas metas
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div 
          style={{
            height: '1px',
            background: '#2C2C45',
            width: '100%'
          }}
        />

        {/* Content */}
        <div 
          className="flex flex-col lg:flex-row"
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            padding: '16px 24px',
            borderRadius: '12px',
            gap: '16px'
          }}
        >
          {/* Tabs */}
          <div 
            className="flex flex-col"
            style={{
              gap: '8px',
              justifyContent: 'center',
              alignSelf: 'stretch'
            }}
          >
            <div className="flex" style={{ gap: '12px' }}>
              <button
                onClick={() => setActiveTab("Lista de Tópicos")}
                className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
                style={{
                  gap: '8px',
                  padding: '0px 4px 12px',
                  height: '32px',
                  borderBottom: activeTab === "Lista de Tópicos" ? '2px solid #F48E2F' : '2px solid transparent'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: activeTab === "Lista de Tópicos" ? '#F48E2F' : '#CECFD2'
                  }}
                >
                  Lista de Tópicos
                </span>
              </button>
              <button
                onClick={() => setActiveTab("Sugestões de revisão")}
                className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
                style={{
                  gap: '8px',
                  padding: '0px 4px 12px',
                  height: '32px',
                  borderBottom: activeTab === "Sugestões de revisão" ? '2px solid #F48E2F' : '2px solid transparent'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: activeTab === "Sugestões de revisão" ? '#F48E2F' : '#CECFD2'
                  }}
                >
                  Sugestões de revisão
                </span>
              </button>
            </div>
            {/* Divider line under tabs */}
            <div 
              style={{
                height: '1px',
                background: '#373A41',
                width: '100%'
              }}
            />
          </div>

          {/* Search and Filter */}
          <div 
            className="flex items-center"
            style={{
              gap: '16px',
              alignItems: 'center'
            }}
          >
            {/* Input field */}
            <div 
              className="flex flex-col"
              style={{
                gap: '6px',
                width: '320px'
              }}
            >
            <div 
              className="flex items-center"
              style={{
                gap: '8px',
                padding: '8px 12px',
                background: '#2D2D3B',
                border: '1px solid #2D2D36',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '320px'
              }}
            >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.15 16.1498L12.4525 12.4524M14.45 7.64988C14.45 11.4054 11.4055 14.4498 7.65 14.4498C3.89449 14.4498 0.850037 11.4054 0.850037 7.64988C0.850037 3.89436 3.89449 0.849913 7.65 0.849913C11.4055 0.849913 14.45 3.89436 14.45 7.64988Z" stroke="#94979C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  placeholder="Buscar "
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#CECFD2'
                  }}
                />
              </div>
            </div>

            {/* Button */}
            <button
              className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
              style={{
                gap: '4px',
                padding: '10px 14px',
                background: '#2D2D45',
                border: '1px solid',
                borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.40002 5.94989H13.6M0.850037 0.849913H16.15M5.95001 11.0499H11.05" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span 
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#FFFFFF'
                }}
              >
                Filtrar por
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo das tabs */}
      {activeTab === "Lista de Tópicos" ? (
        /* Tabela de tópicos */
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th
                style={{
                  padding: '12px 16px',
                  background: 'rgba(37, 37, 50, 1)',
                  borderBottom: '1px solid #2C2C45',
                  textAlign: 'left'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Status
                </span>
              </th>
              <th
                style={{
                  padding: '12px 20px',
                  background: 'rgba(37, 37, 50, 1)',
                  borderBottom: '1px solid #2C2C45',
                  textAlign: 'left'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Tópicos
                </span>
              </th>
              <th
                style={{
                  padding: '12px 20px',
                  background: 'rgba(37, 37, 50, 1)',
                  borderBottom: '1px solid #2C2C45',
                  textAlign: 'left',
                  width: '165px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Tipo de estudo
                </span>
              </th>
              <th
                style={{
                  padding: '12px 20px',
                  background: 'rgba(37, 37, 50, 1)',
                  borderBottom: '1px solid #2C2C45',
                  textAlign: 'left',
                  width: '165px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Tempo estudado
                </span>
              </th>
              <th
                style={{
                  padding: '12px 20px',
                  background: 'rgba(37, 37, 50, 1)',
                  borderBottom: '1px solid #2C2C45',
                  textAlign: 'left',
                  width: '140px',
                  whiteSpace: 'nowrap'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Desempenho (%)
                </span>
              </th>
              <th
                style={{
                  padding: '12px 20px',
                  background: 'rgba(37, 37, 50, 1)',
                  borderBottom: '1px solid #2C2C45',
                  textAlign: 'left'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Comandos do mentor
                </span>
              </th>
              <th
                style={{
                  padding: '12px 24px',
                  background: 'rgba(37, 37, 50, 1)',
                  borderBottom: '1px solid #2C2C45',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Ações
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'center',
                    background: '#252532'
                  }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      width: '16px',
                      height: '16px',
                      background: goal.status === "completed" ? '#F79009' : '#17B26A',
                      margin: '0 auto'
                    }}
                  />
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'left',
                    background: '#252532'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      letterSpacing: '-0.5%',
                      color: '#F0F0F1'
                    }}
                  >
                    {goal.topic}
                  </span>
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'left',
                    width: '165px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      color: '#F0F0F1'
                    }}
                  >
                    {goal.studyType}
                  </span>
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'left',
                    width: '165px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      color: '#F0F0F1'
                    }}
                  >
                    {goal.timeStudied}
                  </span>
                </td>
                <td
                  style={{
                    padding: '16px 0px 16px 20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'center',
                    width: '140px',
                    height: '72px'
                  }}
                >
                  <div 
                    className="flex items-center justify-center gap-1.5 cursor-pointer group relative"
                    style={{ 
                      padding: '16px 0px 16px 20px',
                      width: '140px',
                      height: '72px'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '1.4285714285714286em',
                        color: '#F0F0F1'
                      }}
                    >
                      {goal.performance}
                    </span>
                    <div
                      className="w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="6.67" stroke="#85888E" strokeWidth="1.33"/>
                        <path d="M6.06 6.67a2 2 0 0 1 3.88 0.67c0 1.33-2 2-2 2" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 11.33h.01" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    {/* Tooltip */}
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
                      style={{
                        background: 'rgba(37, 37, 50, 1)',
                        border: '1px solid #2C2C45',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <div className="text-xs text-gray-300 mb-1">Performance</div>
                      <div className="text-sm font-medium">Baseado nos últimos simulados</div>
                      
                      {/* Arrow */}
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #2D2D45'
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'left',
                    background: '#252532'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      color: '#FAFAFA'
                    }}
                  >
                    {goal.mentorCommand}
                  </span>
                </td>
                <td
                  style={{
                    padding: '16px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'center'
                  }}
                >
                  <button
                    onClick={() => handleReviewGoal(goal)}
                    className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
                    style={{
                      padding: '8px',
                      borderRadius: '6px',
                      margin: '0 auto',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.940167 5.98281C0.847978 5.83684 0.801884 5.76385 0.776081 5.65128C0.756699 5.56672 0.756699 5.43336 0.776081 5.3488C0.801884 5.23623 0.847978 5.16324 0.940167 5.01727C1.70199 3.811 3.96961 0.761544 7.42533 0.761544C10.881 0.761544 13.1487 3.811 13.9105 5.01727C14.0027 5.16324 14.0488 5.23623 14.0746 5.3488C14.094 5.43336 14.094 5.56672 14.0746 5.65128C14.0488 5.76385 14.0027 5.83684 13.9105 5.98281C13.1487 7.18909 10.8811 10.2385 7.42533 10.2385C3.96961 10.2385 1.70199 7.18909 0.940167 5.98281Z" stroke="#85888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.42533 7.53083C8.5469 7.53083 9.45611 6.62161 9.45611 5.50004C9.45611 4.37847 8.5469 3.46926 7.42533 3.46926C6.30376 3.46926 5.39454 4.37847 5.39454 5.50004C5.39454 6.62161 6.30376 7.53083 7.42533 7.53083Z" stroke="#85888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ) : (
        /* Lista de sugestões de revisão */
        <div 
          className="flex flex-col"
          style={{
            gap: '16px',
            padding: '0px 24px'
          }}
        >
          {reviewSuggestions.map((suggestion) => (
            <ReviewSuggestionCard
              key={suggestion.id}
              suggestion={suggestion}
              onReview={handleReviewGoal}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      <GoalDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handlePerformanceSave}
        goal={selectedGoal || {
          topic: "Ética no Serviço Público",
          studyType: "Estudos de caso",
          timeStudied: "2h30",
          performance: "84%",
          mentorCommand: "Enviar resumo dos principais dilemas éticos",
          status: "pending",
          subjects: [],
          materials: [],
          mentorCommands: [],
          additionalTips: []
        }}
      />

      {/* Success Notification */}
      <GoalSuccessNotification
        isVisible={showSuccessNotification}
        onClose={() => setShowSuccessNotification(false)}
        goalName={completedGoalName}
      />
    </div>
  );
};