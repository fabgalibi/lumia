import React from 'react';
import { Check } from 'lucide-react';

export interface TutorialCardCompleteProps {
  title: string;
  description: string;
  thumbnail: string;
  isWatched?: boolean;
  isPrimary?: boolean;
  className?: string;
}

export const TutorialCardComplete: React.FC<TutorialCardCompleteProps> = ({
  title,
  description,
  thumbnail,
  isWatched = false,
  isPrimary = false,
  className = ''
}) => {
  return (
    <div className={`bg-[#252532] rounded-lg overflow-hidden ${className}`}>
      {/* Thumbnail */}
      <div className="relative">
        <div 
          className="w-full h-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        
        {/* Badge "Assistido" */}
        {isWatched && (
          <div className="absolute top-3 right-3">
            <div className="bg-[#3B2A1A] border border-[#E98B39] rounded-full px-2 py-1 flex items-center gap-1">
              <Check className="w-3 h-3 text-[#E98B39]" strokeWidth={1} />
              <span className="text-[#E98B39] text-xs font-medium leading-4">
                Assistido
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Conteúdo */}
      <div className="p-4 flex flex-col gap-4 flex-1">
        {/* Título e descrição */}
        <div className="flex flex-col gap-1.5 flex-1">
          <h3 className="text-white text-sm font-semibold leading-5">
            {title}
          </h3>
          <p className="text-white text-sm font-normal leading-5">
            {description}
          </p>
        </div>
        
        {/* Botão de ação */}
        <button 
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm font-semibold leading-5 transition-colors ${
            isPrimary
              ? 'bg-[#C74228] text-white hover:bg-[#D9542E]'
              : 'bg-[#562524] border border-[#C74228] text-[#F0F0F1] hover:bg-[#6A2D2A]'
          }`}
        >
          {isWatched ? 'Assistir novamente' : 'Assistir tutorial'}
        </button>
      </div>
    </div>
  );
};
