import React from 'react';
import { FeaturedIconLarge } from '../../../ui/featured-icon-large';

interface AddDisciplineCardProps {
  onClick?: () => void;
}

export const AddDisciplineCard: React.FC<AddDisciplineCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '16px',
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '12px',
        width: '410px',
        height: '274px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#2A2B3A';
        e.currentTarget.style.borderColor = '#3C3D4F';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#252532';
        e.currentTarget.style.borderColor = '#2C2C45';
      }}
    >
      {/* Large Featured Icon */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px'
      }}>
        <FeaturedIconLarge icon="plus" size="xl" color="warning" />
      </div>

      {/* Text */}
      <h3 style={{
        fontFamily: 'Sora',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '1.5em',
        color: '#F7F7F7',
        margin: 0,
        textAlign: 'center'
      }}>
        Cadastrar disciplina
      </h3>
    </div>
  );
};
