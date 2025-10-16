import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SprintCard } from '@/components/sprints/sprint-card';
import { Sprint } from '@/types/sprint-page';
import { UserMenu } from '@/components/lumia/user-menu';
import { sprintsService } from '@/services/sprints.service';
import { mapApiToSprintSections } from '@/utils/sprint-mapper';

export const BlockedSprintsPage: React.FC = () => {
  const navigate = useNavigate();
  const [blockedSprints, setBlockedSprints] = useState<Sprint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSprints = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiData = await sprintsService.buscarHistoricoSprints();
        const mappedData = mapApiToSprintSections(apiData);
        
        // Filtrar apenas sprints bloqueadas
        const emAndamentoSection = mappedData.find(section => section.title.includes('Em andamento'));
        if (emAndamentoSection) {
          const blocked = emAndamentoSection.sprints.filter(sprint => sprint.status === 'bloqueada');
          setBlockedSprints(blocked);
        }
      } catch (err) {
        console.error('Erro ao carregar sprints bloqueadas:', err);
        setError('Erro ao carregar sprints. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchSprints();
  }, []);

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
            Sprints
          </h1>
          <UserMenu />
        </header>

        {/* Loading State */}
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p style={{ color: '#CECFD2', fontFamily: 'Sora', fontSize: '14px' }}>
              Carregando sprints...
            </p>
          </div>
        </main>
      </div>
    );
  }

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
          Sprints ({blockedSprints.length})
        </h1>
        <UserMenu />
      </header>

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
            padding: 0,
          }}
        >
          Sprints
        </button>
        
        {/* Chevron */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="#61656C" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        {/* Current page */}
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '1.56em',
            color: '#FFFFFF',
            verticalAlign: 'middle',
          }}
        >
          Próximas Sprints
        </span>
      </div>

      {/* Error State */}
      {error && (
        <div className="mx-8 mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p style={{ color: '#F87171', fontFamily: 'Sora', fontSize: '14px' }}>
            {error}
          </p>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto" style={{ padding: '0 32px 24px 32px' }}>
        {blockedSprints.length > 0 ? (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, 361.33px)',
              gap: '16px 16px',
              justifyContent: 'start',
            }}
          >
            {blockedSprints.map(sprint => (
              <SprintCard key={sprint.id} sprint={sprint} />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '48px 24px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#94979C',
              }}
            >
              Não há sprints bloqueadas no momento
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

