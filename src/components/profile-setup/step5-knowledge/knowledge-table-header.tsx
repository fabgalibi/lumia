import React from 'react';

const knowledgeLevels = [
  { id: 'never', label: 'Nunca estudei' },
  { id: 'started', label: 'Comecei teoria, mas não terminei' },
  { id: 'finished', label: 'Terminei teoria, mas não tenho confiança' },
  { id: 'polishing', label: 'Só falta aparar as arestas' }
];

export interface KnowledgeTableHeaderProps {}

export default function KnowledgeTableHeader() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
        backgroundColor: '#2D2D45',
        borderBottom: '1px solid #2C2C45',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}
    >
      <div
        style={{
          padding: '20px 24px',
          borderRight: '1px solid #2C2C45',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#2D2D45'
        }}
      >
        <span
          style={{
            fontFamily: 'Inter' /* MIGRATED */,
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            letterSpacing: '0.01em'
          }}
        >
          Disciplina
        </span>
      </div>
      {knowledgeLevels.map((level) => (
        <div
          key={level.id}
          style={{
            padding: '20px 8px',
            borderRight: level.id === 'polishing' ? 'none' : '1px solid #2C2C45',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2D2D45'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter' /* MIGRATED */,
              fontWeight: 500,
              fontSize: '11px',
              lineHeight: '16px',
              color: '#ECECED',
              textAlign: 'center',
              letterSpacing: '0.005em',
              maxWidth: '80px'
            }}
          >
            {level.label}
          </span>
        </div>
      ))}
    </div>
  );
}
