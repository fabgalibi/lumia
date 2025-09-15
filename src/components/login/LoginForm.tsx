import React, { useState, useEffect } from 'react';

interface LoginFormProps {
  isMobile: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({ isMobile }) => {
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // TODO: Implementar lógica de login
  };

  return (
            <div
              className="flex items-center justify-center"
              style={{
                padding: isMobile ? '32px 16px' : '0',
                width: isMobile ? '100%' : screenSize === 'notebook' ? '350px' : '510px',
                height: isMobile ? 'auto' : screenSize === 'notebook' ? '600px' : '832px'
              }}
            >
      <div 
        className="w-full"
        style={{
          background: isMobile ? '#202028' : 'transparent',
          borderRadius: '12px',
          padding: isMobile ? '32px 24px' : screenSize === 'notebook' ? '24px 20px' : '0',
          maxWidth: isMobile ? '100%' : screenSize === 'notebook' ? '350px' : '510px',
          height: isMobile ? 'auto' : screenSize === 'notebook' ? '600px' : '832px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? '24px' : screenSize === 'notebook' ? '32px' : '24px'
        }}
      >
        {/* Header Section - Frame 3 */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: screenSize === 'notebook' ? '20px' : '32px',
            width: '100%'
          }}
        >
            {/* Logo - Responsivo */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Efeito de iluminação sutil no topo - baseado na imagem */}
              <div
                style={{
                  position: 'absolute',
                  top: '-204px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: screenSize === 'notebook' ? '300px' : '400px',
                  height: '200px',
                  background: `
                    radial-gradient(
                      ellipse at center,
                      rgba(255, 100, 50, 0.25) 0%,
                      rgba(255, 150, 100, 0.15) 30%,
                      rgba(255, 200, 150, 0.08) 60%,
                      rgba(255, 220, 180, 0.03) 80%,
                      transparent 100%
                    )
                  `,
                  borderRadius: '50%',
                  zIndex: 1,
                  filter: 'blur(40px)'
                }}
              />
              <img
                src="/images/lumia-logo-icon-only.png"
                alt="Lumia Logo"
                style={{
                  width: screenSize === 'notebook' ? '56px' : '76px',
                  height: screenSize === 'notebook' ? '56px' : '76px',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2
                }}
              />
            </div>

            {/* Badge and Text Frame - Frame 1 - Responsivo */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: screenSize === 'notebook' ? '10px' : '16px',
                width: screenSize === 'notebook' ? '300px' : '384px'
              }}
            >
              {/* Badge - ACESSE SUA CONTA */}
              <div 
                style={{
                  background: '#392E27',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '4px 6px', // Badge padding: 4px 6px
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(165, 90, 24, 0.09), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {/* Label frame with padding */}
                <div 
                  style={{
                    padding: '0px 4px', // Label padding: 0px 4px
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Rajdhani',
                      fontWeight: 600,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      letterSpacing: '-0.5%',
                      color: '#F48E2F',
                      textAlign: 'center'
                    }}
                  >
                    ACESSE SUA CONTA
                  </span>
                </div>
              </div>

              {/* Welcome Text Frame - Frame 11 */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px', // Frame 11 gap: 12px
                  width: '100%'
                }}
              >
              {/* Boas vindas! - Responsivo */}
                      <h1
                        style={{
                          fontFamily: 'Sora',
                          fontWeight: 600,
                          fontSize: screenSize === 'notebook' ? '22px' : '30px',
                          lineHeight: '1.2666666666666666em',
                          color: '#FFFFFF',
                          textAlign: 'center',
                          margin: 0
                        }}
                      >
                        Boas vindas!
                      </h1>

                      {/* Descrição - Responsivo */}
                      <p
                        style={{
                          fontFamily: 'Sora',
                          fontWeight: 400,
                          fontSize: screenSize === 'notebook' ? '13px' : '16px',
                          lineHeight: '1.5em',
                          color: '#FFFFFF',
                          textAlign: 'center',
                          margin: 0
                        }}
                      >
                        Insira suas informações de acesso nos campos abaixo para prosseguir.
                      </p>
              </div>
            </div>
        </div>

        {/* Form Section - Frame 4 */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: screenSize === 'notebook' ? '28px' : '32px',
            width: '100%'
          }}
        >
          {/* Input Fields Frame - Frame 2 */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: screenSize === 'notebook' ? '18px' : '20px',
              width: '100%'
            }}
          >
            {/* Email Input - Input field instance */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px', // Input field gap: 6px
                width: '100%'
              }}
            >
              {/* Label wrapper */}
              <div 
                style={{
                  display: 'flex',
                  gap: '2px'
                }}
              >
                <label 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#F7F7F7',
                    textAlign: 'left'
                  }}
                >
                  E-mail
                </label>
              </div>
              
              {/* Input */}
              <div 
                style={{
                  background: '#111921',
                  border: '1px solid #2D2D36',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insira seu e-mail"
                  required
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#94979C',
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    outline: 'none',
                    width: '100%'
                  }}
                  onFocus={(e) => {
                    e.target.parentElement.style.borderColor = '#F48E2F';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onBlur={(e) => {
                    e.target.parentElement.style.borderColor = '#2D2D36';
                    if (!e.target.value) {
                      e.target.style.color = '#94979C';
                    }
                  }}
                />
              </div>
            </div>

            {/* Password Input - Input field instance with hint text */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px', // Input field gap: 8px (includes hint text)
                width: '100%'
              }}
            >
              {/* Label wrapper */}
              <div 
                style={{
                  display: 'flex',
                  gap: '2px'
                }}
              >
                <label 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#F7F7F7',
                    textAlign: 'left'
                  }}
                >
                  Senha
                </label>
              </div>
              
              {/* Input */}
              <div 
                style={{
                  background: '#111921',
                  border: '1px solid #2D2D36',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Insira sua senha"
                  required
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#94979C',
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    outline: 'none',
                    width: '100%'
                  }}
                  onFocus={(e) => {
                    e.target.parentElement.style.borderColor = '#F48E2F';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onBlur={(e) => {
                    e.target.parentElement.style.borderColor = '#2D2D36';
                    if (!e.target.value) {
                      e.target.style.color = '#94979C';
                    }
                  }}
                />
              </div>
              
              {/* Hint text */}
              <a 
                href="#"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#F7F7F7',
                  textAlign: 'right',
                  textDecoration: 'none',
                  alignSelf: 'flex-end'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F48E2F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#F7F7F7';
                }}
              >
                Esqueci minha senha
              </a>
            </div>
          </div>

          {/* Submit Button - Buttons/Button instance */}
          <button
            type="submit"
            style={{
              background: '#C74228',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '12px 18px',
              color: '#FFFFFF',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px' // Button gap: 6px
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B83A20';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C74228';
            }}
          >
            {/* Text padding */}
            <span 
              style={{
                padding: '0px 2px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Acessar conta
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
