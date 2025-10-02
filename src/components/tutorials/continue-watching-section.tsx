import React, { useState } from 'react';

interface ContinueWatchingSectionProps {
  className?: string;
}

interface TutorialCard {
  id: string;
  title: string;
  image: string;
  progress: number;
}

export const ContinueWatchingSection: React.FC<ContinueWatchingSectionProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Dados mockados dos tutoriais
  const tutorials: TutorialCard[] = [
    {
      id: '1',
      title: 'Realizando simulados online',
      image: '/images/tutorials/tutorial-card-1.png',
      progress: 91
    },
    {
      id: '2',
      title: 'Consultando relatórios de desempenho',
      image: '/images/tutorials/tutorial-card-2.png',
      progress: 57
    },
    {
      id: '3',
      title: 'Assistindo gravações de mentorias',
      image: '/images/tutorials/tutorial-card-3-9956fd.png',
      progress: 174
    },
    {
      id: '4',
      title: 'Recebendo e abrindo arquivos enviados',
      image: '/images/tutorials/tutorial-card-4-259fa6.png',
      progress: 91
    },
    {
      id: '5',
      title: 'Configurando notificações da plataforma',
      image: '/images/tutorials/tutorial-card-1.png',
      progress: 45
    },
    {
      id: '6',
      title: 'Criando e gerenciando metas de estudo',
      image: '/images/tutorials/tutorial-card-2.png',
      progress: 78
    },
    {
      id: '7',
      title: 'Utilizando ferramentas de produtividade',
      image: '/images/tutorials/tutorial-card-3-9956fd.png',
      progress: 32
    },
    {
      id: '8',
      title: 'Navegando pelo dashboard principal',
      image: '/images/tutorials/tutorial-card-4-259fa6.png',
      progress: 156
    },
    {
      id: '9',
      title: 'Criando listas de exercícios personalizadas',
      image: '/images/tutorials/tutorial-card-1.png',
      progress: 89
    },
    {
      id: '10',
      title: 'Acompanhando progresso de estudos',
      image: '/images/tutorials/tutorial-card-2.png',
      progress: 134
    },
    {
      id: '11',
      title: 'Configurando lembretes de estudo',
      image: '/images/tutorials/tutorial-card-3-9956fd.png',
      progress: 67
    },
    {
      id: '12',
      title: 'Utilizando filtros avançados',
      image: '/images/tutorials/tutorial-card-4-259fa6.png',
      progress: 45
    }
  ];

  // Calcular cards visíveis baseado na largura da tela
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      // Considerando header de 240px + gaps
      const availableWidth = width - 240 - 32; // 32px para gaps
      const cardWidth = 249 + 16; // 249px card + 16px gap
      const maxCards = Math.floor(availableWidth / cardWidth);
      
      return Math.max(1, Math.min(maxCards, 6)); // Entre 1 e 6 cards
    }
    return 4; // Default
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  
  // Atualizar cardsPerView quando a janela for redimensionada
  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, tutorials.length - cardsPerView);
  const visibleTutorials = tutorials.slice(currentIndex, currentIndex + cardsPerView);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };
  return (
    <div 
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        alignItems: 'stretch',
        width: '100%'
      }}
    >
      {/* Header Section */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '240px',
          minWidth: '180px',
          flexShrink: 0
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%'
          }}
        >
          <h2 
            style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#FFFFFF',
              width: '100%'
            }}
          >
            Continue assistindo
          </h2>
          <p 
            style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0%',
              color: '#F0F0F1',
              width: '100%'
            }}
          >
            Retome seus tutoriais de onde parou.
          </p>
        </div>
        
        {/* Navigation buttons */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px',
              background: '#2D2D45',
              border: 'none',
              borderRadius: '6px',
              padding: '6px',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentIndex === 0 ? 0.5 : 1
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 1
              }}
            >
              <img 
                src="/images/tutorials/chevron-left-icon.svg"
                alt="Previous"
                style={{
                  width: '5px',
                  height: '10px',
                  filter: 'brightness(0) saturate(100%) invert(58%) sepia(7%) saturate(1138%) hue-rotate(202deg) brightness(95%) contrast(89%)'
                }}
              />
            </div>
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px',
              background: '#2D2D45',
              border: 'none',
              borderRadius: '6px',
              padding: '6px',
              cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
              opacity: currentIndex >= maxIndex ? 0.5 : 1
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 1
              }}
            >
              <img 
                src="/images/tutorials/chevron-right-icon.svg"
                alt="Next"
                style={{
                  width: '5px',
                  height: '10px',
                  filter: 'brightness(0) saturate(100%) invert(53%) sepia(3%) saturate(1352%) hue-rotate(202deg) brightness(93%) contrast(89%)'
                }}
              />
            </div>
          </button>
        </div>
      </div>
      
          {/* Tutorial cards */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              width: '100%',
              flex: 1,
              overflow: 'hidden'
            }}
          >
        {visibleTutorials.map((tutorial) => (
          <div 
            key={tutorial.id}
            style={{
              background: '#252532',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '249px',
              minWidth: '249px',
              flexShrink: 0
            }}
          >
            {/* Image section */}
            <div 
              style={{
                width: '100%',
                height: '112px',
                background: '#414151',
                backgroundImage: `url(${tutorial.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Progress bar */}
            <div 
              style={{
                width: '100%',
                height: '6px',
                background: '#494955'
              }}
            >
              <div 
                style={{
                  width: `${tutorial.progress}px`,
                  height: '6px',
                  background: '#FDB022',
                  borderRadius: '0px 16px 16px 0px'
                }}
              />
            </div>
            
            {/* Content */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px',
                padding: '16px 16px 20px',
                width: '100%'
              }}
            >
              <h3 
                style={{
                  fontFamily: 'Sora',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  color: '#FFFFFF',
                  width: '100%',
                  height: '40px'
                }}
              >
                {tutorial.title}
              </h3>
              <div 
                style={{
                  display: 'flex',
                  gap: '16px',
                  width: '100%'
                }}
              >
                <button 
                  onClick={() => console.log(`Retomar tutorial: ${tutorial.title}`)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '10px 14px',
                    background: '#562524',
                    border: '1px solid #C74228',
                    borderRadius: '8px',
                    flex: 1,
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#C74228';
                    e.currentTarget.style.border = '1px solid #C74228';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#562524';
                    e.currentTarget.style.border = '1px solid #C74228';
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      color: '#F0F0F1',
                      padding: '0px 2px'
                    }}
                  >
                    Retomar tutorial
                  </span>
                </button>
                <button 
                  onClick={() => console.log(`Reiniciar tutorial: ${tutorial.title}`)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '40px',
                    height: '40px',
                    background: '#562524',
                    border: '1px solid #C74228',
                    borderRadius: '8px',
                    padding: '10px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#C74228';
                    e.currentTarget.style.border = '1px solid #C74228';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#562524';
                    e.currentTarget.style.border = '1px solid #C74228';
                  }}
                >
                  <img 
                    src="/images/tutorials/clock-rewind-icon.svg"
                    alt="Clock rewind"
                    style={{
                      width: '20px',
                      height: '20px',
                      filter: 'brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(437%) hue-rotate(202deg) brightness(93%) contrast(86%)'
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};