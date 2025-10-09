import React from 'react';

interface TimeLabelProps {
  time: string;
  isHighlighted?: boolean;
  isFirst?: boolean; // Para a primeira célula (1 AM)
}

export const TimeLabel: React.FC<TimeLabelProps> = ({ time, isHighlighted = false, isFirst = false }) => {
  // Calcular posição X baseada no texto (conforme Figma)
  const getTextPositionX = (timeText: string) => {
    switch (timeText) {
      case '8 AM': return '33px';
      case '9 AM': return '33px';
      case '10 AM': return '27px';
      case '11 AM': return '31px';
      case '12 PM': return '30px';
      case '1 PM': return '37px';
      case '2 PM': return '35px';
      case '3 PM': return '35px';
      case '4 PM': return '34px';
      case '5 PM': return '34px';
      case '10 PM': return '27px'; // Mesma posição do 10 AM
      case '11 PM': return '31px'; // Mesma posição do 11 AM
      default: return '33px'; // Posição padrão
    }
  };

  // Calcular largura baseada no texto (conforme Figma)
  const getTextWidth = (timeText: string) => {
    switch (timeText) {
      case '10 AM': 
      case '10 PM': return '37px'; // Mesma largura
      case '11 AM': 
      case '11 PM': return '33px'; // Mesma largura
      case '12 PM': return '34px';
      case '1 PM': return '27px';
      case '2 PM': 
      case '3 PM': return '29px';
      case '4 PM': 
      case '5 PM': return '30px';
      default: return '31px';
    }
  };

  return (
    <div
      style={{
        width: '72px',
        height: '96px',
        display: 'flex',
        flexDirection: 'column',
        background: isHighlighted ? '#13161B' : '#191923',
        border: '1px solid',
        borderColor: isHighlighted ? '#22262F' : '#2C2C45',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none', // Sem borda direita
        borderBottom: 'none',
        position: 'relative',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '-8px',
          left: getTextPositionX(time),
          width: getTextWidth(time),
          height: '18px',
          fontFamily: isHighlighted ? 'Inter' : 'Sora',
          fontSize: '12px',
          fontWeight: isHighlighted ? 500 : 400,
          lineHeight: '1.5em',
          color: '#94979C',
          textAlign: 'right',
        }}
      >
        {time}
      </span>
    </div>
  );
};

