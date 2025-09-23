import React from 'react';
import { InfoCard } from '../info-card';
import { PreparationIcon } from '../section-icons';
import { getPreparationTypeName } from '../data-helpers';

interface PreparationSectionProps {
  preparationData?: {
    selectedPreparationType: string;
    temConcursoEspecifico: string;
    concursoEspecifico: string;
  };
  onEdit: () => void;
}

export const PreparationSection: React.FC<PreparationSectionProps> = ({
  preparationData,
  onEdit
}) => {
  return (
    <InfoCard
      icon={<PreparationIcon />}
      title="Preparação"
      onEdit={onEdit}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          gap: '16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            Tipo de preparação selecionada
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            {getPreparationTypeName(preparationData?.selectedPreparationType || 'pre-edital')}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            Algum concurso específico que gostaria de focar?
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            {preparationData?.temConcursoEspecifico === 'yes' ? 'Sim' : 'Não'}
          </span>
        </div>
      </div>
    </InfoCard>
  );
};
