import { useState } from "react";

export const StudyCalendar = () => {
  const [activeStatus] = useState("Ativo");

  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

  // Dados simulados para o calendário
  const studyData = Array.from({ length: 7 }, () => 
    Array.from({ length: 24 }, () => Math.random() > 0.3)
  );

  return (
    <div 
      className="rounded-xl border shadow-lg w-full"
      style={{
        background: 'rgba(37, 37, 50, 1)',
        borderColor: '#2C2C45',
        borderRadius: '8px',
        padding: '20px 24px'
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div 
            className="rounded-lg flex items-center justify-center"
            style={{
              width: '24px',
              height: '24px',
              background: '#FFFFFF'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 21C9 21.5523 9.44772 22 10 22H14C14.5523 22 15 21.5523 15 21V20H9V21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C8.13401 2 5 5.13401 5 9C5 11.2091 5.79086 13.2091 7 14.6569V17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17V14.6569C18.2091 13.2091 19 11.2091 19 9C19 5.13401 15.866 2 12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <h3 
              className="text-white"
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.26em'
              }}
            >
              Consistência nos estudos
            </h3>
            <div 
              className="rounded-full flex items-center justify-center"
              style={{
                width: '16px',
                height: '16px',
                background: 'transparent'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                  stroke="currentColor"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17H12.01"
                  stroke="currentColor"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div 
              className="rounded shadow-sm"
              style={{
                width: '32px',
                height: '8px',
                background: activeStatus === "Ativo" ? '#C74228' : '#414151'
              }}
            ></div>
            <span 
              className="text-gray-300"
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 400,
                fontSize: '14px'
              }}
            >
              Ativo
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="rounded shadow-sm"
              style={{
                width: '32px',
                height: '8px',
                background: '#414151'
              }}
            ></div>
            <span 
              className="text-gray-300"
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 400,
                fontSize: '14px'
              }}
            >
              Inativo
            </span>
          </div>
        </div>
      </div>

      {/* Calendário */}
      <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
        {/* Cabeçalho dos dias */}
        <div className="flex" style={{ gap: '6px' }}>
          <div style={{ width: '25px' }}></div>
          {days.map((day, index) => (
            <div key={index} className="flex-1 text-center">
              <span 
                className={`${
                  index === 0 ? "text-white" : "text-white"
                }`}
                style={{
                  fontFamily: 'Inter' /* MIGRATED */,
                  fontWeight: 400,
                  fontSize: '10px',
                  lineHeight: '1.6em',
                  textAlign: index === 0 ? 'left' : 'right'
                }}
              >
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Grid de horas e status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {hours.map((hour, hourIndex) => (
            <div key={hourIndex} className="flex" style={{ gap: '4px' }}>
              <div style={{ width: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span 
                  className="text-white"
                  style={{
                    fontFamily: 'Inter' /* MIGRATED */,
                    fontWeight: 400,
                    fontSize: '10px',
                    lineHeight: '1.6em'
                  }}
                >
                  {hour}
                </span>
              </div>
              {studyData.map((dayData, dayIndex) => (
                <div
                  key={dayIndex}
                  className="flex-1 rounded"
                  style={{
                    height: '24px',
                    background: dayData[hourIndex] ? '#C74228' : '#414151',
                    borderRadius: '6px'
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};