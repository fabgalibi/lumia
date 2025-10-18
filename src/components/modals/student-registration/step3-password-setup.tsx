import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, AlertCircle } from 'lucide-react';

interface Step3PasswordSetupProps {
  formData: {
    nome: string;
    email: string;
    cpf?: string;
    dataInicio?: string;
    observacoes?: string;
  };
  errors: {
    senha?: string;
    confirmarSenha?: string;
  };
  onPasswordChange: (field: 'senha' | 'confirmarSenha', value: string) => void;
  onGeneratePassword: () => void;
}

export const Step3PasswordSetup: React.FC<Step3PasswordSetupProps> = ({
  formData,
  errors,
  onPasswordChange,
  onGeneratePassword
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handlePasswordChange = (field: 'senha' | 'confirmarSenha', value: string) => {
    if (field === 'senha') {
      setSenha(value);
    } else {
      setConfirmarSenha(value);
    }
    onPasswordChange(field, value);
  };

  const handleGeneratePassword = () => {
    const generatedPassword = Math.random().toString(36).slice(-8);
    setSenha(generatedPassword);
    setConfirmarSenha(generatedPassword);
    onPasswordChange('senha', generatedPassword);
    onPasswordChange('confirmarSenha', generatedPassword);
    onGeneratePassword();
  };

  return (
    <>
      {/* Resumo do Aluno */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Nome do Aluno */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          background: '#272737',
          border: '1px solid #2C2C45',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <User size={24} color="#ECECED" />
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#ECECED'
            }}>
              Nome do aluno
            </span>
          </div>
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#FFFFFF'
          }}>
            {formData.nome}
          </span>
        </div>

        {/* E-mail do Aluno */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          background: '#272737',
          border: '1px solid #2C2C45',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Mail size={24} color="#ECECED" />
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#ECECED'
            }}>
              E-mail
            </span>
          </div>
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#FFFFFF'
          }}>
            {formData.email}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
        <div style={{ flex: 1, height: '1px', background: '#22262F' }} />
        <span style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#94979C',
          whiteSpace: 'nowrap'
        }}>
          Definir senha
        </span>
        <div style={{ flex: 1, height: '1px', background: '#22262F' }} />
      </div>

      {/* Campos de Senha */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {/* Campo Senha */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            <label style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#CECFD2'
            }}>
              Senha
            </label>
            <span style={{ color: '#F97066', fontFamily: 'Inter', fontWeight: 500 }}>*</span>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={senha}
              onChange={(e) => handlePasswordChange('senha', e.target.value)}
              placeholder="••••••••••"
              style={{
                background: '#2D2D3B',
                border: `1px solid ${errors.senha ? '#F97066' : '#373A41'}`,
                borderRadius: '8px',
                padding: '10px 14px',
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: senha ? '#FFFFFF' : '#CECFD2',
                outline: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '100%',
                paddingRight: '40px'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#F48E2F';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = errors.senha ? '#F97066' : '#373A41';
                if (!e.currentTarget.value) {
                  e.currentTarget.style.color = '#CECFD2';
                }
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#85888E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.senha && (
            <span style={{ color: '#F97066', fontSize: '12px', fontFamily: 'Sora' }}>
              {errors.senha}
            </span>
          )}
          <button
            type="button"
            onClick={handleGeneratePassword}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#F48E2F',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '1.5em',
              textAlign: 'right',
              alignSelf: 'flex-end',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#D55A3A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#F48E2F';
            }}
          >
            Gerar senha aleatória
          </button>
        </div>

        {/* Campo Confirmar Senha */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            <label style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#CECFD2'
            }}>
              Confirmar senha
            </label>
            <span style={{ color: '#F97066', fontFamily: 'Inter', fontWeight: 500 }}>*</span>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmarSenha}
              onChange={(e) => handlePasswordChange('confirmarSenha', e.target.value)}
              placeholder="••••••••••"
              style={{
                background: '#2D2D3B',
                border: `1px solid ${errors.confirmarSenha ? '#F97066' : '#373A41'}`,
                borderRadius: '8px',
                padding: '10px 14px',
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: confirmarSenha ? '#FFFFFF' : '#CECFD2',
                outline: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '100%',
                paddingRight: '40px'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#F48E2F';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = errors.confirmarSenha ? '#F97066' : '#373A41';
                if (!e.currentTarget.value) {
                  e.currentTarget.style.color = '#CECFD2';
                }
              }}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#85888E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.confirmarSenha && (
            <span style={{ color: '#F97066', fontSize: '12px', fontFamily: 'Sora' }}>
              {errors.confirmarSenha}
            </span>
          )}
        </div>

        {/* Validação */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={20} color="#CECFD2" />
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#CECFD2'
          }}>
            A senha deve ter ao menos 6 caracteres.
          </span>
        </div>
      </div>
    </>
  );
};