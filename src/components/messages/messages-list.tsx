import React from 'react';
import MessageItem from './message-item';

interface MessageItemData {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastMessage: string;
  time: string;
  hasUnread: boolean;
}

interface MessagesListProps {
  messages: MessageItemData[];
  selectedMessage: string | null;
  onMessageSelect: (id: string) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({ 
  messages, 
  selectedMessage, 
  onMessageSelect 
}) => (
  <div
    style={{
      flex: 1,
      overflowY: 'auto',
      position: 'relative',
      scrollbarWidth: 'thin',
      scrollbarColor: '#535372 #1D1D2E'
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

export default MessagesList;
