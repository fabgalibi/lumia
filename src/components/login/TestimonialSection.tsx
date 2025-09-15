import React, { useState, useEffect } from 'react';

interface TestimonialSectionProps {
  isMobile?: boolean;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ isMobile }) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'notebook' | 'desktop'>('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
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
        maxWidth: screenSize === 'notebook' ? '500px' : '770px',
        height: screenSize === 'notebook' ? '600px' : '960px',
        margin: '0 auto',
        aspectRatio: screenSize === 'notebook' ? '500/600' : '770/960'
      }}
    >
      {/* Imagem responsiva como background */}
      <div 
        className="section"
        style={{
          backgroundImage: 'url("./images/lumia_background.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          borderRadius: screenSize === 'notebook' ? '16px' : '24px',
        }}
      />
      {/* Overlay with blur effect */}
      <div 
        className="absolute"
        style={{
          left: screenSize === 'notebook' ? '6%' : '4%',
          top: screenSize === 'notebook' ? '60%' : '62%',
          width: screenSize === 'notebook' ? '88%' : '92%',
          height: screenSize === 'notebook' ? '40%' : '37%'
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

      {/* Testimonial Content */}
      <div 
        className="absolute"
        style={{
          left: screenSize === 'notebook' ? '10%' : '8%',
          top: screenSize === 'notebook' ? '67%' : '67%',
          width: '100%',//screenSize === 'notebook' ? '50%' : '60%',
          maxWidth: screenSize === 'notebook' ? '400px' : '658px'
        }}
      >
        <p 
          className="text-[#F0F0F1] text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: screenSize === 'notebook' ? '14px' : '24px',
            lineHeight: '1.33em',
            textAlign: 'left',
            marginBottom: '12px'
          }}
        >
          Escolha a Lumia para iluminar seu caminho até a aprovação!
        </p>
        <p 
          className="text-[#F0F0F1] text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: screenSize === 'notebook' ? '11px' : '18px',
            lineHeight: '1.56em',
            textAlign: 'left'
          }}
        >
          "A Lumia me ajudou a organizar meus estudos e focar no que realmente importa. A orientação dos mentores fez toda a diferença na minha evolução e autoconfiança."
        </p>
      </div>

      {/* Author */}
      <div 
        className="absolute"
        style={{
          left: screenSize === 'notebook' ? '46%' : '46%',
          top: screenSize === 'notebook' ? '85%' : '85%',
          width: screenSize === 'notebook' ? '25%' : '30%',
          maxWidth: screenSize === 'notebook' ? '200px' : '237px'
        }}
      >
        <p 
          className="text-white text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: screenSize === 'notebook' ? '14px' : '24px',
            lineHeight: screenSize === 'notebook' ? '1.33em' : '1.33em',
            marginBottom: '8px'
          }}
        >
          Poliana Amaral
        </p>
        <p 
          className="text-white text-left m-0"
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: screenSize === 'notebook' ? '11px' : '18px',
            lineHeight: screenSize === 'notebook' ? '1.56em' : '1.56em'
          }}
        >
          - Cliente Lumia
        </p>
      </div>

      {/* Social Media Links */}
      <div 
        className="absolute"
        style={{
          left: screenSize === 'notebook' ? '3%' : '3%',
          top: screenSize === 'notebook' ? '91%' : '90%',
          width: screenSize === 'notebook' ? '50%' : '60%',
          maxWidth: screenSize === 'notebook' ? '400px' : '658px'
        }}
      >
        <div className="flex flex-col" style={{ gap: '5px' }}>
          <p 
            className="text-left text-[#D9D9D9] m-0"
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: screenSize === 'notebook' ? '11px' : '16px',
              lineHeight: screenSize === 'notebook' ? '1.3em' : '1.5em'
            }}
          >
            Siga a LUMIA nas redes sociais
          </p>
                  <div className="flex items-center justify-start" style={{ gap: '15px' }}>
                    {/* Facebook */}
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: screenSize === 'notebook' ? '28px' : '40px',
                        height: screenSize === 'notebook' ? '28px' : '40px'
                      }}
                    >
                      <img
                        src="/images/social-icons/facebook-icon.png"
                        alt="Facebook"
                        width={screenSize === 'notebook' ? '28' : '40'}
                        height={screenSize === 'notebook' ? '28' : '40'}
                        style={{ 
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
                        width: screenSize === 'notebook' ? '28px' : '40px',
                        height: screenSize === 'notebook' ? '28px' : '40px'
                      }}
                    >
                      <img
                        src="/images/social-icons/instagram-icon.png"
                        alt="Instagram"
                        width={screenSize === 'notebook' ? '28' : '40'}
                        height={screenSize === 'notebook' ? '28' : '40'}
                        style={{ 
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
                        width: screenSize === 'notebook' ? '28px' : '40px',
                        height: screenSize === 'notebook' ? '28px' : '40px'
                      }}
                    >
                      <img
                        src="/images/social-icons/youtube-icon.png"
                        alt="YouTube"
                        width={screenSize === 'notebook' ? '28' : '40'}
                        height={screenSize === 'notebook' ? '28' : '40'}
                        style={{ 
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
                        width: screenSize === 'notebook' ? '28px' : '40px',
                        height: screenSize === 'notebook' ? '28px' : '40px'
                      }}
                    >
                      <img
                        src="/images/social-icons/twitter-icon.png"
                        alt="X (Twitter)"
                        width={screenSize === 'notebook' ? '28' : '40'}
                        height={screenSize === 'notebook' ? '28' : '40'}
                        style={{ 
                          objectFit: 'contain',
                          display: 'block',
                          opacity: 1
                        }}
                      />
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};
