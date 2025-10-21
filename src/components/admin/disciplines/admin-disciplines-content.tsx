import React, { useState, useEffect } from 'react';
import { AdminDisciplinesHeader, AdminDisciplinesSearch } from './components';
import { Tabs } from '../../ui/design-system/Tabs';
import { AdminDisciplinesGrid } from './tables';
import { AdminPagination } from '../../ui/admin-pagination';
import { DisciplineRegistrationModal, DisciplineViewModal } from './modals';
import { AdminEntitySkeleton } from '../shared/admin-entity-skeleton';
import { SuccessNotification } from '../../ui/success-notification';
import { ErrorNotification } from '../../ui/error-notification';
import { adminDisciplinesService, Disciplina, PaginationParams, PaginatedResponse } from '../../../services/api/admin-disciplines.service';

export const AdminDisciplinesContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedDisciplines, setCheckedDisciplines] = useState<string[]>([]);
  const [disciplinesStatus, setDisciplinesStatus] = useState<Record<string, 'active' | 'inactive'>>({});

  // Configuração das tabs
  const tabs = [
    { id: 'all', label: 'Todas as disciplinas' },
    { id: 'active', label: 'Disciplinas ativas' },
    { id: 'inactive', label: 'Disciplinas inativas' },
    { id: 'copies', label: 'Disciplinas - cópias' }
  ];
  
  // Estados para API
  const [disciplines, setDisciplines] = useState<Disciplina[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 5
  });

  // Função para buscar disciplinas com paginação
  const fetchDisciplines = async () => {
    try {
      setLoading(true);
      
      const params: PaginationParams = {
        page: currentPage,
        limit: 5,
        search: searchTerm || undefined,
        status: activeTab === 'all' ? undefined : activeTab as 'active' | 'inactive'
      };

      const response: PaginatedResponse<Disciplina> = await adminDisciplinesService.getDisciplinesPaginated(params);
      
      setDisciplines(response.data);
      
      // Mapear status das disciplinas
      const statusMap: Record<string, 'active' | 'inactive'> = {};
      response.data.forEach(discipline => {
        statusMap[discipline.idDisciplina.toString()] = discipline.status ? 'active' : 'inactive';
      });
      console.log('📊 Status das disciplinas mapeados:', statusMap);
      setDisciplinesStatus(statusMap);
      
      setPagination({
        currentPage: response.pagination.currentPage,
        totalPages: response.pagination.totalPages,
        totalItems: response.pagination.totalItems,
        itemsPerPage: response.pagination.itemsPerPage
      });
      
    } catch (err: any) {
      console.error('Erro ao buscar disciplinas:', err);
    } finally {
      setLoading(false);
    }
  };

  // Buscar disciplinas da API quando página, aba ou busca mudarem
  useEffect(() => {
    fetchDisciplines();
  }, [currentPage, activeTab, searchTerm]);

  // Reset página quando filtros mudarem
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchTerm]);

  // As disciplinas já vêm paginadas e filtradas da API
  const filteredDisciplines = disciplines;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<number | null>(null);
  const [editInitialData, setEditInitialData] = useState<{
    nome: string;
    assuntos: { id: number; nome: string; codigo: string }[];
  } | null>(null);
  
  // Estados para notificações
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddDiscipline = () => {
    setIsModalOpen(true);
  };


  const handleModalSuccess = () => {
    fetchDisciplines();
    setIsModalOpen(false);
    
    // Mostrar notificação de sucesso com delay para garantir que o modal feche primeiro
    setTimeout(() => {
      setSuccessMessage('A disciplina foi cadastrada com sucesso!');
      setShowSuccessNotification(true);
      
      // Esconder notificação após 3 segundos
      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 3000);
    }, 100);
  };

  const handleEditSuccess = () => {
    fetchDisciplines();
    setIsEditModalOpen(false);
    setEditInitialData(null);
    setSelectedDisciplineId(null);
    
    // Mostrar notificação de sucesso com delay
    setTimeout(() => {
      setSuccessMessage('A disciplina foi atualizada com sucesso!');
      setShowSuccessNotification(true);
      
      // Esconder notificação após 3 segundos
      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 3000);
    }, 100);
  };

  const handleViewDiscipline = (disciplineId: string | number) => {
    const id = typeof disciplineId === 'string' ? parseInt(disciplineId) : disciplineId;
    setSelectedDisciplineId(id);
    setIsViewModalOpen(true);
  };

  const handleEditDiscipline = (disciplineId: string | number) => {
    const id = typeof disciplineId === 'string' ? parseInt(disciplineId) : disciplineId;
    const discipline = disciplines.find(d => d.idDisciplina === id);
    if (discipline) {
      setEditInitialData({
        nome: discipline.nome,
        assuntos: [] // Disciplina não tem assuntos na interface básica
      });
      setSelectedDisciplineId(id);
      setIsEditModalOpen(true);
    }
  };

  const handleAddSubjects = (disciplineId: string | number) => {
    const id = typeof disciplineId === 'string' ? parseInt(disciplineId) : disciplineId;
    console.log('Adicionar assuntos para disciplina:', id);
  };

  const handleDuplicateDiscipline = (disciplineId: string | number) => {
    const id = typeof disciplineId === 'string' ? parseInt(disciplineId) : disciplineId;
    console.log('Duplicar disciplina:', id);
  };

  const handleDeleteDiscipline = (disciplineId: string | number) => {
    const id = typeof disciplineId === 'string' ? parseInt(disciplineId) : disciplineId;
    console.log('Deletar disciplina:', id);
  };

  const handleToggleCheckbox = (disciplineId: string) => {
    setCheckedDisciplines(prev => 
      prev.includes(disciplineId) 
        ? prev.filter(id => id !== disciplineId)
        : [...prev, disciplineId]
    );
  };

  const handleToggleStatus = async (disciplineId: string) => {
    try {
      const newStatus = disciplinesStatus[disciplineId] === 'active' ? 'inactive' : 'active';
      const isActive = newStatus === 'active';
      
      await adminDisciplinesService.updateDisciplineStatus(parseInt(disciplineId), isActive);
      
      setDisciplinesStatus(prev => ({
        ...prev,
        [disciplineId]: newStatus
      }));
      
      console.log('Status da disciplina atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar status da disciplina');
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
      className="admin-disciplines-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        width: '100%'
      }}
    >
      {/* Header Section */}
      <AdminDisciplinesHeader
        totalCount={pagination.totalItems}
        onDisciplineCreated={fetchDisciplines}
        onModalSuccess={handleModalSuccess}
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
        <AdminDisciplinesSearch 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>

      {/* Disciplines Grid */}
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
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          width: '100%',
          minHeight: '572px'
        }}>
          <AdminDisciplinesGrid
            disciplines={filteredDisciplines}
            disciplinesStatus={disciplinesStatus}
            onViewDiscipline={handleViewDiscipline}
            onEdit={handleEditDiscipline}
            onAddSubjects={handleAddSubjects}
            onDuplicate={handleDuplicateDiscipline}
            onDelete={handleDeleteDiscipline}
            onToggleCheckbox={handleToggleCheckbox}
            onToggleStatus={handleToggleStatus}
            checkedDisciplines={checkedDisciplines}
            onAddDiscipline={handleAddDiscipline}
          />
        </div>
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

      {/* Modals */}
      <DisciplineRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
      {selectedDisciplineId && editInitialData && (
        <DisciplineRegistrationModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditInitialData(null);
            setSelectedDisciplineId(null);
          }}
          onSuccess={handleEditSuccess}
          isEditMode={true}
          disciplineId={selectedDisciplineId}
          initialData={editInitialData}
        />
      )}
      {selectedDisciplineId && (
        <DisciplineViewModal
          isOpen={isViewModalOpen}
          onClose={() => {
            setIsViewModalOpen(false);
            setSelectedDisciplineId(null);
          }}
          disciplineId={selectedDisciplineId}
          onEditSuccess={handleEditSuccess}
        />
      )}

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