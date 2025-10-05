import React, { useState, useEffect } from 'react';
import { mockChatMessages, ChatMessage as ChatMessageType } from '../../../data/messages';
import ChatHeader from './chat-header';
import ChatMessage from './chat-message';
import ChatInput from './chat-input';
import ChatDivider from './chat-divider';

interface MessagesChatProps {
  contactName: string;
  contactAvatar: string;
  isOnline: boolean;
  contactId: string;
  onBack?: () => void;
}

const MessagesChat: React.FC<MessagesChatProps> = ({ contactName, contactAvatar, isOnline, contactId, onBack }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>(mockChatMessages[contactId] || []);
  const [isMobile, setIsMobile] = useState(false);

  // Atualizar mensagens quando o contato mudar
  useEffect(() => {
    setMessages(mockChatMessages[contactId] || []);
  }, [contactId]);

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleSendMessage = (messageText: string) => {
    if (messageText.trim()) {
      const message: ChatMessageType = {
        id: Date.now().toString(),
        sender: 'user',
        name: 'Você',
        avatar: '/images/messages/avatar-ana-beatriz.png',
        content: messageText,
        time: 'Agora',
        isOnline: true
      };
      setMessages(prev => [...prev, message]);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: window.innerWidth < 768 ? '100vh' : '100%',
        backgroundColor: '#1D1D2E',
        borderTop: window.innerWidth < 768 ? 'none' : '1px solid #2C2C45',
        borderRight: window.innerWidth < 768 ? 'none' : '1px solid #2C2C45',
        borderBottom: window.innerWidth < 768 ? 'none' : '1px solid #2C2C45',
        borderTopRightRadius: window.innerWidth < 768 ? '0px' : '12px',
        borderBottomRightRadius: window.innerWidth < 768 ? '0px' : '16px',
        overflow: 'hidden'
      }}
    >
      {/* Header do Chat */}
      <ChatHeader
        contactName={contactName}
        contactAvatar={contactAvatar}
        isOnline={isOnline}
        onBack={onBack}
      />

      {/* Área de Mensagens */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '0px 24px 32px',
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: '#535372 #1D1D2E'
        }}
      >
        {messages.length > 0 ? (
          <>
            {/* Divider - Thursday */}
            <ChatDivider text="Thursday" />

            {/* Mensagens */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>

            {/* Divider - Hoje */}
            <ChatDivider text="Hoje" />
          </>
        ) : (
          /* Estado vazio */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              gap: '16px',
              color: '#94979C'
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#2D2D3B',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4601 20 9.02142 19.7445 7.73047 19.2902L3 21L4.70977 16.2695C4.25545 14.9786 4 13.5399 4 12C4 7.58172 8.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
                  stroke="#94979C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              style={{
                textAlign: 'center'
              }}
            >
              <h3
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '1.56em',
                  color: '#F7F7F7',
                  margin: '0 0 8px 0'
                }}
              >
                Inicie uma conversa
              </h3>
              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#94979C',
                  margin: 0
                }}
              >
                Digite uma mensagem para começar a conversar com {contactName}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input de Mensagem */}
      <ChatInput onSendMessage={handleSendMessage} />

      <style jsx>{`
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default MessagesChat;
