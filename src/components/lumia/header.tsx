import { useState, useEffect } from "react";
import { X, SearchLg } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);

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

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime("00:00:00");
    setIsRunning(false);
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Button
            color="tertiary"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-orange-500"
          >
            <span className="text-orange-500 text-xl">☰</span>
          </Button>
          
          <div className="flex items-center gap-4">
            <h1 className="text-white text-lg font-medium">
              Bem-vindo de volta!<br />
              <span className="text-orange-500">Max William</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Cronômetro */}
          <div className="flex items-center gap-4 bg-gray-700 rounded-full px-3 py-2 border border-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-white font-semibold text-sm">{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                color="primary"
                size="sm"
                onClick={toggleTimer}
                className="w-8 h-8 p-0 rounded-full bg-orange-500 hover:bg-orange-600"
              >
                {isRunning ? (
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                ) : (
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                )}
              </Button>
              <Button
                color="tertiary"
                size="sm"
                onClick={resetTimer}
                className="w-8 h-8 p-0 rounded-full"
              >
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </Button>
            </div>
          </div>

          {/* Botão de download */}
          <Button
            color="primary"
            size="md"
            className="bg-orange-600 hover:bg-orange-700"
          >
            <span className="mr-2">📥</span>
            Baixar relatório
          </Button>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-orange-500 flex items-center justify-center">
            <span className="text-white text-lg">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
};
