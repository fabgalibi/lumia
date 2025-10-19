import React, { useState, useEffect } from 'react';
import { AdminDisciplinesHeader, AdminDisciplinesSearch } from './components';
import { Tabs } from '../../ui/design-system/Tabs';
import { AdminDisciplinesGrid } from './tables';
import { AdminPagination } from '../../ui/admin-pagination';
import { DisciplineRegistrationModal } from './modals';
import { adminDisciplinesService, Disciplina, PaginationParams, PaginatedResponse } from '../../../services/api/admin-disciplines.service';

export const AdminDisciplinesContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedDisciplines, setCheckedDisciplines] = useState<string[]>([]);
  const [disciplinesStatus, setDisciplinesStatus] = useState<Record<string, 'active' | 'inactive'>>({});
  const [paginationLoading, setPaginationLoading] = useState(false);

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
      
      // Adicionar delay artificial para mostrar o loading de paginação
      if (paginationLoading) {
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      
      const params: PaginationParams = {
        pagina: currentPage,
        limite: 5,
        search: searchTerm || undefined,
        status: activeTab === 'all' ? undefined : activeTab as 'active' | 'inactive'
      };
      
      const response: PaginatedResponse<Disciplina> = await adminDisciplinesService.getDisciplinesPaginated(params);
      
      setDisciplines(response.data);
      setPagination(response.pagination);
      
      // Inicializar status das disciplinas baseado na API
      const initialStatus: Record<string, 'active' | 'inactive'> = {};
      response.data.forEach(disciplina => {
        initialStatus[disciplina.idDisciplina.toString()] = disciplina.status ? 'active' : 'inactive';
      });
      setDisciplinesStatus(initialStatus);
      
    } catch (err: any) {
      console.error('Erro ao buscar disciplinas:', err);
    } finally {
      setLoading(false);
      setPaginationLoading(false);
    }
  };

  // Buscar disciplinas da API quando página, aba ou busca mudarem
  useEffect(() => {
    fetchDisciplines();
  }, [currentPage, activeTab, searchTerm, paginationLoading]);

  // Reset página quando filtros mudarem (exceto paginationLoading)
  useEffect(() => {
    if (!paginationLoading) {
      setCurrentPage(1);
    }
  }, [activeTab, searchTerm]);

  // As disciplinas já vêm paginadas e filtradas da API
  const filteredDisciplines = disciplines;

  const handleViewDiscipline = (disciplineId: string) => {
    console.log('Visualizar disciplina:', disciplineId);
  };

  const handleOptionsClick = (disciplineId: string) => {
    console.log('Opções da disciplina:', disciplineId);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDiscipline = () => {
    setIsModalOpen(true);
  };

  const handleModalSuccess = () => {
    console.log('Disciplina cadastrada com sucesso!');
    fetchDisciplines();
    setIsModalOpen(false);
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
      const statusBoolean = newStatus === 'active';
      
      // Atualizar localmente primeiro (otimistic update)
      setDisciplinesStatus(prev => ({
        ...prev,
        [disciplineId]: newStatus
      }));
      
      // Chamar API para atualizar no servidor
      await adminDisciplinesService.updateDisciplineStatus(
        parseInt(disciplineId), 
        statusBoolean
      );
      
      console.log(`✅ Status da disciplina ${disciplineId} atualizado para ${newStatus}`);
      
    } catch (error) {
      console.error('❌ Erro ao atualizar status da disciplina:', error);
      
      // Reverter mudança local em caso de erro
      setDisciplinesStatus(prev => ({
        ...prev,
        [disciplineId]: prev[disciplineId] === 'active' ? 'inactive' : 'active'
      }));
      
      console.error('Erro ao atualizar status da disciplina');
    }
  };

  // Funções de paginação
  const handlePreviousPage = () => {
    if (pagination.currentPage > 1 && !paginationLoading) {
      console.log('🔄 Disciplinas - Iniciando loading paginação - Página anterior');
      setPaginationLoading(true);
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages && !paginationLoading) {
      console.log('🔄 Disciplinas - Iniciando loading paginação - Próxima página');
      setPaginationLoading(true);
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePageChange = (page: number) => {
    if (!paginationLoading) {
      console.log('🔄 Disciplinas - Iniciando loading paginação - Página:', page);
      setPaginationLoading(true);
      setCurrentPage(page);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '48px 80px 0',
      minHeight: 'calc(100vh - 120px)',
      maxWidth: '1440px',
      margin: '0 auto',
      width: '100%'
    }}>
      {/* Header Section */}
      <AdminDisciplinesHeader 
        totalCount={pagination.totalItems}
        onDisciplineCreated={fetchDisciplines}
      />

      {/* Tabs and Search Row */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '24px',
        width: '100%'
      }}>
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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(410px, 1fr))',
          gap: '24px',
          width: '100%',
          minHeight: '572px'
        }}>
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                padding: '16px',
                background: '#252532',
                border: '1px solid #2C2C45',
                borderRadius: '12px',
                width: '410.67px',
                height: '400px'
              }}
            >
              {/* Header skeleton */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'stretch',
                gap: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  gap: '24px',
                  padding: '16px',
                  background: '#191923',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                    borderRadius: '6px'
                  }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      width: '60%',
                      height: '16px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                    <div style={{
                      width: '40%',
                      height: '12px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                  </div>
                </div>
                
                {/* Content skeleton */}
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    gap: '6px'
                  }}>
                    <div style={{
                      width: '30%',
                      height: '14px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                    <div style={{
                      width: '40%',
                      height: '14px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                  </div>
                ))}
              </div>
              
              {/* Actions skeleton */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'stretch',
                gap: '16px'
              }}>
                <div style={{
                  flex: 1,
                  height: '40px',
                  background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '8px'
                }} />
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '8px'
                }} />
              </div>
            </div>
          ))}
        </div>
      ) : paginationLoading ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(410px, 1fr))',
          gap: '24px',
          width: '100%',
          minHeight: '572px'
        }}>
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                padding: '16px',
                background: '#252532',
                border: '1px solid #2C2C45',
                borderRadius: '12px',
                width: '410.67px',
                height: '400px'
              }}
            >
              {/* Header skeleton */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'stretch',
                gap: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  gap: '24px',
                  padding: '16px',
                  background: '#191923',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                    borderRadius: '6px'
                  }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      width: '60%',
                      height: '16px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                    <div style={{
                      width: '40%',
                      height: '12px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                  </div>
                </div>
                
                {/* Content skeleton */}
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    gap: '6px'
                  }}>
                    <div style={{
                      width: '30%',
                      height: '14px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                    <div style={{
                      width: '40%',
                      height: '14px',
                      background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                      borderRadius: '4px'
                    }} />
                  </div>
                ))}
              </div>
              
              {/* Actions skeleton */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'stretch',
                gap: '16px'
              }}>
                <div style={{
                  flex: 1,
                  height: '40px',
                  background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '8px'
                }} />
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(90deg, #363946 25%, #2D2D45 50%, #363946 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '8px'
                }} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <AdminDisciplinesGrid
          disciplines={filteredDisciplines}
          disciplinesStatus={disciplinesStatus}
          onViewDiscipline={handleViewDiscipline}
          onOptionsClick={handleOptionsClick}
          onToggleCheckbox={handleToggleCheckbox}
          onToggleStatus={handleToggleStatus}
          checkedDisciplines={checkedDisciplines}
          onAddDiscipline={handleAddDiscipline}
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

      {/* Modal de Cadastro de Disciplina */}
      <DisciplineRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
      
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};
