import React from 'react';
import { SprintCard } from '@/components/sprints/sprint-card';
import { SprintSection } from '@/types/sprint-page';
import { UserMenu } from '@/components/lumia/user-menu';

// Mock data baseado no design do Figma
const mockSprintData: SprintSection[] = [
  {
    title: 'Em andamento (01)',
    count: 4,
    sprints: [
      {
        id: '1',
        title: 'Sprint 01 - Direito Consitucional',
        objective: 'Agente PRF',
        status: 'em-andamento',
        progress: 20,
        period: 'Finaliza em 5 dias',
        goalsRemaining: 5,
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '2',
        title: 'Sprint 02 - Título Aqui',
        objective: 'Agente PRF',
        status: 'bloqueada',
        progress: 0,
        period: 'Inicia em 12 Jan 25',
        startDate: '12 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '3',
        title: 'Sprint 03 - Bloqueada',
        objective: 'Agente PRF',
        status: 'bloqueada',
        progress: 0,
        period: 'Inicia em 5 dias',
        startDate: '5 dias',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '4',
        title: 'Sprint 03 - Título Aqui',
        objective: 'Agente PRF',
        status: 'bloqueada',
        progress: 0,
        period: 'Inicia em 5 dias',
        startDate: '5 dias',
        image: '/images/sprints/sprint-placeholder.png'
      }
    ]
  },
  {
    title: 'Finalizadas (30)',
    count: 30,
    sprints: [
      {
        id: '5',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '6',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '7',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '8',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '9',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '10',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '11',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      },
      {
        id: '12',
        title: 'Sprint 02 - Língua Portuguesa',
        objective: 'Agente PRF',
        status: 'concluida',
        progress: 100,
        period: 'Finalizou 2 Jan 25',
        endDate: 'Finalizou 2 Jan 25',
        image: '/images/sprints/sprint-placeholder.png'
      }
    ]
  }
];

export const SprintsPage: React.FC = () => {
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
          Sprints (31)
        </h1>
        <UserMenu />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto" style={{ padding: '24px 0', gap: '24px', display: 'flex', flexDirection: 'column' }}>
        {mockSprintData.map((section, index) => (
          <div key={index} className="flex flex-col px-8" style={{ gap: '16px' }}>
            {/* Header da seção */}
            <div className="flex items-center justify-between w-full gap-4">
              <h2
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '1.56em',
                  color: '#FFFFFF',
                }}
              >
                {section.title}
              </h2>
              {section.title.includes('Em andamento') && (
                <div className="flex items-center" style={{ gap: '16px' }}>
                  {/* Link Ver próximas */}
                  <a 
                    href="#" 
                    className="cursor-pointer"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '2em',
                      color: '#CECFD2',
                      textDecoration: 'underline',
                    }}
                  >
                    Ver próximas
                  </a>
                  
                  {/* Botão esquerda */}
                  <button
                    className="flex items-center justify-center"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#212130',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '6px',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 15L7.5 10L12.5 5" stroke="#94979C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {/* Botão direita */}
                  <button
                    className="flex items-center justify-center"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#2D2D45',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '6px',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="#94979C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            
            {/* Grid de cards */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(361px, 1fr))',
                gap: '16px 16px',
                justifyContent: 'start',
              }}
            >
              {section.sprints.map(sprint => (
                <SprintCard key={sprint.id} sprint={sprint} />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};