import React, { useState, useEffect } from 'react';
import { AdminEntityHeader } from '../shared/admin-entity-header';
import { AdminEntitySearch } from '../shared/admin-entity-search';
import { Tabs } from '../../ui/design-system/Tabs';
import { AdminEntityGrid } from '../shared/admin-entity-grid';
import { AdminPagination } from '../../ui/admin-pagination';
import { AdminEntitySkeleton } from '../shared/admin-entity-skeleton';
import { SuccessNotification } from '../../ui/success-notification';
import { ErrorNotification } from '../../ui/error-notification';
import { adminPlansService, PlanoMestre, PaginationParams, PaginatedResponse } from '../../../services/api/admin-plans.service';

export const AdminPlansContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedPlans, setCheckedPlans] = useState<string[]>([]);
  const [plansStatus, setPlansStatus] = useState<Record<string, 'active' | 'inactive'>>({});

  // Configuração das tabs
  const tabs = [
    { id: 'all', label: 'Todos os planos' },
    { id: 'active', label: 'Planos ativos' },
    { id: 'inactive', label: 'Planos inativos' }
  ];

  // Estados para API
  const [plans, setPlans] = useState<PlanoMestre[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 5
  });

  // Função para buscar planos com paginação
  const fetchPlans = async () => {
    try {
      setLoading(true);

      const params: PaginationParams = {
        page: currentPage,
        limit: 5,
        search: searchTerm || undefined,
        status: activeTab === 'all' ? undefined : activeTab as 'active' | 'inactive'
      };

      const response: PaginatedResponse<PlanoMestre> = await adminPlansService.getPlansPaginated(params);

      setPlans(response.data);

      // Mapear status dos planos
      const statusMap: Record<string, 'active' | 'inactive'> = {};
      response.data.forEach(plan => {
        statusMap[plan.idPlanoMestre.toString()] = plan.status ? 'active' : 'inactive';
      });
      setPlansStatus(statusMap);
      setPagination({
        currentPage: response.pagination.currentPage,
        totalPages: response.pagination.totalPages,
        totalItems: response.pagination.totalItems,
        itemsPerPage: response.pagination.itemsPerPage
      });
      

    } catch (err: any) {
      console.error('Erro ao buscar planos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Buscar planos da API quando página, aba ou busca mudarem
  useEffect(() => {
    fetchPlans();
  }, [currentPage, activeTab, searchTerm]);

  // Reset página quando filtros mudarem
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchTerm]);

  // Os planos já vêm paginados e filtrados da API
  const filteredPlans = plans;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [editInitialData, setEditInitialData] = useState<{
    nome: string;
    nomeCargo: string;
  } | null>(null);

  // Estados para notificações
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddPlan = () => {
    setIsModalOpen(true);
  };

  const handleModalSuccess = () => {
    fetchPlans();
    setIsModalOpen(false);
    
    // Mostrar notificação de sucesso com delay para garantir que o modal feche primeiro
    setTimeout(() => {
      setSuccessMessage('O plano foi cadastrado com sucesso!');
      setShowSuccessNotification(true);
      
      // Esconder notificação após 3 segundos
      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 3000);
    }, 100);
  };

  const handleEditSuccess = () => {
    fetchPlans();
    setIsEditModalOpen(false);
    setEditInitialData(null);
    setSelectedPlanId(null);
    
    // Mostrar notificação de sucesso com delay
    setTimeout(() => {
      setSuccessMessage('O plano foi atualizado com sucesso!');
      setShowSuccessNotification(true);
      
      // Esconder notificação após 3 segundos
      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 3000);
    }, 100);
  };

  const handleViewPlan = (planId: string | number) => {
    const id = typeof planId === 'string' ? parseInt(planId) : planId;
    setSelectedPlanId(id);
    setIsViewModalOpen(true);
  };

  const handleEditPlan = (planId: string | number) => {
    const id = typeof planId === 'string' ? parseInt(planId) : planId;
    const plan = plans.find(p => p.idPlanoMestre === id);
    if (plan) {
      setEditInitialData({
        nome: plan.nome,
        nomeCargo: plan.nomeCargo
      });
      setSelectedPlanId(id);
      setIsEditModalOpen(true);
    }
  };

  const handleDuplicatePlan = (planId: string | number) => {
    const id = typeof planId === 'string' ? parseInt(planId) : planId;
    console.log('Duplicar plano:', id);
  };

  const handleDeletePlan = (planId: string | number) => {
    const id = typeof planId === 'string' ? parseInt(planId) : planId;
    console.log('Deletar plano:', id);
  };

  const handleToggleCheckbox = (planId: string) => {
    setCheckedPlans(prev =>
      prev.includes(planId)
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  const handleToggleStatus = async (planId: string) => {
    try {
      const newStatus = plansStatus[planId] === 'active' ? 'inactive' : 'active';
      const isActive = newStatus === 'active';

      await adminPlansService.updatePlanStatus(parseInt(planId), isActive);

      setPlansStatus(prev => ({
        ...prev,
        [planId]: newStatus
      }));
    } catch (error) {
      console.error('Erro ao atualizar status do plano', error);
    }
  };

  // Funções de paginação
  const handlePreviousPage = () => {
    if (pagination.currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div 
      className="admin-plans-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        width: '100%'
      }}
    >
      {/* Header Section */}
      <AdminEntityHeader
        title="Planos de Estudos"
        totalCount={pagination.totalItems}
        buttonText="Cadastrar novo plano"
        onEntityCreated={handleAddPlan}
      />

      {/* Tabs and Search Row */}
      <div
        className="tabs-search-row"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '24px',
          width: '100%'
        }}
      >
        {/* Tabs */}
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="underline"
          size="sm"
        />

        {/* Search */}
        <AdminEntitySearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar planos..."
        />
      </div>

      {/* Plans Grid */}
      {loading ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          width: '100%',
          minHeight: '572px'
        }}>
          {Array.from({ length: 5 }, (_, index) => (
            <AdminEntitySkeleton key={index} />
          ))}
        </div>
      ) : (
        <AdminEntityGrid
          entities={filteredPlans}
          entitiesStatus={plansStatus}
          checkedEntities={checkedPlans}
          onViewEntity={handleViewPlan}
          onEdit={handleEditPlan}
          onDuplicate={handleDuplicatePlan}
          onDelete={handleDeletePlan}
          onToggleCheckbox={handleToggleCheckbox}
          onToggleStatus={handleToggleStatus}
          onAddEntity={handleAddPlan}
          addText="Cadastrar novo plano"
          viewButtonText="Visualizar Plano"
          getIdField={(plan) => plan.idPlanoMestre}
          getAdditionalFields={(plan) => [
            { label: 'Disciplinas vinculadas', value: plan.totalDisciplinas === 0 ? 'Nenhuma' : `${plan.totalDisciplinas} (${plan.totalDisciplinas === 1 ? 'uma' : plan.totalDisciplinas === 2 ? 'duas' : plan.totalDisciplinas === 3 ? 'três' : plan.totalDisciplinas === 4 ? 'quatro' : plan.totalDisciplinas === 5 ? 'cinco' : plan.totalDisciplinas === 6 ? 'seis' : plan.totalDisciplinas === 7 ? 'sete' : plan.totalDisciplinas === 8 ? 'oito' : plan.totalDisciplinas === 9 ? 'nove' : plan.totalDisciplinas === 10 ? 'dez' : plan.totalDisciplinas.toString()})` },
            { label: 'Nome do cargo', value: plan.nomeCargo },
            { label: 'Criada em', value: new Date(plan.dataCriacao).toLocaleDateString('pt-BR', { 
              day: '2-digit', 
              month: '2-digit', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }) }
          ]}
          getOptionsMenuActions={(plan) => ({
            onEdit: () => handleEditPlan(plan.idPlanoMestre),
            onAddSubjects: undefined,
            onDuplicate: () => handleDuplicatePlan(plan.idPlanoMestre),
            onDelete: () => handleDeletePlan(plan.idPlanoMestre)
          })}
        />
      )}

      {/* Pagination */}
      {pagination.totalItems > 0 && (
        <AdminPagination 
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      )}

      {/* Modals - TODO: Implementar modais de planos */}

      {/* Notificações */}
      <SuccessNotification
        isOpen={showSuccessNotification}
        onClose={() => setShowSuccessNotification(false)}
        title="Sucesso!"
        message={successMessage}
      />

      <ErrorNotification
        isOpen={showErrorNotification}
        onClose={() => setShowErrorNotification(false)}
        title="Erro"
        message={errorMessage}
        autoCloseDelay={5000}
      />
    </div>
  );
};