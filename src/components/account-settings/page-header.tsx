import React from 'react';
import { Target04, Trash01, ImagePlus } from '@untitledui/icons';

interface PageHeaderProps {
  userName: string;
  userRole: string;
  onDeleteAccount: () => void;
  onUpdatePhoto: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  userName,
  userRole,
  onDeleteAccount,
  onUpdatePhoto
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {/* Avatar Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flex: 1
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #D6B3B3 0%, #F48E2F 100%)',
            border: '1px solid #F48E2F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: '600',
            color: '#FFFFFF',
            position: 'relative'
          }}>
            {userName.split(' ').map(n => n[0]).join('')}
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            flex: 1
          }}>
            <h1 style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#F7F7F7',
              margin: 0
            }}>
              {userName}
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Target04 
                width="16" 
                height="16" 
                stroke="#FFFFFF" 
                strokeWidth="1.5"
              />
              <span style={{
                fontFamily: 'Sora',
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '1.5em',
                color: '#FFFFFF'
              }}>
                {userRole}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}>
          <button 
            onClick={onDeleteAccount}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              backgroundColor: '#3D2B2B',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4A3333';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3D2B2B';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Trash01 
              width="20" 
              height="20" 
              stroke="#E66B59" 
              strokeWidth="1.67"
            />
          </button>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <button 
              onClick={onUpdatePhoto}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '10px 14px',
                backgroundColor: '#2D2D45',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3A3A5A';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2D2D45';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ImagePlus 
                width="20" 
                height="20" 
                stroke="#FFFFFF" 
                strokeWidth="1.67"
              />
              <span style={{
                fontFamily: 'Sora',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#FFFFFF'
              }}>
                Atualizar foto de perfil
              </span>
            </button>
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#F0F0F1'
            }}>
              Tamanho máximo: 5MB (JPG, PNG)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

