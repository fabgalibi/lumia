import React from 'react';
import { FirstPlaceSvg } from './first-place-svg';
import { SecondPlaceSvg } from './second-place-svg';
import { ThirdPlaceSvg } from './third-place-svg';
import { PodiumAvatar } from './podium-avatar';
import { PodiumBadge } from './podium-badge';
import { PODIUM_MOCK_DATA } from '@/data/podium';
import type { PodiumData } from './podium-types';

interface PodiumProps {
  data?: PodiumData;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const Podium: React.FC<PodiumProps> = ({ data, screenSize = 'desktop' }) => {
  const podiumData = data || PODIUM_MOCK_DATA;
  
  // Função para calcular o fator de escala baseado no tamanho da tela
  const getScaleFactor = () => {
    switch (screenSize) {
      case 'mobile': return 0.7;
      case 'tablet': return 0.85;
      case 'desktop': return 1;
      default: return 1;
    }
  };
  
  // Função para calcular a escala dos badges (todos iguais no desktop)
  const getBadgeScale = () => {
    const baseScale = getScaleFactor();
    // No desktop, todos os badges têm o mesmo tamanho (38px)
    return baseScale;
  };

  // Função para calcular a escala dos avatares (2º lugar é o primeiro lugar - maior)
  const getAvatarScale = (position: '1º' | '2º' | '3º') => {
    const baseScale = getScaleFactor();
    switch (position) {
      case '1º': return baseScale * 0.83; // 17% menor que o normal (86.52px vs 104.55px)
      case '2º': return baseScale * 1.0; // Tamanho normal (104.55px - primeiro lugar)
      case '3º': return baseScale * 0.83; // 17% menor que o normal (86.52px vs 104.55px)
      default: return baseScale;
    }
  };
  
  const scaleFactor = getScaleFactor();
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: screenSize === 'mobile' ? 'calc(412.22px * 0.7)' : screenSize === 'tablet' ? 'calc(412.22px * 0.85)' : '412.22px',
        margin: '20px auto 0px',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: screenSize === 'mobile' ? '400px' : screenSize === 'tablet' ? '600px' : '633.77px'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: `calc(633.77px * ${scaleFactor})`,
          height: `calc(412.22px * ${scaleFactor})`,
          margin: '0 auto',
          transform: screenSize === 'mobile' ? 'translateX(-20px)' : screenSize === 'tablet' ? 'translateX(-10px)' : 'none'
        }}
      >
        {/* Pódios SVG */}
        {/* 3º Lugar - Direita (atrás) */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(432px * ${scaleFactor})`, 
        top: `calc(151.25px * ${scaleFactor})`, 
        zIndex: 1 
      }}>
        <ThirdPlaceSvg scale={scaleFactor} />
      </div>

      {/* 1º Lugar - Centro (meio) */}
      <div style={{ 
        position: 'absolute', 
        left: '0px', 
        top: `calc(118.7px * ${scaleFactor})`, 
        zIndex: 2 
      }}>
        <FirstPlaceSvg scale={scaleFactor} />
      </div>

      {/* 2º Lugar - Esquerda (frente) */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(198px * ${scaleFactor})`, 
        top: `calc(59.49px * ${scaleFactor})`, 
        zIndex: 3 
      }}>
        <SecondPlaceSvg scale={scaleFactor} />
      </div>

      {/* Elementos posicionados de forma absoluta */}
      {/* Avatar 2º lugar */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(275.79px * ${scaleFactor})`, 
        top: '0px', 
        zIndex: 4 
      }}>
        <PodiumAvatar 
          initials={podiumData.second.initials} 
          size={`calc(104.55px * ${getAvatarScale('2º')})`} 
          scale={getAvatarScale('2º')}
        />
      </div>

      {/* Avatar 1º lugar */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(72.1px * ${scaleFactor})`, 
        top: `calc(77.24px * ${scaleFactor})`, 
        zIndex: 4 
      }}>
        <PodiumAvatar 
          initials={podiumData.first.initials} 
          size={`calc(104.55px * ${getAvatarScale('1º')})`} 
          scale={getAvatarScale('1º')}
        />
      </div>

      {/* Avatar 3º lugar */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(485.79px * ${scaleFactor})`, 
        top: `calc(111.59px * ${scaleFactor})`, 
        zIndex: 4 
      }}>
        <PodiumAvatar 
          initials={podiumData.third.initials} 
          size={`calc(104.55px * ${getAvatarScale('3º')})`} 
          scale={getAvatarScale('3º')}
        />
      </div>

      {/* Badge 2º lugar */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(86px * ${scaleFactor})`, 
        top: `calc(216px * ${scaleFactor})`, 
        zIndex: 5 
      }}>
        <PodiumBadge position="2º" backgroundColor="#CDCDCD" scale={getBadgeScale()} />
      </div>

      {/* Badge 1º lugar */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(304px * ${scaleFactor})`, 
        top: `calc(161px * ${scaleFactor})`, 
        zIndex: 5 
      }}>
        <PodiumBadge position="1º" backgroundColor="#FFD365" scale={getBadgeScale()} />
      </div>

      {/* Badge 3º lugar */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(505px * ${scaleFactor})`, 
        top: `calc(245px * ${scaleFactor})`, 
        zIndex: 5 
      }}>
        <PodiumBadge position="3º" backgroundColor="#B38A48" iconColor="#CACACA" scale={getBadgeScale()} />
      </div>

      {/* Nome 2º lugar */}
      <div
        style={{
          position: 'absolute',
          left: `calc(243px * ${scaleFactor})`,
          top: `calc(253px * ${scaleFactor})`,
          width: `calc(170px * ${scaleFactor})`,
          textAlign: 'center',
          zIndex: 4,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
         color: '#FFFFFF'
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: `calc(18px * ${scaleFactor})`,
            lineHeight: '1.5em',
            color: '#FFFFFF'
          }}
        >
          {podiumData.second.name}
        </span>
      </div>

      {/* Nome 1º lugar */}
      <div
        style={{
          position: 'absolute',
          left: `calc(52px * ${scaleFactor})`,
          top: `calc(304px * ${scaleFactor})`,
          width: `calc(147px * ${scaleFactor})`,
          textAlign: 'center',
          zIndex: 4,
          color: '#FFFFFF'
        }}
      >
        <span
          className="podium-name-ellipsis"
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: `calc(16px * ${scaleFactor})`,
            lineHeight: '1.58em',
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {podiumData.first.name}
        </span>
      </div>

      {/* Nome 3º lugar */}
      <div
        style={{
          position: 'absolute',
          left: `calc(456px * ${scaleFactor})`,
          top: `calc(332px * ${scaleFactor})`,
          width: `calc(130px * ${scaleFactor})`,
          textAlign: 'center',
          zIndex: 4,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: `calc(16px * ${scaleFactor})`,
            lineHeight: '1.58em',
            color: '#FFFFFF'
          }}
        >
          {podiumData.third.name}
        </span>
      </div>

      {/* Percentual 2º lugar */}
      <div
        style={{
          position: 'absolute',
          left: `calc(110px * ${scaleFactor})`,
          top: `calc(335px * ${scaleFactor})`,
          zIndex: 4
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: `calc(14px * ${scaleFactor})`,
            lineHeight: '1.5em',
            color: '#F7F7F7'
          }}
        >
          {podiumData.second.percentage}%
        </span>
      </div>

      {/* Percentual 1º lugar */}
      <div
        style={{
          position: 'absolute',
          left: `calc(311px * ${scaleFactor})`,
          top: `calc(287px * ${scaleFactor})`,
          zIndex: 4
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: `calc(16px * ${scaleFactor})`,
            lineHeight: '1.58em',
            color: '#F7F7F7'
          }}
        >
          {podiumData.first.percentage}%
        </span>
      </div>

      {/* Percentual 3º lugar */}
      <div
        style={{
          position: 'absolute',
          left: `calc(507px * ${scaleFactor})`,
          top: `calc(364px * ${scaleFactor})`,
          zIndex: 4
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: `calc(13px * ${scaleFactor})`,
            lineHeight: '1.66em',
            color: '#F7F7F7'
          }}
        >
          {podiumData.third.percentage}%
        </span>
      </div>

      {/* Linhas divisórias entre nome e percentual */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: screenSize === 'mobile' ? 'calc(633.77px * 0.7)' : '633.77px',
          height: screenSize === 'mobile' ? 'calc(412.22px * 0.7)' : '412.22px',
          pointerEvents: 'none',
          zIndex: 4
        }}
        viewBox="0 0 633.77 412.22"
        fill="none"
      >
        {/* Linha divisória 1º lugar (entre nome e percentual) */}
        <line
          x1="51"
          y1="292"
          x2="186"
          y2="292"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="1"
        />
        
        {/* Linha divisória 2º lugar (entre nome e percentual) */}
        <line
          x1="264"
          y1="239"
          x2="392"
          y2="239"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="0.9"
        />
        
        {/* Linha divisória 3º lugar (entre nome e percentual) */}
        <line
          x1="467"
          y1="320"
          x2="582"
          y2="320"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="0.9"
        />
      </svg>

      {/* Linhas decorativas de profundidade na base */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '633.77px',
          height: '412.22px',
          pointerEvents: 'none',
          zIndex: 0
        }}
        viewBox="0 0 633.77 412.22"
        fill="none"
      >
        <defs>
          <linearGradient id="depth_gradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0.35" stopColor="rgba(199, 66, 40, 0.3)" />
            <stop offset="1" stopColor="rgba(6, 10, 18, 0)" />
          </linearGradient>
        </defs>
        
        {/* Linha de profundidade 1º lugar */}
        <line
          x1="202.14"
          y1="168.93"
          x2="202.14"
          y2="408.89"
          stroke="url(#depth_gradient)"
          strokeWidth="1.8"
        />
        
        {/* Linha horizontal decorativa grid */}
        <line
          x1="229.83"
          y1="196.48"
          x2="426.31"
          y2="196.48"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="0.9"
        />
      </svg>
      </div>
    </div>
  );
};

