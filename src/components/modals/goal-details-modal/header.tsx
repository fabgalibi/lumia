import React from 'react';
import { Expand04 } from "@untitledui/icons";
import { X, Minimize2 } from "lucide-react";
import { Timer } from "../../lumia/timer";
import type { Goal } from '@/types/goal';

interface HeaderProps {
  goal: Goal;
  isFullscreen: boolean;
  onClose: () => void;
  onToggleFullscreen: () => void;
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'pendente':
      return 'Meta pendente';
    case 'concluido':
      return 'Meta concluída';
    default:
      return 'Meta pendente';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pendente':
      return '#F79009';
    case 'concluido':
      return '#10B981';
    default:
      return '#6B7280';
  }
};

export const GoalDetailsHeader: React.FC<HeaderProps> = ({
  goal,
  isFullscreen,
  onClose,
  onToggleFullscreen
}) => {
  return (
    <div 
      className={`flex items-center ${isFullscreen ? 'flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-16' : 'flex-row'}`}
      style={{
        padding: isFullscreen ? '12px 16px sm:16px lg:24px' : '24px 24px 16px 24px',
        background: '#252532',
        borderBottom: '1.5px solid #272737',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        flexShrink: 0,
        gap: '16px'
      }}
    >
      <div className="flex flex-col flex-1" style={{ gap: '4px' }}>
        <h2 
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '1.5555555555555556em',
            color: '#F7F7F7'
          }}
        >
          {goal.discipline}
        </h2>
        <div 
          className="flex items-center"
          style={{
            padding: '2px 0px',
            gap: '6px'
          }}
        >
          <div 
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: getStatusColor(goal.status),
              flexShrink: 0
            }}
          />
          <span 
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: getStatusColor(goal.status)
            }}
          >
            {getStatusText(goal.status)}
          </span>
        </div>
      </div>
      
      {/* Cronômetro - só aparece em tela cheia e se a meta não estiver concluída */}
      {isFullscreen && goal.status !== 'concluido' && (
        <Timer 
          showControls={true}
          className="w-full sm:w-auto"
        />
      )}

      <div className={`flex items-center ${isFullscreen ? 'flex-col sm:flex-row w-full sm:w-auto' : 'flex-row'}`} style={{ gap: '8px' }}>
        {isFullscreen ? (
          <>
            <button
              onClick={onToggleFullscreen}
              className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              style={{
                padding: '8px 12px',
                background: 'transparent',
                border: 'none',
                borderRight: '1px solid #373A41',
                borderRadius: '8px 0px 0px 8px',
                gap: '6px'
              }}
            >
              <Minimize2 style={{ width: '20px', height: '20px', color: '#F0F0F1', flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#F0F0F1',
                  flexShrink: 0
                }}
              >
                Minimizar tela
              </span>
            </button>
            
            <button
              onClick={onClose}
              className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              style={{
                padding: '8px 12px',
                background: 'transparent',
                border: 'none',
                borderRadius: '0px 8px 8px 0px'
              }}
            >
              <X style={{ width: '20px', height: '20px', color: '#F0F0F1' }} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onToggleFullscreen}
              className="hidden lg:flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
              style={{
                gap: '6px',
                padding: '10px 12px',
                background: 'transparent',
                border: '1px solid #22262F',
                borderRadius: '8px'
              }}
            >
              <Expand04 style={{ width: '20px', height: '20px', color: '#F0F0F1' }} />
              <div 
                style={{
                  padding: '0px 2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#F0F0F1'
                  }}
                >
                  Expandir tela
                </span>
              </div>
            </button>
            
            <button
              onClick={onClose}
              className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
              style={{
                padding: '8px 12px 8px 20px',
                background: 'transparent',
                border: 'none',
                borderLeft: '1px solid #373A41',
                borderRadius: '0px 8px 8px 0px',
                width: '52px',
                height: '44px'
              }}
            >
              <X style={{ width: '20px', height: '20px', color: '#F0F0F1' }} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
