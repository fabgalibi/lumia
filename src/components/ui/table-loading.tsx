import React from 'react';

interface TableLoadingProps {
  columns: number;
  rows?: number;
}

export const TableLoading: React.FC<TableLoadingProps> = ({ 
  columns, 
  rows = 10 
}) => {
  return (
    <div style={{
      width: '100%',
      background: '#252532',
      border: '1px solid #2C2C45',
      borderRadius: '12px',
      overflow: 'hidden',
      minHeight: '400px'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        background: '#191923',
        borderBottom: '1px solid #2C2C45'
      }}>
        {Array.from({ length: columns }, (_, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              padding: '16px 24px',
              borderRight: index < columns - 1 ? '1px solid #2C2C45' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div
              style={{
                width: '60%',
                height: '16px',
                background: '#363946',
                borderRadius: '4px',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}
            />
          </div>
        ))}
      </div>

      {/* Rows */}
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'flex',
            borderBottom: rowIndex < rows - 1 ? '1px solid #2C2C45' : 'none',
            background: rowIndex % 2 === 0 ? '#252532' : '#1F1F2E'
          }}
        >
          {Array.from({ length: columns }, (_, colIndex) => (
            <div
              key={colIndex}
              style={{
                flex: 1,
                padding: '16px 24px',
                borderRight: colIndex < columns - 1 ? '1px solid #2C2C45' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div
                style={{
                  width: colIndex === 0 ? '80%' : '60%',
                  height: '14px',
                  background: '#363946',
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                  animationDelay: `${rowIndex * 0.1}s`
                }}
              />
            </div>
          ))}
        </div>
      ))}

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};
