import React from 'react';

interface SprintInfoPanelProps {
  progress: number;
  startDate: string;
  endDate: string;
  duration: string;
  timePerGoal: string;
}

export const SprintInfoPanel: React.FC<SprintInfoPanelProps> = ({
  progress,
  startDate,
  endDate,
  duration,
  timePerGoal
}) => {
  return (
    <div
      className="flex flex-col"
      style={{
        width: '372px',
        height: 'fit-content',
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '8px',
        padding: '24px',
        gap: '20px',
      }}
    >
      {/* Header */}
      <div className="flex items-center" style={{ gap: '12px', alignSelf: 'stretch' }}>
        {/* Horizontal bar chart icon */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M13 10V6.1C13 5.53995 13 5.25992 12.891 5.04601C12.7951 4.85785 12.6422 4.70487 12.454 4.60899C12.2401 4.5 11.9601 4.5 11.4 4.5H1M18 16V12.1C18 11.5399 18 11.2599 17.891 11.046C17.7951 10.8578 17.6422 10.7049 17.454 10.609C17.2401 10.5 16.9601 10.5 16.4 10.5H1M1 1L1 23M1 20.5H20.4C20.9601 20.5 21.2401 20.5 21.454 20.391C21.6422 20.2951 21.7951 20.1422 21.891 19.954C22 19.7401 22 19.4601 22 18.9V17.1C22 16.5399 22 16.2599 21.891 16.046C21.7951 15.8578 21.6422 15.7049 21.454 15.609C21.2401 15.5 20.9601 15.5 20.4 15.5L1 15.5L1 20.5Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        <h3
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '1.56em',
            color: '#FFFFFF',
          }}
        >
          Informações gerais da sprint
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-col" style={{ gap: '16px' }}>
        {/* Progress Section */}
        <div
          className="flex items-center justify-center"
          style={{
            background: '#202030',
            border: '1px solid #2C2C45',
            borderRadius: '8px',
            padding: '16px',
            gap: '16px',
          }}
        >
          <div className="flex items-center" style={{ gap: '8px', flex: 1 }}>
            {/* Arrows right icon */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1.66656 6.04167H13.1249M13.1249 6.04167L8.95825 10.2083M13.1249 6.04167L8.95825 1.875M1.66656 16.4583H18.3332M18.3332 16.4583L14.1666 20.625M18.3332 16.4583L14.1666 12.2917" 
                stroke="white" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F0F0F1',
              }}
            >
              Progresso atual:
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex items-center" style={{ gap: '8px', width: '125px' }}>
            <div
              style={{
                flex: 1,
                height: '8px',
                background: '#373A41',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: '#F66649',
                  borderRadius: '8px',
                }}
              />
            </div>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#FFFFFF',
              }}
            >
              {progress}%
            </span>
          </div>
        </div>

        {/* Start Date */}
        <div
          className="flex items-center justify-between"
          style={{
            background: '#202030',
            border: '1px solid #2C2C45',
            borderRadius: '8px',
            padding: '16px',
            gap: '12px',
          }}
        >
          <div className="flex items-center" style={{ gap: '8px' }}>
            {/* Calendar icon */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M6.67 1.67V5M13.33 1.67V5M4.17 9.17H15.83M3.33 18.33H16.67C17.11 18.33 17.54 18.16 17.85 17.85C18.16 17.54 18.33 17.11 18.33 16.67V4.17C18.33 3.73 18.16 3.3 17.85 2.99C17.54 2.68 17.11 2.51 16.67 2.51H3.33C2.89 2.51 2.46 2.68 2.15 2.99C1.84 3.3 1.67 3.73 1.67 4.17V16.67C1.67 17.11 1.84 17.54 2.15 17.85C2.46 18.16 2.89 18.33 3.33 18.33Z" 
                stroke="#FFFFFF" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F0F0F1',
              }}
            >
              Iniciado em:
            </span>
          </div>
          
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#FFFFFF',
            }}
          >
            {startDate}
          </span>
        </div>

        {/* End Date */}
        <div
          className="flex items-center justify-between"
          style={{
            background: '#202030',
            border: '1px solid #2C2C45',
            borderRadius: '8px',
            padding: '16px',
            gap: '12px',
          }}
        >
          <div className="flex items-center" style={{ gap: '8px' }}>
            {/* Calendar-time icon */}
            <svg 
              width="19" 
              height="19" 
              viewBox="0 0 19 19" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8.82917 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V4.83333C1.5 4.39131 1.67559 3.96738 1.98816 3.65482C2.30072 3.34226 2.72464 3.16667 3.16667 3.16667H13.1667C13.6087 3.16667 14.0326 3.34226 14.3452 3.65482C14.6577 3.96738 14.8333 4.39131 14.8333 4.83333V8.16667H1.5M11.5 1.5V4.83333M4.83333 1.5V4.83333M14 12.7467V14L14.8333 14.8333M10.6667 14C10.6667 14.8841 11.0179 15.7319 11.643 16.357C12.2681 16.9821 13.1159 17.3333 14 17.3333C14.8841 17.3333 15.7319 16.9821 16.357 16.357C16.9821 15.7319 17.3333 14.8841 17.3333 14C17.3333 13.1159 16.9821 12.2681 16.357 11.643C15.7319 11.0179 14.8841 10.6667 14 10.6667C13.1159 10.6667 12.2681 11.0179 11.643 11.643C11.0179 12.2681 10.6667 13.1159 10.6667 14Z" 
                stroke="white" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F0F0F1',
              }}
            >
              Estimativa para finalizar:
            </span>
          </div>
          
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#FFFFFF',
            }}
          >
            {endDate}
          </span>
        </div>

        {/* Duration */}
        <div
          className="flex items-center justify-between"
          style={{
            background: '#202030',
            border: '1px solid #2C2C45',
            borderRadius: '8px',
            padding: '16px',
            gap: '12px',
          }}
        >
          <div className="flex items-center" style={{ gap: '8px' }}>
            {/* Arrows right icon */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1.66656 6.04167H13.1249M13.1249 6.04167L8.95825 10.2083M13.1249 6.04167L8.95825 1.875M1.66656 16.4583H18.3332M18.3332 16.4583L14.1666 20.625M18.3332 16.4583L14.1666 12.2917" 
                stroke="white" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F0F0F1',
              }}
            >
              Duração total da sprint:
            </span>
          </div>
          
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#FFFFFF',
            }}
          >
            {duration}
          </span>
        </div>

        {/* Time per Goal */}
        <div
          className="flex items-center justify-between"
          style={{
            background: '#202030',
            border: '1px solid #2C2C45',
            borderRadius: '8px',
            padding: '16px',
            gap: '12px',
          }}
        >
          <div className="flex items-center" style={{ gap: '8px' }}>
            {/* Clock icon */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M10 18.33C14.6 18.33 18.33 14.6 18.33 10C18.33 5.4 14.6 1.67 10 1.67C5.4 1.67 1.67 5.4 1.67 10C1.67 14.6 5.4 18.33 10 18.33Z" 
                stroke="#FFFFFF" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M10 5V10L13.33 11.67" 
                stroke="#FFFFFF" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F0F0F1',
              }}
            >
              Tempo gasto por meta:
            </span>
          </div>
          
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#FFFFFF',
            }}
          >
            {timePerGoal}
          </span>
        </div>
      </div>
    </div>
  );
};
