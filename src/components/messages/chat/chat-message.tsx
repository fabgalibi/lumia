import React from 'react';
import { ChatMessage as ChatMessageType } from '../../../data/messages';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (time: string) => {
    if (time === 'Agora') return 'Agora';
    
    // Se contém dia da semana, extrair apenas a hora e converter para formato brasileiro
    if (time.includes('Quinta-feira')) {
      const parts = time.split(' ');
      const timePart = parts[parts.length - 1]; // Pega a última parte (hora)
      return convertToBrazilianTime(timePart);
    }
    
    // Se contém "Ontem", mostrar apenas a hora
    if (time.includes('Ontem')) {
      const parts = time.split(' ');
      return parts[parts.length - 1]; // Pega a última parte (hora)
    }
    
    // Se contém "atrás", mostrar apenas o tempo relativo
    if (time.includes('atrás')) {
      return time;
    }
    
    // Se contém data específica, mostrar dia + hora
    if (time.includes('/')) {
      const parts = time.split(' ');
      if (parts.length >= 2) {
        return `${parts[0]} ${parts[1]}`;
      }
    }
    
    return time;
  };

  const convertToBrazilianTime = (time: string) => {
    // Remove AM/PM se ainda existir
    return time.replace(' AM', '').replace(' PM', '');
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
        marginBottom: '16px',
        width: '100%',
        alignItems: 'flex-start'
      }}
    >
      {message.sender === 'contact' && (
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '9999px',
            backgroundImage: `url(${message.avatar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            border: '0.75px solid rgba(255, 255, 255, 0.12)',
            flexShrink: 0
          }}
        >
          {/* Online indicator */}
          {message.isOnline && (
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: '#47CD89',
                border: '1.5px solid #0C0E12'
              }}
            />
          )}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          maxWidth: '70%',
          alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
          flex: message.sender === 'user' ? '0 0 auto' : '1',
          width: '100%'
        }}
      >
        {/* Nome do contato */}
        {message.sender === 'contact' && (
          <div
            style={{
              marginBottom: '2px'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#CECFD2',
                letterSpacing: '0.01em'
              }}
            >
              {message.name}
            </span>
          </div>
        )}

        {/* Container da mensagem com horário */}
        <div
          style={{
            position: 'relative'
          }}
        >
          {/* Horário em cima do container - apenas se não for indicador de digitação */}
          {!message.isTyping && (
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '0',
                fontSize: '12px',
                color: '#94979C',
                fontFamily: 'Sora',
                fontWeight: 400,
                lineHeight: '1.5em',
                letterSpacing: '0.01em',
                zIndex: 1
              }}
            >
              {formatTime(message.time)}
            </div>
          )}

          {/* Conteúdo da mensagem */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              padding: '12px 16px',
              backgroundColor: message.sender === 'user' ? '#28283C' : '#292938',
              border: '1px solid #22262F',
              borderRadius: message.sender === 'user' ? '8px 0px 8px 8px' : '0px 8px 8px 8px',
              alignItems: message.file ? 'flex-start' : 'center',
              minHeight: '44px',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
          {message.file ? (
            <div
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start'
              }}
            >
              {/* Ícone do arquivo */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#D92D20',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '0 4px 0 0'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '9px',
                    lineHeight: '1.21em',
                    color: '#FFFFFF',
                    textAlign: 'center'
                  }}
                >
                  PDF
                </span>
              </div>

              {/* Informações do arquivo */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  flex: 1
                }}
              >
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#CECFD2',
                    letterSpacing: '0.01em'
                  }}
                >
                  {message.file.name}
                </span>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#94979C',
                    letterSpacing: '0.01em'
                  }}
                >
                  {message.file.size}
                </span>
              </div>
            </div>
          ) : message.isTyping ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '10px'
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#94979C',
                  animation: 'typing 1.4s infinite ease-in-out'
                }}
              />
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#85888E',
                  animation: 'typing 1.4s infinite ease-in-out 0.2s'
                }}
              />
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '9999px',
                  backgroundColor: '#94979C',
                  animation: 'typing 1.4s infinite ease-in-out 0.4s'
                }}
              />
            </div>
          ) : (
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: message.sender === 'user' ? '#FFFFFF' : '#F7F7F7',
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap',
                letterSpacing: '0.01em'
              }}
            >
              {message.content}
            </span>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
