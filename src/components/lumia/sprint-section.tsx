import { useState } from "react";
import { Expand04 } from "@untitledui/icons";
import { X } from "lucide-react";
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
  externalProgress?: number; // Progresso externo para integração com backend
  onToggleExpanded?: (expanded: boolean) => void;
  onShowQuote?: (show: boolean) => void;
}

export const SprintSection = ({ 
  data,
  isExpanded: externalIsExpanded,
  externalProgress,
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
  
  // Usar progresso externo se disponível, senão usar o padrão
  const currentProgress = externalProgress !== undefined ? externalProgress : sprintData.progress;
  const currentProgressLabel = `${currentProgress}% concluído`;

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
    <div className={`w-full ${isExpanded ? 'flex flex-col' : 'flex flex-col xl:flex-row'} gap-6`}>
      {/* Card principal da sprint */}
      <div 
        data-sprint-section
        className={`rounded-xl border flex flex-col ${isExpanded ? 'w-full' : 'flex-1 min-w-0'} p-5 md:p-[22px] lg:p-6 gap-5 md:gap-[22px] lg:gap-6 min-h-[284px] md:min-h-[240px] lg:min-h-[230px]`}
        style={{
          background: 'linear-gradient(135deg, rgba(37, 37, 50, 1) 0%, #2A2A3A 100%)',
          borderColor: '#2C2C45',
          borderRadius: '12px',
          borderWidth: '1px',
          width: isExpanded ? '100%' : 'auto',
          minWidth: isExpanded ? 'auto' : '0',
          maxWidth: isExpanded ? '100%' : 'none',
          height: 'auto',
          opacity: 1,
          boxShadow: `
            0px 4px 6px -1px rgba(0, 0, 0, 0.1),
            0px 2px 4px -1px rgba(0, 0, 0, 0.06),
            inset 0px 1px 0px rgba(255, 255, 255, 0.05),
            inset 0px -1px 0px rgba(0, 0, 0, 0.1),
            0px 0px 0px 1px rgba(255, 255, 255, 0.02)
          `,
          position: 'relative'
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6" style={{ minHeight: '48px' }}>
          <div className="flex items-start sm:items-center gap-3 md:gap-3 lg:gap-2.5">
            {/* Ícone de corrida */}
            <div 
              className="flex items-center justify-center flex-shrink-0 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              style={{
                padding: '2px 0px',
                alignSelf: 'flex-start',
                filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.1))'
              }}
            >
              <svg width="18" height="19" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 lg:w-6 lg:h-6" style={{ marginLeft: '3px' }}>
                <path d="M3 4.5H12V20.5H3V4.5ZM12 7.5H21V23.5H12V7.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 10.5L8.5 12.395L6.6665 14.5M15.5 13.5L17.5 15.395L15.6665 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1 gap-1.5 md:gap-1.5 lg:gap-1.5">
              <h2 
                className="text-white text-base md:text-base lg:text-base"
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 400,
                  lineHeight: '1.26em'
                }}
              >
                {sprintData.title}
              </h2>
              <p 
                className="text-gray-300 text-xs md:text-sm lg:text-sm"
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 300,
                  lineHeight: '1.67em'
                }}
              >
                {sprintData.description}
              </p>
            </div>
          </div>
          <Button
            variant="tertiary"
            size="md"
            onClick={handleToggleExpanded}
            className="hidden sm:flex items-center gap-1 hover:opacity-80 transition-opacity rounded-lg self-start sm:self-center flex-shrink-0 cursor-pointer"
            aria-label={isExpanded ? 'Minimizar seção da sprint' : 'Expandir seção da sprint'}
          >
            <Expand04 className="w-5 h-5" style={{ color: '#F5F5F5' }} />
            <span 
              className="hidden sm:inline"
              style={{
                fontFamily: 'var(--font-sora)',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#F5F5F5',
                padding: '0px 2px'
              }}
            >
              {isExpanded ? 'Minimizar aba' : 'Expandir aba'}
            </span>
          </Button>
        </div>

        {/* Barra de progresso */}
        <div>
          <ProgressBar 
            percentage={currentProgress}
            label={currentProgressLabel}
            isExpanded={isExpanded}
          />
        </div>

        {/* Objetivo atual */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center min-w-0 gap-2 md:gap-2.5 lg:gap-2">
            <div 
              className="rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
              style={{
                borderRadius: '8px'
              }}
            >
              <img 
                src={objectiveIcon} 
                alt="Objetivo"
                className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
                style={{
                  objectFit: 'contain',
                  imageRendering: 'auto'
                }}
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1 gap-1 md:gap-1.5 lg:gap-1.5">
              <p 
                className="text-white text-xs md:text-sm lg:text-sm"
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 400,
                  lineHeight: '1.5em'
                }}
              >
                {sprintData.currentObjective.label}
              </p>
              <p 
                className="font-semibold break-words text-xs md:text-sm lg:text-sm"
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 600,
                  lineHeight: '1.5em',
                  color: '#F48E2F'
                }}
              >
                {sprintData.currentObjective.title}
              </p>
            </div>
          </div>
          <div 
            className="flex items-center flex-shrink-0 w-full md:w-auto lg:w-auto"
            style={{
              gap: '-40px'
            }}
          >
            {/* Container principal do badge */}
            <div 
              className="flex items-center justify-center w-full md:w-auto lg:w-auto"
              style={{
                background: '#43434A',
                padding: '10px 48px 10px 16px',
                borderRadius: '8px',
                gap: '10px'
              }}
            >
              <span 
                className="text-white whitespace-nowrap text-sm md:text-sm lg:text-base"
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 400,
                  lineHeight: '1.43em',
                  color: '#FFFFFF'
                }}
              >
                Próxima Sprint (bloqueada)
              </span>
            </div>
            
            {/* Círculo do ícone sobreposto */}
            <div 
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                marginLeft: '-40px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0px 0px 0px 1px rgba(255, 255, 255, 0.1),
                  inset 0px 1px 0px rgba(255, 255, 255, 0.2),
                  inset 0px -1px 0px rgba(0, 0, 0, 0.1)
                `,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/src/assets/icons/lock-icon.svg" 
                  alt="Lock icon"
                  style={{
                    width: '16px',
                    height: '18px',
                    filter: 'brightness(0) saturate(100%) invert(100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card de frase do dia */}
      {showQuote && !isExpanded && (
        <div 
          className="rounded-lg border relative flex-shrink-0 flex flex-col w-full xl:w-auto p-5 md:p-[22px] lg:p-6 gap-5 md:gap-[22px] lg:gap-6 min-h-[284px] md:min-h-[240px] lg:min-h-[230px] lg:min-w-[250px] lg:max-w-[320px]"
          style={{
            background: 'linear-gradient(135deg, rgba(37, 37, 50, 1) 0%, #2A2A3A 100%)',
            borderColor: '#2C2C45',
            borderRadius: '8px',
            borderWidth: '1px',
            width: '100%',
            height: 'auto',
            opacity: 1,
            boxShadow: `
              0px 4px 6px -1px rgba(0, 0, 0, 0.1),
              0px 2px 4px -1px rgba(0, 0, 0, 0.06),
              inset 0px 1px 0px rgba(255, 255, 255, 0.05),
              inset 0px -1px 0px rgba(0, 0, 0, 0.1),
              0px 0px 0px 1px rgba(255, 255, 255, 0.02)
            `,
            position: 'relative'
          }}
        >
          <Button
            variant="icon"
            size="icon"
            onClick={handleToggleQuote}
            className="absolute right-2 top-2 rounded-lg cursor-pointer"
            aria-label="Fechar frase do dia"
          >
            <X 
              size={12}
              style={{
                color: '#A4A7AE',
                strokeWidth: '2px'
              }}
            />
          </Button>
          
          <div className="flex items-center" style={{ gap: '10px' }}>
            <div 
              className="rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                width: '24px',
                height: '24px',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'drop-shadow(0px 0px 6px rgba(250, 250, 250, 0.15))'
              }}
            >
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2px' }}>
                <path d="M5.53645 0.25001C5.66745 0.151515 5.81652 0.0798508 5.97514 0.0391097C6.13376 -0.00163151 6.29884 -0.010652 6.46094 0.0125636C6.62304 0.0357793 6.77899 0.0907762 6.91989 0.174414C7.06079 0.258052 7.18388 0.368694 7.28213 0.500021C7.38038 0.631348 7.45186 0.78079 7.4925 0.939813C7.53314 1.09884 7.54213 1.26433 7.51898 1.42684C7.49582 1.58935 7.44096 1.74569 7.35753 1.88695C7.27411 2.0282 7.16374 2.1516 7.03275 2.25009C5.08258 3.7164 3.96535 5.14271 3.32568 6.38776C4.20397 6.16111 5.13087 6.2144 5.97756 6.54021C6.82424 6.86603 7.54865 7.4482 8.05008 8.20579C8.55151 8.96339 8.80506 9.85877 8.77549 10.7675C8.74592 11.6762 8.43468 12.5531 7.88506 13.2763C7.33543 13.9996 6.57472 14.5331 5.70865 14.8029C4.84258 15.0727 3.91418 15.0653 3.0525 14.7818C2.19082 14.4982 1.43866 13.9525 0.900577 13.2207C0.362491 12.4888 0.0652087 11.607 0.0500507 10.6979C-0.107951 9.16282 0.10946 7.61222 0.683481 6.18026C1.42789 4.29768 2.88303 2.24509 5.53645 0.25001ZM16.7586 0.25001C16.8896 0.151515 17.0387 0.0798508 17.1973 0.0391097C17.356 -0.00163151 17.521 -0.010652 17.6831 0.0125636C17.8452 0.0357793 18.0012 0.0907762 18.1421 0.174414C18.283 0.258052 18.4061 0.368694 18.5043 0.500021C18.6026 0.631348 18.674 0.78079 18.7147 0.939813C18.7553 1.09884 18.7643 1.26433 18.7412 1.42684C18.718 1.58935 18.6632 1.74569 18.5797 1.88695C18.4963 2.0282 18.3859 2.1516 18.2549 2.25009C16.3048 3.7164 15.1875 5.14271 14.5479 6.38776C15.4262 6.16111 16.3531 6.2144 17.1997 6.54021C18.0464 6.86603 18.7708 7.4482 19.2723 8.20579C19.7737 8.96339 20.0273 9.85877 19.9977 10.7675C19.9681 11.6762 19.6569 12.5531 19.1072 13.2763C18.5576 13.9996 17.7969 14.5331 16.9308 14.8029C16.0648 15.0727 15.1364 15.0653 14.2747 14.7818C13.413 14.4982 12.6609 13.9525 12.1228 13.2207C11.5847 12.4888 11.2874 11.607 11.2722 10.6979C11.1142 9.16282 11.3316 7.61222 11.9057 6.18026C12.6513 4.29768 14.1052 2.24509 16.7586 0.25001Z" fill="#FAFAFA"/>
              </svg>
            </div>
            <h3 
              className="text-white"
              style={{
                fontFamily: 'var(--font-sora)',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '1.26em',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Frase do dia
            </h3>
          </div>
          
          <div className="flex flex-col flex-1 min-h-0" style={{ gap: '16px' }}>
            <p 
              className="text-[#E9EAEB] break-words"
              style={{
                fontFamily: 'var(--font-sora)',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '1.75em',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe."
            </p>
            <p 
              className="text-white break-words"
              style={{
                fontFamily: 'var(--font-sora)',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: '1.75em',
                letterSpacing: '0%',
                verticalAlign: 'middle'
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