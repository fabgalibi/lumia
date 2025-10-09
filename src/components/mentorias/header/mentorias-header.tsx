import React from 'react';
import { UserMenu } from '../../lumia/user-menu';
import { ViewTypeToggle } from './view-type-toggle';

interface MentoriasHeaderProps {
  viewType: 'month' | 'week' | 'day';
  onViewTypeChange: (type: 'month' | 'week' | 'day') => void;
}

export const MentoriasHeader: React.FC<MentoriasHeaderProps> = ({
  viewType,
  onViewTypeChange
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 32px',
        borderBottom: '1px solid #272737',
      }}
    >
      <h1
        style={{
          fontFamily: 'Sora',
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '1.56em',
          color: '#FFFFFF',
          margin: 0,
        }}
      >
        Mentorias
      </h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <ViewTypeToggle
          viewType={viewType}
          onViewTypeChange={onViewTypeChange}
        />

        <UserMenu />
      </div>
    </div>
  );
};

