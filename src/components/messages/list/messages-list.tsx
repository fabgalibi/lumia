import React from 'react';
import MessageItem from './message-item';
import { MessageItem as MessageItemType } from '../../../data/messages';

interface MessagesListProps {
  messages: MessageItemType[];
  selectedMessage: string | null;
  onMessageSelect: (id: string) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({ 
  messages, 
  selectedMessage, 
  onMessageSelect 
}) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        flex: 1,
        overflowY: 'auto',
        position: 'relative',
        scrollbarWidth: 'thin',
        scrollbarColor: '#535372 #1D1D2E',
        maxHeight: isMobile ? 'calc(100vh - 200px)' : 'calc(100vh - 180px)',
        paddingBottom: isMobile ? '80px' : '20px'
      }}
    >
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          id={message.id}
          name={message.name}
          avatar={message.avatar}
          isOnline={message.isOnline}
          lastMessage={message.lastMessage}
          time={message.time}
          hasUnread={message.hasUnread}
          isSelected={selectedMessage === message.id}
          onClick={() => onMessageSelect(message.id)}
        />
      ))}
    </div>
  );
};

export default MessagesList;
