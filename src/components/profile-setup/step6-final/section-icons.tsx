import React from 'react';

interface SectionIconProps {
  children: React.ReactNode;
}

const SectionIcon: React.FC<SectionIconProps> = ({ children }) => (
  <div
    style={{
      width: '32px',
      height: '32px',
      borderRadius: '16px',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
      border: '1px solid #93370D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}
  >
    <div
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '12px',
        backgroundColor: '#DC6803',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '4px',
        left: '4px'
      }}
    >
      {children}
    </div>
  </div>
);

export const StudyAreaIcon = () => (
  <SectionIcon>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66667 2.66667H13.3333C14.0667 2.66667 14.6667 3.26667 14.6667 4V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93333 13.3333 1.33333 12.7333 1.33333 12V4C1.33333 3.26667 1.93333 2.66667 2.66667 2.66667Z"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33333 4.66667H14.6667"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33333 2.66667V13.3333"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 2.66667V13.3333"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SectionIcon>
);

export const PreparationIcon = () => (
  <SectionIcon>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33337L1.33333 8.00004H6.66667L8 14.6667L14.6667 8.00004H9.33333L8 1.33337Z"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SectionIcon>
);

export const AvailabilityIcon = () => (
  <SectionIcon>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 2.66663H2.66667C1.93333 2.66663 1.33333 3.26663 1.33333 3.99996V13.3333C1.33333 14.0666 1.93333 14.6666 2.66667 14.6666H13.3333C14.0667 14.6666 14.6667 14.0666 14.6667 13.3333V3.99996C14.6667 3.26663 14.0667 2.66663 13.3333 2.66663Z"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 1.33337V3.99996"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33333 1.33337V3.99996"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33333 6.66663H14.6667"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 9.33337C10.6667 10.0667 10.0667 10.6667 9.33333 10.6667C8.6 10.6667 8 10.0667 8 9.33337C8 8.60004 8.6 8.00004 9.33333 8.00004C10.0667 8.00004 10.6667 8.60004 10.6667 9.33337Z"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SectionIcon>
);

export const TrajectoryIcon = () => (
  <SectionIcon>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 1.33337L1.33333 14.6667"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 5.33337V1.33337H10.6667"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33333 14.6667H1.33333V10.6667"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SectionIcon>
);

export const KnowledgeIcon = () => (
  <SectionIcon>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33333 6.66663L8 2.66663L14.6667 6.66663L8 10.6666L1.33333 6.66663Z"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33333 10.6666L8 14.6666L14.6667 10.6666"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8.66663V12.6666"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.66663V12.6666"
        stroke="#FFFFFF"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SectionIcon>
);
