import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserMenu } from '@/components/lumia/user-menu';
import { SprintInfoCard, SprintDetailStats, SprintDetailGoals, SprintTopicsSection, SprintInfoPanel } from '@/components/sprints/detail';
import { Goal, SprintDetail } from '@/types';

export const SprintDetailPage: React.FC = () => {
  const { sprintId } = useParams<{ sprintId: string }>();
  const navigate = useNavigate();
  const [sprint, setSprint] = useState<SprintDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implementar busca de dados da API baseado no sprintId
    // Por enquanto, usar dados mock
    const mockSprint: SprintDetail = {
      id: sprintId || '1',
      title: 'Sprint 01 - Direito Consitucional',
      objective: 'Agente PRF',
      status: 'em-andamento',
      progress: 55,
      period: 'Finaliza em 5 dias',
      goalsRemaining: 4,
      image: '/images/sprints/sprint-placeholder.png'
    };
    
    setTimeout(() => {
      setSprint(mockSprint);
      setLoading(false);
    }, 1000);
  }, [sprintId]);

  // Mock topics data
  const mockTopics = [
    { id: '1', title: 'Ética no Serviço Público', isCompleted: false },
    { id: '2', title: 'Princípios Constitucionais Fundamentais', isCompleted: false },
    { id: '3', title: 'Legislação Previdenciária', isCompleted: false },
    { id: '4', title: 'Direito', isCompleted: false },
    { id: '5', title: 'Administração', isCompleted: false },
    { id: '6', title: 'Perícia Médica', isCompleted: false },
    { id: '7', title: 'Noções de Direito Constitucional', isCompleted: false },
    { id: '8', title: 'Serviço Social', isCompleted: false },
    { id: '9', title: 'Contabilidade', isCompleted: false },
    { id: '10', title: 'Instrumentalidade do Serviço Social', isCompleted: false },
  ];

  const mockReviews = [
    { id: '1', title: 'Revisão de Direito Constitucional', isCompleted: true },
    { id: '2', title: 'Revisão de Direito Administrativo', isCompleted: false },
    { id: '3', title: 'Revisão de Português', isCompleted: false },
    { id: '4', title: 'Revisão de Matemática', isCompleted: false },
    { id: '5', title: 'Revisão de Informática', isCompleted: false },
    { id: '6', title: 'Revisão de Atualidades', isCompleted: false },
  ];

  // Mock goals data
  const mockGoals: Goal[] = [
    {
      id: '1',
      metaNumber: '01',
      discipline: 'Direito Constitucional',
      subject: 'Direitos Fundamentais',
      studyType: 'teoria',
      timeStudied: '2h',
      performance: '18/20 (90%)',
      status: 'concluido',
      relevance: 'high',
      subjects: ['Direitos Fundamentais', 'Constituição Federal'],
      materials: ['Manual de Direito Constitucional', 'Constituição Federal'],
      commands: ['Leia o capítulo sobre direitos fundamentais', 'Faça exercícios de fixação'],
      links: ['https://exemplo.com/direitos-fundamentais'],
      additionalTips: ['Foque nos direitos de primeira geração', 'Estude a jurisprudência do STF']
    },
    {
      id: '2',
      metaNumber: '02',
      discipline: 'Direito Administrativo',
      subject: 'Exercícios de Direito Administrativo',
      studyType: 'pratica',
      timeStudied: '0h',
      performance: '0/0 (0%)',
      status: 'pendente',
      relevance: 'medium',
      subjects: ['Princípios Administrativos', 'Atos Administrativos'],
      materials: ['Questões de Concurso', 'Manual de Direito Administrativo'],
      commands: ['Resolva 20 questões', 'Revise os erros'],
      links: ['https://exemplo.com/exercicios-administrativo'],
      additionalTips: ['Foque nas questões que mais caem em concurso']
    },
    {
      id: '3',
      metaNumber: '03',
      discipline: 'Língua Portuguesa',
      subject: 'Revisão de Português',
      studyType: 'teoria',
      timeStudied: '0h 30min',
      performance: '12/15 (80%)',
      status: 'pendente',
      relevance: 'medium',
      subjects: ['Concordância Verbal', 'Regência Verbal'],
      materials: ['Gramática Completa', 'Exercícios de Português'],
      commands: ['Leia a teoria', 'Pratique com exercícios'],
      links: ['https://exemplo.com/concordancia-verbal'],
      additionalTips: ['Vamos revisar as principais regras de concordância']
    }
  ];

  if (loading) {
    return (
      <div className="flex flex-col flex-1 h-full">
        {/* Header */}
        <header
          className="flex items-center justify-between flex-shrink-0"
          style={{
            padding: '24px 32px',
            background: '#191923',
            borderBottom: '1px solid #272737',
          }}
        >
          <h1
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF',
            }}
          >
            Sprint
          </h1>
          <UserMenu />
        </header>

        {/* Loading State */}
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p style={{ color: '#CECFD2', fontFamily: 'Sora', fontSize: '14px' }}>
              Carregando sprint...
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (!sprint) {
    return (
      <div className="flex flex-col flex-1 h-full">
        <header
          className="flex items-center justify-between flex-shrink-0"
          style={{
            padding: '24px 32px',
            background: '#191923',
            borderBottom: '1px solid #272737',
          }}
        >
          <h1
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF',
            }}
          >
            Sprint
          </h1>
          <UserMenu />
        </header>

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p style={{ color: '#F87171', fontFamily: 'Sora', fontSize: '16px' }}>
              Sprint não encontrada
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 h-full">

      {/* Breadcrumbs */}
      <div className="flex items-center px-8 py-6" style={{ gap: '8px' }}>
        {/* Dashboard icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 7.66699V15H9.33301V7.66699H15ZM6.66699 11V15H1V11H6.66699ZM1.66699 14.333H6V11.667H1.66699V14.333ZM10 14.333H14.333V8.33301H10V14.333ZM6.66699 1V8.33301H1V1H6.66699ZM1.66699 7.66699H6V1.66699H1.66699V7.66699ZM15 1V5H9.33301V1H15ZM10 4.33301H14.333V1.66699H10V4.33301Z" stroke="#94979C"/>
        </svg>
        
        {/* Chevron */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="#61656C" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        {/* Sprints link */}
        <button
          onClick={() => navigate('/sprints')}
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#CECFD2',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sprints
        </button>
        
        {/* Chevron */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="#61656C" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        {/* Current sprint */}
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#FFFFFF',
          }}
        >
          {sprint.title}
        </span>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-8 pb-8" style={{ gap: '32px', display: 'flex' }}>
        {/* Left Column - Sprint Info */}
        <div 
          className="flex flex-col"
          style={{
            width: '728px',
            gap: '32px',
          }}
        >
          {/* Sprint Header Card */}
          <SprintInfoCard sprint={sprint} />

          {/* Topics Section */}
          <SprintTopicsSection 
            topics={mockTopics}
            reviews={mockReviews}
          />
        </div>

        {/* Right Column - Info Panel */}
        <SprintInfoPanel
          progress={sprint.progress}
          startDate="17/09/2025"
          endDate="15/12/2025"
          duration="90 dias"
          timePerGoal="1h45m"
        />
      </main>
    </div>
  );
};
