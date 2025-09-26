import React from 'react';
import { Target04, Trash01, ImagePlus } from '@untitledui/icons';

interface PageHeaderProps {
  userName: string;
  userRole: string;
  onDeleteAccount: () => void;
  onUpdatePhoto: () => void;
  screenSize?: 'mobile' | 'desktop';
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  userName,
  userRole,
  onDeleteAccount,
  onUpdatePhoto,
  screenSize = 'desktop'
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
          {/* Avatar - Mobile: 56x56px, Desktop: 64x64px conforme Figma */}
          <div style={{
            width: screenSize === 'mobile' ? '56px' : '64px',
            height: screenSize === 'mobile' ? '56px' : '64px',
            borderRadius: '9999px',
            backgroundColor: '#D6B3B3',
            border: '1px solid #F48E2F',
            backgroundImage: 'url(/images/account-settings/avatar-user.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
            flexShrink: 0
          }} />
          {/* Text and supporting text */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            flex: 1,
            minWidth: 0
          }}>
            {/* Nome - Text lg Semibold conforme Figma */}
            <h1 style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '1.5555555555555556em', // 28px / 18px = 1.556
              color: '#F7F7F7',
              margin: 0,
              textAlign: 'left'
            }}>
              {userName}
            </h1>
            
            {/* Role com ícone target-04 */}
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
                fontWeight: '400', // Text xs Medium - na verdade é 400 no Figma
                fontSize: '12px',
                lineHeight: '1.5em', // 18px / 12px = 1.5
                color: '#FFFFFF'
              }}>
                {userRole}
              </span>
            </div>
          </div>
        </div>

        {/* Actions - responsivo para mobile */}
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
          flexDirection: screenSize === 'mobile' ? 'row-reverse' : 'row', // Mobile: ordem invertida
          width: screenSize === 'mobile' ? '100%' : 'auto', // Desktop: auto width
          flexShrink: 0,
          flexWrap: 'wrap'
        }}>
          {/* Botão deletar - Icon Only - 40px altura */}
          <button 
            onClick={onDeleteAccount}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              height: '40px',
              width: '40px',
              backgroundColor: '#3D2B2B',
              border: '2px solid transparent',
              borderRadius: '8px',
              backgroundImage: 'linear-gradient(#3D2B2B, #3D2B2B), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage = 'linear-gradient(#4A3333, #4A3333), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage = 'linear-gradient(#3D2B2B, #3D2B2B), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Trash01 
              width="20" 
              height="20" 
              stroke="#E66B59" 
              strokeWidth="1.6666666269302368"
            />
          </button>

          {/* Frame com botão + texto de apoio */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            flex: screenSize === 'mobile' ? 1 : 'none' // Mobile: preenche o espaço disponível
          }}>
            {/* Botão atualizar foto - com ícone + texto - 40px altura */}
            <button 
              onClick={onUpdatePhoto}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                padding: '10px 14px',
                height: '40px',
                width: screenSize === 'mobile' ? '100%' : '216px', // Desktop: largura fixa 216px conforme Figma
                backgroundColor: '#2D2D45',
                border: '2px solid transparent',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(#2D2D45, #2D2D45), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(#3A3A5A, #3A3A5A), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(#2D2D45, #2D2D45), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ImagePlus 
                width="20" 
                height="20" 
                stroke="#FFFFFF" 
                strokeWidth="1.6666666269302368"
              />
              <span style={{
                fontFamily: 'Sora',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '1.4285714285714286em', // Text sm Semibold
                color: '#FFFFFF'
              }}>
                Atualizar foto de perfil
              </span>
            </button>

            {/* Texto de apoio - Text xs Regular */}
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: '12px', // Font size/text-xs
              lineHeight: '1.5em', // Line height/text-xs (18px/12px = 1.5)
              letterSpacing: '0%',
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
