import React, { useState, useEffect } from 'react';
import { TestimonialSection, LoginForm } from '../components/login';

export const LoginScreen = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'notebook' | 'desktop'>('desktop');

  // Detectar tamanho da tela
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

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(90deg, rgba(21, 35, 49, 1) 0%, rgba(0, 0, 0, 1) 100%)',
        width: '100vw',
        height: '100vh',
        overflow: 'auto'
      }}
    >
              {/* Container Principal - Flexbox */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: screenSize === 'mobile' ? '100%' : 'none',
                  gap: screenSize === 'mobile' ? '0' : screenSize === 'notebook' ? '40px' : '64px'
                }}
              >
                {/* Coluna 1 - Testimonial */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: screenSize === 'mobile' ? '100%' : screenSize === 'notebook' ? '500px' : '770px',
                    height: screenSize === 'mobile' ? 'auto' : '100%',
                    order: screenSize === 'mobile' ? 2 : 1,
                    flex: screenSize === 'mobile' ? 'none' : 'none'
                  }}
                >
                  <TestimonialSection isMobile={screenSize === 'mobile'} />
                </div>

                {/* Coluna 2 - Login Form */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: screenSize === 'mobile' ? '100%' : screenSize === 'notebook' ? '350px' : '510px',
                    height: screenSize === 'mobile' ? 'auto' : '100%',
                    order: screenSize === 'mobile' ? 1 : 2,
                    flex: screenSize === 'mobile' ? 'none' : 'none'
                  }}
                >
                  <LoginForm isMobile={screenSize === 'mobile'} />
                </div>
              </div>
    </div>
  );
};