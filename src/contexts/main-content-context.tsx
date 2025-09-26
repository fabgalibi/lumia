import React, { createContext, useContext, useState, ReactNode } from 'react';

type MainContentType = 'home' | 'account-settings';

interface MainContentContextType {
  currentContent: MainContentType;
  setCurrentContent: (content: MainContentType) => void;
}

const MainContentContext = createContext<MainContentContextType | undefined>(undefined);

export const useMainContent = () => {
  const context = useContext(MainContentContext);
  if (!context) {
    throw new Error('useMainContent must be used within a MainContentProvider');
  }
  return context;
};

interface MainContentProviderProps {
  children: ReactNode;
}

export const MainContentProvider: React.FC<MainContentProviderProps> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<MainContentType>('home');

  return (
    <MainContentContext.Provider value={{ currentContent, setCurrentContent }}>
      {children}
    </MainContentContext.Provider>
  );
};

