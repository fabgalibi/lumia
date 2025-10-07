import React, { useState, useEffect } from 'react';

interface TestimonialSectionProps {
  isMobile?: boolean;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ isMobile }) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');

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

  if (isMobile || screenSize === 'mobile') {
    return null; // Não exibe no mobile
  }



  return (
    <div 
      className="relative"
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '90vh',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Container da imagem com todos os elementos posicionados relativos a ela */}
      <div 
        className="section relative"
        style={{
          width: '100%',
          maxWidth: '770px',
          aspectRatio: '770/960',
          borderRadius: 'clamp(12px, 1.5vw, 24px)',
          overflow: 'hidden'
        }}
      >
        {/* Imagem de fundo */}
        <img 
          src="./images/lumia_background.png"
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
          }}
        />
        
        {/* Overlay with blur effect */}
        <div 
          className="absolute"
          style={{
            left: 'calc(32 / 770 * 100%)',
            top: 'calc(620 / 960 * 100%)',
            width: 'calc(706 / 770 * 100%)',
            height: 'calc(308 / 960 * 100%)',
            zIndex: 1
          }}
        >
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 706 308" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <foreignObject x="-83" y="-83" width="872" height="474">
              <div style={{
                backdropFilter: 'blur(41.5px)',
                clipPath: 'url(#bgblur_0_14339_3578_clip_path)',
                height: '100%',
                width: '100%'
              }}></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="83">
              <path 
                d="M0 16C0 7.16342 7.16344 0 16 0H690C698.837 0 706 7.16344 706 16V292C706 300.837 698.837 308 690 308H311C302.163 308 295 300.837 295 292V225.69C295 216.853 287.837 209.69 279 209.69H16C7.16345 209.69 0 202.526 0 193.69V16Z" 
                fill="#350303" 
                fillOpacity="0.45"
              />
              <path 
                d="M0 16C0 7.16342 7.16344 0 16 0H690C698.837 0 706 7.16344 706 16V292C706 300.837 698.837 308 690 308H311C302.163 308 295 300.837 295 292V225.69C295 216.853 287.837 209.69 279 209.69H16C7.16345 209.69 0 202.526 0 193.69V16Z" 
                fill="url(#paint0_linear_14339_3578)"
              />
            </g>
            <defs>
              <clipPath id="bgblur_0_14339_3578_clip_path" transform="translate(83 83)">
                <path d="M0 12C0 5.37 5.37 0 12 0H694C701.73 0 706 4.27 706 12V296C706 303.73 701.73 308 694 308H315C307.27 308 302 303.73 302 296V230C302 222.27 296.73 217 289 217H12C5.37 217 0 211.63 0 205V12Z"/>
              </clipPath>
              <linearGradient id="paint0_linear_14339_3578" x1="353" y1="-55" x2="361.651" y2="295.833" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A6B9FF" stopOpacity="0.06"/>
                <stop stopColor="#FFD0E7" stopOpacity="0.18"/>
                <stop offset="0.0572917" stopColor="#FFD6DF" stopOpacity="0.15"/>
                <stop offset="0.81053" stopColor="#D6AB92" stopOpacity="0.61"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Testimonial Content - Frame 90 (Proporcional com limites) */}
        <div 
          className="absolute"
          style={{
            left: '7.27%',
            top: '67.08%',
            width: '85.45%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25%',
            containerType: 'inline-size',
            zIndex: 2
          }}
        >
        <p 
          className="text-[#F0F0F1] text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: 'clamp(10px, 3.65cqw, 24px)',
            lineHeight: '1.3333333333333333em',
            textAlign: 'left',
            margin: 0
          }}
        >
          Escolha a Lumia para iluminar seu caminho até a aprovação!
        </p>
        <p 
          className="text-[#F0F0F1] text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: 'clamp(8px, 2.74cqw, 18px)',
            lineHeight: '1.5555555555555556em',
            textAlign: 'left',
            margin: 0
          }}
        >
          "A Lumia me ajudou a organizar meus estudos e focar no que realmente importa. A orientação dos mentores fez toda a diferença na minha evolução e autoconfiança."
        </p>
        </div>

        {/* Author - Frame 89 (Proporcional com limites) */}
        <div 
          className="absolute"
          style={{
            left: 'calc(348 / 770 * 100%)',
            top: 'calc(828 / 960 * 100%)',
            width: 'calc(237 / 770 * 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(3px, 0.6vh, 6px)',
            zIndex: 2
          }}
        >
        <p 
          className="text-white text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: 'clamp(10px, 1.8vw, 18px)',
            lineHeight: '1.3333333333333333em',
            margin: 0
          }}
        >
          Poliana Amaral
        </p>
        <p 
          className="text-white text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: 'clamp(8px, 1.4vw, 14px)',
            lineHeight: '1.5555555555555556em',
            margin: 0
          }}
        >
          - Cliente Lumia
        </p>
        </div>

        {/* Social Media Links (Proporcional com limites) */}
        <div 
          className="absolute"
          style={{
            left: 'calc(48 / 770 * 100%)',
            bottom: 'calc(32 / 960 * 100%)',
            width: 'calc(247 / 770 * 100%)',
            zIndex: 2
          }}
        >
        <div className="flex flex-col" style={{ gap: 'clamp(5px, 1vh, 10px)' }}>
          <p 
            className="text-center text-[#D9D9D9] m-0"
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: 'clamp(8px, 1.2vw, 12px)',
              lineHeight: '1.5em',
              margin: 0
            }}
          >
            Siga a LUMIA nas redes sociais
          </p>
          <div className="flex items-center justify-center" style={{ gap: 'clamp(8px, 1.5vw, 16px)' }}>
            {/* Facebook */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 'clamp(18px, 3vw, 28px)',
                height: 'clamp(18px, 3vw, 28px)'
              }}
            >
              <img
                src="/images/social-icons/facebook-icon.png"
                alt="Facebook"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  opacity: 1
                }}
              />
            </div>

            {/* Instagram */}
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: 'clamp(18px, 3vw, 28px)',
                height: 'clamp(18px, 3vw, 28px)'
              }}
            >
              <img
                src="/images/social-icons/instagram-icon.png"
                alt="Instagram"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  opacity: 1
                }}
              />
            </div>

            {/* YouTube */}
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: 'clamp(18px, 3vw, 28px)',
                height: 'clamp(18px, 3vw, 28px)'
              }}
            >
              <img
                src="/images/social-icons/youtube-icon.png"
                alt="YouTube"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  opacity: 1
                }}
              />
            </div>

            {/* X (Twitter) */}
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: 'clamp(18px, 3vw, 28px)',
                height: 'clamp(18px, 3vw, 28px)'
              }}
            >
              <img
                src="/images/social-icons/twitter-icon.png"
                alt="X (Twitter)"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  opacity: 1,
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
