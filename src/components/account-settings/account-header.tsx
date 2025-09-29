import React, { useState } from 'react';
import { Menu01 } from '@untitledui/icons';

interface AccountHeaderProps {
  userName: string;
  userRole: string;
  onDeleteAccount: () => void;
  onUpdatePhoto: () => void;
}

export const AccountHeader: React.FC<AccountHeaderProps> = ({
  userName,
  userRole: _userRole,
  onDeleteAccount,
  onUpdatePhoto
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '728px',
      padding: '24px 32px 24px 32px', // Padding esquerdo menor para nome da página aparecer mais à esquerda
      width: '100%', // Largura responsiva
      maxWidth: '1440px',
      borderBottom: '1px solid #272737',
      backgroundColor: '#1A1A1A' // Fundo consistente
    }}>
      {/* Title */}
      <h1 style={{
        fontFamily: 'Inter' /* MIGRATED */,
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '1.56em',
        color: '#FFFFFF',
        margin: 0
      }}>
        Configurações de conta
      </h1>

      {/* Profile Dropdown */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '0px 0px 0px 8px',
        backgroundColor: '#46372D',
        border: '1px solid transparent',
        backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
        borderRadius: '24px',
        position: 'relative'
      }}>
        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Menu01 
            width="20" 
            height="20" 
            stroke="#F48E2F" 
            strokeWidth="1.67"
          />
        </button>

        {/* Avatar */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #D6B3B3 0%, #F48E2F 100%)',
          border: '1.5px solid #F48E2F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: '600',
          color: '#FFFFFF',
          position: 'relative',
          cursor: 'pointer'
        }}>
          {userName.split(' ').map(n => n[0]).join('')}
          {/* Contrast border */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: '9999px',
            border: '0.75px solid rgba(255, 255, 255, 0.12)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            marginTop: '8px',
            backgroundColor: '#252532',
            border: '1px solid #22262F',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 50,
            minWidth: '200px'
          }}>
            <div style={{
              padding: '8px 0'
            }}>
              <button
                onClick={() => {
                  onUpdatePhoto();
                  setIsMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#CECFD2',
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontSize: '14px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Atualizar foto de perfil
              </button>
              <button
                onClick={() => {
                  onDeleteAccount();
                  setIsMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#E66B59',
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontSize: '14px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(230, 107, 89, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Excluir conta
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
