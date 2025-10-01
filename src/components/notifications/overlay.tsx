import React from 'react';

export interface OverlayProps {
  onClick?: () => void;
  leftOffset?: number;
  backgroundColor?: string;
  zIndex?: number;
}

export const Overlay: React.FC<OverlayProps> = ({
  onClick,
  leftOffset = 0,
  backgroundColor = 'rgba(0, 0, 0, 0.5)',
  zIndex = 999
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'fixed',
        top: 0,
        left: `${leftOffset}px`,
        right: 0,
        bottom: 0,
        backgroundColor,
        zIndex
      }}
    />
  );
};

