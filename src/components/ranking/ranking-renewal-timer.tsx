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
        <path
          d="M8 2H16M8 22H16M6 2V6.4C6 6.96 6 7.24 6.109 7.489C6.206 7.707 6.357 7.897 6.55 8.04C6.77 8.2 7.062 8.272 7.644 8.416L9 8.8C10.166 9.088 10.748 9.232 11.204 9.529C11.607 9.792 11.944 10.144 12.188 10.559C12.467 11.029 12.569 11.618 12.774 12.798L13.226 15.202C13.431 16.382 13.533 16.971 13.812 17.441C14.056 17.856 14.393 18.208 14.796 18.471C15.252 18.768 15.834 18.912 17 19.2L18.356 19.584C18.938 19.728 19.23 19.8 19.45 19.96C19.643 20.103 19.794 20.293 19.891 20.511C20 20.76 20 21.04 20 21.6V22H4V21.6C4 21.04 4 20.76 4.109 20.511C4.206 20.293 4.357 20.103 4.55 19.96C4.77 19.8 5.062 19.728 5.644 19.584L7 19.2C8.166 18.912 8.748 18.768 9.204 18.471C9.607 18.208 9.944 17.856 10.188 17.441C10.467 16.971 10.569 16.382 10.774 15.202L11.226 12.798C11.431 11.618 11.533 11.029 11.812 10.559C12.056 10.144 12.393 9.792 12.796 9.529C13.252 9.232 13.834 9.088 15 8.8L16.356 8.416C16.938 8.272 17.23 8.2 17.45 8.04C17.643 7.897 17.794 7.707 17.891 7.489C18 7.24 18 6.96 18 6.4V2H6Z"
          stroke="#C74228"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

