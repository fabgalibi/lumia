import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SprintSection } from '@/types/sprint-page';
import { sprintsService } from '@/services/sprints.service';
import { mapApiToSprintSections } from '@/utils/sprint-mapper';
import {
  SprintsPageHeader,
  SprintsSectionHeader,
  SprintsCarousel,
  SprintsGrid,
} from '@/components/sprints';

export const SprintsPage: React.FC = () => {
  const navigate = useNavigate();
  const [sprintData, setSprintData] = useState<SprintSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const fetchSprints = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiData = await sprintsService.buscarHistoricoSprints();
        const mappedData = mapApiToSprintSections(apiData);
        setSprintData(mappedData);
      } catch (err) {
        console.error('Erro ao carregar sprints:', err);
        setError('Erro ao carregar sprints. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchSprints();
  }, []);

  // Função para verificar posição do scroll
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const hasScroll = scrollWidth > clientWidth;
      
      if (!hasScroll) {
        // Se não há scroll, desabilitar ambos os botões
        setIsAtStart(true);
        setIsAtEnd(true);
      } else {
        const atStart = scrollLeft <= 0;
        const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
        setIsAtStart(atStart);
        setIsAtEnd(atEnd);
      }
    }
  };

  // Atualizar posição do scroll ao carregar dados
  useEffect(() => {
    if (sprintData.length > 0) {
      // Delay para garantir que o DOM foi renderizado
      setTimeout(() => {
        checkScrollPosition();
      }, 100);
    }
  }, [sprintData]);

  // Função para navegar no carrossel
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 377.33; // largura do card (361.33) + gap (16)
      const newScrollPosition = carouselRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      
      // Atualizar estados após um pequeno delay para a animação
      setTimeout(checkScrollPosition, 300);
    }
  };

  // Função para obter sprints bloqueadas
  const getBlockedSprints = () => {
    const emAndamentoSection = sprintData.find(section => section.title.includes('Em andamento'));
    if (emAndamentoSection) {
      return emAndamentoSection.sprints.filter(sprint => sprint.status === 'bloqueada');
    }
    return [];
  };

  if (loading) {
    return (
      <div className="flex flex-col flex-1 h-full">
        <SprintsPageHeader />
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
      <SprintsPageHeader />

      {/* Error State */}
      {error && (
        <div className="mx-8 mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p style={{ color: '#F87171', fontFamily: 'Sora', fontSize: '14px' }}>
            {error}
          </p>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto" style={{ padding: '24px 0', gap: '24px', display: 'flex', flexDirection: 'column' }}>
        {sprintData.map((section, index) => {
          const isInProgress = section.title.includes('Em andamento');
          const hasBlockedSprints = getBlockedSprints().length > 0;

          return (
            <div key={index} className="flex flex-col px-8" style={{ gap: '16px' }}>
              <SprintsSectionHeader
                title={section.title}
                showControls={isInProgress}
                showViewMore={isInProgress && hasBlockedSprints}
                onViewMore={() => navigate('/sprints/proximas')}
                onScrollLeft={() => scrollCarousel('left')}
                onScrollRight={() => scrollCarousel('right')}
                isAtStart={isAtStart}
                isAtEnd={isAtEnd}
              />
              
              {isInProgress ? (
                <SprintsCarousel
                  sprints={section.sprints}
                  carouselRef={carouselRef}
                  onScroll={checkScrollPosition}
                />
              ) : (
                <SprintsGrid sprints={section.sprints} />
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
};