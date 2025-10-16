import React, { useState, useEffect } from 'react';
import { StatCard } from '@/components/lumia/stats-cards/stat-card';
import { adminMetricsService, AdminMetricsResponse } from '@/services/api';

// Ícones baixados do Figma
const UsersUpIcon = (props: any) => (
  <img 
    src="/images/users-up-icon.svg" 
    alt="Users Up Icon" 
    style={{ width: '40px', height: '40px' }}
    {...props}
  />
);

const ZapIcon = (props: any) => (
  <img 
    src="/images/zap-icon.svg" 
    alt="Zap Icon" 
    style={{ width: '40px', height: '40px' }}
    {...props}
  />
);

const CheckCircleBrokenIcon = (props: any) => (
  <img 
    src="/images/check-circle-broken-icon.svg" 
    alt="Check Circle Broken Icon" 
    style={{ width: '40px', height: '40px' }}
    {...props}
  />
);

const BookOpen01Icon = (props: any) => (
  <img 
    src="/images/book-open-icon.svg" 
    alt="Book Open Icon" 
    style={{ width: '40px', height: '40px' }}
    {...props}
  />
);

export const AdminMetricsCards: React.FC = () => {
  const [metrics, setMetrics] = useState<AdminMetricsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const data = await adminMetricsService.getMetrics();
        setMetrics(data);
      } catch (err: any) {
        console.error('Erro ao buscar métricas:', err);
        setError(err.message || 'Erro ao carregar métricas');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '120px',
              background: '#252532',
              borderRadius: '12px',
              border: '1px solid #2C2C45',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#94979C' }}>Carregando...</span>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
        <div
          style={{
            flex: 1,
            height: '120px',
            background: '#252532',
            borderRadius: '12px',
            border: '1px solid #2C2C45',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#C74228' }}>Erro ao carregar métricas</span>
        </div>
      </div>
    );
  }

  const metricsData = [
    {
      icon: UsersUpIcon,
      title: 'Alunos Ativos',
      value: metrics?.totalAlunosAtivos?.toLocaleString() || '0',
      change: '15%',
      changeText: 'comparado ao mês anterior',
      showChange: true,
    },
    {
      icon: ZapIcon,
      title: 'Matrículas do Mês',
      value: metrics?.alunosMatriculadosMes?.toLocaleString() || '0',
      change: '46%',
      changeText: 'comparado ao mês anterior',
      showChange: true,
    },
    {
      icon: CheckCircleBrokenIcon,
      title: 'Metas Concluídas',
      value: `${metrics?.percentualMetasConcluidasMes?.toFixed(2) || '0'}%`,
      change: '5,18%',
      changeText: 'comparado ao mês anterior',
      showChange: true,
      trend: 'negative' as const,
    },
    {
      icon: BookOpen01Icon,
      title: 'Tempo de Estudo Diário',
      value: metrics?.tempoEstudoDiarioMedio || '00:00',
      change: '12%',
      changeText: 'comparado à semana passada',
      showChange: true,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '32px',
        width: '100%',
      }}
    >
      {metricsData.map((metric, index) => (
        <StatCard
          key={index}
          icon={metric.icon}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          changeText={metric.changeText}
          showChange={metric.showChange}
          trend={metric.trend as 'positive' | 'negative' || 'positive'}
        />
      ))}
    </div>
  );
};