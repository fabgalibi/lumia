import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '@/components/ui/design-system/Tabs';
import { TopicCard } from './topic-card';
import { ReviewCard } from './review-card';
import { MetaDetailsModal } from '@/components/modals';
import { sprintDetailService } from '@/services/sprint-detail.service';

interface Topic {
  id: string;
  title: string;
  isCompleted?: boolean;
}

interface Review {
  id: string;
  title: string;
  isCompleted?: boolean;
}

interface ApiGoal {
  idMeta: number;
  nomeDisciplina: string;
}

interface SprintTopicsSectionProps {
  topics?: Topic[];
  reviews?: Topic[];
  apiGoals?: ApiGoal[];
}

export const SprintTopicsSection: React.FC<SprintTopicsSectionProps> = ({ 
  apiGoals = []
}) => {
  const { sprintId } = useParams<{ sprintId: string }>();
  const [activeTab, setActiveTab] = useState('topics');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeta, setSelectedMeta] = useState<any>(null);

  // Mock reviews data - TODO: Replace with API data
  const mockReviews: Review[] = [
    { id: '1', title: 'Princípios Constitucionais Fundamentais', isCompleted: false },
    { id: '2', title: 'Legislação Previdenciária', isCompleted: true },
    { id: '3', title: 'Instrumentalidade do Serviço Social', isCompleted: true },
    { id: '4', title: 'Serviço social', isCompleted: true },
    { id: '5', title: 'Princípios Constitucionais Fundamentais', isCompleted: true },
    { id: '6', title: 'Perícia Médica', isCompleted: true },
  ];

  // Converter dados da API para o formato esperado
  const apiTopics: Topic[] = apiGoals.map(goal => ({
    id: goal.idMeta.toString(),
    title: goal.nomeDisciplina,
    isCompleted: false // Por enquanto, assumir que não estão completos
  }));

  // Usar dados da API se disponíveis, senão array vazio
  const finalTopics = apiGoals.length > 0 ? apiTopics : [];

  const tabs = [
    {
      id: 'topics',
      label: `Lista de metas (${finalTopics.length})`,
    },
    {
      id: 'reviews',
      label: `Lista de revisões (${mockReviews.length})`,
    },
  ];

  const currentItems = activeTab === 'topics' ? finalTopics : mockReviews;

  const handleOpenModal = async (item: Topic | Review) => {
    console.log('=== MODAL OPEN DEBUG ===');
    console.log('1. handleOpenModal chamado');
    console.log('2. Sprint ID:', sprintId);
    console.log('3. Meta ID:', item.id);
    console.log('4. Meta Title:', item.title);
    console.log('5. URL que será chamada:', `/sprints/aluno/historico/detalhes/${sprintId}/meta/${item.id}`);
    
    if (!sprintId) {
      console.error('❌ Sprint ID não encontrado');
      return;
    }

    // Mock de materiais
    const mockMateriais = [
      {
        id: '1',
        nome: 'Caderno de Questões Comentadas – Português',
        tipo: 'pdf' as const,
        tamanho: '2.5MB',
      },
      {
        id: '2',
        nome: 'Modelo de Cronograma Diário Personalizado',
        tipo: 'png' as const,
        tamanho: '700KB',
      },
      {
        id: '3',
        nome: 'Checklist de Estudos Semanais',
        tipo: 'image' as const,
        tamanho: '776KB',
      },
      {
        id: '4',
        nome: 'Mapa Mental de Raciocínio Lógico',
        tipo: 'docx' as const,
        tamanho: '2.5MB',
      },
      {
        id: '5',
        nome: 'Simulado Temático com Gabarito Explicado',
        tipo: 'pdf' as const,
        tamanho: '2.5MB',
      },
      {
        id: '6',
        nome: 'Resumo Esquematizado de Direito Constitucional',
        tipo: 'document' as const,
        tamanho: '150KB',
      },
    ];

    // Abre o modal imediatamente com dados básicos
    console.log('6. Abrindo modal com dados iniciais...');
    setSelectedMeta({
      title: item.title,
      status: item.isCompleted ? 'concluida' : 'pendente',
      assunto: 'Carregando...',
      relevancia: 'medium',
      tipoEstudo: 'Carregando...',
      desempenho: '0%',
      comandosMentor: 'Carregando...',
      materiais: mockMateriais,
    });
    setIsModalOpen(true);
    console.log('7. Modal aberto!');
    
    try {
      console.log('8. Iniciando requisição API...');
      // Buscar detalhes da meta na API
      const metaDetail = await sprintDetailService.getMetaDetail(sprintId, item.id);
      console.log('9. ✅ Resposta da API recebida:', metaDetail);
      
      // Mapear relevância: 1-3 (API) -> 'low' | 'medium' | 'high' (Modal)
      const getRelevancia = (relevanciaNum: number): 'low' | 'medium' | 'high' => {
        if (relevanciaNum >= 3) return 'high';
        if (relevanciaNum >= 2) return 'medium';
        return 'low';
      };

      // Mapear status: normalizar para 'pendente' | 'concluida'
      const normalizeStatus = (status: string): 'pendente' | 'concluida' => {
        const normalizedStatus = status
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        
        return normalizedStatus === 'concluida' || normalizedStatus === 'concluido' 
          ? 'concluida' 
          : 'pendente';
      };

      // Atualiza com os dados reais da API
      setSelectedMeta({
        title: metaDetail.disciplina,
        status: normalizeStatus(metaDetail.status),
        assunto: metaDetail.assunto,
        relevancia: getRelevancia(metaDetail.relevancia),
        tipoEstudo: metaDetail.tipoEstudo,
        desempenho: `${metaDetail.desempenho}%`,
        comandosMentor: metaDetail.comandosMentor,
        materiais: mockMateriais, // TODO: Adicionar quando a API retornar os materiais
      });
    } catch (error) {
      console.error('Erro ao buscar detalhes da meta:', error);
      // Em caso de erro, atualiza com dados básicos
      setSelectedMeta({
        title: item.title,
        status: item.isCompleted ? 'concluida' : 'pendente',
        assunto: 'Não disponível',
        relevancia: 'medium',
        tipoEstudo: 'Não disponível',
        desempenho: '0%',
        comandosMentor: 'Não disponível',
        materiais: mockMateriais,
      });
    }
  };

  return (
    <div className="flex flex-col" style={{ gap: '24px' }}>
      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="underline"
        size="sm"
      />

      {/* Topics/Reviews List */}
      <div className="flex flex-col" style={{ gap: '16px' }}>
        {activeTab === 'topics' ? (
          currentItems.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              isCompleted={topic.isCompleted}
              onViewDetails={() => handleOpenModal(topic)}
            />
          ))
        ) : (
          currentItems.map((review) => (
            <ReviewCard
              key={review.id}
              title={review.title}
              isCompleted={review.isCompleted}
              onViewDetails={() => handleOpenModal(review)}
            />
          ))
        )}
      </div>

      {/* Meta Details Modal */}
      {selectedMeta && (
        <MetaDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          metaTitle={selectedMeta.title}
          status={selectedMeta.status}
          assunto={selectedMeta.assunto}
          relevancia={selectedMeta.relevancia}
          tipoEstudo={selectedMeta.tipoEstudo}
          desempenho={selectedMeta.desempenho}
          comandosMentor={selectedMeta.comandosMentor}
          materiais={selectedMeta.materiais}
        />
      )}
    </div>
  );
};
