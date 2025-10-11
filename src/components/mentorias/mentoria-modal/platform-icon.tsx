import React from 'react';

interface PlatformIconProps {
  platform: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platform }) => {
  if (platform === 'Zoom') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#2D8CFF"/>
        <path
          d="M8 9L14 12L8 15V9Z"
          fill="white"
        />
      </svg>
    );
  }

  if (platform === 'Microsoft Teams') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" fill="#5059C9"/>
        <text x="12" y="16" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">T</text>
      </svg>
    );
  }

  // Google Meet (padrão)
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_14962_16844)">
        <path
          d="M10.7485 7.98646L12.6008 10.1496L15.0917 11.7758L15.525 8.00011L15.0917 4.30957L12.5531 5.73812L10.7485 7.98646Z"
          fill="#00832D"
        />
        <path
          d="M0 11.4245V14.642C0 15.3766 0.583656 15.9731 1.30284 15.9731H4.45194L5.10402 13.5421L4.45194 11.4245L2.29143 10.7583L0 11.4245Z"
          fill="#0066DA"
        />
        <path
          d="M4.45194 0L0 4.54855L2.29158 5.21319L4.45194 4.54855L5.09215 2.45983L4.45194 0Z"
          fill="#E94235"
        />
        <path
          d="M0 11.4258H4.45186V4.54834H0V11.4258Z"
          fill="#2684FC"
        />
        <path
          d="M17.9358 1.92608L15.0918 4.30985V11.776L17.9475 14.169C18.375 14.5112 19.0004 14.1994 19.0004 13.6441V2.44035C19.0004 1.87899 18.3601 1.56869 17.9357 1.92615"
          fill="#00AC47"
        />
        <path
          d="M10.7487 7.98633V11.4243H4.45215V15.9728H13.7892C14.5083 15.9728 15.0919 15.3764 15.0919 14.6417V11.7757L10.7487 7.98633Z"
          fill="#00AC47"
        />
        <path
          d="M13.7892 0H4.45215V4.54855H10.7487V7.9865L15.092 4.30954V1.33119C15.092 0.596398 14.5083 7.58294e-05 13.7892 7.58294e-05"
          fill="#FFBA00"
        />
      </g>
      <defs>
        <clipPath id="clip0_14962_16844">
          <rect width="19" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

