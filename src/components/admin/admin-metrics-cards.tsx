import React from 'react';
import { StatCard } from '@/components/lumia/stats-cards/stat-card';

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
  const metrics = [
    {
      icon: UsersUpIcon,
      title: 'Alunos Ativos no Mês',
      value: '1.598.000',
      change: '15%',
      changeText: 'comparado ao mês anterior',
      showChange: true,
    },
    {
      icon: ZapIcon,
      title: 'Novas Vendas/Matrículas do mês',
      value: '250.000',
      change: '46%',
      changeText: 'comparado ao mês anterior',
      showChange: true,
    },
    {
      icon: CheckCircleBrokenIcon,
      title: 'Taxa de Conclusão de Metas/Sprints',
      value: '75,29%',
      change: '5,18%',
      changeText: 'comparado ao mês anterior',
      showChange: true,
      trend: 'negative', // Adicionando tendência negativa
    },
    {
      icon: BookOpen01Icon,
      title: 'Engajamento Diário',
      value: '18h45m',
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
      {metrics.map((metric, index) => (
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