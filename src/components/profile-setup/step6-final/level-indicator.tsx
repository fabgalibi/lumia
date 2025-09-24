import React from 'react';

interface LevelIndicatorProps {
  level: number;
  totalLevels?: number;
}

export const LevelIndicator: React.FC<LevelIndicatorProps> = ({
  level,
  totalLevels = 4
}) => {
  const levels = [
    { id: 1, label: 'Nunca estudei', color: '#61656C' },
    { id: 2, label: 'Comecei teoria, mas não terminei', color: '#61656C' },
    { id: 3, label: 'Terminei teoria, mas não tenho confiança', color: '#F48E2F' },
    { id: 4, label: 'Só falta aparar as arestas', color: '#61656C' }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '12px',
        position: 'relative'
      }}
    >
      {/* Ícone do foguete - posicionado na ponta da barra laranja */}
      <div
        style={{
          position: 'absolute',
          top: '-12px',
          left: `calc(${(level / totalLevels) * 100}% - 78px)`,
          width: '63.64px',
          height: '63.64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}
      >
        <div
          style={{
            width: '63.64px',
            height: '63.64px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}
        >
          🚀
        </div>
      </div>

      {/* Background com gradiente */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: '-40px',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'856\' height=\'64\' viewBox=\'0 0 856 64\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'856\' height=\'64\' rx=\'8\' fill=\'url(%23gradient)\'/%3E%3Cdefs%3E%3ClinearGradient id=\'gradient\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'0%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23F66649\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23931900\'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          position: 'relative'
        }}
      >
        {/* Gradiente de fundo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            background: 'linear-gradient(270deg, rgba(246, 102, 73, 1) 0%, rgba(147, 25, 0, 1) 100%)',
            borderRadius: '8px 40px 40px 8px',
            width: `${(level / totalLevels) * 856}px`
          }}
        />
      </div>

      {/* Níveis de conhecimento */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '74px',
          padding: '0px 24px'
        }}
      >
        {levels.map((levelItem) => (
          <div
            key={levelItem.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {/* Ícone do nível */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '16px',
                backgroundColor: levelItem.id === level ? '#DC6803' : '#61656C',
                border: levelItem.id === level ? '1px solid #93370D' : '1px solid #373A41',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '12px',
                  backgroundColor: levelItem.id === level ? '#DC6803' : '#61656C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '12px',
                    color: '#FFFFFF'
                  }}
                >
                  {levelItem.id}
                </span>
              </div>
            </div>
            
            {/* Label do nível */}
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: levelItem.id === level ? '#F48E2F' : '#FFFFFF',
                textAlign: 'center'
              }}
            >
              {levelItem.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
