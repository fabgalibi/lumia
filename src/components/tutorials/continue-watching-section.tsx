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
      title: 'Personalizando configurações avançadas',
      image: '/images/tutorials/tutorial-card-3-9956fd.png',
      progress: 23
    },
    {
      id: '12',
      title: 'Exportando dados e relatórios',
      image: '/images/tutorials/tutorial-card-4-259fa6.png',
      progress: 67
    },
    {
      id: '13',
      title: 'Integrando com ferramentas externas',
      image: '/images/tutorials/tutorial-card-1.png',
      progress: 89
    },
    {
      id: '14',
      title: 'Otimizando performance do sistema',
      image: '/images/tutorials/tutorial-card-2.png',
      progress: 156
    },
    {
      id: '15',
      title: 'Gerenciando permissões de usuário',
      image: '/images/tutorials/tutorial-card-3-9956fd.png',
      progress: 45
    },
    {
      id: '16',
      title: 'Configurando backup automático',
      image: '/images/tutorials/tutorial-card-4-259fa6.png',
      progress: 78
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
    },
    {
      id: '17',
      title: 'Criando grupos de estudo personalizados',
      image: '/images/tutorials/tutorial-card-1.png',
      progress: 23
    },
    {
      id: '18',
      title: 'Configurando alertas de prazo',
      image: '/images/tutorials/tutorial-card-2.png',
      progress: 89
    }
  ];

          // Calcular cards visíveis baseado na largura da tela
          const getCardsPerView = () => {
            if (typeof window !== 'undefined') {
              const width = window.innerWidth;
              
              // Header width conforme Figma - sempre 268px para desktop
              let headerWidth = 268;
              if (width < 1024) {
                headerWidth = Math.min(width * 0.25, 200); // Mobile/tablet: header menor
              }
              
              // Usar toda a largura disponível até o fim da tela
              const availableWidth = width - headerWidth; // Sem gap, usar toda largura
              const cardWidth = 249; // Apenas a largura do card
              
              // Sempre mostrar cards parciais até o fim da tela
              // Usar Math.ceil para incluir cards parciais
              return Math.ceil(availableWidth / cardWidth);
            }
            return 4; // Default para desktop
          };

  // Calcular dinamicamente quantos cards cabem na tela
  const initialCardsPerView = typeof window !== 'undefined' ? getCardsPerView() : 4;
  const initialIsDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
  
  const [cardsPerView, setCardsPerView] = useState(initialCardsPerView);
  const [isDesktop, setIsDesktop] = useState(initialIsDesktop);
  
  // Atualizar cardsPerView e isDesktop quando a janela for redimensionada
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newCardsPerView = getCardsPerView(); // Calcular dinamicamente
      const newIsDesktop = width >= 1024; // Usar 1024px como breakpoint para desktop
      setCardsPerView(newCardsPerView);
      setIsDesktop(newIsDesktop);
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
          className={`${className} w-full`}
          style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: isDesktop ? '12px' : '24px',
            alignItems: isDesktop ? 'flex-start' : 'stretch',
            width: '100%',
            padding: isDesktop ? '0 0' : '12px 16px',
            overflowX: 'visible'
          }}
        >
      {/* Header Section */}
      <div 
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'column' : 'row',
          gap: isDesktop ? '20px' : '12px',
          alignItems: isDesktop ? 'flex-start' : 'stretch',
          width: isDesktop ? '268px' : '100%',
          flexShrink: 0,
          paddingLeft: isDesktop ? '35px' : '0'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isDesktop ? '8px' : '6px',
            width: '100%',
            flex: isDesktop ? 'none' : 1
          }}
        >
          <h2 
            style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: isDesktop ? '20px' : '16px', // Menor no tablet
              lineHeight: '1.5em',
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
              fontSize: isDesktop ? '14px' : '12px', // Menor no tablet
              lineHeight: '1.4285714285714286em',
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    flexShrink: 0
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
                    background: currentIndex === 0 ? '#212130' : '#2D2D45',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px',
                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                    opacity: 1
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
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#94979C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
                  background: currentIndex >= maxIndex ? '#212130' : '#2D2D45',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px',
                  cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
                  opacity: 1
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
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#85888E" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
          </button>
        </div>
      </div>
      
              {/* Tutorial cards */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: isDesktop ? 'flex-start' : 'center',
                  gap: '12px',
                  flex: 1,
                  overflow: 'visible',
                  width: '100%',
                  paddingLeft: isDesktop ? '0' : '16px',
                  paddingRight: '0',
                  overflowX: 'visible'
                }}
              >
        {visibleTutorials.map((tutorial) => (
              <div 
                key={tutorial.id}
                className="rounded-lg"
                style={{
                  background: '#252532',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignSelf: 'stretch',
                  width: '249px',
                  height: '250px',
                  minWidth: '249px',
                  flexShrink: 0,
                  opacity: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(255, 255, 255, 0.06)'
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
                backgroundPosition: 'center',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px'
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
                  width: `${Math.min(tutorial.progress, 249)}px`,
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
                  width: '100%',
                  alignItems: 'stretch'
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
                    height: '40px',
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
                    flexShrink: 0,
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
                      filter: 'brightness(0) saturate(100%) invert(81%) sepia(6%) saturate(409%) hue-rotate(202deg) brightness(96%) contrast(88%)'
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