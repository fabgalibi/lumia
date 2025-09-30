import React from 'react';
import RadioGroup from './radio-group';
import TextareaField from './textarea-field-v2';
import PreparationTypeCard from './preparation-type-card';

interface PreparationData {
  selectedPreparationType: string;
  temConcursoEspecifico: string;
  concursoEspecifico: string;
}

interface PreparationSelectionContentProps {
  preparationData: PreparationData;
  onPreparationDataChange: (data: Partial<PreparationData>) => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
  showTitles?: boolean;
}

// Dados dos tipos de preparação (dados originais do profile-setup)
const preparationTypes = [
  {
    id: 'pre-edital',
    title: 'Pré-edital',
    description: 'Pré-edital é a fase de estudos antes da publicação oficial do edital. Reúne conteúdos do básico ao avançado, fortalecendo sua base para chegar preparado às provas. Se está em dúvida sobre onde começar, esta é a melhor opção.',
    imageSrc: '/images/pre-edital-image.png'
  },
  {
    id: 'pos-edital',
    title: 'Pós-edital',
    description: 'Seu edital já foi publicado? Essa opção é para quem já tem alguma base e precisa de apoio na reta final. Aqui o foco é vencer toda a ementa até a prova, com revisões, exercícios, estudo de lei seca e estratégias específicas. Confira os pós-editais disponíveis!',
    imageSrc: '/images/pos-edital-image-3a7c57.png'
  }
];

export const PreparationSelectionContent: React.FC<PreparationSelectionContentProps> = ({
  preparationData,
  onPreparationDataChange,
  screenSize = 'desktop',
  showTitles = true
}) => {
  // Lógica inteligente para determinar se deve usar coluna única
  const shouldUseSingleColumn = screenSize === 'mobile' || screenSize === 'tablet';
  const { selectedPreparationType, temConcursoEspecifico, concursoEspecifico } = preparationData;

  const handlePreparationTypeChange = (typeId: string) => {
    onPreparationDataChange({ selectedPreparationType: typeId });
  };

  const handleConcursoEspecificoChange = (value: string) => {
    onPreparationDataChange({ temConcursoEspecifico: value });
  };

  const handleConcursoTextChange = (value: string) => {
    onPreparationDataChange({ concursoEspecifico: value });
  };

  return (
    <>
      {/* Seção 1 - Tipo de Preparação */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: '20px', // Aumentado para dar mais respiro entre seções
          width: '100%',
          height: 'fit-content'
        }}
      >
        {/* Título */}
        {showTitles && (
          <h1
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '1.5em',
              letterSpacing: '0%',
              color: '#FFFFFF',
              margin: 0,
              textAlign: 'left'
            }}
          >
            Qual tipo de preparação você busca?
          </h1>
        )}

        {/* Cards de Preparação */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: shouldUseSingleColumn
              ? '1fr' // Coluna única para mobile e tablet
              : 'repeat(auto-fit, minmax(644px, 1fr))', // Grid responsivo com largura mínima 644px
            gap: '12px', // gap: 12px conforme especificação
            width: '100%',
            justifyContent: 'start'
          }}
        >
          {preparationTypes.map((type) => (
            <PreparationTypeCard
              key={type.id}
              id={type.id}
              title={type.title}
              description={type.description}
              imageSrc={type.imageSrc}
              isSelected={selectedPreparationType === type.id}
              onClick={() => handlePreparationTypeChange(type.id)}
              screenSize={screenSize}
            />
          ))}
        </div>
      </div>

      {/* Seção 2 - Concurso Específico */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: '30px', // Aumentado para dar mais respiro
          width: '100%',
          height: 'auto',
          maxHeight: 'none',
          marginTop: '20px' // Margem superior para separar dos cards
        }}
      >
        {/* Título */}
        {showTitles && (
          <h2
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '1.5em',
              letterSpacing: '0%',
              color: '#FFFFFF',
              margin: 0,
              textAlign: 'left',
              width: '100%',
              height: 'fit-content'
            }}
          >
            Você tem algum concurso específico que gostaria de focar?
          </h2>
        )}

        {/* Conteúdo da Seção */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '40px', // Aumentado para dar mais respiro
            padding: '0px 8px',
            flex: 1
          }}
        >
          {/* Radio Group - Sim/Não */}
          <RadioGroup
            value={temConcursoEspecifico}
            onChange={handleConcursoEspecificoChange}
            options={[
              { value: 'sim', label: 'Sim' },
              { value: 'nao', label: 'Não' }
            ]}
            name="concurso-especifico"
            screenSize={screenSize}
          />

          {/* Textarea Field - Aparece apenas se "Sim" estiver selecionado */}
          {temConcursoEspecifico === 'sim' && (
            <TextareaField
              label="Conta pra gente sobre o seu foco para a aprovação"
              placeholder="Digite aqui..."
              value={concursoEspecifico}
              onChange={handleConcursoTextChange}
              maxLength={150}
              screenSize={screenSize}
            />
          )}
        </div>
      </div>
    </>
  );
};
