import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface TimerContextType {
  time: string;
  isRunning: boolean;
  isLockScreenOpen: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
  closeLockScreen: () => void;
  openLockScreen: () => void;
  actuallyStartTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [isLockScreenOpen, setIsLockScreenOpen] = useState(false);

  // Efeito para incrementar o tempo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => {
          const [hours, minutes, seconds] = prev.split(':').map(Number);
          let totalSeconds = hours * 3600 + minutes * 60 + seconds + 1;
          
          const newHours = Math.floor(totalSeconds / 3600);
          const newMinutes = Math.floor((totalSeconds % 3600) / 60);
          const newSeconds = totalSeconds % 60;
          
          return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    // Se nunca foi iniciado antes (tempo zerado), abrir lock screen
    if (time === "00:00:00") {
      setIsLockScreenOpen(true);
    } else {
      // Se já tem tempo, apenas continuar rodando sem abrir lock screen
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const stopTimer = () => {
    setTime("00:00:00");
    setIsRunning(false);
    setIsLockScreenOpen(false);
  };

  const closeLockScreen = () => {
    setIsLockScreenOpen(false);
  };

  const openLockScreen = () => {
    setIsLockScreenOpen(true);
  };

  // Função interna para iniciar o timer (chamada pela lock screen após contagem)
  const actuallyStartTimer = () => {
    setIsRunning(true);
  };

  return (
    <TimerContext.Provider
      value={{
        time,
        isRunning,
        isLockScreenOpen,
        startTimer,
        pauseTimer,
        stopTimer,
        closeLockScreen,
        openLockScreen,
        actuallyStartTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};

