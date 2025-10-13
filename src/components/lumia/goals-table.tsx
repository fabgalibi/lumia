import React, { useState, useEffect } from "react";
import { Table, Input, Text, Tabs, colors } from '@/components/ui/design-system';
import { TableColumn } from '@/types/table';
import { Goal } from '@/types/goal';
// import { goalsTableData } from '@/data/goals'; // Removido - usando apenas dados da API
import { reviewSuggestionsData } from '@/data/review-suggestions';
import { RelevanceStars, type RelevanceLevel } from './relevance-stars';
import { StatusDot } from './status-dot';
import { PerformanceTooltip } from './performance-tooltip';
import { ReviewSuggestionCard } from "./review-suggestion-card";
import { GoalsMobileCard } from "./goals-mobile-card";
import { GoalDetailsModal } from "../modals/goal-details-modal";
import { GoalSuccessNotification } from "../notifications/goal-success-notification";
import { RocketAnimation } from "../animations";
import { SkipGoalNotification } from "../notifications/skip-goal-notification";
import { useSprint as useSprintContext } from "@/contexts/sprint-context";
import { useSprint as useSprintAPI } from "@/hooks/useSprint";
import { mapMetasSprintToGoals } from "@/utils/sprint-mapper";

// Componente para auto-hide de notificações
const AutoHideNotification: React.FC<{ onHide: () => void; delay: number }> = ({ onHide, delay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, delay);

    return () => clearTimeout(timer);
  }, [onHide, delay]);

  return null;
};

interface GoalsTableProps {
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const GoalsTable: React.FC<GoalsTableProps> = ({ screenSize = 'desktop' }) => {
  const { refreshSprint } = useSprintContext();
  const { dashboard, isLoading, error, refetch, concluirMeta } = useSprintAPI(); // pularMeta removido - endpoint não implementado
  
  const [activeTab, setActiveTab] = useState('lista-topicos');
  const [searchValue, setSearchValue] = useState("");
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [completedGoalName, setCompletedGoalName] = useState<string>("");
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);
  const [showSkipNotification, setShowSkipNotification] = useState(false);
  const [skippedGoalName, setSkippedGoalName] = useState<string>("");
  const [hasUpdatedAPI, setHasUpdatedAPI] = useState(false);
  const [goals, setGoals] = useState<Goal[]>([]);

  // Atualizar metas quando os dados da API chegarem
  useEffect(() => {
    if (dashboard?.metas) {
      const mappedGoals = mapMetasSprintToGoals(dashboard.metas);
      setGoals(mappedGoals);
    }
  }, [dashboard]);

  // Filtrar dados baseado na busca
  const filteredGoals = goals.filter(goal =>
    goal.discipline.toLowerCase().includes(searchValue.toLowerCase()) ||
    goal.subject.toLowerCase().includes(searchValue.toLowerCase()) ||
    goal.studyType.toLowerCase().includes(searchValue.toLowerCase())
  );







  // Definir colunas da tabela baseadas no Figma
  const columns: TableColumn<Goal>[] = [
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: '80px', // Largura do Status no Figma
      align: 'center',
      render: (value: string) => (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <StatusDot status={value as any} size="lg" />
        </div>
      )
    },
    {
      key: 'metaNumber',
      title: 'Nº meta',
      dataIndex: 'metaNumber',
      width: '80px', // Largura do Nº meta no Figma
      align: 'center',
      render: (value: string) => (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <Text 
            variant="caption" 
            weight="regular" 
            color="#F0F0F1"
            screenSize={screenSize}
            style={{
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              letterSpacing: '-0.5%'
            }}
          >
            {value}
          </Text>
        </div>
      )
    },
    {
      key: 'discipline',
      title: 'Disciplinas',
      dataIndex: 'discipline',
      width: '200px', // Largura das Disciplinas no Figma
      align: 'left',
      render: (value: string) => (
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
          <Text 
            variant="caption" 
            weight="regular" 
            color="#F0F0F1"
            screenSize={screenSize}
            style={{
              width: '100%',
              textAlign: 'left',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              letterSpacing: '-0.5%'
            }}
          >
            {value}
          </Text>
        </div>
      )
    },
    {
      key: 'subject',
      title: 'Assunto',
      dataIndex: 'subject',
      width: '250px', // Largura do Assunto no Figma
      align: 'left',
      render: (value: string) => (
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
          <Text 
            variant="body" 
            weight="regular"
            color="#FAFAFA"
            screenSize={screenSize}
            style={{
              width: '100%',
              textAlign: 'left',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em'
            }}
          >
            {value}
          </Text>
        </div>
      )
    },
    {
      key: 'studyType',
      title: 'Tipo de estudo',
      dataIndex: 'studyType',
      width: '165px', // Largura do Tipo de estudo no Figma
      align: 'left',
      render: (value: string) => (
        <div style={{ 
          display: 'flex',
          justifyContent: 'stretch',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
          <Text 
            variant="body" 
            weight="regular"
            color="#F0F0F1"
            screenSize={screenSize}
            style={{
              width: '100%',
              textAlign: 'left',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em'
            }}
          >
            {value}
          </Text>
        </div>
      )
    },
    {
      key: 'timeStudied',
      title: 'Tempo estudado',
      dataIndex: 'timeStudied',
      width: '120px', // Largura do Tempo estudado no Figma
      align: 'center',
      render: (value: string) => (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <Text 
            variant="body" 
            weight="regular"
            color="#F0F0F1"
            screenSize={screenSize}
            style={{
              fontSize: '14px',
              lineHeight: '1.4285714285714286em'
            }}
          >
            {value}
          </Text>
        </div>
      )
    },
    {
      key: 'performance',
      title: 'Desempenho',
      dataIndex: 'performance',
      width: '132px', // Largura do Desempenho no Figma
      align: 'center',
      render: (value: string) => (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <PerformanceTooltip percentage={value} screenSize={screenSize} />
        </div>
      )
    },
    {
      key: 'relevance',
      title: 'Relevância',
      dataIndex: 'relevance',
      width: '120px', // Largura da Relevância no Figma
      align: 'center',
      render: (value: RelevanceLevel) => (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <RelevanceStars level={value} />
        </div>
      )
    },
    {
      key: 'actions',
      title: 'Ações',
      width: '100px', // Largura ajustada para o novo ícone
      align: 'center',
      render: (_, record: Goal) => (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2px',
          height: '100%'
        }}>
          <button
            onClick={() => handleGoalClick(record)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
              width: '40px',
              height: '40px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.bg.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {/* Actions Icon exato do Figma */}
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1134 16.4754C10.0226 16.3316 9.97723 16.2597 9.95182 16.1489C9.93273 16.0656 9.93273 15.9343 9.95182 15.851C9.97723 15.7401 10.0226 15.6682 10.1134 15.5245C10.8637 14.3365 13.0969 11.3333 16.5003 11.3333C19.9036 11.3333 22.1369 14.3365 22.8871 15.5245C22.9779 15.6682 23.0233 15.7401 23.0487 15.851C23.0678 15.9343 23.0678 16.0656 23.0487 16.1489C23.0233 16.2597 22.9779 16.3316 22.8871 16.4754C22.1369 17.6634 19.9036 20.6666 16.5003 20.6666C13.0969 20.6666 10.8637 17.6634 10.1134 16.4754Z" stroke="#85888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5003 17.9999C17.6048 17.9999 18.5003 17.1045 18.5003 15.9999C18.5003 14.8953 17.6048 13.9999 16.5003 13.9999C15.3957 13.9999 14.5003 14.8953 14.5003 15.9999C14.5003 17.1045 15.3957 17.9999 16.5003 17.9999Z" stroke="#85888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )
    }
  ];

  const handleGoalClick = (goal: Goal) => {
    setSelectedGoal(goal);
    setIsModalOpen(true);
  };



  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      width: '100%'
    }}>
      {/* Card que envolve título, abas e tabela */}
      <div style={{
        backgroundColor: '#252532', // Cor do card conforme Figma
        borderRadius: '16px',
        border: '1px solid #2C2C45',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header com ícone e título */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '20px 24px 0px 24px' // Padding do card
        }}>
        {/* Book Icon - Exato do Figma */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M20 19V16H7C5.34315 16 4 17.3431 4 19M8.8 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V5.2C20 4.07989 20 3.51984 19.782 3.09202C19.5903 2.71569 19.2843 2.40973 18.908 2.21799C18.4802 2 17.9201 2 16.8 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22Z" 
            stroke="#F0F0F1" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
              </svg>
        
        <Text 
          variant="h2" 
          size="xl" 
          weight="bold" 
          color={colors.text.primary}
          screenSize={screenSize}
            >
              Suas metas
        </Text>
        </div>

        {/* Container principal com tabs e search */}
        <div 
          style={{
            display: 'flex',
            flexDirection: (screenSize === 'mobile' || screenSize === 'tablet') ? 'column' : 'row',
            justifyContent: (screenSize === 'mobile' || screenSize === 'tablet') ? 'center' : 'space-between',
            alignItems: 'center',
            gap: (screenSize === 'mobile' || screenSize === 'tablet') ? '20px' : '24px',
            padding: (screenSize === 'mobile' || screenSize === 'tablet') ? '20px 16px' : '16px 24px'
          }}
        >
        {/* Tabs Container */}
        <div style={{ 
          flex: 'none',
          width: (screenSize === 'mobile' || screenSize === 'tablet') ? '100%' : 'auto'
        }}>
          <Tabs
            tabs={[
              { id: 'lista-topicos', label: 'Lista de metas' },
              { id: 'sugestoes-revisao', label: 'Sugestões de revisão' }
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="underline"
            size="md"
            screenSize={screenSize}
            />
          </div>

        {/* Search Field */}
          <div 
            style={{
            display: 'flex',
            flexDirection: 'column',
                gap: '6px',
            width: (screenSize === 'mobile' || screenSize === 'tablet') ? '100%' : '465px',
            maxWidth: '465px',
            flexShrink: 1
          }}
        >
          <Input
            placeholder="Buscar disciplinas, assuntos, etc... "
            value={searchValue}
            onChange={(value: string) => setSearchValue(value)}
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="#667085"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            screenSize={screenSize}
            style={{
              width: '100%',
              minWidth: 'auto',
              maxWidth: '100%'
            }}
          />
        </div>
      </div>

        {/* Tabela ou Cards Mobile */}
        <div style={{ 
          padding: '0 0 24px',
          width: '100%',
          maxWidth: '100%'
        }}>
          {/* Loading State */}
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '80px 24px',
                color: '#CECFD2',
                fontFamily: 'Sora',
                fontSize: '16px',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: '4px solid #2C2C45',
                  borderTop: '4px solid #F48E2F',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}
              />
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
              Carregando suas metas...
            </div>
          ) : error ? (
            /* Error State */
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '80px 24px',
                color: '#F66649',
                fontFamily: 'Sora',
                fontSize: '16px',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="#F66649"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div style={{ textAlign: 'center' }}>
                <div>Erro ao carregar metas</div>
                <div style={{ fontSize: '14px', color: '#94979C', marginTop: '8px' }}>
                  {error}
                </div>
              </div>
              <button
                onClick={() => refetch()}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#F48E2F',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'Sora',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E07A1F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F48E2F';
                }}
              >
                Tentar novamente
              </button>
            </div>
          ) : activeTab === 'lista-topicos' ? (
            screenSize === 'mobile' ? (
                // Layout Mobile - Cards verticais
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '20px 16px 16px',
                    width: '100%'
                  }}
                >
                  {filteredGoals.length > 0 ? (
                    filteredGoals.map((goal) => (
                      <GoalsMobileCard
                        key={goal.id}
                        goal={goal}
                        onGoalClick={handleGoalClick}
                        fullWidth={true}
                      />
                    ))
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '48px',
                        color: '#CECFD2',
                        fontFamily: 'Sora',
                        fontSize: '16px'
                      }}
                    >
                      Nenhum tópico encontrado
                    </div>
                  )}
                </div>
              ) : screenSize === 'tablet' ? (
                // Layout Tablet - Cards em colunas flexbox
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    padding: '20px 16px 16px',
                    width: '100%',
                    maxWidth: '100%'
                  }}
                >
                  {filteredGoals.length > 0 ? (
                    filteredGoals.map((goal) => (
                      <GoalsMobileCard
                        key={goal.id}
                        goal={goal}
                        onGoalClick={handleGoalClick}
                        fullWidth={true}
                      />
                    ))
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '48px',
                        color: '#CECFD2',
                        fontFamily: 'Sora',
                        fontSize: '16px',
                        width: '100%'
                      }}
                    >
                      Nenhum tópico encontrado
                    </div>
                  )}
                </div>
              ) : (
                // Layout Desktop - Tabela
                <Table
                  columns={columns}
                  data={filteredGoals}
                  screenSize={screenSize}
                  emptyText="Nenhum tópico encontrado"
                />
              )
          ) : (
            screenSize === 'mobile' ? (
                // Layout Mobile - Cards verticais
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '20px 16px 16px',
                  width: '100%'
                }}>
                  {reviewSuggestionsData.map((suggestion, index) => (
                    <ReviewSuggestionCard
                      key={suggestion.id || index}
                      suggestion={suggestion}
                      onReview={() => {
                        // Converter suggestion para goal para abrir o modal
                        const mockGoal: Goal = {
                          id: suggestion.id,
                          metaNumber: suggestion.id,
                          discipline: suggestion.topic,
                          subject: suggestion.topic, // Usar topic como subject para sugestões
                          studyType: suggestion.studyType,
                          timeStudied: suggestion.timeStudied,
                          performance: suggestion.performance,
                          status: 'pendente',
                          relevance: suggestion.relevance,
                          subjects: [suggestion.topic],
                          materials: [],
                          commands: [suggestion.mentorCommand],
                          links: [],
                          additionalTips: []
                        };
                        handleGoalClick(mockGoal);
                      }}
                    />
                  ))}
                </div>
              ) : screenSize === 'tablet' ? (
                // Layout Tablet - Cards em grid
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px',
                  padding: '20px 16px 16px',
                  width: '100%',
                  maxWidth: '100%'
                }}>
                  {reviewSuggestionsData.map((suggestion, index) => (
                    <ReviewSuggestionCard
                      key={suggestion.id || index}
                      suggestion={suggestion}
                      onReview={() => {
                        // Converter suggestion para goal para abrir o modal
                        const mockGoal: Goal = {
                          id: suggestion.id,
                          metaNumber: suggestion.id,
                          discipline: suggestion.topic,
                          subject: suggestion.topic, // Usar topic como subject para sugestões
                          studyType: suggestion.studyType,
                          timeStudied: suggestion.timeStudied,
                          performance: suggestion.performance,
                          status: 'pendente',
                          relevance: suggestion.relevance,
                          subjects: [suggestion.topic],
                          materials: [],
                          commands: [suggestion.mentorCommand],
                          links: [],
                          additionalTips: []
                        };
                        handleGoalClick(mockGoal);
                      }}
                    />
                  ))}
                </div>
              ) : (
                // Layout Desktop - Cards em coluna
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '0 24px'
                }}>
                  {reviewSuggestionsData.map((suggestion, index) => (
                    <ReviewSuggestionCard
                      key={suggestion.id || index}
                      suggestion={suggestion}
                      onReview={() => {
                        // Converter suggestion para goal para abrir o modal
                        const mockGoal: Goal = {
                          id: suggestion.id,
                          metaNumber: suggestion.id,
                          discipline: suggestion.topic,
                          subject: suggestion.topic, // Usar topic como subject para sugestões
                          studyType: suggestion.studyType,
                          timeStudied: suggestion.timeStudied,
                          performance: suggestion.performance,
                          status: 'pendente',
                          relevance: suggestion.relevance,
                          subjects: [suggestion.topic],
                          materials: [],
                          commands: [suggestion.mentorCommand],
                          links: [],
                          additionalTips: []
                        };
                        handleGoalClick(mockGoal);
                      }}
                    />
                  ))}
                </div>
              )
          )}
        </div>
      </div> {/* Fecha o card */}

      {/* Modals e Notificações */}
      {isModalOpen && selectedGoal && (
      <GoalDetailsModal
          isOpen={true}
          goal={selectedGoal}
          onClose={() => setIsModalOpen(false)}
          onCompleteGoal={async () => {
            console.log('Completando meta - ativando foguetinho');
            if (selectedGoal?.id) {
              try {
                await concluirMeta(selectedGoal.id);
                // Não atualizar dados da API ainda - só quando o foguete tocar a barra
                setCompletedGoalName(selectedGoal.discipline || selectedGoal.subject || 'Meta');
                setHasUpdatedAPI(false); // Reset para nova animação
                setShowRocketAnimation(true);
                setIsModalOpen(false);
              } catch (error) {
                console.error('Erro ao concluir meta:', error);
                // Ainda mostra a animação mesmo se falhar (UX)
                setCompletedGoalName(selectedGoal.discipline || selectedGoal.subject || 'Meta');
                setHasUpdatedAPI(false); // Reset para nova animação
                setShowRocketAnimation(true);
                setIsModalOpen(false);
              }
            }
          }}
          onSkipGoal={async (goalName: string) => {
            if (selectedGoal?.id) {
              try {
                // TODO: Implementar quando endpoint pularMeta estiver disponível
                // await pularMeta(selectedGoal.id, `Meta pulada: ${goalName}`);
                console.log('Pular meta:', selectedGoal.id, goalName);
                setSkippedGoalName(goalName);
                setShowSkipNotification(true);
                setIsModalOpen(false);
              } catch (error) {
                console.error('Erro ao pular meta:', error);
                // Ainda mostra a notificação mesmo se falhar (UX)
                setSkippedGoalName(goalName);
                setShowSkipNotification(true);
                setIsModalOpen(false);
              }
            }
          }}
        />
      )}

      {showRocketAnimation && (
        <RocketAnimation 
          isVisible={true}
          onComplete={() => {
            setShowRocketAnimation(false);
            setShowSuccessNotification(true);
          }}
          onProgressUpdate={async (newProgress) => {
            console.log('Progresso atualizado:', newProgress);
            
            // Atualizar dados da API quando o foguete tocar a barra (primeira atualização)
            if (!hasUpdatedAPI && newProgress > 0) {
              try {
                console.log('Foguete tocou a barra - atualizando dados da API');
                await refetch();
                await refreshSprint();
                setHasUpdatedAPI(true);
              } catch (error) {
                console.error('Erro ao atualizar dados após foguete tocar barra:', error);
              }
            }
            
            // Não atualizar progresso manualmente - vem da API
          }}
        />
      )}

      {showSuccessNotification && (
      <GoalSuccessNotification
          isVisible={true}
          goalName={completedGoalName}
        onClose={() => setShowSuccessNotification(false)}
      />
      )}

      {/* Auto-hide success notification after 5 seconds */}
      {showSuccessNotification && (
        <AutoHideNotification
          onHide={() => setShowSuccessNotification(false)}
          delay={5000}
        />
      )}

      {showSkipNotification && (
      <SkipGoalNotification
          isVisible={true}
          goalName={skippedGoalName}
        onClose={() => setShowSkipNotification(false)}
      />
      )}

      {/* Auto-hide skip notification after 5 seconds */}
      {showSkipNotification && (
        <AutoHideNotification
          onHide={() => setShowSkipNotification(false)}
          delay={5000}
        />
      )}
    </div>
  );
};

export default GoalsTable;
