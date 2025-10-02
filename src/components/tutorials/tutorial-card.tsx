import React from 'react';
import { RotateCcw } from 'lucide-react';

export interface TutorialCardProps {
  title: string;
  thumbnail: string;
  progress: number;
  isWatching?: boolean;
  className?: string;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  thumbnail,
  progress,
  isWatching = false,
  className = ''
}) => {
  return (
    <div className={`bg-[#252532] rounded-lg overflow-hidden ${className}`}>
      {/* Thumbnail com progresso */}
      <div className="relative">
        <div 
          className="w-full h-28 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        
        {/* Barra de progresso */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#494955]">
          <div 
            className="h-full bg-[#FDB022] rounded-r-2xl"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-4 flex flex-col gap-4 flex-1">
        {/* Título */}
        <h3 className="text-white text-sm font-semibold leading-5">
          {title}
        </h3>
        
        {/* Botões de ação */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#562524] border border-[#C74228] rounded-lg px-3.5 py-2.5 text-[#F0F0F1] text-sm font-semibold leading-5 hover:bg-[#6A2D2A] transition-colors">
            {isWatching ? 'Retomar tutorial' : 'Assistir tutorial'}
          </button>
          <button className="w-10 h-10 bg-[#562524] border border-[#C74228] rounded-lg flex items-center justify-center hover:bg-[#6A2D2A] transition-colors">
            <RotateCcw className="w-4 h-4 text-[#CECFD2]" strokeWidth={1.67} />
          </button>
        </div>
      </div>
    </div>
  );
};
