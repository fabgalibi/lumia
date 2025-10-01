import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationsModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const NotificationsModalContext = createContext<NotificationsModalContextType | undefined>(undefined);

export const useNotificationsModal = () => {
  const context = useContext(NotificationsModalContext);
  if (!context) {
    throw new Error('useNotificationsModal must be used within a NotificationsModalProvider');
  }
  return context;
};

interface NotificationsModalProviderProps {
  children: ReactNode;
}

export const NotificationsModalProvider: React.FC<NotificationsModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <NotificationsModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </NotificationsModalContext.Provider>
  );
};

