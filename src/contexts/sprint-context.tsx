import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SprintContextType {
  progress: number;
  setProgress: (progress: number) => void;
  updateProgress: (increment: number) => void;
}

const SprintContext = createContext<SprintContextType | undefined>(undefined);

export const useSprint = () => {
  const context = useContext(SprintContext);
  if (!context) {
    throw new Error('useSprint must be used within a SprintProvider');
  }
  return context;
};

interface SprintProviderProps {
  children: ReactNode;
}

export const SprintProvider: React.FC<SprintProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState(88);

  const updateProgress = (increment: number) => {
    setProgress(prev => Math.min(prev + increment, 100));
  };

  return (
    <SprintContext.Provider value={{ progress, setProgress, updateProgress }}>
      {children}
    </SprintContext.Provider>
  );
};
