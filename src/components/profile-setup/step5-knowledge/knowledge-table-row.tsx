import React from 'react';

type KnowledgeLevel = 'never' | 'started' | 'finished' | 'polishing';

interface Subject {
  id: string;
  name: string;
  description: string;
}

export interface KnowledgeTableRowProps {
  subject: Subject;
  index: number;
  totalSubjects: number;
  knowledgeData: Record<string, KnowledgeLevel>;
  onLevelChange: (subjectId: string, level: KnowledgeLevel) => void;
}

const knowledgeLevels = [
  { id: 'never', label: 'Nunca estudei' },
  { id: 'started', label: 'Comecei teoria, mas não terminei' },
  { id: 'finished', label: 'Terminei teoria, mas não tenho confiança' },
  { id: 'polishing', label: 'Só falta aparar as arestas' }
];

export default function KnowledgeTableRow({
  subject,
  index,
  totalSubjects,
  knowledgeData,
  onLevelChange
}: KnowledgeTableRowProps) {
  const isSelected = knowledgeData[subject.id];
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
        borderBottom: index === totalSubjects - 1 ? 'none' : '1px solid #2C2C45',
        backgroundColor: index % 2 === 0 ? '#252532' : '#252532',
        transition: 'background-color 0.2s ease'
      }}
    >
      {/* Subject Column */}
      <div
        style={{
          padding: '24px',
          borderRight: '1px solid #2C2C45',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          backgroundColor: isSelected ? '#2A2A3A' : 'transparent',
          transition: 'background-color 0.2s ease'
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            letterSpacing: '0.005em'
          }}
        >
          {subject.name}
        </span>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#94979C',
            opacity: 0.8
          }}
        >
          {subject.description}
        </span>
      </div>

      {/* Level Columns */}
      {knowledgeLevels.map((level, levelIndex) => {
        const isLevelSelected = knowledgeData[subject.id] === level.id;
        
        return (
          <div
            key={level.id}
            style={{
              padding: '24px 8px',
              borderRight: levelIndex === knowledgeLevels.length - 1 ? 'none' : '1px solid #2C2C45',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isLevelSelected ? '#2A2A3A' : 'transparent',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onClick={() => onLevelChange(subject.id, level.id as KnowledgeLevel)}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0px',
                cursor: 'pointer',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              <input
                type="radio"
                name={`subject-${subject.id}`}
                value={level.id}
                checked={isLevelSelected}
                onChange={() => onLevelChange(subject.id, level.id as KnowledgeLevel)}
                style={{
                  width: '20px',
                  height: '20px',
                  accentColor: '#F66649',
                  cursor: 'pointer',
                  transform: 'scale(1.2)'
                }}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}
