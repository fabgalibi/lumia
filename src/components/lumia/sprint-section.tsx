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
    <div className={`${isExpanded ? 'w-full' : 'flex gap-6'} w-full max-w-full`}>
      {/* Card principal da sprint */}
      <div 
        className={`rounded-xl border shadow-lg flex flex-col ${isExpanded ? 'w-full' : 'flex-1'}`}
        style={{
          background: '#252532',
          borderColor: '#2C2C45',
          borderRadius: '12px',
          borderWidth: '1px',
          padding: '24px',
          width: isExpanded ? '100%' : 'auto',
          minWidth: isExpanded ? 'auto' : '600px',
          maxWidth: isExpanded ? '100%' : '758px',
          height: '230px',
          opacity: 1,
          gap: '24px'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between" style={{ gap: '24px', minHeight: '48px' }}>
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
        <div>
          <ProgressBar 
            percentage={sprintData.progress}
            label={sprintData.progressLabel}
            isExpanded={isExpanded}
          />
        </div>

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
                  imageRendering: 'auto'
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
          className="rounded-lg border relative flex-shrink-0 flex flex-col"
          style={{
            background: '#252532',
            borderColor: '#2C2C45',
            borderRadius: '8px',
            borderWidth: '1px',
            padding: '24px',
            width: '350px',
            minWidth: '300px',
            maxWidth: '400px',
            height: '230px',
            opacity: 1,
            gap: '24px'
          }}
        >
          <Button
            onClick={handleToggleQuote}
            className="absolute"
            style={{
              width: '44px',
              height: '44px',
              padding: '8px',
              right: '8px',
              top: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
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
              className="rounded-lg flex items-center justify-center"
              style={{
                width: '24px',
                height: '24px',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2px' }}>
                <path d="M5.53645 0.25001C5.66745 0.151515 5.81652 0.0798508 5.97514 0.0391097C6.13376 -0.00163151 6.29884 -0.010652 6.46094 0.0125636C6.62304 0.0357793 6.77899 0.0907762 6.91989 0.174414C7.06079 0.258052 7.18388 0.368694 7.28213 0.500021C7.38038 0.631348 7.45186 0.78079 7.4925 0.939813C7.53314 1.09884 7.54213 1.26433 7.51898 1.42684C7.49582 1.58935 7.44096 1.74569 7.35753 1.88695C7.27411 2.0282 7.16374 2.1516 7.03275 2.25009C5.08258 3.7164 3.96535 5.14271 3.32568 6.38776C4.20397 6.16111 5.13087 6.2144 5.97756 6.54021C6.82424 6.86603 7.54865 7.4482 8.05008 8.20579C8.55151 8.96339 8.80506 9.85877 8.77549 10.7675C8.74592 11.6762 8.43468 12.5531 7.88506 13.2763C7.33543 13.9996 6.57472 14.5331 5.70865 14.8029C4.84258 15.0727 3.91418 15.0653 3.0525 14.7818C2.19082 14.4982 1.43866 13.9525 0.900577 13.2207C0.362491 12.4888 0.0652087 11.607 0.0500507 10.6979C-0.107951 9.16282 0.10946 7.61222 0.683481 6.18026C1.42789 4.29768 2.88303 2.24509 5.53645 0.25001ZM16.7586 0.25001C16.8896 0.151515 17.0387 0.0798508 17.1973 0.0391097C17.356 -0.00163151 17.521 -0.010652 17.6831 0.0125636C17.8452 0.0357793 18.0012 0.0907762 18.1421 0.174414C18.283 0.258052 18.4061 0.368694 18.5043 0.500021C18.6026 0.631348 18.674 0.78079 18.7147 0.939813C18.7553 1.09884 18.7643 1.26433 18.7412 1.42684C18.718 1.58935 18.6632 1.74569 18.5797 1.88695C18.4963 2.0282 18.3859 2.1516 18.2549 2.25009C16.3048 3.7164 15.1875 5.14271 14.5479 6.38776C15.4262 6.16111 16.3531 6.2144 17.1997 6.54021C18.0464 6.86603 18.7708 7.4482 19.2723 8.20579C19.7737 8.96339 20.0273 9.85877 19.9977 10.7675C19.9681 11.6762 19.6569 12.5531 19.1072 13.2763C18.5576 13.9996 17.7969 14.5331 16.9308 14.8029C16.0648 15.0727 15.1364 15.0653 14.2747 14.7818C13.413 14.4982 12.6609 13.9525 12.1228 13.2207C11.5847 12.4888 11.2874 11.607 11.2722 10.6979C11.1142 9.16282 11.3316 7.61222 11.9057 6.18026C12.6513 4.29768 14.1052 2.24509 16.7586 0.25001Z" fill="#FAFAFA"/>
              </svg>
            </div>
            <h3 
              className="text-white"
              style={{
                fontFamily: 'Sora',
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
          
          <div className="flex flex-col flex-1" style={{ gap: '16px' }}>
            <p 
              className="text-[#E9EAEB]"
              style={{
                fontFamily: 'Poppins',
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
              className="text-white"
              style={{
                fontFamily: 'Poppins',
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