import React from 'react';
import { Podium } from './podium';
import { RankingRenewalTimer } from './ranking-renewal-timer';
import { RankingTable } from './ranking-table';
import type { RankingUser } from './ranking-table';

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
    },
    {
      position: 9,
      name: 'Rafael S****** O******a',
      initials: 'RS',
      percentage: 52,
      trend: 'up'
    },
    {
      position: 10,
      name: 'Marina C****** F*****s',
      initials: 'MC',
      percentage: 48,
      trend: 'down'
    }
  ];

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'rgba(25, 25, 35, 1)',
        overflow: 'hidden',
        paddingBottom: '0'
      }}
    >
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
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.015) 0%, rgba(0, 0, 0, 0.008) 30%, rgba(0, 0, 0, 0) 60%)',
            mixBlendMode: 'multiply',
            opacity: 0.4,
            filter: 'blur(25px)',
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

      {/* Efeito de vinheta ao redor da tabela - background */}
      <div
        style={{
          position: 'absolute',
          top: '550px',
          left: '-1000px',
          right: '-1000px',
          height: '600px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.25) 3%, rgba(0, 0, 0, 0.3) 8%, rgba(0, 0, 0, 0.35) 12%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.75) 70%, rgba(0, 0, 0, 0.85) 100%)',
          filter: 'blur(80px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1132px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingBottom: '0',
          marginBottom: '0'
        }}
      >
        {/* Renewal Timer */}
        <div style={{ marginBottom: '20px', marginLeft: '-32px', marginRight: '-32px' }}>
          <RankingRenewalTimer />
        </div>

        {/* Podium */}
        <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '-32px', marginRight: '-32px' }}>
          <Podium />
        </div>

        {/* Ranking Table */}
        <div style={{ position: 'relative', margin: '0', padding: '0', marginBottom: '0' }}>
          <RankingTable users={rankingData} currentUserId={984} />
        </div>
      </div>
    </div>
  );
};

