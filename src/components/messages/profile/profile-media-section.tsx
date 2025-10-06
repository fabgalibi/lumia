import React from 'react';

interface MediaItemProps {
  title: string;
  size: string;
  type: 'pdf' | 'png' | 'image' | 'docx' | 'document';
}

const MediaItem: React.FC<MediaItemProps> = ({ title, size, type }) => {
  const isMobile = window.innerWidth < 768;
  
  const getFileIcon = () => {
    switch (type) {
      case 'pdf':
        return (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative'
            }}
          >
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#D92D20"/>
              <path opacity="0.3" d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z" fill="white"/>
            </svg>
            <span
              style={{
                position: 'absolute',
                bottom: '6px',
                left: '4px',
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '9px',
                lineHeight: '1.21em',
                color: '#FFFFFF',
                textAlign: 'center',
                width: '32px'
              }}
            >
              PDF
            </span>
          </div>
        );
      case 'png':
        return (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative'
            }}
          >
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#7F56D9"/>
              <path opacity="0.3" d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z" fill="white"/>
            </svg>
            <span
              style={{
                position: 'absolute',
                bottom: '6px',
                left: '4px',
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '9px',
                lineHeight: '1.21em',
                color: '#FFFFFF',
                textAlign: 'center',
                width: '32px'
              }}
            >
              PNG
            </span>
          </div>
        );
      case 'docx':
        return (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative'
            }}
          >
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#155EEF"/>
              <path opacity="0.3" d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z" fill="white"/>
            </svg>
            <span
              style={{
                position: 'absolute',
                bottom: '6px',
                left: '4px',
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '9px',
                lineHeight: '1.21em',
                color: '#FFFFFF',
                textAlign: 'center',
                width: '32px'
              }}
            >
              DOCX
            </span>
          </div>
        );
      case 'document':
        return (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative'
            }}
          >
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#155EEF"/>
              <path opacity="0.3" d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z" fill="white"/>
            </svg>
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '12px',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.799805 4H15.1998M0.799805 7.2H15.1998M0.799805 10.4H15.1998M0.799805 13.6H11.9998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        );
      case 'image':
        return (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative'
            }}
          >
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 0.75H20C20.1212 0.75 20.2375 0.798088 20.3232 0.883789L31.1162 11.6768C31.2019 11.7625 31.25 11.8788 31.25 12V36C31.25 37.7949 29.7949 39.25 28 39.25H4C2.20507 39.25 0.75 37.7949 0.75 36V4C0.750001 2.20507 2.20508 0.75 4 0.75Z" stroke="#373A41" strokeWidth="1.5"/>
              <path d="M20 0.5V8C20 10.2091 21.7909 12 24 12H31.5" stroke="#373A41" strokeWidth="1.5"/>
            </svg>
            <div
              style={{
                position: 'absolute',
                top: '15px',
                left: '11px',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2499 15.75H15.0076C15.736 15.75 16.1002 15.75 16.301 15.5981C16.4758 15.4658 16.5841 15.2636 16.5971 15.0447C16.6121 14.7934 16.4101 14.4904 16.0061 13.8844L13.7483 10.4977C13.4145 9.99693 13.2476 9.74654 13.0372 9.65929C12.8532 9.58301 12.6465 9.58301 12.4626 9.65929C12.2522 9.74654 12.0852 9.99693 11.7514 10.4977L11.1933 11.3349M14.2499 15.75L8.48649 7.42513C8.15503 6.94636 7.98931 6.70698 7.78229 6.62283C7.6012 6.54921 7.39852 6.54921 7.21742 6.62283C7.01041 6.70698 6.84468 6.94636 6.51323 7.42513L2.05351 13.8669C1.63124 14.4769 1.42011 14.7819 1.43213 15.0355C1.4426 15.2564 1.55001 15.4614 1.72566 15.5957C1.92736 15.75 2.29829 15.75 3.04014 15.75H14.2499ZM15.7499 4.5C15.7499 5.74264 14.7425 6.75 13.4999 6.75C12.2572 6.75 11.2499 5.74264 11.2499 4.5C11.2499 3.25736 12.2572 2.25 13.4999 2.25C14.7425 2.25 15.7499 3.25736 15.7499 4.5Z" stroke="#B692F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="media-item"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 20px 16px 16px',
        backgroundColor: 'rgba(41, 41, 56, 1)',
        borderRadius: '12px',
        border: '1px solid #22262F',
        width: isMobile ? '100%' : '230px',
        flexShrink: 0,
        position: 'relative',
        transition: 'background-color 0.2s ease'
      }}
    >
      {getFileIcon()}
      
      <div
        className="media-content"
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          transition: 'padding-right 0.2s ease'
        }}
      >
        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#CECFD2',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#94979C',
            margin: 0
          }}
        >
          {size}
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none'
        }}
        className="download-icon"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 16.5H1.5M14 8.16667L9 13.1667M9 13.1667L4 8.16667M9 13.1667V1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

const ProfileMediaSection: React.FC = () => {
  const mediaItems = [
    { title: 'Caderno de Questões Comentadas – Português', size: '2.5MB', type: 'pdf' as const },
    { title: 'Modelo de Cronograma Diário Personalizado', size: '700KB', type: 'png' as const },
    { title: 'Checklist de Estudos Semanais', size: '776KB', type: 'image' as const },
    { title: 'Mapa Mental de Raciocínio Lógico', size: '2.5MB', type: 'docx' as const },
    { title: 'Simulado Temático com Gabarito Explicado', size: '2.5MB', type: 'pdf' as const },
    { title: 'Resumo Esquematizado de Direito Constitucional', size: '150KB', type: 'document' as const },
    { title: 'Tabela de Leis Secas Mais Cobradas', size: '2.5MB', type: 'image' as const },
    { title: 'Tech design requirements.pdf', size: '2.5MB', type: 'docx' as const }
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ marginBottom: isMobile ? '20px' : '24px' }}>
      <h3
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: '#F7F7F7',
          margin: '0 0 16px 0'
        }}
      >
        Conteúdos de mídia (8)
      </h3>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: isMobile ? '12px' : '16px'
        }}
      >
        {mediaItems.map((item, index) => (
          <MediaItem
            key={index}
            title={item.title}
            size={item.size}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileMediaSection;
