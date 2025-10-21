import React from 'react';

interface AdminEntitySkeletonProps {
  width?: string;
  height?: string;
  minWidth?: string;
}

export const AdminEntitySkeleton: React.FC<AdminEntitySkeletonProps> = ({
  width = 'calc(33.333% - 16px)',
  height = '274px',
  minWidth = '300px'
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        padding: '16px',
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '12px',
        width,
        minWidth,
        height,
        boxSizing: 'border-box'
      }}
    >
      {/* Header skeleton */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '24px',
          padding: '16px',
          background: '#191923',
          borderRadius: '8px'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            borderRadius: '6px'
          }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              width: '60%',
              height: '16px',
              background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              borderRadius: '4px'
            }} />
            <div style={{
              width: '40%',
              height: '12px',
              background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              borderRadius: '4px'
            }} />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '16px',
        flex: 1
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: '12px'
        }}>
          <div style={{
            width: '100%',
            height: '16px',
            background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            borderRadius: '4px'
          }} />
          <div style={{
            width: '80%',
            height: '14px',
            background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            borderRadius: '4px'
          }} />
        </div>
      </div>

      {/* Footer skeleton */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: '12px'
      }}>
        <div style={{
          width: '100%',
          height: '32px',
          background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          borderRadius: '8px'
        }} />
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};
