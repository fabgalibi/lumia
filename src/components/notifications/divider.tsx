import React from 'react';

export interface DividerProps {
  color?: string;
  thickness?: string;
}

export const Divider: React.FC<DividerProps> = ({ 
  color = '#424257', 
  thickness = '1px' 
}) => {
  return (
    <div 
      style={{
        width: '100%',
        height: thickness,
        backgroundColor: color,
        flexShrink: 0
      }} 
    />
  );
};

