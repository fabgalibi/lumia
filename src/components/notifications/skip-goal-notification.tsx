import React, { useEffect, useState } from 'react';
import { Text, colors } from '@/components/ui';

interface SkipGoalNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  goalName: string;
}

export const SkipGoalNotification: React.FC<SkipGoalNotificationProps> = ({
  isVisible,
  onClose,
  goalName
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      // Auto-hide após 5 segundos
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-[110] pointer-events-none">
      <div 
        className={`bg-[#212130] border border-white/12 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ width: '504px' }}
      >
        {/* Background gradient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(212deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.02) 58%)'
          }}
        />
        
        {/* Content */}
        <div className="relative flex items-stretch gap-4 p-4">
          {/* Close button */}
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => onClose(), 300);
            }}
            className="absolute top-2 right-2 p-2 hover:bg-[#2D2D3B] rounded-lg transition-colors pointer-events-auto"
            style={{ width: '36px', height: '36px' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#85888E"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Icon */}
          <div className="flex-shrink-0">
            <div 
              className="relative flex items-center justify-center rounded-full"
              style={{ width: '48px', height: '48px' }}
            >
              {/* Complete icon with circles and arrows */}
              <div 
                className="absolute inset-0"
                style={{ 
                  width: '38px', 
                  height: '38px',
                  top: '-9px',
                  left: '-9px'
                }}
              >
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.1">
                    <path d="M19 1C28.9411 1 37 9.05887 37 19C37 28.9411 28.9411 37 19 37C9.05887 37 1 28.9411 1 19C1 9.05887 9.05887 1 19 1Z" stroke="#94979C" strokeWidth="2"/>
                  </g>
                  <g opacity="0.3">
                    <path d="M19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32C11.8203 32 6 26.1797 6 19C6 11.8203 11.8203 6 19 6Z" stroke="#94979C" strokeWidth="2"/>
                  </g>
                  <path d="M19.8334 22.6973C19.8334 23.639 19.8334 24.1098 20.0236 24.3407C20.1889 24.5412 20.4382 24.6532 20.6979 24.6435C20.9968 24.6323 21.3487 24.3195 22.0526 23.6939L26.2123 19.9963C26.6 19.6517 26.7939 19.4793 26.8654 19.2758C26.9281 19.0971 26.9281 18.9024 26.8654 18.7237C26.7939 18.5202 26.6 18.3479 26.2123 18.0032L22.0526 14.3057C21.3487 13.6801 20.9968 13.3672 20.6979 13.3561C20.4382 13.3463 20.1889 13.4583 20.0236 13.6588C19.8334 13.8897 19.8334 14.3605 19.8334 15.3022V22.6973Z" stroke="#94979C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 22.6973C10.6667 23.639 10.6667 24.1098 10.857 24.3407C11.0222 24.5412 11.2716 24.6532 11.5312 24.6435C11.8302 24.6323 12.1821 24.3195 12.8859 23.6939L17.0456 19.9963C17.4334 19.6517 17.6272 19.4793 17.6987 19.2758C17.7614 19.0971 17.7614 18.9024 17.6987 18.7237C17.6272 18.5202 17.4334 18.3479 17.0456 18.0032L12.8859 14.3057C12.1821 13.6801 11.8302 13.3672 11.5312 13.3561C11.2716 13.3463 11.0222 13.4583 10.857 13.6588C10.6667 13.8897 10.6667 14.3605 10.6667 15.3022V22.6973Z" stroke="#94979C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 pr-8">
            <div className="space-y-1">
              <Text
                variant="caption"
                weight="semibold"
                color={colors.text.primary}
              >
                Sua meta foi pulada!
              </Text>
              <Text
                variant="caption"
                color={colors.text.secondary}
              >
                A meta "{goalName}" foi pulada dessa sprint.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
