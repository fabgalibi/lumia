import React, { useState, useEffect } from 'react';
import { TestimonialSection, LoginForm } from '../components/login';

export const LoginScreen = () => {
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

  return (
    <div
      className="flex justify-center items-center"
      style={{
        background: `
          linear-gradient(90deg, rgba(21, 35, 49, 1) 0%, rgba(0, 0, 0, 1) 100%),
          linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(21, 35, 49, 1) 100%),
          #FFFFFF
        `,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        padding: screenSize === 'mobile' ? '16px' : screenSize === 'tablet' ? '16px' : screenSize === 'notebook' ? '2vh 2vw' : '2vh 2vw'
      }}
    >
              {/* Container Principal - Flexbox */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: screenSize === 'mobile' || screenSize === 'tablet' ? '100%' : 'none',
                  gap: screenSize === 'mobile' || screenSize === 'tablet' ? '0' : screenSize === 'notebook' ? '2vw' : '3vw'
                }}
              >
                  {/* Mobile e Tablet Layout */}
                  {screenSize === 'mobile' || screenSize === 'tablet' ? (
                    <div
                      className="flex flex-col items-center justify-between w-full"
                      style={{
                        height: '100%',
                        gap: '32px'
                      }}
                    >
                      <LoginForm isMobile={true} />
                    </div>
                  ) : (
                    <>
                      {/* Coluna 1 - Testimonial */}
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: screenSize === 'notebook' ? 'clamp(400px, 45vw, 600px)' : 'clamp(500px, 50vw, 770px)',
                          height: '100%',
                          order: 1,
                          flex: 'none'
                        }}
                      >
                        <TestimonialSection isMobile={false} />
                      </div>

                      {/* Coluna 2 - Login Form */}
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: screenSize === 'notebook' ? 'clamp(300px, 30vw, 400px)' : 'clamp(350px, 35vw, 510px)',
                          height: '100%',
                          order: 2,
                          flex: 'none'
                        }}
                      >
                        <LoginForm isMobile={false} />
                      </div>
                    </>
                  )}
              </div>
    </div>
  );
};