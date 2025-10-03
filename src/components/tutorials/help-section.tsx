import React from 'react';
import { HelpCircle, ArrowUpRight } from 'lucide-react';

interface HelpSectionProps {
  className?: string;
}

export const HelpSection: React.FC<HelpSectionProps> = ({ className = '' }) => {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
        <div
          className={`relative rounded-xl overflow-hidden ${className}`}
          style={{
            width: isDesktop ? '100%' : '100%',
            maxWidth: isDesktop ? '600px' : '100%',
            minWidth: isDesktop ? '400px' : '100%',
            height: isDesktop ? '218px' : '266px',
            background: '#2D2D45',
            border: isDesktop ? '1px solid transparent' : '1px solid rgba(255, 255, 255, 0.12)',
            backgroundImage: isDesktop ? 'linear-gradient(#2D2D45, #2D2D45), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)' : 'none',
            backgroundOrigin: isDesktop ? 'border-box' : 'initial',
            backgroundClip: isDesktop ? 'padding-box, border-box' : 'initial',
            borderRadius: '12px',
            padding: isDesktop ? '24px 20px 24px 24px' : '16px 16px 20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: isDesktop ? '12px' : '0',
            justifyContent: isDesktop ? 'flex-start' : 'space-between',
            opacity: 1
          }}
        >
      {/* Header - desktop: ícone esquerda, botão direita */}
      <div 
        style={{
          display: 'flex',
          justifyContent: isDesktop ? 'space-between' : 'flex-start',
          alignItems: 'center',
          width: '100%',
          gap: isDesktop ? '16px' : '0'
        }}
      >
        {/* Ícone de ajuda */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#232332',
            border: '1px solid #323251',
            borderRadius: '206px',
            padding: '16px'
          }}
        >
          <HelpCircle 
            style={{
              width: '24px',
              height: '24px',
              color: '#FFFFFF',
              strokeWidth: '2px'
            }}
          />
        </div>

        {/* Botão - só aparece no desktop */}
        {isDesktop && (
          <button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 0px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '1.4285714285714286em',
                color: '#F66649',
                padding: '0px 2px'
              }}
            >
              Ir para central
            </span>
            <ArrowUpRight
              style={{
                width: '20px',
                height: '20px',
                color: '#F66649',
                strokeWidth: '1.67px'
              }}
            />
          </button>
        )}
      </div>
      
      {/* Content */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '12px'
        }}
      >
        {/* Text Content */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            width: '100%'
          }}
        >
          <h3 
            style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: isDesktop ? '18px' : '16px', // Text lg Semibold no desktop
              lineHeight: isDesktop ? '1.5555555555555556em' : '1.5em', // Line height/text-lg no desktop
              color: '#FFFFFF',
              width: '100%',
              textAlign: 'left'
            }}
          >
            Possui alguma dúvida?
          </h3>
          <p 
            style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '14px', // Text sm Regular em ambos
              lineHeight: '1.4285714285714286em',
              color: '#FFFFFF',
              width: '100%',
              textAlign: 'left'
            }}
          >
            Acesse a central de ajuda ou fale com nosso time para resolver qualquer questão em poucos cliques.
          </p>
        </div>
        
        {/* Button - só aparece no mobile */}
        {!isDesktop && (
          <button 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 0px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              alignSelf: 'flex-start'
            }}
          >
            <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#F66649',
                padding: '0px 2px'
              }}
            >
              Ir para central
            </span>
            <ArrowUpRight 
              style={{
                width: '20px',
                height: '20px',
                color: '#F66649',
                strokeWidth: '1.67px'
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
};