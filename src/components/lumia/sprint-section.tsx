import { useState } from "react";
import { X } from "@untitledui/icons";
import { Button } from "@/components/ui/button";

export const SprintSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuote, setShowQuote] = useState(true);

  return (
    <div className="space-y-6">
      {/* Card principal da sprint */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h2 className="text-white text-lg font-medium">Acompanhe sua Sprint</h2>
              <p className="text-gray-300 text-sm">
                Finalize todas as metas pendentes, falta pouco para a próxima sprint!
              </p>
            </div>
          </div>
          <Button
            color="tertiary"
            size="md"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-300"
          >
            <span className="mr-2">⤢</span>
            Expandir aba
          </Button>
        </div>

        {/* Barra de progresso */}
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm">88% concluído</span>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-lg">🚀</span>
            </div>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full" 
              style={{ width: '88%' }}
            ></div>
          </div>
        </div>

        {/* Objetivo atual */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-600 rounded"></div>
          </div>
          <div className="flex-1">
            <p className="text-gray-300 text-sm">Seu objetivo atual:</p>
            <p className="text-orange-500 font-semibold">INSS - Analista de seguro social</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-600 rounded-lg px-4 py-2">
              <span className="text-white text-sm">Próxima Sprint</span>
            </div>
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Card de frase do dia */}
      {showQuote && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative">
          <Button
            color="tertiary"
            size="lg"
            onClick={() => setShowQuote(false)}
            className="absolute top-2 right-2 w-8 h-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 text-white">
              <span className="text-2xl">"</span>
            </div>
            <h3 className="text-white text-lg font-medium">Frase do dia</h3>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-300 text-base leading-relaxed">
              "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe."
            </p>
            <p className="text-white font-medium">- Steve Jobs</p>
          </div>
        </div>
      )}
    </div>
  );
};
