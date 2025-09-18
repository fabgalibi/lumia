// preparation-step-screen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProfileLayout, RadioGroup, TextareaField } from '@/components/profile-setup';
import PreparationTypeCard from '@/components/profile-setup/preparation-type-card';

export const PreparationStepScreen = () => {
  const navigate = useNavigate();
  const [selectedPreparationType, setSelectedPreparationType] = useState<string>('pre-edital'); // pré-selecionado conforme Figma
  const [temConcursoEspecifico, setTemConcursoEspecifico] = useState<string>('sim'); // pré-selecionado "Sim" conforme Figma
  const [concursoEspecifico, setConcursoEspecifico] = useState<string>('');

  const handleBackToStep1 = () => {
    navigate('/profile-setup');
  };

  const handleNextStep = () => {
    if (selectedPreparationType) {
      // Navegar para a próxima etapa
      console.log('Próxima etapa:', { selectedPreparationType, temConcursoEspecifico, concursoEspecifico });
      // navigate('/profile-setup/step3');
    }
  };

  // Dados dos tipos de preparação conforme Figma
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

  return (
    <ProfileLayout
      currentStep={2}
      totalSteps={6}
      stepTitle="Preparação"
      backButtonText="Voltar a etapa 1"
      nextButtonText="Prosseguir para etapa 3"
      canProceed={!!selectedPreparationType}
      onBack={handleBackToStep1}
      onNext={handleNextStep}
    >
        {/* Seção 1 - Tipo de Preparação */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '24px', // gap menor para economizar espaço
            width: '100%',
            height: 'fit-content' // sizing: vertical: hug conforme Figma
          }}
        >
          {/* Título */}
          <h1
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
              margin: 0,
              textAlign: 'left'
            }}
          >
            Qual tipo de preparação você busca?
          </h1>

          {/* Cards de Preparação */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row', // sempre row no desktop, ProfileLayout já gerencia responsividade
              alignItems: 'center',
              alignSelf: 'stretch',
              gap: '8px'
            }}
          >
            {preparationTypes.map((type) => (
              <PreparationTypeCard
                key={type.id}
                title={type.title}
                description={type.description}
                imageSrc={type.imageSrc}
                isSelected={selectedPreparationType === type.id}
                onClick={() => setSelectedPreparationType(type.id)}
                screenSize="desktop" // ProfileLayout gerencia o screenSize
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
            gap: '24px', // gap menor para economizar espaço
            width: '100%',
            height: 'auto', // altura automática para responsividade
            maxHeight: '320px' // altura máxima para não ultrapassar
          }}
        >
          {/* Título */}
          <h2
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
              margin: 0,
              textAlign: 'left',
              width: '100%',
              height: 'fit-content'
            }}
          >
            Você tem algum concurso específico que gostaria de focar?
          </h2>

          {/* Conteúdo da Seção */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: '20px', // gap menor para economizar espaço
              padding: '0px 8px', // padding conforme Figma
              flex: 1
            }}
          >
            {/* Radio Group - Sim/Não */}
            <RadioGroup
              value={temConcursoEspecifico}
              onChange={setTemConcursoEspecifico}
              options={[
                { value: 'sim', label: 'Sim' },
                { value: 'nao', label: 'Não' }
              ]}
              name="concurso-especifico"
              screenSize="desktop" // ProfileLayout gerencia o screenSize
            />

            {/* Textarea Field - Aparece apenas se "Sim" estiver selecionado */}
            {temConcursoEspecifico === 'sim' && (
              <TextareaField
                label="Conta pra gente sobre o seu foco para a aprovação"
                placeholder="Digite aqui..."
                value={concursoEspecifico}
                onChange={setConcursoEspecifico}
                maxLength={150}
                screenSize="desktop" // ProfileLayout gerencia o screenSize
              />
            )}
          </div>
        </div>
    </ProfileLayout>
  );
};

export default PreparationStepScreen;
