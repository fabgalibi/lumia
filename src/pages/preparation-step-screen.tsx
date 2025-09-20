// preparation-step-screen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProfileLayout, RadioGroup, TextareaField, PreparationTypeCard } from '@/components/profile-setup';

export const PreparationStepScreen = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');
  const [selectedPreparationType, setSelectedPreparationType] = useState<string>('pre-edital'); // pré-selecionado conforme Figma
  const [temConcursoEspecifico, setTemConcursoEspecifico] = useState<string>('sim'); // pré-selecionado "Sim" conforme Figma
  const [concursoEspecifico, setConcursoEspecifico] = useState<string>('');

  // Detectar tamanho da tela para passar aos componentes
  React.useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1440) {
        setScreenSize('notebook');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleBackToStep1 = () => {
    navigate('/profile-setup');
  };

  const handleNextStep = () => {
    if (selectedPreparationType) {
      // Navegar para a etapa 3 - Disponibilidade
      navigate('/profile-setup/availability');
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
            gap: screenSize === 'mobile' ? '16px' : '24px', // gap otimizado para caber na tela
            width: '100%',
            height: 'fit-content' // sizing: vertical: hug conforme Figma
          }}
        >
          {/* Título */}
          <h1
            style={{
              fontFamily: 'Sora', // font-family: Sora
              fontWeight: 400, // font-weight: 400
              fontStyle: 'normal', // font-style: Regular
              fontSize: '16px', // font-size: text-md
              lineHeight: '1.5em', // line-height: text-md
              letterSpacing: '0%', // letter-spacing: 0%
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
              flexDirection: screenSize === 'mobile' ? 'column' : 'row', // column no mobile, row no desktop
              justifyContent: screenSize === 'mobile' ? 'center' : 'flex-start', // alinhamento à esquerda no desktop
              alignItems: screenSize === 'mobile' ? 'center' : 'flex-start', // alinhamento à esquerda no desktop
              alignSelf: 'stretch',
              gap: '8px'
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
                onClick={() => setSelectedPreparationType(type.id)}
                screenSize={screenSize} // responsivo baseado na tela atual
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
            gap: screenSize === 'mobile' ? '16px' : '24px', // gap otimizado para caber na tela
            width: '100%',
            height: 'auto', // altura automática para ambos
            maxHeight: 'none' // sem limite de altura
          }}
        >
          {/* Título */}
          <h2
            style={{
              fontFamily: 'Sora', // font-family: Sora
              fontWeight: 400, // font-weight: 400
              fontStyle: 'normal', // font-style: Regular
              fontSize: '16px', // font-size: text-md
              lineHeight: '1.5em', // line-height: text-md
              letterSpacing: '0%', // letter-spacing: 0%
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
              gap: screenSize === 'mobile' ? '24px' : '20px', // gap otimizado para caber na tela
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
              screenSize={screenSize} // responsivo baseado na tela atual
            />

            {/* Textarea Field - Aparece apenas se "Sim" estiver selecionado */}
            {temConcursoEspecifico === 'sim' && (
              <TextareaField
                label="Conta pra gente sobre o seu foco para a aprovação"
                placeholder="Digite aqui..."
                value={concursoEspecifico}
                onChange={setConcursoEspecifico}
                maxLength={150}
                screenSize={screenSize} // responsivo baseado na tela atual
              />
            )}
          </div>
        </div>
    </ProfileLayout>
  );
};

export default PreparationStepScreen;
