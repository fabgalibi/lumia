import React from 'react';
import { SprintDetail } from '@/types';
import { SprintBadges } from './sprint-badges';
import { SprintMetrics } from '../metrics';

interface SprintInfoCardProps {
  sprint: SprintDetail;
}

export const SprintInfoCard: React.FC<SprintInfoCardProps> = ({ sprint }) => {
  return (
    <div
      className="flex flex-col rounded-lg"
      style={{
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '8px',
        padding: '24px',
        width: '728px',
        gap: '24px',
      }}
    >
      {/* Top Section */}
      <div className="flex flex-row" style={{ gap: '24px' }}>
        <div className="flex flex-col flex-1" style={{ gap: '12px' }}>
          {/* Badges */}
          <SprintBadges status={sprint.status} goalsRemaining={sprint.goalsRemaining} />
          
          {/* Title */}
          <h2
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
            }}
          >
            {sprint.title}
          </h2>

          {/* Objective Section */}
          <div className="flex items-center" style={{ gap: '6px' }}>
            {/* Target Icon */}
            <span style={{ fontSize: '16px' }}>🎯</span>
            
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#FFFFFF',
              }}
            >
              Objetivo:
            </span>
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F48E2F',
              }}
            >
              {sprint.objective}
            </span>
          </div>
        </div>
        
        {/* Sprint Image */}
        <div 
          className="flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center"
          style={{
            width: '160px',
            height: '96px',
            borderRadius: '12px',
          }}
        >
          <img
            src="/images/sprint-prf.png"
            alt="Sprint"
            style={{
              maxWidth: '140px',
              maxHeight: '90px',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>

      {/* Divider Line */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: '#2C2C45',
        }}
      />

      {/* Metrics Section */}
      <SprintMetrics lastUpdate="20/09/2025 - 14:45 PM" />
    </div>
  );
};
