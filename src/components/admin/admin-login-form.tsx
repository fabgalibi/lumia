import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // TODO: Implementar autenticação de administrador
      console.log('Admin login:', { email, password });
      
      // Simulação - remover quando implementar API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirecionar para painel admin (quando criado)
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: '24px',
        background: 'rgba(25, 25, 35, 1)',
        borderRadius: '12px',
        padding: '32px',
        width: '100%',
      }}
    >
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: '20px',
          width: '100%',
        }}
      >
        {/* Error Message */}
        {error && (
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '8px',
              padding: '12px 16px',
              fontFamily: 'Sora',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#EF4444',
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        {/* Email Field */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '6px',
          }}
        >
          <label
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#F7F7F7',
            }}
          >
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu e-mail"
            required
            style={{
              background: '#111921',
              border: '1px solid #2D2D36',
              borderRadius: '8px',
              padding: '12px 14px',
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#94979C',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#F48E2F';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#2D2D36';
              if (!e.currentTarget.value) {
                e.currentTarget.style.color = '#94979C';
              }
            }}
          />
        </div>

        {/* Password Field */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <label
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F7F7F7',
              }}
            >
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua senha"
              required
              style={{
                background: '#111921',
                border: '1px solid #2D2D36',
                borderRadius: '8px',
                padding: '12px 14px',
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#94979C',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#F48E2F';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#2D2D36';
                if (!e.currentTarget.value) {
                  e.currentTarget.style.color = '#94979C';
                }
              }}
            />
          </div>
          
          {/* Esqueci minha senha */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              type="button"
              style={{
                background: 'transparent',
                border: 'none',
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F7F7F7',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'right',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F48E2F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#F7F7F7';
              }}
            >
              Esqueci minha senha
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            background: '#C74228',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
            borderRadius: '8px',
            padding: '12px 18px',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#FFFFFF',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            opacity: isLoading ? 0.7 : 1,
            transition: 'all 0.2s ease',
            alignSelf: 'stretch',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.background = '#D55A3A';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.background = '#C74228';
            }
          }}
        >
          {isLoading ? 'Entrando...' : 'Acessar sistema'}
        </button>
      </form>
    </div>
  );
};

