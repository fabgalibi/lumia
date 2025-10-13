import React, { useEffect, useState } from 'react';
import rocketIcon from "/src/assets/icons/rocket-icon.svg";
import { useSprint } from '@/contexts/sprint-context';

interface RocketAnimationProps {
  isVisible: boolean;
  progress?: number;
  onComplete?: () => void;
  onProgressUpdate?: (newProgress: number) => void;
}

export const RocketAnimation: React.FC<RocketAnimationProps> = ({
  isVisible,
  progress: propProgress,
  onComplete,
  onProgressUpdate
}) => {
  const { progress: contextProgress } = useSprint();
  const currentProgress = propProgress || contextProgress;
  
  console.log('RocketAnimation - progresso atual:', currentProgress, 'contexto:', contextProgress);
  
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'launching' | 'flying' | 'landing' | 'complete'>('idle');

  useEffect(() => {
    if (!isVisible) {
      setAnimationPhase('idle');
      return;
    }

    console.log('Foguetinho iniciando animação');
    // Iniciar animação
    setAnimationPhase('launching');
    
    // Fase 1: Lançamento (0.5s)
    setTimeout(() => {
      setAnimationPhase('flying');
      
      // Scroll para a seção Sprint
      const targetElement = document.querySelector('[data-sprint-section]');
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 500);

    // Fase 2: Voo (1.5s)
    setTimeout(() => {
      setAnimationPhase('landing');
    }, 2000);

    // Fase 3: Pouso na barra (quando o foguete toca a barra)
    setTimeout(() => {
      setAnimationPhase('landing');
      
      // Atualizar API IMEDIATAMENTE quando o foguete tocar a barra
      if (onProgressUpdate) {
        onProgressUpdate(currentProgress);
      }
      
      // Foguete pousa na barra e desaparece rapidamente
      setTimeout(() => {
        setAnimationPhase('complete');
        if (onComplete) {
          onComplete();
        }
      }, 300); // Muito mais rápido
    }, 2000); // Reduzido de 2500 para 2000

  }, [isVisible, onComplete, onProgressUpdate]);

  if (!isVisible || animationPhase === 'idle') {
    return null;
  }

  const getRocketPosition = () => {
    switch (animationPhase) {
      case 'launching':
        return {
          left: '50%',
          bottom: '100px',
          top: 'auto'
        };
      case 'flying':
        return {
          left: '50%',
          top: '30%',
          bottom: 'auto'
        };
      case 'landing':
        // Pousar na barra de progresso - posicionamento mais preciso
        const progressBar = document.querySelector('[data-progress-bar]');
        if (progressBar) {
          const rect = progressBar.getBoundingClientRect();
          return {
            left: `${rect.left + rect.width - 32}px`, // Mais próximo da ponta
            top: `${rect.top + rect.height / 2 - 32}px`, // Centralizado verticalmente
            bottom: 'auto',
            transform: 'translateY(-50%)'
          };
        }
        return {
          left: '50%',
          top: '30%',
          bottom: 'auto'
        };
      case 'complete':
        // Foguete some após tocar na barra
        return {
          left: '50%',
          top: '30%',
          bottom: 'auto',
          opacity: 0
        };
      default:
        return {
          left: '50%',
          top: '30%',
          bottom: 'auto'
        };
    }
  };

  const position = getRocketPosition();

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Foguete */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          ...position,
          transform: 'translate(-50%, -50%)',
          zIndex: 1000
        }}
      >
        {/* Foguete - mesma imagem da barra de progresso */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: '63.64px',
            height: '63.64px',
            transform: animationPhase === 'launching' ? 'rotate(-90deg)' :
                      animationPhase === 'flying' ? 'rotate(-90deg)' : 
                      animationPhase === 'landing' ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease-in-out, opacity 0.2s ease-in-out',
            opacity: animationPhase === 'complete' ? 0 : 1
          }}
        >
          <img 
            src={rocketIcon} 
            alt="Foguete"
            style={{
              width: '63.64px',
              height: '63.64px'
            }}
          />

          {/* Efeito de pouso */}
          {animationPhase === 'landing' && (
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
              }}
            />
          )}
        </div>

        {/* Trilha de fogo */}
        <div
          className="absolute"
          style={{
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '40px',
            background: 'linear-gradient(to bottom, #F66649, #FF5722, transparent)',
            borderRadius: '0 0 4px 4px',
            opacity: animationPhase === 'flying' ? 1 : 0.3
          }}
        />
      </div>

      {/* Partículas de sucesso */}
      {animationPhase === 'complete' && (
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: '50%',
                top: '40%',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
