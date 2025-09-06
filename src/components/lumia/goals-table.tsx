import { useState } from "react";
import { SearchMd, FilterLines, Eye } from "@untitledui/icons";

export const GoalsTable = () => {
  const [activeTab, setActiveTab] = useState("Lista de Tópicos");

  const goals = [
    {
      topic: "Ética no Serviço Público",
      studyType: "Estudos de caso",
      timeStudied: "2h30",
      performance: "84%",
      mentorCommand: "Enviar resumo dos principais dilemas éticos",
      status: "completed"
    },
    {
      topic: "Noções de Direito Administrativo",
      studyType: "Mapas mentais",
      timeStudied: "3h15",
      performance: "84%",
      mentorCommand: "Liberar mapa mental sobre atos administrativos",
      status: "in-progress"
    },
    {
      topic: "Legislação Previdenciária",
      studyType: "Simulado",
      timeStudied: "2h",
      performance: "84%",
      mentorCommand: "Atualizar aluno sobre mudanças recentes no INSS",
      status: "in-progress"
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

  return (
    <div 
      className="rounded-2xl border shadow-lg"
      style={{
        background: '#252532',
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
              <svg width="16" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                  stroke="#F0F0F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                  stroke="#F0F0F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Sora',
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
                className="flex items-center justify-center"
                style={{
                  gap: '8px',
                  padding: '0px 4px 12px',
                  height: '32px',
                  borderBottom: activeTab === "Lista de Tópicos" ? '2px solid #F48E2F' : '2px solid transparent'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
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
                className="flex items-center justify-center"
                style={{
                  gap: '8px',
                  padding: '0px 4px 12px',
                  height: '32px',
                  borderBottom: activeTab === "Sugestões de revisão" ? '2px solid #F48E2F' : '2px solid transparent'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
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
                <SearchMd className="w-5 h-5" style={{ color: '#94979C' }} />
                <input
                  placeholder="Buscar "
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                  style={{
                    fontFamily: 'Sora',
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
              className="flex items-center justify-center"
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
              <FilterLines className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              <span 
                style={{
                  fontFamily: 'Sora',
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

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
              style={{
                padding: '12px 16px',
                background: '#2D2D45',
                borderBottom: '1px solid #2C2C45',
                borderRight: '1px solid #2C2C45',
                textAlign: 'left'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
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
                padding: '12px 16px',
                background: '#2D2D45',
                borderBottom: '1px solid #2C2C45',
                borderRight: '1px solid #2C2C45',
                textAlign: 'left'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
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
                padding: '12px 16px',
                background: '#2D2D45',
                borderBottom: '1px solid #2C2C45',
                borderRight: '1px solid #2C2C45',
                textAlign: 'left',
                width: '165px'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
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
                padding: '12px 16px',
                background: '#2D2D45',
                borderBottom: '1px solid #2C2C45',
                borderRight: '1px solid #2C2C45',
                textAlign: 'left',
                width: '165px'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
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
                padding: '12px 16px',
                background: '#2D2D45',
                borderBottom: '1px solid #2C2C45',
                borderRight: '1px solid #2C2C45',
                textAlign: 'left',
                width: '140px',
                whiteSpace: 'nowrap'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
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
                padding: '12px 16px',
                background: '#2D2D45',
                borderBottom: '1px solid #2C2C45',
                borderRight: '1px solid #2C2C45',
                textAlign: 'left'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
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
                background: '#2D2D45',
                borderBottom: '1px solid #2C2C45',
                textAlign: 'left'
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
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
                  borderRight: '1px solid #2C2C45',
                  textAlign: 'center'
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
                  borderRight: '1px solid #2C2C45',
                  textAlign: 'left'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
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
                  borderRight: '1px solid #2C2C45',
                  textAlign: 'left',
                  width: '165px'
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
                  {goal.studyType}
                </span>
              </td>
              <td
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid #2C2C45',
                  borderRight: '1px solid #2C2C45',
                  textAlign: 'left',
                  width: '165px'
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
                  {goal.timeStudied}
                </span>
              </td>
              <td
                style={{
                  padding: '16px 0px 16px 20px',
                  borderBottom: '1px solid #2C2C45',
                  borderRight: '1px solid #2C2C45',
                  textAlign: 'center',
                  width: '140px',
                  height: '72px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
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
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ opacity: 0 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#85888E" strokeWidth="1.33"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17h.01" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </td>
              <td
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid #2C2C45',
                  borderRight: '1px solid #2C2C45',
                  textAlign: 'left'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
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
                  className="flex items-center justify-center"
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    margin: '0 auto'
                  }}
                >
                  <Eye className="w-4 h-4" style={{ color: '#85888E' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};