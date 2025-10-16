import React from 'react';
import { UserMenu } from '@/components/lumia/user-menu';

interface SprintsPageHeaderProps {
  title?: string;
}

export const SprintsPageHeader: React.FC<SprintsPageHeaderProps> = ({ title = 'Sprints' }) => {
  return (
    <header
      className="flex items-center justify-between flex-shrink-0"
      style={{
        padding: '24px 32px',
        background: '#191923',
        borderBottom: '1px solid #272737',
      }}
    >
      <h1
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '1.56em',
          color: '#FFFFFF',
        }}
      >
        {title}
      </h1>
      <UserMenu />
    </header>
  );
};

