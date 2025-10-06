import React from 'react';
import ProfileHeader from './profile-header';
import ProfileAboutSection from './profile-about-section';
import ProfileInfoSection from './profile-info-section';
import ProfileAvailabilitySection from './profile-availability-section';
import ProfileMediaSection from './profile-media-section';

interface ProfileViewProps {
  contactName: string;
  contactAvatar: string;
  isOnline: boolean;
  onClose: () => void;
  onStartChat?: (contactId: string) => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ 
  contactName, 
  contactAvatar, 
  isOnline,
  onClose,
  onStartChat
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#1D1D2E',
        borderTop: '1px solid #2C2C45',
        borderRight: '1px solid #2C2C45',
        borderBottom: '1px solid #2C2C45',
        borderTopRightRadius: '12px',
        borderBottomRightRadius: '16px',
        overflow: 'hidden'
      }}
    >
      {/* Header com título e botão fechar */}
      <ProfileHeader 
        contactName={contactName}
        contactAvatar={contactAvatar}
        isOnline={isOnline}
        onClose={onClose}
      />

      {/* Conteúdo Scrollável */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: '#2C2C45 #1D1D2E'
        }}
      >
        {/* Seção do perfil com avatar, nome e status */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '-32px',
            backgroundColor: '#1D1D2E',
            padding: '0 24px'
          }}
        >
          {/* Background Image */}
          <div
            className="profile-background"
            style={{
              width: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}
          />

          {/* Container com avatar e informações */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginTop: '-32px'
            }}
            className="profile-container"
          >
            {/* Avatar e botão de ação */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px'
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  position: 'relative',
                  width: '96px',
                  height: '96px'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundImage: `url(${contactAvatar})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '3px solid #22262F',
                    boxShadow: '0px 3px 3px -1.5px rgba(255, 255, 255, 0), 0px 8px 8px -4px rgba(255, 255, 255, 0), 0px 20px 24px -4px rgba(255, 255, 255, 0)'
                  }}
                />
              </div>

              {/* Botão de ação */}
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  width: '155px',
                  height: '36px',
                  padding: '8px 12px',
                  backgroundColor: 'rgba(45, 45, 69, 1)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3A3A55';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(45, 45, 69, 1)';
                }}
                onClick={() => {
                  if (onStartChat) {
                    // Mapear nomes para IDs existentes ou criar novo
                    const nameToIdMap: Record<string, string> = {
                      'Ana Beatriz': '2',
                      'João Pedro': '1',
                      'Fernanda Costa': '3',
                      'Lucas Almeida': '4',
                      'Mariana Silva': '5',
                      'Camila Santos': '6',
                      'Rafael Oliveira': '7'
                    };
                    
                    const contactId = nameToIdMap[contactName] || contactName.toLowerCase().replace(/\s+/g, '-');
                    onStartChat(contactId);
                    // Fechar o perfil após iniciar o chat
                    onClose();
                  }
                }}
              >
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#FFFFFF'
                  }}
                >
                  Enviar mensagem
                </span>
              </button>
            </div>

            {/* Nome e status */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '1.5em',
                    color: '#F7F7F7',
                    margin: 0
                  }}
                >
                  {contactName}
                </h3>
                
                {/* Status Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '2px 8px 2px 6px',
                    backgroundColor: '#243D2A',
                    borderRadius: '9999px',
                    border: '1px solid rgba(23, 178, 106, 0.2)'
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#17B26A'
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '1.5em',
                      color: '#3DC462'
                    }}
                  >
                    Online
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#CECFD2',
                  margin: 0
                }}
              >
                Na plataforma desde julho de 2025
              </p>
            </div>
          </div>
        </div>
        {/* Biografia */}
        <div style={{ padding: '24px 24px 0 24px' }}>
          <ProfileAboutSection />
        </div>

        {/* Informações de Contato */}
        <div style={{ padding: '0 24px' }}>
          <ProfileInfoSection contactName={contactName} />
        </div>

        {/* Disponibilidade */}
        <div style={{ padding: '0 24px' }}>
          <ProfileAvailabilitySection />
        </div>

        {/* Conteúdos de Mídia */}
        <div style={{ padding: '0 24px 24px 24px' }}>
          <ProfileMediaSection />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;