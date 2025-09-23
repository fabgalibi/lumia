import React from 'react';
import { BookOpen01, ZapFast, CalendarHeart02, Route, GraduationHat02 } from '@untitledui/icons';

interface SectionIconProps {
  children: React.ReactNode;
}

const SectionIcon: React.FC<SectionIconProps> = ({ children }) => (
  <div
    style={{
      width: '32px',
      height: '32px',
      borderRadius: '16px',
      position: 'relative'
    }}
  >
    {/* Background with gradient mask */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '16px',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
        border: '1px solid #93370D'
      }}
    />
    
    {/* Background color circle */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '16px',
        backgroundColor: '#4E1D09',
        border: '1px solid #93370D'
      }}
    />
    
    {/* Icon wrapper */}
    <div
      style={{
        position: 'absolute',
        top: '4px',
        left: '4px',
        width: '24px',
        height: '24px',
        borderRadius: '12px',
        backgroundColor: '#DC6803',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  </div>
);

export const StudyAreaIcon = () => (
  <SectionIcon>
    <BookOpen01
      width="16"
      height="16"
      stroke="#FFFFFF"
      strokeWidth="1.67"
      opacity="1"
    />
  </SectionIcon>
);

export const PreparationIcon = () => (
  <SectionIcon>
    <ZapFast
      width="16"
      height="16"
      stroke="#FFFFFF"
      strokeWidth="1.67"
      opacity="1"
    />
  </SectionIcon>
);

export const AvailabilityIcon = () => (
  <SectionIcon>
    <CalendarHeart02
      width="16"
      height="16"
      stroke="#FFFFFF"
      strokeWidth="1.67"
      opacity="1"
    />
  </SectionIcon>
);

export const TrajectoryIcon = () => (
  <SectionIcon>
    <Route
      width="16"
      height="16"
      stroke="#FFFFFF"
      strokeWidth="1.67"
      opacity="1"
    />
  </SectionIcon>
);

export const KnowledgeIcon = () => (
  <SectionIcon>
    <GraduationHat02
      width="16"
      height="16"
      stroke="#FFFFFF"
      strokeWidth="1.67"
      opacity="1"
    />
  </SectionIcon>
);
