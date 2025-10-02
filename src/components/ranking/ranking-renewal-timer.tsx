import React, { useState, useEffect, useMemo } from 'react';

export interface RankingRenewalTimerProps {
  daysFromNow?: number;
}

export const RankingRenewalTimer: React.FC<RankingRenewalTimerProps> = ({
  daysFromNow = 10 // 10 dias padrão
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calcular target date apenas uma vez
  const targetTime = useMemo(() => {
    return Date.now() + daysFromNow * 24 * 60 * 60 * 1000;
  }, [daysFromNow]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const formatTime = () => {
    return `${timeLeft.days}d ${String(timeLeft.hours).padStart(2, '0')}h ${String(
      timeLeft.minutes
    ).padStart(2, '0')}m ${String(timeLeft.seconds).padStart(2, '0')}s`;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 0'
      }}
    >
      {/* Ícone de ampulheta */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g transform="translate(4, 2)">
          <path 
            d="M2 2H0V0H16V2H14V4C14 5.615 13.184 6.915 12.156 7.977C11.453 8.703 10.598 9.372 9.731 10C10.598 10.628 11.453 11.297 12.156 12.023C13.184 13.085 14 14.385 14 16V18H16V20H0V18H2V16C2 14.385 2.816 13.085 3.844 12.023C4.547 11.297 5.402 10.628 6.269 10C5.402 9.372 4.547 8.703 3.844 7.977C2.816 6.915 2 5.615 2 4V2ZM4 2V4C4 4.685 4.26 5.335 4.771 6H11.229C11.739 5.335 12 4.685 12 4V2H4ZM8 11.222C6.955 11.96 6.008 12.663 5.281 13.414C5.10028 13.5997 4.93002 13.7954 4.771 14H11.229C11.07 13.7954 10.8997 13.5997 10.719 13.414C9.992 12.663 9.045 11.96 8 11.222Z" 
            fill="#C74228"
          />
        </g>
      </svg>

      {/* Texto */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#CECFD2'
          }}
        >
          O ranking semanal irá reiniciar em
        </span>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#FFFFFF'
          }}
        >
          {formatTime()}
        </span>
      </div>
    </div>
  );
};

