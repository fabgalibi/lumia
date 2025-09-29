import React from 'react';

interface Subject {
  id: string;
  name: string;
  description: string;
}

export interface KnowledgeTableActionsProps {
  subjects: Subject[];
  onSelectSubjects: (subjectId: string) => void;
}

export default function KnowledgeTableActions({
  subjects,
  onSelectSubjects
}: KnowledgeTableActionsProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
        borderTop: '1px solid #2C2C45',
        backgroundColor: '#2D2D45'
      }}
    >
      <div
        style={{
          padding: '24px',
          borderRight: '1px solid #2C2C45',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <span
          style={{
            fontFamily: 'Inter' /* MIGRATED */,
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#94979C',
            opacity: 0.7
          }}
        >
          Ações disponíveis
        </span>
      </div>
      {subjects.slice(0, 4).map((subject, index) => (
        <div
          key={subject.id}
          style={{
            padding: '24px 8px',
            borderRight: index === 3 ? 'none' : '1px solid #2C2C45',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <button
            onClick={() => onSelectSubjects(subject.id)}
            style={{
              padding: '10px 18px',
              backgroundColor: 'transparent',
              border: '1px solid #2C2C45',
              borderRadius: '8px',
              fontFamily: 'Inter' /* MIGRATED */,
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              color: '#ECECED',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minWidth: '90px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#F66649';
              e.currentTarget.style.borderColor = '#F66649';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#2C2C45';
              e.currentTarget.style.color = '#ECECED';
            }}
          >
            Selecionar
          </button>
        </div>
      ))}
    </div>
  );
}
