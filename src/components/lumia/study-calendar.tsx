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
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-sm">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-white text-lg font-medium">Consistência nos estudos</h3>
            <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-xs text-gray-300">?</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-2 rounded shadow-sm ${activeStatus === "Ativo" ? "bg-orange-500" : "bg-gray-600"}`}></div>
            <span className="text-gray-300 text-sm">Ativo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-2 rounded bg-gray-600 shadow-sm"></div>
            <span className="text-gray-300 text-sm">Inativo</span>
          </div>
        </div>
      </div>

      {/* Calendário */}
      <div className="space-y-4">
        {/* Cabeçalho dos dias */}
        <div className="flex gap-1">
          <div className="w-6"></div>
          {days.map((day, index) => (
            <div key={index} className="flex-1 text-center">
              <span className={`text-xs ${index === 0 ? "text-white" : "text-gray-300"}`}>
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Grid de horas e status */}
        <div className="space-y-1">
          {hours.map((hour, hourIndex) => (
            <div key={hourIndex} className="flex gap-1">
              <div className="w-6 flex items-center justify-center">
                <span className="text-xs text-gray-300">{hour}</span>
              </div>
              {studyData.map((dayData, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`flex-1 h-6 rounded ${
                    dayData[hourIndex] 
                      ? "bg-orange-500" 
                      : "bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
