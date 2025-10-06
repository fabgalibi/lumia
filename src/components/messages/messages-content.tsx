import React, { useState } from 'react';
import MessagesHeader from './messages-header';
import MessagesSearch from './messages-search';
import { MessagesList } from './list';
import MessagesEmptyState from './messages-empty-state';
import { MessagesChat } from './chat';
import NewMessageModal from './modal/new-message-modal';
import ProfileView from './profile/profile-view';
import { mockMessages } from '../../data/messages';

// Mentores disponíveis para nova conversa
const availableMentors = [
  {
    id: '8',
    name: 'Gabriel Fernandes',
    avatar: '/images/messages/modal-avatar-gabriel-fernandes-5e5d17.png',
    isOnline: true
  },
  {
    id: '9',
    name: 'Isabela Rocha',
    avatar: '/images/messages/modal-avatar-isabela-rocha.png',
    isOnline: true
  },
  {
    id: '10',
    name: 'Mateus Carvalho',
    avatar: '/images/messages/modal-avatar-mateus-carvalho.png',
    isOnline: false
  },
  {
    id: '11',
    name: 'Larissa Gomes',
    avatar: '/images/messages/modal-avatar-larissa-gomes-49d31f.png',
    isOnline: true
  }
];


const MessagesContent: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleStartChat = React.useCallback((mentorId: string) => {
    setSelectedMessage(mentorId);
  }, []);

  // Função para buscar o mentor selecionado
  const getSelectedMentor = () => {
    if (!selectedMessage) return null;
    
    // Primeiro tenta encontrar na lista de mensagens existentes
    const existingMentor = mockMessages.find(m => m.id === selectedMessage);
    if (existingMentor) {
      return {
        id: existingMentor.id,
        name: existingMentor.name,
        avatar: existingMentor.avatar,
        isOnline: existingMentor.isOnline
      };
    }
    
    // Se não encontrar, busca nos mentores disponíveis para nova conversa
    const availableMentor = availableMentors.find(m => m.id === selectedMessage);
    if (availableMentor) {
      return availableMentor;
    }
    
    return null;
  };

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
             {/* Header específico para mensagens - Escondido no mobile quando conversa selecionada */}
             {!(window.innerWidth < 768 && selectedMessage) && (
               <MessagesHeader 
                 onNewMessage={() => setIsModalOpen(true)}
               />
             )}
      
            {/* Content principal */}
            <div
              style={{
                width: window.innerWidth < 768 && selectedMessage ? '100vw' : window.innerWidth < 768 ? 'calc(100% - 32px)' : 'calc(100% - 64px)',
                height: window.innerWidth < 768 && selectedMessage ? '100vh' : window.innerWidth < 768 ? 'calc(100vh - 100px)' : 'calc(100vh - 120px)',
                maxHeight: window.innerWidth < 768 && selectedMessage ? '100vh' : window.innerWidth < 768 ? 'none' : 'calc(100vh - 120px)',
                minHeight: window.innerWidth < 768 && selectedMessage ? '100vh' : window.innerWidth < 768 ? '600px' : 'calc(100vh - 120px)',
                display: 'flex',
                flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                borderRadius: window.innerWidth < 768 && selectedMessage ? '0px' : '12px',
                overflow: 'hidden',
                boxShadow: window.innerWidth < 768 && selectedMessage ? 'none' : '0px 1px 2px -1px rgba(255, 255, 255, 0), 0px 1px 3px 0px rgba(255, 255, 255, 0)',
                marginTop: window.innerWidth < 768 && selectedMessage ? '0px' : '10px',
                marginLeft: window.innerWidth < 768 && selectedMessage ? '0px' : window.innerWidth < 768 ? '16px' : '32px',
                marginRight: window.innerWidth < 768 && selectedMessage ? '0px' : window.innerWidth < 768 ? '16px' : '32px',
                boxSizing: 'border-box',
                padding: window.innerWidth < 768 && selectedMessage ? '0px' : window.innerWidth < 768 ? '16px 5px 16px 5px' : '18px 5px',
                gap: '0px',
                position: window.innerWidth < 768 && selectedMessage ? 'fixed' : 'relative',
                top: window.innerWidth < 768 && selectedMessage ? '0' : 'auto',
                left: window.innerWidth < 768 && selectedMessage ? '0' : 'auto',
                zIndex: window.innerWidth < 768 && selectedMessage ? '1000' : 'auto'
              }}
            >
        {/* Sidebar - Escondido no mobile quando conversa selecionada */}
        {!(window.innerWidth < 768 && selectedMessage) && (
          <div
            style={{
              width: window.innerWidth < 768 ? '100%' : '360px',
              minWidth: window.innerWidth < 768 ? '100%' : '360px',
              maxWidth: window.innerWidth < 768 ? '100%' : '360px',
              height: window.innerWidth < 768 ? 'calc(100vh - 200px)' : '100%',
              maxHeight: window.innerWidth < 768 ? 'calc(100vh - 200px)' : '100%',
              backgroundColor: '#1D1D2E',
              borderTop: '1px solid #2C2C45',
              borderRight: window.innerWidth < 768 ? 'none' : '1px solid #2C2C45',
              borderLeft: '1px solid #2C2C45',
              borderBottom: '1px solid #2C2C45',
              borderTopLeftRadius: window.innerWidth < 768 ? '16px' : '16px',
              borderTopRightRadius: window.innerWidth < 768 ? '0px' : '0px',
              borderBottomLeftRadius: window.innerWidth < 768 ? '0px' : '16px',
              borderBottomRightRadius: window.innerWidth < 768 ? '0px' : '0px',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
              overflow: 'hidden',
              marginRight: window.innerWidth < 768 ? '0px' : '0px'
            }}
          >
          {/* Header com busca */}
          <MessagesSearch 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onNewMessage={() => setIsModalOpen(true)}
          />
          
          {/* Lista de mensagens */}
          <MessagesList 
            messages={filteredMessages}
            selectedMessage={selectedMessage}
            onMessageSelect={(id) => {
              setSelectedMessage(id);
              setShowProfile(false); // Fechar perfil quando selecionar mensagem
            }}
          />
          </div>
        )}
        
                 {/* Content area */}
                 {/* Chat area - Desktop sempre visível, Mobile apenas quando conversa selecionada */}
                 {(window.innerWidth >= 768 || selectedMessage) && (
                   <div
                     style={{
                       flex: 1,
                       minWidth: window.innerWidth < 768 ? '100%' : '300px',
                       display: 'flex',
                       flexDirection: 'column'
                     }}
                   >
                     {selectedMessage ? (
                       showProfile ? (
                         <ProfileView
                           contactName={getSelectedMentor()?.name || 'Contato'}
                           contactAvatar={getSelectedMentor()?.avatar || ''}
                           isOnline={getSelectedMentor()?.isOnline || false}
                           onClose={() => setShowProfile(false)}
                           onStartChat={handleStartChat}
                         />
                       ) : (
                         <MessagesChat
                           contactName={getSelectedMentor()?.name || 'Contato'}
                           contactAvatar={getSelectedMentor()?.avatar || ''}
                           isOnline={getSelectedMentor()?.isOnline || false}
                           contactId={selectedMessage}
                           onBack={() => setSelectedMessage(null)}
                           onViewProfile={() => setShowProfile(true)}
                         />
                       )
                     ) : (
                       <div
                         style={{
                           flex: 1,
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
                         <MessagesEmptyState onNewMessage={() => setIsModalOpen(true)} />
                       </div>
                     )}
                   </div>
                 )}
      </div>

      {/* Modal */}
      <NewMessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStartChat={handleStartChat}
      />
    </div>
  );
};

export default MessagesContent;
