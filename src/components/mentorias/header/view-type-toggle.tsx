import React from 'react';

interface ViewTypeToggleProps {
  viewType: 'month' | 'week' | 'day';
  onViewTypeChange: (type: 'month' | 'week' | 'day') => void;
}

export const ViewTypeToggle: React.FC<ViewTypeToggleProps> = ({
  viewType,
  onViewTypeChange
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <span
        style={{
          fontFamily: 'Sora',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '1.43em',
          color: '#F0F0F1',
        }}
      >
        Tipo de visualização:
      </span>
      <div
        style={{
          display: 'flex',
          background: '#2D2D45',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
        }}
      >
        {/* Calendar icon button (Month view) */}
        <button
          onClick={() => onViewTypeChange('month')}
          style={{
            padding: '8px',
            background: viewType === 'month' ? '#F66649' : 'transparent',
            border: viewType === 'month' ? '2px solid rgba(255, 255, 255, 0.12)' : 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            boxShadow: viewType === 'month' 
              ? '0px 1px 2px 0px rgba(255, 255, 255, 0)'
              : 'none',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.93319 17.5 5.23312 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23312 2.5 5.93319 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z" 
              stroke={viewType === 'month' ? '#FFFFFF' : '#CECFD2'} 
              strokeWidth="1.66667" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* List icon button (List view) */}
        <button
          onClick={() => onViewTypeChange('week')}
          style={{
            padding: '8px',
            background: viewType === 'week' ? '#F66649' : 'transparent',
            border: viewType === 'week' ? '2px solid rgba(255, 255, 255, 0.12)' : 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            boxShadow: viewType === 'week' 
              ? '0px 1px 2px 0px rgba(255, 255, 255, 0)'
              : 'none',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="1.5" fill={viewType === 'week' ? '#FFFFFF' : '#CECFD2'}/>
            <circle cx="5" cy="10" r="1.5" fill={viewType === 'week' ? '#FFFFFF' : '#CECFD2'}/>
            <circle cx="5" cy="15" r="1.5" fill={viewType === 'week' ? '#FFFFFF' : '#CECFD2'}/>
            <line x1="9" y1="5" x2="17" y2="5" stroke={viewType === 'week' ? '#FFFFFF' : '#CECFD2'} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="9" y1="10" x2="17" y2="10" stroke={viewType === 'week' ? '#FFFFFF' : '#CECFD2'} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="9" y1="15" x2="17" y2="15" stroke={viewType === 'week' ? '#FFFFFF' : '#CECFD2'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

