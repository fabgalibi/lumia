import React from 'react';
import KnowledgeTableHeader from './knowledge-table-header';
import KnowledgeTableRow from './knowledge-table-row';
import KnowledgeTableActions from './knowledge-table-actions';

type KnowledgeLevel = 'never' | 'started' | 'finished' | 'polishing';
type SubjectId = string;

interface Subject {
  id: SubjectId;
  name: string;
  description: string;
}

export interface KnowledgeTableProps {
  subjects: Subject[];
  knowledgeData: Record<SubjectId, KnowledgeLevel>;
  onLevelChange: (subjectId: SubjectId, level: KnowledgeLevel) => void;
  onSelectSubjects: (subjectId: SubjectId) => void;
}

export default function KnowledgeTable({
  subjects,
  knowledgeData,
  onLevelChange,
  onSelectSubjects
}: KnowledgeTableProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        margin: '0 auto',
        maxWidth: '100%',
        padding: '0'
      }}
    >
      {/* Mobile Card Layout */}
      {subjects.map((subject, index) => (
        <div
          key={subject.id}
          style={{
            backgroundColor: 'rgba(39, 39, 56, 1)',
            border: '1px solid rgba(44, 44, 69, 1)',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)'
          }}
        >
          {/* Subject Header */}
          <div
            style={{
              marginBottom: '20px'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-1%',
                color: 'rgba(240, 240, 241, 1)',
                margin: 0
              }}
            >
              {subject.name}
            </h3>
          </div>

          {/* Knowledge Level Options */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginBottom: '20px'
            }}
          >
            {[
              { id: 'never', label: 'Nunca estudei' },
              { id: 'started', label: 'Comecei teoria, mas não terminei' },
              { id: 'finished', label: 'Terminei teoria, mas não tenho confiança' },
              { id: 'polishing', label: 'Só falta aparar as arestas' }
            ].map((level) => (
              <label
                key={level.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <input
                  type="radio"
                  name={`subject-${subject.id}`}
                  value={level.id}
                  checked={knowledgeData[subject.id] === level.id}
                  onChange={() => onLevelChange(subject.id, level.id as any)}
                  style={{
                    width: '20px',
                    height: '20px',
                    accentColor: '#F66649',
                    cursor: 'pointer'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: '#ECECED',
                    flex: 1
                  }}
                >
                  {level.label}
                </span>
              </label>
            ))}
          </div>

          {/* Action Button */}
          <div
            style={{
              paddingTop: '16px'
            }}
          >
            <button
              onClick={() => onSelectSubjects(subject.id)}
              disabled={knowledgeData[subject.id] === 'never'}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: knowledgeData[subject.id] === 'never' 
                  ? 'rgba(47, 47, 65, 1)' 
                  : 'rgba(45, 45, 69, 1)',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'Sora',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: knowledgeData[subject.id] === 'never' 
                  ? 'rgba(236, 236, 237, 0.5)' 
                  : '#ECECED',
                cursor: knowledgeData[subject.id] === 'never' 
                  ? 'not-allowed' 
                  : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: knowledgeData[subject.id] === 'never'
                  ? 'none'
                  : `
                    0px 1px 2px 0px rgba(0, 0, 0, 0.05),
                    0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset,
                    0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset
                  `
              }}
              onMouseOver={(e) => {
                if (knowledgeData[subject.id] !== 'never') {
                  e.currentTarget.style.backgroundColor = '#F66649';
                  e.currentTarget.style.borderColor = '#F66649';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.boxShadow = `
                    0px 1px 2px 0px rgba(246, 102, 73, 0.3),
                    0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset,
                    0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset
                  `;
                }
              }}
              onMouseOut={(e) => {
                if (knowledgeData[subject.id] !== 'never') {
                  e.currentTarget.style.backgroundColor = 'rgba(45, 45, 69, 1)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = '#ECECED';
                  e.currentTarget.style.boxShadow = `
                    0px 1px 2px 0px rgba(0, 0, 0, 0.05),
                    0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset,
                    0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset
                  `;
                }
              }}
            >
              Selecionar assuntos específicos
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
