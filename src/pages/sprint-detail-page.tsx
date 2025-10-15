import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserMenu } from '@/components/lumia/user-menu';
import { SprintInfoCard, SprintTopicsSection, SprintInfoPanel } from '@/components/sprints/detail';
import { SprintDetail } from '@/types';
import { sprintDetailService } from '@/services/sprint-detail.service';
import { mapApiResponseToSprintDetail } from '@/utils/sprint-detail-mapper';

export const SprintDetailPage: React.FC = () => {
  const { sprintId } = useParams<{ sprintId: string }>();
  const navigate = useNavigate();
  const [sprint, setSprint] = useState<SprintDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSprintDetail = async () => {
      if (!sprintId) return;
      
      // Validar se o sprintId é válido (pode ser número ou string como 'sprint-atual')
      if (!sprintId || sprintId.trim() === '') {
        console.error('ID da sprint inválido:', sprintId);
        setSprint(null);
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const apiResponse = await sprintDetailService.getSprintDetail(sprintId);
        console.log('API Response:', apiResponse);
        const sprintData = mapApiResponseToSprintDetail(apiResponse, sprintId);
        console.log('Mapped Sprint Data:', sprintData);
        setSprint(sprintData);
      } catch (error) {
        console.error('Erro ao buscar detalhes da sprint:', error);
        setSprint(null); // Deixar como null para mostrar erro
      } finally {
        setLoading(false);
      }
    };

    fetchSprintDetail();
  }, [sprintId]);



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
            apiGoals={sprint.apiGoals}
          />
        </div>

        {/* Right Column - Info Panel */}
        <SprintInfoPanel
          progress={sprint.progress}
          startDate={sprint.startDate || "17/09/2025"}
          endDate={sprint.endDate || "15/12/2025"}
          duration="90 dias"
          timePerGoal={sprint.averageTimePerGoal || "1h45m"}
        />
      </main>
    </div>
  );
};
