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
}

export const Podium: React.FC<PodiumProps> = ({ data }) => {
  const podiumData = data || PODIUM_MOCK_DATA;
  return (
    <div
      style={{
        position: 'relative',
        width: '633.77px',
        height: '412.22px',
        margin: '60px auto 0'
      }}
    >
      {/* Pódios SVG */}
      {/* 3º Lugar - Direita (atrás) */}
      <div style={{ position: 'absolute', left: '432px', top: '151.25px', zIndex: 1 }}>
        <ThirdPlaceSvg />
      </div>

      {/* 1º Lugar - Centro (meio) */}
      <div style={{ position: 'absolute', left: '0px', top: '118.7px', zIndex: 2 }}>
        <FirstPlaceSvg />
      </div>

      {/* 2º Lugar - Esquerda (frente) */}
      <div style={{ position: 'absolute', left: '198px', top: '59.49px', zIndex: 3 }}>
        <SecondPlaceSvg />
      </div>

      {/* Elementos posicionados de forma absoluta */}
      {/* Avatar 2º lugar */}
      <div style={{ position: 'absolute', left: '275.79px', top: '0px', zIndex: 4 }}>
        <PodiumAvatar initials={podiumData.second.initials} size="104.55px" />
      </div>

      {/* Avatar 1º lugar */}
      <div style={{ position: 'absolute', left: '72.1px', top: '77.24px', zIndex: 4 }}>
        <PodiumAvatar initials={podiumData.first.initials} />
      </div>

      {/* Avatar 3º lugar */}
      <div style={{ position: 'absolute', left: '485.79px', top: '111.59px', zIndex: 4 }}>
        <PodiumAvatar initials={podiumData.third.initials} />
      </div>

      {/* Badge 2º lugar */}
      <div style={{ position: 'absolute', left: '86px', top: '216px', zIndex: 5 }}>
        <PodiumBadge position="2º" backgroundColor="#CDCDCD" />
      </div>

      {/* Badge 1º lugar */}
      <div style={{ position: 'absolute', left: '304px', top: '161px', zIndex: 5 }}>
        <PodiumBadge position="1º" backgroundColor="#FFD365" />
      </div>

      {/* Badge 3º lugar */}
      <div style={{ position: 'absolute', left: '505px', top: '245px', zIndex: 5 }}>
        <PodiumBadge position="3º" backgroundColor="#B38A48" iconColor="#CACACA" />
      </div>

      {/* Nome 2º lugar */}
      <div
        style={{
          position: 'absolute',
          left: '243px',
          top: '253px',
          width: '170px',
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
            fontSize: '18px',
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
          left: '52px',
          top: '304px',
          width: '147px',
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
            fontSize: '16px',
            lineHeight: '1.58em',
            color: '#FFFFFF'
          }}
        >
          {podiumData.first.name}
        </span>
      </div>

      {/* Nome 3º lugar */}
      <div
        style={{
          position: 'absolute',
          left: '456px',
          top: '332px',
          width: '130px',
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
            fontSize: '16px',
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
          left: '110px',
          top: '335px',
          zIndex: 4
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
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
          left: '311px',
          top: '287px',
          zIndex: 4
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
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
          left: '507px',
          top: '364px',
          zIndex: 4
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '13px',
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
          width: '633.77px',
          height: '412.22px',
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
  );
};

