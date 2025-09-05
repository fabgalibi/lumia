import { useState } from "react";
import { Expand04 } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "./progress-bar";
import objectiveIcon from "/src/assets/images/objective-icon.png";

interface SprintData {
  title: string;
  description: string;
  progress: number;
  progressLabel: string;
  currentObjective: {
    label: string;
    title: string;
    icon?: string;
  };
  nextSprint: {
    label: string;
    icon?: string;
  };
}

interface SprintSectionProps {
  data?: SprintData;
  isExpanded?: boolean;
  onToggleExpanded?: (expanded: boolean) => void;
  onShowQuote?: (show: boolean) => void;
}

export const SprintSection = ({ 
  data,
  isExpanded: externalIsExpanded,
  onToggleExpanded,
  onShowQuote
}: SprintSectionProps) => {
  const [internalIsExpanded, setIsExpanded] = useState(false);
  const [internalShowQuote, setShowQuote] = useState(true);

  // Dados padrão para desenvolvimento
  const defaultData: SprintData = {
    title: "Acompanhe sua Sprint",
    description: "Finalize todas as metas pendentes, falta pouco para a próxima sprint!",
    progress: 88,
    progressLabel: "88% concluído",
    currentObjective: {
      label: "Seu objetivo atual:",
      title: "INSS - Analista de seguro social",
      icon: undefined
    },
    nextSprint: {
      label: "Próxima Sprint",
      icon: undefined
    }
  };

  const sprintData = data || defaultData;
  const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;
  const showQuote = onShowQuote !== undefined ? true : internalShowQuote; // Se onShowQuote existe, sempre mostrar

  const handleToggleExpanded = () => {
    const newExpanded = !isExpanded;
    if (onToggleExpanded) {
      onToggleExpanded(newExpanded);
    } else {
      setIsExpanded(newExpanded);
    }
  };

  const handleToggleQuote = () => {
    const newShowQuote = !showQuote;
    if (onShowQuote) {
      onShowQuote(newShowQuote);
    } else {
      setShowQuote(newShowQuote);
    }
  };

  return (
    <div className={`${isExpanded ? 'w-full' : 'flex gap-6'}`}>
      {/* Card principal da sprint */}
      <div 
        className={`rounded-xl border shadow-lg ${isExpanded ? 'w-full' : 'flex-1'}`}
        style={{
          background: '#252532',
          borderColor: '#2C2C45',
          borderRadius: '12px',
          padding: '24px'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6" style={{ gap: '24px' }}>
          <div className="flex items-center" style={{ gap: '10px', padding: '2px 0px' }}>
            {/* Ícone de corrida */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                padding: '2px 0px',
                alignSelf: 'flex-start'
              }}
            >
              <svg width="24" height="25" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                <path d="M3 4.5H12V20.5H3V4.5ZM12 7.5H21V23.5H12V7.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 10.5L8.5 12.395L6.6665 14.5M15.5 13.5L17.5 15.395L15.6665 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ gap: '6px' }} className="flex flex-col justify-center">
              <h2 
                className="text-white"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.26em'
                }}
              >
                {sprintData.title}
              </h2>
              <p 
                className="text-gray-300"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '1.43em'
                }}
              >
                {sprintData.description}
              </p>
            </div>
          </div>
          <Button
            color="tertiary"
            size="md"
            onClick={handleToggleExpanded}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              padding: '10px 0px',
              gap: '4px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            <Expand04 className="w-5 h-5" style={{ color: '#F5F5F5' }} />
            <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                color: '#F5F5F5',
                padding: '0px 2px'
              }}
            >
              {isExpanded ? 'Minimizar aba' : 'Expandir aba'}
            </span>
          </Button>
        </div>

        {/* Barra de progresso */}
        <ProgressBar 
          percentage={sprintData.progress}
          label={sprintData.progressLabel}
          isExpanded={isExpanded}
          className="mb-6"
        />

        {/* Objetivo atual */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: '8px' }}>
            <div 
              className="rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px'
              }}
            >
              <img 
                src={objectiveIcon} 
                alt="Objetivo"
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain',
                  imageRendering: 'high-quality'
                }}
              />
            </div>
            <div className="flex flex-col" style={{ width: '325px', gap: '6px' }}>
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em'
                }}
              >
                {sprintData.currentObjective.label}
              </p>
              <p 
                className="font-semibold"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#F48E2F'
                }}
              >
                {sprintData.currentObjective.title}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div 
              className="rounded-lg flex items-center relative"
              style={{
                background: '#43434A',
                padding: '6px 48px 6px 16px',
                borderRadius: '8px'
              }}
            >
              <span 
                className="text-white"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em'
                }}
              >
                Próxima Sprint
              </span>
              <div 
                className="rounded-full absolute"
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#43434A',
                  borderRadius: '9999px',
                  right: '-12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '12px',
                    width: '24px',
                    height: '24px'
                  }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: 'absolute',
                      left: '0px',
                      top: '0px',
                      width: '24px',
                      height: '24px'
                    }}
                  >
                    <path
                      d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card de frase do dia */}
      {showQuote && !isExpanded && (
        <div 
          className="rounded-lg border relative"
          style={{
            background: '#252532',
            borderColor: '#2C2C45',
            borderRadius: '8px',
            padding: '24px',
            width: '400px',
            minWidth: '400px'
          }}
        >
          <Button
            color="tertiary"
            size="lg"
            onClick={handleToggleQuote}
            className="absolute top-2 right-2 w-11 h-11 p-0"
            style={{
              width: '44px',
              height: '44px',
              padding: '8px'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          
          <div className="flex items-center gap-2.5 mb-4">
            <div 
              className="rounded-lg flex items-center justify-center"
              style={{
                width: '24px',
                height: '24px',
                background: '#FFFFFF'
              }}
            >
              <svg width="20" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 21C3 17.4 5.4 15 9 15H15C18.6 15 21 17.4 21 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 
              className="text-white"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.26em'
              }}
            >
              Frase do dia
            </h3>
          </div>
          
          <div className="space-y-4">
            <p 
              className="text-gray-300"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.75em'
              }}
            >
              "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe."
            </p>
            <p 
              className="text-white"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.75em'
              }}
            >
              - Steve Jobs
            </p>
          </div>
        </div>
      )}
    </div>
  );
};