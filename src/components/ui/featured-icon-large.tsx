import React from 'react';

export type FeaturedIconLargeType = 'plus' | 'lock' | 'star' | 'calendar' | 'alert-circle' | 'indent';

interface FeaturedIconLargeProps {
  icon: FeaturedIconLargeType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'warning' | 'success' | 'error' | 'info';
}

export const FeaturedIconLarge: React.FC<FeaturedIconLargeProps> = ({ 
  icon, 
  size = 'xl',
  color = 'warning'
}) => {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 88
  };

  const colorMap = {
    warning: {
      background: '#4E1D09',
      border: '#93370D',
      icon: '#DC6803'
    },
    success: {
      background: '#0F5132',
      border: '#198754',
      icon: '#20C997'
    },
    error: {
      background: '#842029',
      border: '#DC3545',
      icon: '#F56565'
    },
    info: {
      background: '#084298',
      border: '#0D6EFD',
      icon: '#3B82F6'
    }
  };

  const iconPaths = {
    plus: "M44 34.833V53.1663M34.8334 43.9997H53.1667",
    lock: "M8 5.33333V8M8 10.6667H8.00667M14.6667 8C14.6667 11.6819 11.6821 14.6667 8 14.6667C4.31808 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.31808 4.31808 1.33333 8 1.33333C11.6821 1.33333 14.6667 4.31808 14.6667 8Z",
    star: "M8 2.66667L9.33333 5.33333L12 6.66667L9.33333 8L8 10.6667L6.66667 8L4 6.66667L6.66667 5.33333L8 2.66667Z",
    calendar: "M12 7.11H4M9.78 3.56V5.33M6.22 3.56V5.33M6.13 12.44H9.87C10.6134 12.44 10.9868 12.44 11.272 12.2991C11.5229 12.1713 11.7269 11.9673 11.8547 11.7164C12 11.4312 12 11.0579 12 10.31V6.58C12 5.83 12 5.46 11.8547 5.17C11.7269 4.92 11.5229 4.72 11.272 4.59C10.9868 4.44 10.6134 4.44 9.87 4.44H6.13C5.38656 4.44 5.01323 4.44 4.72802 4.59C4.47706 4.72 4.27306 4.92 4.14533 4.17C4 5.46 4 5.83 4 6.58V10.31C4 11.06 4 11.43 4.14533 11.72C4.27306 11.97 4.47706 12.17 4.72802 12.3C5.01323 12.44 5.38656 12.44 6.13 12.44Z",
    'alert-circle': "M8.0002 5.33331V8M8.0002 10.6666H8.0068M14.6668 8C14.6668 11.6819 11.6821 14.6666 8.0002 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 8C1.3335 4.31808 4.31826 1.33331 8.0002 1.33331C11.6821 1.33331 14.6668 4.31808 14.6668 8Z",
    indent: "M14 6.16667H8M14 2.66666L8 2.66666M14 9.83333H2M14 13.3333H2M2.85333 1.97332L5.43111 3.90666C5.62411 4.0514 5.7206 4.12377 5.75511 4.2125C5.78533 4.29021 5.78533 4.37643 5.75511 4.45415C5.7206 4.54287 5.62411 4.61524 5.43111 4.75999L2.85333 6.69333C2.57868 6.89933 2.44135 7.00233 2.3264 6.99993C2.22637 6.99783 2.13256 6.95093 2.07088 6.87216C2 6.78163 2 6.60997 2 6.26665V2.39999C2 2.05667 2 1.88501 2.07088 1.79449C2.13256 1.71571 2.22637 1.66881 2.3264 1.66673C2.44135 1.66434 2.57868 1.76733 2.85333 1.97332Z"
  };

  const currentSize = sizeMap[size];
  const currentColor = colorMap[color];
  
  // SVG baseado no design exato fornecido (viewBox 88x88)

  return (
    <svg 
      width={currentSize} 
      height={currentSize} 
      viewBox="0 0 88 88" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask 
        id={`mask_${icon}_${size}_${color}`} 
        style={{maskType:"alpha"}} 
        maskUnits="userSpaceOnUse" 
        x="0" 
        y="0" 
        width="88" 
        height="88"
      >
        <rect width="88" height="88" fill={`url(#paint0_linear_${icon}_${size}_${color})`}/>
      </mask>
      
      <g mask={`url(#mask_${icon}_${size}_${color})`}>
        <circle 
          cx="44" 
          cy="44" 
          r="43.2143" 
          fill={currentColor.background} 
          stroke={currentColor.border}
          strokeWidth="1.57143"
        />
      </g>
      
      <rect 
        x="15.7143" 
        y="15.7144" 
        width="56.5714" 
        height="56.5714" 
        rx="28.2857" 
        fill={currentColor.icon}
      />
      
      <path 
        d={iconPaths[icon]} 
        stroke="white" 
        strokeWidth="2.09943" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      <defs>
        <linearGradient 
          id={`paint0_linear_${icon}_${size}_${color}`} 
          x1="44" 
          y1="0" 
          x2="44" 
          y2="88" 
          gradientUnits="userSpaceOnUse"
        >
          <stop/>
          <stop offset="1" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
