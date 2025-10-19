import React, { useState, useEffect } from 'react';
import { Podium } from './podium';
import { RankingRenewalTimer } from './ranking-renewal-timer';
import { RankingTable } from './ranking-table';
import type { RankingUser } from './ranking-table';

export const RankingContent: React.FC = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1100) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
        paddingBottom: '0',
        padding: screenSize === 'mobile' ? '16px' : '0px'
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '883.73px',
          height: '1000px',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'visible'
        }}
      >
        {/* Grid content */}
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
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
              {/* Máscara radial para fade em todas as direções */}
              <radialGradient id="grid-fade-mask" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="grid-mask">
                <rect width="883.73" height="1000" fill="url(#grid-fade-mask)" />
              </mask>
            </defs>
            <g mask="url(#grid-mask)">
              {/* Vertical lines */}
              <rect width="883.73" height="1000" fill="url(#grid-vertical-ranking)" />
              {/* Horizontal lines */}
              <rect width="883.73" height="1000" fill="url(#grid-horizontal-ranking)" />
            </g>
          </svg>
        </div>
      </div>

      {/* Efeito de vinheta ao redor da tabela - background */}
      {screenSize !== 'mobile' && (
        <div
          style={{
            position: 'absolute',
            top: '440px',
            left: '-1000px',
            right: '-1000px',
            bottom: '0px',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(16, 16, 22, 1) 5%, rgba(16, 16, 22, 1) 100%)',
            filter: 'blur(25px)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: screenSize === 'mobile' ? '100%' : screenSize === 'desktop' ? 'calc(100% - 64px)' : '1132px',
          margin: '0 auto',
          paddingTop: screenSize === 'mobile' ? '16px' : '32px',
          paddingLeft: screenSize === 'mobile' ? '24px' : '32px',
          paddingRight: screenSize === 'mobile' ? '24px' : '32px',
          paddingBottom: '0',
          marginBottom: '0'
        }}
      >
        {/* Renewal Timer */}
        <div style={{ 
          marginBottom: '8px', 
          marginLeft: screenSize === 'mobile' ? '-24px' : '-32px', 
          marginRight: screenSize === 'mobile' ? '-24px' : '-32px' 
        }}>
          <RankingRenewalTimer />
        </div>

        {/* Podium */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginLeft: screenSize === 'mobile' ? '-24px' : '-32px', 
          marginRight: screenSize === 'mobile' ? '-24px' : '-32px',
          marginBottom: screenSize === 'mobile' ? '16px' : '20px'
        }}>
          <Podium screenSize={screenSize} />
        </div>

        {/* Ranking Table */}
        <div style={{ 
          position: 'relative', 
          margin: '0', 
          padding: '0', 
          marginTop: screenSize === 'mobile' ? '-10px' : '-20px',
          marginBottom: screenSize === 'mobile' ? '16px' : '20px',
          marginLeft: screenSize === 'mobile' ? '-24px' : screenSize === 'desktop' ? '-16px' : '0px',
          marginRight: screenSize === 'mobile' ? '-24px' : screenSize === 'desktop' ? '-16px' : '0px'
        }}>
          <RankingTable users={rankingData} screenSize={screenSize} />
        </div>
      </div>
    </div>
  );
};

