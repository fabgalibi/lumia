import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from "@untitledui/icons";
import { HandshakeIcon, SpeedometerIcon, LineChartIcon, MessageSquareIcon } from "@/components/conclusion/feature-icons";
import { BackgroundSvg } from "@/components/conclusion/background-svg";

export const ConclusionScreen: React.FC = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1440) {
        setScreenSize('notebook');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleProceedToPlatform = () => {
    // Salvar dados finais e navegar para a tela de login
    console.log('Profile setup completo! Redirecionando para login...');
    navigate('/login');
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0B1219',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
      }}
    >
      {/* Seção de Conteúdo - Esquerda */}
      <div
        style={{
          width: screenSize === 'mobile' ? '100%' : '51.67%', // Proporção do Figma: 744/1440 = 51.67%
          minWidth: screenSize === 'mobile' ? '100%' : '320px', // Largura mínima menor para evitar corte
          flex: screenSize === 'mobile' ? 'none' : '0 0 51.67%', // Flexbox com proporção fixa
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: screenSize === 'mobile' ? 'flex-start' : 'center', // Centralizar conteúdo verticalmente em desktop
          gap: screenSize === 'mobile' ? '24px' : 'clamp(32px, 4vh, 56px)', // Gap responsivo
          padding: screenSize === 'mobile' 
            ? '16px' 
            : 'clamp(16px, 5vh, 56px) clamp(16px, 4vw, 80px)', // Padding menor para evitar corte
          overflowY: 'auto',
          overflowX: 'hidden', // Evita overflow horizontal
          wordWrap: 'break-word', // Quebra palavras quando necessário
          boxSizing: 'border-box' // Inclui padding na largura total
        }}
      >
        {/* Logo Lumia */}
        <div style={{ 
          width: '100%', // Ocupa toda a largura disponível
          maxWidth: screenSize === 'mobile' ? '100%' : '600px', // Limita em telas grandes
          margin: screenSize === 'mobile' ? '0' : '0 auto', // Centraliza em telas grandes
          alignSelf: screenSize === 'mobile' ? 'flex-start' : 'center' // Centraliza em telas grandes
        }}>
          <div style={{
            width: '174px', 
            height: '48px',
            alignSelf: 'flex-start' // Logo alinhado à esquerda dentro do container
          }}>
            <img 
              src="/images/conclusion/lumia-logo-718d50.png" 
              alt="Lumia" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Conteúdo Principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: screenSize === 'mobile' ? '32px' : '48px', // Gap do Figma: 48px
              flex: 1,
              justifyContent: screenSize === 'mobile' ? 'flex-start' : 'center', // Centralizar verticalmente
              minHeight: 0, // Permite que flexbox funcione corretamente
              maxWidth: screenSize === 'mobile' ? '100%' : '600px', // Limita em telas grandes
              margin: screenSize === 'mobile' ? '0' : '0 auto', // Centraliza em telas grandes
              width: '100%' // Garante largura total
            }}
          >
          {/* Título e Descrição */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: screenSize === 'mobile' ? '24px' : '32px'
              }}
            >
            {/* Título Principal */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <h1
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: screenSize === 'mobile' ? '16px' : '20px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF',
                  margin: 0,
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}
              >
                Pronto para começar sua jornada, Max William?
              </h1>
              
              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: screenSize === 'mobile' ? '14px' : '16px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF',
                  margin: 0,
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}
              >
                Com suas informações, montaremos um planejamento sob medida para seus estudos. Agora é só seguir o caminho e avançar rumo à aprovação!
              </p>
            </div>

            {/* Seção de Features */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: screenSize === 'mobile' ? '16px' : 'clamp(16px, 2vh, 24px)', // Gap responsivo
                width: '100%',
                maxWidth: screenSize === 'mobile' ? '100%' : '600px' // Limita em telas grandes
              }}
            >
              <h2
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: screenSize === 'mobile' ? '14px' : '16px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF',
                  margin: 0,
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}
              >
                O que você vai encontrar na plataforma 🚀
              </h2>

              {/* Lista de Features */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: screenSize === 'mobile' ? '16px' : 'clamp(16px, 2vh, 24px)' // Gap responsivo
                }}
              >
                {/* Feature 1: Mentorias */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: screenSize === 'mobile' ? '12px' : '16px',
                    width: '100%'
                  }}
                >
                  {/* Ícone */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                      backgroundColor: '#0F1E2D',
                      border: '1px solid #192634',
                      borderRadius: '6px',
                      width: 'fit-content',
                      height: 'fit-content'
                    }}
                  >
                    <div style={{ width: '24px', height: '24px' }}>
                      <HandshakeIcon 
                        width="24" 
                        height="24" 
                        stroke="#F66649" 
                        strokeWidth="2"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '6px',
                      flex: 1
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 600,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#F0F0F1',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Mentorias com especialistas
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#CECFD2',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Receba orientações de profissionais experientes preparados para guiar você até a aprovação.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Acompanhamento */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: screenSize === 'mobile' ? '12px' : '16px',
                    width: '100%'
                  }}
                >
                  {/* Ícone */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                      backgroundColor: '#0F1E2D',
                      border: '1px solid #192634',
                      borderRadius: '6px',
                      width: 'fit-content',
                      height: 'fit-content'
                    }}
                  >
                    <div style={{ width: '24px', height: '24px' }}>
                      <SpeedometerIcon 
                        width="24" 
                        height="24" 
                        stroke="#F66649" 
                        strokeWidth="2"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flex: 1
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 600,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#F0F0F1',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Acompanhamento de Desempenho
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#CECFD2',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Monitore sua evolução com métricas claras e que mostram onde você pode melhorar.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Sprints */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: screenSize === 'mobile' ? '12px' : '16px',
                    width: '100%'
                  }}
                >
                  {/* Ícone */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                      backgroundColor: '#0F1E2D',
                      border: '1px solid #192634',
                      borderRadius: '6px',
                      width: 'fit-content',
                      height: 'fit-content'
                    }}
                  >
                    <div style={{ width: '24px', height: '24px' }}>
                      <LineChartIcon 
                        width="24" 
                        height="24" 
                        stroke="#F66649" 
                        strokeWidth="2"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flex: 1
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 600,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#F0F0F1',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Sprints e Metas Eficientes
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#CECFD2',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Planejamentos e objetivos para manter o foco e acelerar seu progresso nos estudos.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Mensagens */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: screenSize === 'mobile' ? '12px' : '16px',
                    width: '100%'
                  }}
                >
                  {/* Ícone */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                      backgroundColor: '#0F1E2D',
                      border: '1px solid #192634',
                      borderRadius: '6px',
                      width: 'fit-content',
                      height: 'fit-content'
                    }}
                  >
                    <div style={{ width: '24px', height: '24px' }}>
                      <MessageSquareIcon 
                        width="24" 
                        height="24" 
                        stroke="#F66649" 
                        strokeWidth="2"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flex: 1
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 600,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#F0F0F1',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Mensagens Diretas com Mentores
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontSize: screenSize === 'mobile' ? '14px' : '16px',
                        lineHeight: '1.5em',
                        color: '#CECFD2',
                        margin: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      Tire dúvidas sempre que preferir e receba feedbacks rápidos para não perder ritmo.
                    </p>
                  </div>
                </div>

                {/* Texto final */}
                <p
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: screenSize === 'mobile' ? '14px' : '16px',
                    lineHeight: '1.5em',
                    color: '#ECECED',
                    margin: `0 55px`,
                    width: screenSize === 'mobile' ? '100%' : '440px', // Largura fixa
                    alignSelf: 'flex-start', // Alinha à esquerda
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  Tudo isso e muito mais para acelerar seus resultados...
                </p>
              </div>
            </div>
          </div>

          {/* Botão de Call-to-Action */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: screenSize === 'mobile' ? '0px' : '0px 56px', // Padding do Figma
              width: '100%',
              alignItems: 'center' // Centraliza o botão
            }}
          >
            <button
              onClick={handleProceedToPlatform}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                padding: screenSize === 'mobile' ? '16px 24px' : '12px 18px',
                background: 'linear-gradient(145deg, #D94A2F 0%, #B8361F 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: screenSize === 'mobile' ? '100%' : '440px' // 440px como no Figma
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(145deg, #C13A26 0%, #A02E1A 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(145deg, #D94A2F 0%, #B8361F 100%)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px 2px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#FFFFFF',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    whiteSpace: 'nowrap' // Para o botão, mantém em uma linha
                  }}
                >
                  Prosseguir para a plataforma
                </span>
              </div>
              
              {/* Ícone Chevron Right */}
              <div style={{ width: '20px', height: '20px' }}>
                <ChevronRight 
                  width="20" 
                  height="20" 
                  stroke="#FFFFFF" 
                  strokeWidth="1.67"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Seção de Imagem - Direita (apenas desktop) */}
      {screenSize !== 'mobile' && (
        <div
          style={{
            flex: '1', // Preenche o espaço restante (48.33% da tela: 696/1440)
            minWidth: '200px', // Largura mínima menor
            height: '100vh',
            borderRadius: 'clamp(16px, 2vw, 32px) 0px 0px clamp(16px, 2vw, 32px)', // Border radius responsivo
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'flex-start', // Alinha conteúdo à esquerda
            alignItems: 'center'
          }}
        >
          {/* Fundo SVG Completo (com personagem integrado) */}
          <BackgroundSvg screenSize={screenSize} />
        </div>
      )}
    </div>
  );
};
