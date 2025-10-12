import React from 'react';

interface StatCardProps {
  icon: (props: any) => JSX.Element;
  title: string;
  value: string;
  change?: string | null;
  changeText?: string | null;
  showChange: boolean;
  isMobile?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  change,
  changeText,
  showChange,
  isMobile = false
}) => {
  const cardStyle = isMobile ? {
    background: '#252532',
    borderColor: '#2C2C45',
    borderRadius: '8px',
    padding: '16px',
    width: '240px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px'
  } : {
    background: 'rgba(37, 37, 50, 1)',
    borderColor: '#2C2C45',
    borderRadius: '12px',
    padding: '16px 20px 20px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px'
  };

  const iconSize = isMobile ? { width: '32px', height: '32px' } : { width: '40px', height: '40px' };
  
  const iconBg = isMobile 
    ? { background: '#333346', backdropFilter: 'blur(16px)' }
    : { background: 'rgba(51, 51, 70, 0.8)' };

  return (
    <div className="rounded-xl border shadow-lg flex-shrink-0" style={cardStyle}>
      {/* Header com ícone e mudança */}
      <div className="flex items-center justify-between" style={{ gap: '24px' }}>
        <div 
          className="rounded-full flex items-center justify-center text-white" 
          style={{ ...iconSize, ...iconBg }}
        >
          <Icon className="text-white" style={{ width: '20px', height: '20px' }} />
        </div>
        
        {showChange && change && (
          <div className="flex flex-col items-end" style={{ gap: '2px' }}>
            <div className="flex items-center" style={{ gap: '2px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 20V4M12 4L6 10M12 4L18 10"
                  stroke="#47CD89"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ 
                fontFamily: 'var(--font-sora)', 
                fontWeight: 600, 
                fontSize: isMobile ? '14px' : '12px', 
                lineHeight: isMobile ? '1.4285714285714286em' : '1.5em', 
                color: '#26BD6C',
                textAlign: 'center'
              }}>
                {change}
              </span>
            </div>
            {changeText && (
              <span style={{ 
                fontFamily: 'var(--font-sora)', 
                fontWeight: 400, 
                fontSize: '10px', 
                lineHeight: '1.3em', 
                color: '#F7F7F7',
                textAlign: 'left'
              }}>
                {changeText}
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Conteúdo principal */}
      <div className="flex items-end justify-between" style={{ gap: '8px' }}>
        <div className="flex flex-col" style={{ gap: '16px', flex: 1 }}>
          <div className="flex flex-col" style={{ gap: '4px' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-sora)', 
              fontWeight: 400, 
              fontSize: '12px', 
              lineHeight: '1.5em', 
              color: '#E9EAEB',
              textAlign: 'left'
            }}>
              {title}
            </h3>
            <p style={{ 
              fontFamily: 'var(--font-sora)', 
              fontWeight: 400, 
              fontStyle: 'normal',
              fontSize: '24px', 
              lineHeight: '1.25em', 
              letterSpacing: '0%',
              color: '#F7F7F7',
              textAlign: 'left'
            }}>
              {value}
            </p>
          </div>
        </div>
        
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#FFFFFF' }}>
          <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

