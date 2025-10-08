import React, { useState } from 'react';
import { SearchSection } from './search-section';
import { HelpSection } from './help-section';
import { SearchHelpCarousel } from './search-help-carousel';
import { ContinueWatchingSection } from './continue-watching-section';
import { Tabs } from '@/components/ui/design-system';
import { TutorialCard } from './tutorial-card';
import { TutorialsGrid } from './tutorials-grid';
import { TutorialsCarousel } from './tutorials-carousel';
import { ContinueWatchingCarousel } from './continue-watching-carousel';
import { VideoModal } from './video-modal';

interface TutorialsContentProps {
  className?: string;
}

export const TutorialsContent: React.FC<TutorialsContentProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTutorial, setSelectedTutorial] = useState<any>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Funções de busca
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Aqui você pode implementar a lógica de busca
    console.log('Busca realizada:', query);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    // Filtrar por categoria baseada na sugestão
    if (suggestion === 'Primeiros passos') {
      setActiveTab('primeiros-passos');
    } else if (suggestion === 'Funções principais') {
      setActiveTab('funcionalidades');
    }
    console.log('Sugestão clicada:', suggestion);
  };

  // Dados das abas
  const tabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'primeiros-passos', label: 'Primeiros passos' },
    { id: 'metas', label: 'Metas' },
    { id: 'recursos-extras', label: 'Recursos extras' },
    { id: 'funcionalidades', label: 'Funcionalidades da plataforma' },
    { id: 'conteudo', label: 'Conteúdo' },
    { id: 'mentorias', label: 'Mentorias' }
  ];

  // Dados dos tutoriais em andamento
  const continueWatchingTutorials = [
    {
      title: 'Realizando simulados online',
      thumbnail: '/images/tutorial-simulados.jpg',
      progress: 91,
      isWatching: true
    },
    {
      title: 'Consultando relatórios de desempenho',
      thumbnail: '/images/tutorial-relatorios.jpg',
      progress: 57,
      isWatching: true
    },
    {
      title: 'Assistindo gravações de mentorias',
      thumbnail: '/images/tutorial-mentorias.jpg',
      progress: 174,
      isWatching: true
    },
    {
      title: 'Recebendo e abrindo arquivos enviados',
      thumbnail: '/images/tutorial-arquivos.jpg',
      progress: 91,
      isWatching: true
    }
  ];

  // Dados organizados por categoria
  const tutorialsByCategory = {
    todos: [
      {
        id: '1',
        title: 'Primeiros passos no Lumia',
        description: 'Aprenda a acessar e navegar pela plataforma.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-1.png',
        isPrimary: true,
        isWatched: true
      },
      {
        id: '2',
        title: 'Como configurar seu perfil',
        description: 'Veja como atualizar seus dados e personalizar sua conta.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-2.png',
        isPrimary: false,
        isWatched: true
      },
      {
        id: '3',
        title: 'Acessando materiais de estudo',
        description: 'Descubra onde encontrar PDFs, videoaulas e resumos exclusivos.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-3-4e3ecf.png',
        isWatched: true
      },
      {
        id: '4',
        title: 'Enviando mensagens para mentores',
        description: 'Saiba como tirar dúvidas e receber feedback personalizado.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-4-3e3062.png',
        isPrimary: false
      },
      {
        id: '5',
        title: 'Realizando simulados online',
        description: 'Aprenda a fazer simulados e acompanhar seu desempenho.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-5.png',
        isPrimary: false,
        isWatched: true
      },
      {
        id: '6',
        title: 'Consultando relatórios',
        description: 'Veja seus resultados e estatísticas de estudo.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-6.png',
        isPrimary: false
      },
      {
        id: '7',
        title: 'Assistindo gravações',
        description: 'Acesse e assista às gravações das mentorias.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-7.png',
        isPrimary: false
      },
      {
        id: '8',
        title: 'Recebendo arquivos',
        description: 'Como baixar e organizar materiais enviados.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-8.png',
        isPrimary: false,
        isWatched: true
      }
    ],
    'primeiros-passos': [
      {
        id: '1',
        title: 'Primeiros passos no Lumia',
        description: 'Aprenda a acessar e navegar pela plataforma.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-1.png',
        isPrimary: true
      },
      {
        id: '2',
        title: 'Como configurar seu perfil',
        description: 'Veja como atualizar seus dados e personalizar sua conta.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-2.png',
        isPrimary: false
      },
      {
        id: '9',
        title: 'Navegando pelo dashboard',
        description: 'Entenda os principais elementos da tela inicial.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-1.png',
        isPrimary: false
      },
      {
        id: '10',
        title: 'Configurações básicas',
        description: 'Ajuste as configurações essenciais da sua conta.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-2.png',
        isPrimary: false
      }
    ],
    metas: [
      {
        id: '11',
        title: 'Definindo suas metas',
        description: 'Como estabelecer objetivos de estudo realistas.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-3-4e3ecf.png',
        isPrimary: false
      },
      {
        id: '12',
        title: 'Acompanhando progresso',
        description: 'Monitore sua evolução em direção às metas.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-4-3e3062.png',
        isPrimary: false
      },
      {
        id: '13',
        title: 'Ajustando objetivos',
        description: 'Saiba quando e como modificar suas metas.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-5.png',
        isPrimary: false
      }
    ],
    'recursos-extras': [
      {
        id: '14',
        title: 'Biblioteca de materiais',
        description: 'Acesse PDFs, resumos e materiais exclusivos.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-6.png',
        isPrimary: false
      },
      {
        id: '15',
        title: 'Ferramentas de estudo',
        description: 'Utilize recursos avançados para otimizar aprendizado.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-7.png',
        isPrimary: false
      },
      {
        id: '16',
        title: 'Conteúdo complementar',
        description: 'Explore materiais extras e dicas de estudo.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-8.png',
        isPrimary: false
      }
    ],
    funcionalidades: [
      {
        id: '5',
        title: 'Realizando simulados online',
        description: 'Aprenda a fazer simulados e acompanhar seu desempenho.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-5.png',
        isPrimary: false
      },
      {
        id: '6',
        title: 'Consultando relatórios',
        description: 'Veja seus resultados e estatísticas de estudo.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-6.png',
        isPrimary: false
      },
      {
        id: '17',
        title: 'Sistema de ranking',
        description: 'Entenda como funciona a competição entre estudantes.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-1.png',
        isPrimary: false
      },
      {
        id: '18',
        title: 'Notificações inteligentes',
        description: 'Configure alertas personalizados para seu estudo.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-2.png',
        isPrimary: false
      }
    ],
    conteudo: [
      {
        id: '3',
        title: 'Acessando materiais de estudo',
        description: 'Descubra onde encontrar PDFs, videoaulas e resumos exclusivos.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-3-4e3ecf.png',
        isWatched: true
      },
      {
        id: '8',
        title: 'Recebendo arquivos',
        description: 'Como baixar e organizar materiais enviados.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-8.png',
        isPrimary: false
      },
      {
        id: '19',
        title: 'Organizando estudos',
        description: 'Estratégias para estruturar seu plano de estudos.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-3-4e3ecf.png',
        isPrimary: false
      },
      {
        id: '20',
        title: 'Métodos de revisão',
        description: 'Técnicas eficazes para revisar o conteúdo.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-4-3e3062.png',
        isPrimary: false
      }
    ],
    mentorias: [
      {
        id: '7',
        title: 'Assistindo gravações',
        description: 'Acesse e assista às gravações das mentorias.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-7.png',
        isPrimary: false
      },
      {
        id: '4',
        title: 'Enviando mensagens para mentores',
        description: 'Saiba como tirar dúvidas e receber feedback personalizado.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-4-3e3062.png',
        isPrimary: false
      },
      {
        id: '21',
        title: 'Participando de mentorias ao vivo',
        description: 'Como interagir durante as sessões em tempo real.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-5.png',
        isPrimary: false
      },
      {
        id: '22',
        title: 'Agendando consultas',
        description: 'Marque horários para conversar com mentores.',
        thumbnail: '/images/tutorials/tutorial-card-tutorials-6.png',
        isPrimary: false
      }
    ]
  };

  // Função para obter tutoriais da aba ativa
  const getCurrentTutorials = () => {
    return tutorialsByCategory[activeTab as keyof typeof tutorialsByCategory] || tutorialsByCategory.todos;
  };

  // Função para abrir o modal de vídeo
  const handleTutorialClick = (tutorial: any) => {
    setSelectedTutorial(tutorial);
    setIsVideoModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
    setSelectedTutorial(null);
  };

  // Função para obter descrição detalhada baseada no ID
  const getDetailedDescription = (tutorialId?: string) => {
    const detailedDescriptions: { [key: string]: string } = {
      '1': 'Neste tutorial, você aprenderá a utilizar os relatórios de desempenho da plataforma para acompanhar sua evolução nos estudos. Mostramos como acessar as métricas de cada disciplina, visualizar os resultados de simulados e identificar quais tópicos você já domina e quais precisam de reforço. Também explicamos como interpretar gráficos de progresso, analisar o tempo dedicado a cada matéria e comparar sua performance em diferentes períodos.',
      '2': 'Aprenda a configurar completamente seu perfil na plataforma Lumia. Neste tutorial, mostramos como atualizar suas informações pessoais, definir suas preferências de estudo, configurar notificações e personalizar sua experiência de aprendizado. Você também descobrirá como gerenciar suas configurações de privacidade e conectar suas redes sociais para uma experiência mais integrada.',
      '3': 'Descubra como acessar e organizar todos os materiais de estudo disponíveis na plataforma. Este tutorial abrange desde a localização de PDFs e videoaulas até a criação de listas de reprodução personalizadas. Você aprenderá a fazer download de materiais para estudo offline, marcar conteúdos favoritos e acompanhar seu progresso através dos diferentes tipos de conteúdo disponíveis.',
      '4': 'Aprenda a se comunicar eficientemente com seus mentores através da plataforma. Este tutorial cobre desde o envio de mensagens até o agendamento de sessões de mentoria. Você descobrirá como fazer perguntas específicas, compartilhar arquivos, receber feedback detalhado e acompanhar o histórico de suas conversas para maximizar seu aprendizado.',
      '5': 'Domine a realização de simulados online na plataforma Lumia. Este tutorial completo ensina desde o agendamento de simulados até a análise detalhada dos resultados. Você aprenderá a interpretar estatísticas de desempenho, identificar pontos fortes e fracos, e usar essas informações para direcionar seus estudos de forma mais eficaz.',
      '6': 'Explore todos os recursos de relatórios e estatísticas da plataforma. Este tutorial ensina como interpretar gráficos de progresso, analisar métricas de estudo e acompanhar sua evolução ao longo do tempo. Você descobrirá como usar essas informações para otimizar seu plano de estudos e alcançar melhores resultados.',
      '7': 'Aprenda a acessar e aproveitar ao máximo as gravações de mentorias. Este tutorial mostra como navegar pela biblioteca de vídeos, usar recursos de busca e filtros, e como aplicar o conhecimento adquirido nas gravações em seus estudos. Você também descobrirá como criar playlists personalizadas e compartilhar conteúdos relevantes.',
      '8': 'Domine o gerenciamento de arquivos na plataforma Lumia. Este tutorial abrange desde o recebimento de materiais enviados por mentores até a organização eficiente de seus arquivos. Você aprenderá a baixar, categorizar e acessar rapidamente todos os documentos importantes para seus estudos.'
    };

    return detailedDescriptions[tutorialId || '1'] || 'Este tutorial foi projetado para ajudá-lo a dominar uma funcionalidade específica da plataforma Lumia. Acompanhe atentamente as instruções para aproveitar ao máximo sua experiência de aprendizado e alcançar seus objetivos de estudo.';
  };

      return (
        <div className={`min-h-screen bg-[#191923] w-full ${className}`}>
            <div
              className="w-full py-12 px-2 lg:px-8"
              style={{
                gap: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
        {/* Seção superior: Busca e Ajuda */}
        <div>
          {/* Mobile: Carousel de busca e ajuda */}
          <div className="lg:hidden">
            <SearchHelpCarousel 
              onSearch={handleSearch}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>
          
              {/* Desktop: Layout lado a lado */}
              <div
                className="hidden lg:flex flex-row items-center w-full"
                style={{
                  gap: '24px',
                  alignItems: 'stretch',
                  justifyContent: 'stretch'
                }}
              >
              <SearchSection
                className="flex-[2]"
                onSearch={handleSearch}
                onSuggestionClick={handleSuggestionClick}
              />
              <HelpSection className="flex-1" />
              </div>
        </div>

            {/* Seção Continue Assistindo */}
            <div className="w-full lg:mx-[-35px]" style={{ overflow: 'visible' }}>
              {/* Mobile Carousel */}
              <div className="lg:hidden">
                <ContinueWatchingCarousel />
              </div>
              {/* Tablet and Desktop Layout */}
              <div className="hidden lg:block" style={{ overflow: 'visible' }}>
                <ContinueWatchingSection />
              </div>
            </div>

            {/* Seção de Tutoriais */}
            <div 
              className="w-full"
              style={{
                gap: '24px',
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '8px'
              }}
            >
          {/* Cabeçalho com abas */}
          <div 
            className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-6"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'stretch',
              gap: '20px',
              alignItems: 'flex-end'
            }}
          >
            <h2 
              style={{
                fontFamily: 'Sora',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '1.5em',
                color: '#FFFFFF'
              }}
            >
              Tutoriais
            </h2>
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              variant="underline"
              size="sm"
            />
          </div>

          {/* Grid de tutoriais */}
          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <TutorialsCarousel 
              tutorials={getCurrentTutorials()} 
              onTutorialClick={handleTutorialClick}
            />
          </div>
          {/* Desktop Grid */}
          <div className="hidden lg:block">
            <TutorialsGrid 
              tutorials={getCurrentTutorials()} 
              onTutorialClick={handleTutorialClick}
            />
          </div>
        </div>
      </div>

      {/* Modal de vídeo */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        title={selectedTutorial?.title || ''}
        description={selectedTutorial?.description || ''}
        videoUrl={selectedTutorial?.thumbnail}
        currentTime="4:12"
        totalTime="8:24"
        progress={50}
        detailedDescription={getDetailedDescription(selectedTutorial?.id)}
      />
    </div>
  );
};
