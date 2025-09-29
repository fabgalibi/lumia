import React from 'react';

export interface KnowledgeHeaderProps {
  screenSize: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export default function KnowledgeHeader({ }: KnowledgeHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '20px',
        padding: '0 16px'
      }}
    >
      <h1
        style={{
          fontFamily: 'Inter' /* MIGRATED */,
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '28px',
          color: '#FFFFFF',
          margin: 0,
          textAlign: 'left'
        }}
      >
        Em que nível você se encontra em cada matéria?
      </h1>
      <p
        style={{
          fontFamily: 'Inter' /* MIGRATED */,
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#ECECED',
          margin: 0,
          opacity: 0.9
        }}
      >
        Informe atentamente seu nível atual de conhecimento, pois seu planejamento será elaborado a partir desses dados. Se você estudou a disciplina há muito tempo e já não domina o conteúdo, recomendamos selecionar a opção "Nunca estudei". Assim, você terá a oportunidade de revisitar a teoria, caso seja necessário.
      </p>
    </div>
  );
}
