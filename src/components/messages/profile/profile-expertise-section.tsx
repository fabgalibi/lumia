import React from 'react';

interface ExpertiseTagProps {
  label: string;
}

const ExpertiseTag: React.FC<ExpertiseTagProps> = ({ label }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 12px',
        backgroundColor: '#252532',
        borderRadius: '6px',
        border: '1px solid #2C2C45'
      }}
    >
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '1.5em',
          color: '#ECECED'
        }}
      >
        {label}
      </span>
    </div>
  );
};

const ProfileExpertiseSection: React.FC = () => {
  const expertises = [
    'Direito Administrativo',
    'Direito Constitucional',
    'Português',
    'Raciocínio Lógico',
    'Informática'
  ];

  return (
    <div style={{ marginBottom: '24px' }}>
      <h3
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#F7F7F7',
          margin: '0 0 12px 0',
          letterSpacing: '0%',
          textTransform: 'uppercase'
        }}
      >
        Especialidades
      </h3>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}
      >
        {expertises.map((expertise) => (
          <ExpertiseTag key={expertise} label={expertise} />
        ))}
      </div>
    </div>
  );
};

export default ProfileExpertiseSection;