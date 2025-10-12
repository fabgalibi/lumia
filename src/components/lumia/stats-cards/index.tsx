import React, { useState, useEffect } from 'react';
import { useSprint } from '@/hooks/useSprint';
import { SprintHeader } from './sprint-header';
import { StatCard } from './stat-card';
import { PerformanceIcon, GoalsIcon, StudyHoursIcon, AverageHoursIcon } from './stat-icons';
import { calcularMediaDiaria } from './utils';

interface StatsCardsProps {
  metasPendentes?: number; // Recebido do dashboard para atualizar o texto
}

export const StatsCards: React.FC<StatsCardsProps> = ({ metasPendentes }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { dashboard, isLoading } = useSprint();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const stats = [
    {
      icon: PerformanceIcon,
      title: "Seu desempenho",
      value: isLoading ? "..." : `${dashboard?.estatisticas?.desempenhoMedio?.toFixed(2) || '0,00'}%`,
      change: "15%", // TODO: Calcular variação quando API enviar histórico
      changeText: "comparado à semana passada",
      showChange: true
    },
    {
      icon: GoalsIcon,
      title: "Metas concluídas",
      value: isLoading ? "..." : `${dashboard?.estatisticas?.metasConcluidas || 0} metas`,
      change: null,
      changeText: null,
      showChange: false
    },
    {
      icon: StudyHoursIcon,
      title: "Horas estudadas",
      value: isLoading ? "..." : dashboard?.estatisticas?.tempoTotalEstudado || '0h',
      change: null,
      changeText: null,
      showChange: false
    },
    {
      icon: AverageHoursIcon,
      title: "Média de horas diárias",
      value: isLoading ? "..." : calcularMediaDiaria(dashboard?.estatisticas?.tempoTotalEstudado || ''),
      change: null,
      changeText: null,
      showChange: false
    }
  ];

  const metasPendentesTexto = metasPendentes !== undefined 
    ? metasPendentes 
    : dashboard?.estatisticas?.metasPendentes || 0;

  return (
    <div className="w-full">
      {/* Header com Sprint Progress */}
      <SprintHeader 
        metasPendentes={metasPendentesTexto} 
        isLoading={isLoading} 
      />

      {/* Cards de Estatísticas */}
      {isMobile ? (
        // VERSÃO MOBILE - Scroll Horizontal
        <div 
          className="flex overflow-x-auto gap-5 pb-4"
          style={{ 
            padding: '12px 16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              {...stat}
              isMobile={true}
            />
          ))}
        </div>
      ) : (
        // VERSÃO DESKTOP - Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              {...stat}
              isMobile={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

