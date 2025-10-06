import React from 'react';

const ProfileAboutSection: React.FC = () => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h3
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: '#F7F7F7',
          margin: '0 0 4px 0'
        }}
      >
        Biografia
      </h3>

      <p
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#CECFD2',
          margin: 0
        }}
      >
        Sou especializada em Direito Constitucional e Administrativo, com mais de 8 anos de experiência em preparação para concursos públicos. Aprovada em órgãos de destaque e dedicada a orientar alunos com estratégias práticas, materiais exclusivos e acompanhamento personalizado para acelerar resultados.
      </p>
    </div>
  );
};

export default ProfileAboutSection;