import React, { useState } from 'react';
import MessagesHeader from './messages-header';
import MessagesSearch from './messages-search';
import MessagesList from './messages-list';
import MessagesEmptyState from './messages-empty-state';

interface MessageItem {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastMessage: string;
  time: string;
  hasUnread: boolean;
}

const mockMessages: MessageItem[] = [
  {
    id: '1',
    name: 'João Pedro',
    avatar: '/images/messages/avatar-joao-pedro-611fc0.png',
    isOnline: true,
    lastMessage: 'Comece pela Lei 8.112, principalmente os capítulos iniciais. Cai bastante nas questões.',
    time: '5 minutos atrás',
    hasUnread: true
  },
  {
    id: '2',
    name: 'Ana Beatriz',
    avatar: '/images/messages/avatar-ana-beatriz.png',
    isOnline: true,
    lastMessage: 'Você: Bom dia professora, qual parte de Direito Administrativo o senhor recomenda revisar primeiro?',
    time: '20 minutos atrás',
    hasUnread: false
  },
  {
    id: '3',
    name: 'Fernanda Costa',
    avatar: '/images/messages/avatar-fernanda-costa-65fd5c.png',
    isOnline: false,
    lastMessage: 'Acabei de enviar um novo PDF com 30 questões comentadas de Atos Administrativos. Dê uma olhada e já se prepare para o simulado.',
    time: '1 hora atrás',
    hasUnread: true
  },
  {
    id: '4',
    name: 'Lucas Almeida',
    avatar: '/images/messages/avatar-lucas-almeida.png',
    isOnline: true,
    lastMessage: 'Ótimo! Depois disso, recomendo avançar para os atos administrativos, tema sempre recorrente.',
    time: '4 horas atrás',
    hasUnread: true
  },
  {
    id: '5',
    name: 'Mariana Silva',
    avatar: '/images/messages/avatar-mariana-silva.png',
    isOnline: false,
    lastMessage: 'Você: Professora, e o simulado amanhã?',
    time: '2 semanas atrás',
    hasUnread: false
  },
  {
    id: '6',
    name: 'Camila Santos',
    avatar: '/images/messages/avatar-camila-santos.png',
    isOnline: false,
    lastMessage: 'Bom dia! Publiquei um resumo atualizado sobre controle de constitucionalidade. Vale revisar antes da próxima aula.\n\nAluno: Obrigado, professor! Vou olhar ainda hoje.',
    time: '1 mês atrás',
    hasUnread: false
  },
  {
    id: '7',
    name: 'Rafael Oliveira',
    avatar: '/images/messages/avatar-rafael-oliveira-2ac439.png',
    isOnline: true,
    lastMessage: 'Não esquece que amanhã às 20h temos nossa mentoria ao vivo sobre lógica proposicional.',
    time: '1 mês atrás',
    hasUnread: false
  }
];


const MessagesContent: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMessages = mockMessages.filter(message =>
    message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: '#191923',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}
    >
      {/* Header específico para mensagens */}
      <MessagesHeader />
      
      {/* Content principal */}
            <div
              style={{
                width: 'calc(100% - 64px)',
                height: 'calc(100vh - 120px)',
                maxHeight: '800px',
                minHeight: '600px',
                display: 'flex',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0px 1px 2px -1px rgba(255, 255, 255, 0), 0px 1px 3px 0px rgba(255, 255, 255, 0)',
                marginTop: '10px',
                marginLeft: '32px',
                marginRight: '32px',
                boxSizing: 'border-box',
                '@media (max-width: 768px)': {
                  width: 'calc(100% - 32px)',
                  marginLeft: '16px',
                  marginRight: '16px',
                  height: 'calc(100vh - 100px)',
                  flexDirection: 'column'
                }
              }}
            >
        {/* Sidebar */}
        <div
          style={{
            width: '424px',
            minWidth: '300px',
            maxWidth: '424px',
            backgroundColor: '#1D1D2E',
            borderTop: '1px solid #2C2C45',
            borderRight: '1px solid #2C2C45',
            borderBottom: '1px solid #2C2C45',
            borderTopLeftRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0
          }}
        >
          {/* Header com busca */}
          <MessagesSearch 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          {/* Lista de mensagens */}
          <MessagesList 
            messages={filteredMessages}
            selectedMessage={selectedMessage}
            onMessageSelect={setSelectedMessage}
          />
        </div>
        
        {/* Content area */}
        <div
          style={{
            flex: 1,
            minWidth: '300px',
            backgroundColor: '#1D1D2E',
            borderTop: '1px solid #2C2C45',
            borderRight: '1px solid #2C2C45',
            borderBottom: '1px solid #2C2C45',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 32px 40px 32px',
            overflow: 'auto'
          }}
        >
          {selectedMessage ? (
            <div>
              {/* Aqui seria implementada a conversa específica */}
              <p style={{ color: '#FFFFFF' }}>Conversa selecionada: {selectedMessage}</p>
            </div>
          ) : (
            <MessagesEmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
