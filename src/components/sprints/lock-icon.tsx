import React from 'react';

interface LockIconProps {
  size?: number;
}

export const LockIcon: React.FC<LockIconProps> = ({ size = 56 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 56 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="0.499939" 
        y="0.5" 
        width="55" 
        height="55" 
        rx="27.5" 
        fill="#F66649" 
        fillOpacity="0.1"
      />
      <rect 
        x="0.499939" 
        y="0.5" 
        width="55" 
        height="55" 
        rx="27.5" 
        stroke="url(#paint0_linear_15659_33749)"
      />
      <foreignObject 
        x="-8.00006" 
        y="-8" 
        width="72" 
        height="72"
      >
        <div 
          style={{
            backdropFilter: 'blur(16px)',
            clipPath: 'url(#bgblur_0_15659_33749_clip_path)',
            height: '100%',
            width: '100%',
            background: 'rgba(246, 102, 73, 0.05)'
          }}
        />
      </foreignObject>
      <g data-figma-bg-blur-radius="16">
        <path 
          d="M7.99994 28C7.99994 16.9543 16.9542 8 27.9999 8C39.0456 8 47.9999 16.9543 47.9999 28C47.9999 39.0457 39.0456 48 27.9999 48C16.9542 48 7.99994 39.0457 7.99994 28Z" 
          fill="#C74228"
        />
        <path 
          d="M32.1666 26.3333V24.6667C32.1666 22.3655 30.3011 20.5 27.9999 20.5C25.6987 20.5 23.8333 22.3655 23.8333 24.6667V26.3333M27.9999 30.0833V31.75M25.3333 35.5H30.6666C32.0667 35.5 32.7668 35.5 33.3016 35.2275C33.772 34.9878 34.1544 34.6054 34.3941 34.135C34.6666 33.6002 34.6666 32.9001 34.6666 31.5V30.3333C34.6666 28.9332 34.6666 28.2331 34.3941 27.6984C34.1544 27.228 33.772 26.8455 33.3016 26.6058C32.7668 26.3333 32.0667 26.3333 30.6666 26.3333H25.3333C23.9331 26.3333 23.2331 26.3333 22.6983 26.6058C22.2279 26.8455 21.8454 27.228 21.6057 27.6984C21.3333 28.2331 21.3333 28.9332 21.3333 30.3333V31.5C21.3333 32.9001 21.3333 33.6002 21.6057 34.135C21.8454 34.6054 22.2279 34.9878 22.6983 35.2275C23.2331 35.5 23.9331 35.5 25.3333 35.5Z" 
          stroke="white" 
          strokeWidth="1.67" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath 
          id="bgblur_0_15659_33749_clip_path" 
          transform="translate(8.00006 8)"
        >
          <path d="M7.99994 28C7.99994 16.9543 16.9542 8 27.9999 8C39.0456 8 47.9999 16.9543 47.9999 28C47.9999 39.0457 39.0456 48 27.9999 48C16.9542 48 7.99994 39.0457 7.99994 28Z"/>
        </clipPath>
        <linearGradient 
          id="paint0_linear_15659_33749" 
          x1="27.9999" 
          y1="0" 
          x2="27.9999" 
          y2="56" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F66649" stopOpacity="1"/>
          <stop offset="0.5" stopColor="#F66649" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#F66649" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
