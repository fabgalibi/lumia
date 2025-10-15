import React from 'react';
import { MediaItem } from '@/components/ui/MediaItem';

const ProfileMediaSection: React.FC = () => {
  const mediaItems = [
    { title: 'Caderno de Questões Comentadas – Português', size: '2.5MB', type: 'pdf' as const },
    { title: 'Modelo de Cronograma Diário Personalizado', size: '700KB', type: 'png' as const },
    { title: 'Checklist de Estudos Semanais', size: '776KB', type: 'image' as const },
    { title: 'Mapa Mental de Raciocínio Lógico', size: '2.5MB', type: 'docx' as const },
    { title: 'Simulado Temático com Gabarito Explicado', size: '2.5MB', type: 'pdf' as const },
    { title: 'Resumo Esquematizado de Direito Constitucional', size: '150KB', type: 'document' as const },
    { title: 'Tabela de Leis Secas Mais Cobradas', size: '2.5MB', type: 'image' as const },
    { title: 'Tech design requirements.pdf', size: '2.5MB', type: 'docx' as const }
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ marginBottom: isMobile ? '20px' : '24px' }}>
      <h3
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: '#F7F7F7',
          margin: '0 0 16px 0'
        }}
      >
        Conteúdos de mídia (8)
      </h3>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: isMobile ? '12px' : '16px'
        }}
      >
        {mediaItems.map((item, index) => (
          <MediaItem
            key={index}
            title={item.title}
            size={item.size}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileMediaSection;
