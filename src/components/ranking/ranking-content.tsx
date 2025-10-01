import React from 'react';
import { RankingPodium, RankingRenewalTimer, RankingTable } from '@/components/ranking';
import type { PodiumUser, RankingUser } from '@/components/ranking';

export const RankingContent: React.FC = () => {
  // Mock data - Top 3
  const podiumData: { first: PodiumUser; second: PodiumUser; third: PodiumUser } = {
    first: {
      name: 'Juliana C******o',
      initials: 'JC',
      percentage: 92,
      position: 1
    },
    second: {
      name: 'Ana B****** S*****',
      initials: 'AB',
      percentage: 85,
      position: 2
    },
    third: {
      name: 'Lucas S*****z',
      initials: 'LS',
      percentage: 76,
      position: 3
    }
  };

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
        overflow: 'hidden'
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
          height: '525.64px',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        {/* Mask container */}
        <div
          style={{
            position: 'absolute',
            left: '19.6px',
            top: '-137.16px',
            width: '662.8px',
            height: '662.8px',
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Grid content */}
        <div
          style={{
            position: 'absolute',
            left: '-90.86px',
            top: '-137.16px',
            width: '883.73px',
            height: '662.8px'
          }}
        >
          {/* Vertical lines */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            width="884"
            height="663"
            viewBox="0 0 884 663"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid-vertical-ranking" width="36.822" height="662.8" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="662.8" stroke="#22262F" strokeWidth="0.4603" />
              </pattern>
              <pattern id="grid-horizontal-ranking" width="883.73" height="36.822" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="883.73" y2="0" stroke="#22262F" strokeWidth="0.4603" />
              </pattern>
            </defs>
            {/* Vertical lines */}
            <rect width="883.73" height="662.8" fill="url(#grid-vertical-ranking)" />
            {/* Horizontal lines */}
            <rect width="883.73" height="662.8" fill="url(#grid-horizontal-ranking)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1376px',
          margin: '0 auto'
        }}
      >
        {/* Renewal Timer */}
        <div style={{ marginBottom: '40px' }}>
          <RankingRenewalTimer />
        </div>

        {/* Podium */}
        <div style={{ marginBottom: '60px' }}>
          <RankingPodium
            firstPlace={podiumData.first}
            secondPlace={podiumData.second}
            thirdPlace={podiumData.third}
          />
        </div>

        {/* Ranking Table */}
        <div style={{ marginBottom: '40px' }}>
          <RankingTable users={rankingData} currentUserId={984} />
        </div>
      </div>
    </div>
  );
};

