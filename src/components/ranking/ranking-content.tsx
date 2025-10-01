import React from 'react';
import { RankingPodium, RankingRenewalTimer, RankingTable } from '@/components/ranking';
import type { RankingUser } from '@/components/ranking';

export const RankingContent: React.FC = () => {

  // Mock data - Ranking table
  const rankingData: RankingUser[] = [
    {
      position: 984,
      name: 'Você (Max William)',
      initials: 'MW',
      percentage: 55,
      isCurrentUser: true,
      trend: 'up'
    },
    {
      position: 4,
      name: 'Pedro ******** Moraes',
      initials: 'PM',
      percentage: 75,
      trend: 'up'
    },
    {
      position: 5,
      name: 'Vitória N*******o',
      initials: 'VN',
      percentage: 70,
      trend: 'up'
    },
    {
      position: 6,
      name: 'André **** P***s',
      initials: 'AP',
      percentage: 67,
      trend: 'down'
    },
    {
      position: 7,
      name: 'Larissa M******o',
      initials: 'LM',
      percentage: 64,
      trend: 'up'
    },
    {
      position: 8,
      name: 'Camila L*****',
      initials: 'CL',
      percentage: 55,
      trend: 'down'
    }
  ];

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '60px',
        backgroundColor: 'rgba(25, 25, 35, 1)',
        minHeight: '100vh'
      }}
    >
      {/* Frame de blur inferior com gradiente */}
      <div
        style={{
          position: 'absolute',
          top: '400px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(25, 25, 35, 0.6) 0%, rgba(16, 16, 22, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '701px',
          height: '800px',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        {/* Mask container - Gradiente radial que cria o efeito de máscara */}
        <div
          style={{
            position: 'absolute',
            left: '19.6px',
            top: '-137.16px',
            width: '662.7971191406275px',
            height: '662.7971191406275px',
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.015) 30%, rgba(0, 0, 0, 0) 60%)',
            mixBlendMode: 'multiply',
            opacity: 0.6,
            filter: 'blur(20px)',
            zIndex: 2
          }}
        />

        {/* Grid content */}
        <div
          style={{
            position: 'absolute',
            left: '-90.86px',
            top: '-137.16px',
            width: '883.73px',
            height: '1000px'
          }}
        >
          {/* Grid pattern com linhas */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            width="884"
            height="1000"
            viewBox="0 0 884 1000"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid-vertical-ranking" width="36.822" height="1000" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="1000" stroke="#22262F" strokeWidth="0.46" opacity="0.8" />
              </pattern>
              <pattern id="grid-horizontal-ranking" width="883.73" height="36.822" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="883.73" y2="0" stroke="#22262F" strokeWidth="0.46" opacity="0.8" />
              </pattern>
            </defs>
            {/* Vertical lines */}
            <rect width="883.73" height="1000" fill="url(#grid-vertical-ranking)" />
            {/* Horizontal lines */}
            <rect width="883.73" height="1000" fill="url(#grid-horizontal-ranking)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1376px',
          margin: '0 auto'
        }}
      >
        {/* Renewal Timer */}
        <div style={{ marginBottom: '40px' }}>
          <RankingRenewalTimer />
        </div>

        {/* Podium */}
        <div style={{ marginBottom: '-20px' }}>
          <RankingPodium />
        </div>

        {/* Ranking Table */}
        <div style={{ marginBottom: '40px' }}>
          <RankingTable users={rankingData} currentUserId={984} />
        </div>
      </div>
    </div>
  );
};

