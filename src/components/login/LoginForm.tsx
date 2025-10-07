import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/auth-context';

interface LoginFormProps {
  isMobile: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({ isMobile }) => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuth();
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
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    console.log('🔐 Tentando login com:', { email, password });

    try {
      await login({ email, password });
      console.log('✅ Login bem-sucedido!');
      // Login bem-sucedido, navegar para a home
      navigate('/home');
    } catch (err: any) {
      console.error('❌ Erro no login:', err);
      // Erro já está sendo tratado no contexto
      setLocalError(err.message || 'Erro ao fazer login. Verifique suas credenciais.');
    }
  };


  return (
    <div 
      className="flex items-center justify-center"
      style={{
        padding: isMobile ? '0' : '0',
        width: '100%',
        height: isMobile ? '100%' : 'clamp(500px, 90vh, 832px)'
      }}
    >
      <div 
        className="w-full"
        style={{
          background: isMobile ? 'transparent' : 'transparent',
          borderRadius: '12px',
          padding: isMobile ? '0' : screenSize === 'notebook' ? '1vh 1vw' : '0',
          maxWidth: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '24px' : screenSize === 'notebook' ? 'clamp(16px, 2vh, 32px)' : 'clamp(20px, 2.5vh, 24px)'
        }}
      >
        {/* Mobile Layout */}
        {isMobile ? (
          <>
            {/* Header Section - Frame 3 */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                width: '100%'
              }}
            >
          {/* Logo */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Efeito de iluminação sutil no topo - Mobile */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-204px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
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
              width: '76px',
              height: '76px',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
              </div>

              {/* Badge e Textos */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  width: '100%'
                }}
              >
            {/* Badge */}
            <div 
              style={{
                background: '#392E27',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '4px 6px',
                    boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05), inset 0px -2px 0px 0px rgba(165, 90, 24, 0.09), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Rajdhani',
                  fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '1.67em',
                  letterSpacing: '-0.5%',
                      color: '#F48E2F',
                      textAlign: 'center'
                }}
              >
                ACESSE SUA CONTA
              </span>
            </div>

                {/* Textos de Boas-vindas */}
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%'
                  }}
                >
              <h1 
                style={{
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '1.5em',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      margin: 0
                }}
              >
                Boas vindas!
              </h1>
              <p 
                style={{
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.43em',
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

            {/* Form Section */}
            <form 
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                width: '100%'
              }}
            >
              {/* Error Message */}
              {(error || localError) && (
                <div
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontFamily: 'Sora',
                    fontSize: '14px',
                    color: '#EF4444',
                    textAlign: 'center'
                  }}
                >
                  {error || localError}
                </div>
              )}

              {/* Form Fields */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  width: '100%'
                }}
              >
                {/* Email Field */}
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    width: '100%'
                  }}
                >
              <label 
                style={{
                  fontFamily: 'Inter' /* MIGRATED */,
                      fontWeight: 500,
                  fontSize: '14px',
                      color: '#FFFFFF'
                }}
              >
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira seu e-mail"
                style={{
                  background: '#111921',
                  border: '1px solid #2D2D36',
                  borderRadius: '8px',
                      padding: '8px 12px',
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                      color: '#717680',
                      width: '100%',
                      boxSizing: 'border-box',
                      boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05)'
                }}
              />
            </div>

                {/* Password Field */}
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    width: '100%'
                  }}
                >
              <label 
                style={{
                  fontFamily: 'Inter' /* MIGRATED */,
                      fontWeight: 500,
                  fontSize: '14px',
                      color: '#FFFFFF'
                }}
              >
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Insira sua senha"
                    style={{
                      background: '#111921',
                      border: '1px solid #2D2D36',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      fontFamily: 'Inter' /* MIGRATED */,
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '1.5em',
                      color: '#717680',
                      width: '100%',
                      boxSizing: 'border-box',
                      boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05)'
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'Inter' /* MIGRATED */,
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.43em',
                      color: '#FFFFFF',
                      textAlign: 'right',
                      margin: 0
                    }}
                  >
                    Esqueci minha senha
                  </p>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  background: isLoading ? '#8B2E1C' : '#C74228',
                  border: '2px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '12px 18px',
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF',
                  width: '100%',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05), inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)',
                  opacity: isLoading ? 0.7 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                {isLoading ? 'Entrando...' : 'Acessar conta'}
              </button>

            </form>

            {/* Social Media Section */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                width: '247px',
                marginTop: 'auto'
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#D9D9D9',
                  textAlign: 'center',
                  margin: 0
                }}
              >
                Siga a LUMIA nas redes sociais
              </p>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                {/* Facebook */}
                <img
                  src="/images/social-icons/facebook-icon.png"
                  alt="Facebook"
                  width="32"
                  height="32"
                  style={{ objectFit: 'contain' }}
                />

                {/* Instagram */}
                <img
                  src="/images/social-icons/instagram-icon.png"
                  alt="Instagram"
                  width="32"
                  height="32"
                  style={{ objectFit: 'contain' }}
                />

                {/* YouTube */}
                <img
                  src="/images/social-icons/youtube-icon.png"
                  alt="YouTube"
                  width="32"
                  height="32"
                  style={{ objectFit: 'contain' }}
                />

                {/* X (Twitter) */}
                <img
                  src="/images/social-icons/twitter-icon.png"
                  alt="X (Twitter)"
                  width="32"
                  height="32"
                  style={{ 
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Desktop Layout - Header Section - Frame 3 */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: screenSize === 'notebook' ? 'clamp(16px, 2vh, 24px)' : 'clamp(20px, 3vh, 32px)',
                width: '100%'
              }}
            >
            {/* Logo - Responsivo */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Efeito de iluminação sutil no topo - baseado na imagem */}
              <div
                style={{
                  position: 'absolute',
                  top: 'clamp(-150px, -15vh, -204px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: screenSize === 'notebook' ? 'clamp(250px, 25vw, 300px)' : 'clamp(300px, 30vw, 400px)',
                  height: 'clamp(150px, 15vh, 200px)',
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
                  width: screenSize === 'notebook' ? 'clamp(48px, 5vw, 56px)' : 'clamp(60px, 6vw, 76px)',
                  height: screenSize === 'notebook' ? 'clamp(48px, 5vw, 56px)' : 'clamp(60px, 6vw, 76px)',
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
                gap: screenSize === 'notebook' ? 'clamp(8px, 1vh, 12px)' : 'clamp(12px, 1.5vh, 16px)',
                width: '100%',
                maxWidth: screenSize === 'notebook' ? 'clamp(280px, 28vw, 350px)' : 'clamp(320px, 32vw, 384px)'
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
                  gap: 'clamp(8px, 1vh, 12px)',
                  width: '100%'
                }}
              >
              {/* Boas vindas! - Responsivo */}
                      <h1
                        style={{
                          fontFamily: 'Inter' /* MIGRATED */,
                          fontWeight: 600,
                          fontSize: screenSize === 'notebook' ? 'clamp(18px, 2vw, 22px)' : 'clamp(24px, 2.5vw, 30px)',
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
                          fontFamily: 'Inter' /* MIGRATED */,
                          fontWeight: 400,
                          fontSize: screenSize === 'notebook' ? 'clamp(12px, 1.2vw, 14px)' : 'clamp(14px, 1.4vw, 16px)',
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
        <form 
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: screenSize === 'notebook' ? 'clamp(20px, 2.5vh, 28px)' : 'clamp(24px, 3vh, 32px)',
            width: '100%'
          }}
        >
          {/* Error Message */}
          {(error || localError) && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                padding: '12px 16px',
                fontFamily: 'Sora',
                fontSize: '14px',
                color: '#EF4444',
                textAlign: 'center'
              }}
            >
              {error || localError}
            </div>
          )}

          {/* Input Fields Frame - Frame 2 */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: screenSize === 'notebook' ? 'clamp(14px, 1.5vh, 18px)' : 'clamp(16px, 2vh, 20px)',
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
                    fontFamily: 'Inter' /* MIGRATED */,
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
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                    outline: 'none',
                    width: '100%'
                }}
                onFocus={(e) => {
                    if (e.target.parentElement) {
                      e.target.parentElement.style.borderColor = '#F48E2F';
                    }
                    e.target.style.color = '#FFFFFF';
                  }}
                  onBlur={(e) => {
                    if (e.target.parentElement) {
                      e.target.parentElement.style.borderColor = '#2D2D36';
                    }
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
                    fontFamily: 'Inter' /* MIGRATED */,
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
                    fontFamily: 'Inter' /* MIGRATED */,
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    outline: 'none',
                    width: '100%'
                  }}
                  onFocus={(e) => {
                    if (e.target.parentElement) {
                      e.target.parentElement.style.borderColor = '#F48E2F';
                    }
                    e.target.style.color = '#FFFFFF';
                  }}
                  onBlur={(e) => {
                    if (e.target.parentElement) {
                      e.target.parentElement.style.borderColor = '#2D2D36';
                    }
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
                  fontFamily: 'Inter' /* MIGRATED */,
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
            disabled={isLoading}
            style={{
              background: isLoading ? '#8B2E1C' : '#C74228',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '12px 18px',
              color: '#FFFFFF',
              fontFamily: 'Inter' /* MIGRATED */,
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              opacity: isLoading ? 0.7 : 1,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = '#B83A20';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = '#C74228';
              }
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
            {isLoading ? 'Entrando...' : 'Acessar conta'}
            </span>
          </button>
        </form>
          </>
        )}

      </div>
    </div>
  );
};
