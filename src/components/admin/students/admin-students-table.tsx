import React, { useState, useEffect } from 'react';
import { Table } from '@/components/ui/design-system';
import { TableColumn } from '@/types/table';
import { adminStudentsService, Aluno } from '@/services/api';
import { ErrorFeedback } from '@/components/ui/error-feedback';
import { EmptyStudentsState } from '@/components/ui/empty-students-state';
import { AdminPagination } from '@/components/ui/admin-pagination';
import { TableLoading } from '@/components/ui/table-loading';

// Declaração de tipos para JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Ícones SVG inline
const SearchMdIcon = (props: any) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

// Checkbox personalizado baseado no Figma
const CustomCheckbox: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
}> = ({ checked, onChange, size = 20 }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => onChange(!checked)}
    >
      {/* Container do checkbox */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: checked ? '#C74228' : 'transparent',
          border: '2px solid #2C2C45',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          position: 'relative',
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          if (!checked) {
            e.currentTarget.style.borderColor = '#C74228';
            e.currentTarget.style.background = '#2D2D45';
          }
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          if (!checked) {
            e.currentTarget.style.borderColor = '#2C2C45';
            e.currentTarget.style.background = 'transparent';
          }
        }}
      >
        {/* Checkmark */}
        {checked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <path
              d="M2 6L4.5 8.5L10 3"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

const EyeIcon = (props: any) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const MoreVerticalIcon = (props: any) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z" fill="currentColor"/>
    <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="currentColor"/>
    <path d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" fill="currentColor"/>
  </svg>
);

// Usar a interface Aluno da API
type Student = Aluno;

interface AdminStudentsTableProps {
  refreshTrigger?: number; // Prop para forçar refresh
  onAddStudent?: () => void; // Callback para adicionar aluno
}

export const AdminStudentsTable: React.FC<AdminStudentsTableProps> = ({ refreshTrigger, onAddStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    pagina: 1,
    limite: 10,
    total: 0,
    totalPaginas: 0
  });

  // Buscar dados da API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Só ativar loading geral se não for paginação
        if (!paginationLoading) {
          setLoading(true);
        }
        
        // Adicionar delay artificial para mostrar o loading
        if (paginationLoading) {
          await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        const response = await adminStudentsService.getStudents({
          pagina: pagination.pagina,
          limite: pagination.limite
        });
        
        // A API agora retorna um objeto com alunos e paginacao
        if (response.alunos && Array.isArray(response.alunos)) {
          
          setStudents(response.alunos);
          
          if (response.paginacao) {
            setPagination(response.paginacao);
          } else {
            // Fallback se não houver dados de paginação
            setPagination(prev => ({
              ...prev,
              total: response.alunos.length,
              totalPaginas: Math.ceil(response.alunos.length / prev.limite)
            }));
          }
        } else {
          console.error('❌ Estrutura de resposta inválida:', response);
          setStudents([]);
        }
      } catch (err: any) {
        console.error('Erro ao buscar alunos:', err);
        setError(err.message || 'Erro ao carregar alunos');
      } finally {
        setLoading(false);
        setPaginationLoading(false);
      }
    };

    fetchStudents();
  }, [pagination.pagina, pagination.limite, refreshTrigger]);

  const filteredStudents = students.filter(student => {
    if (!searchTerm.trim()) return true;
    
    const searchLower = searchTerm.toLowerCase().trim();
    
    // Buscar no nome completo (nome + sobrenome)
    const nomeCompleto = student.nomeAluno ? student.nomeAluno.toLowerCase() : '';
    const nomeMatch = nomeCompleto.includes(searchLower);
    
    // Buscar por partes do nome (nome ou sobrenome separadamente)
    const partesNome = nomeCompleto.split(' ');
    const nomeParteMatch = partesNome.some(parte => parte.includes(searchLower));
    
    // Buscar no email
    const emailMatch = student.emailAluno ? student.emailAluno.toLowerCase().includes(searchLower) : false;
    
    // Buscar no CPF (com ou sem formatação)
    const cpfMatch = student.cpfAluno ? 
      student.cpfAluno.replace(/\D/g, '').includes(searchLower.replace(/\D/g, '')) : false;
    
    // Buscar no plano ativo
    const planoMatch = student.planoAtivo ? 
      student.planoAtivo.toLowerCase().includes(searchLower) : false;
    
    // Buscar no status
    const statusMatch = student.status ? 
      student.status.toLowerCase().includes(searchLower) : false;
    
    const matches = nomeMatch || nomeParteMatch || emailMatch || cpfMatch || planoMatch || statusMatch;
    
    // Debug para verificar por que "Galibi" e "fabricia" estão aparecendo
    if (searchLower === 'integração' && (student.nomeAluno?.toLowerCase().includes('galibi') || student.nomeAluno?.toLowerCase().includes('fabricia'))) {
      console.log('🔍 DEBUG - Aluno problemático:', {
        nome: student.nomeAluno,
        email: student.emailAluno,
        cpf: student.cpfAluno,
        plano: student.planoAtivo,
        status: student.status,
        searchTerm: searchLower,
        nomeMatch,
        nomeParteMatch,
        emailMatch,
        cpfMatch,
        planoMatch,
        statusMatch,
        matches
      });
    }
    
    return matches;
  });

  // A paginação agora é feita pela API, então usamos filteredStudents diretamente
  const paginatedStudents = filteredStudents;


  // Funções de paginação
  const handlePreviousPage = () => {
    if (pagination.pagina > 1 && !paginationLoading) {
      setPaginationLoading(true);
      setPagination(prev => ({ ...prev, pagina: prev.pagina - 1 }));
    }
  };

  const handleNextPage = () => {
    if (pagination.pagina < pagination.totalPaginas && !paginationLoading) {
      setPaginationLoading(true);
      setPagination(prev => ({ ...prev, pagina: prev.pagina + 1 }));
    }
  };

  const handlePageChange = (page: number) => {
    if (!paginationLoading) {
      setPaginationLoading(true);
      setPagination(prev => ({ ...prev, pagina: page }));
    }
  };

  const handleSelectStudent = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  // Configuração das colunas da tabela
  const columns: TableColumn<Student>[] = [
    {
      key: 'select',
      title: '',
      width: '60px',
      align: 'center',
      render: (_, record: Student) => (
        <CustomCheckbox
          checked={selectedStudents.includes(record.idAluno.toString())}
          onChange={() => handleSelectStudent(record.idAluno.toString())}
          size={20}
        />
      )
    },
    {
      key: 'nomeAluno',
      title: 'Nome do usuário',
      width: '25%',
      render: (_, record: Student) => (
        <span style={{
          color: '#F7F7F7',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0px',
        }}>
          {record.nomeAluno}
        </span>
      )
    },
    {
      key: 'emailAluno',
      title: 'E-mail',
      width: '25%',
      align: 'center',
      render: (_, record: Student) => (
        <span style={{
          color: '#F7F7F7',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0px',
        }}>
          {record.emailAluno}
        </span>
      )
    },
    {
      key: 'cpfAluno',
      title: 'CPF',
      width: '15%',
      align: 'center',
      render: (_, record: Student) => (
        <span style={{
          color: '#F7F7F7',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0px',
        }}>
          {record.cpfAluno || 'Não preenchido'}
        </span>
      )
    },
    {
      key: 'planoAtivo',
      title: 'Plano atual',
      width: '15%',
      align: 'center',
      render: (_, record: Student) => (
        <span style={{
          color: '#F7F7F7',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0px',
        }}>
          {record.planoAtivo || 'Nenhum'}
        </span>
      )
    },
    {
      key: 'dataCadastro',
      title: 'Iniciou em',
      width: '12%',
      align: 'center',
      render: (_, record: Student) => (
        <span style={{
          color: '#F7F7F7',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0px',
        }}>
          {record.dataCadastro ? new Date(record.dataCadastro).toLocaleDateString('pt-BR') : '-'}
        </span>
      )
    },
    {
      key: 'status',
      title: 'Status',
      width: '10%',
      align: 'center',
      render: (_, record: Student) => (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 8px',
          borderRadius: '16px',
          background: record.status === 'ativo' ? '#243D2A' : '#5B5B5B',
          color: record.status === 'ativo' ? '#3DC462' : '#E0E0E0',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0%',
          textAlign: 'center',
          border: 'none',
          minWidth: '50px',
          height: '20px',
        }}>
          {record.status === 'ativo' ? 'Ativo' : 'Inativo'}
        </span>
      )
    },
    {
      key: 'actions',
      title: 'Ações',
      width: '8%',
      align: 'center',
      render: (_, record: Student) => (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
        }}>
          <button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '6px',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: '#94979C',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              width: '28px',
              height: '28px',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#2D2D3B';
              e.currentTarget.style.color = '#CECFD2';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#94979C';
            }}
            onClick={() => console.log('Ver detalhes:', record.idAluno)}
          >
            <MoreVerticalIcon />
          </button>
          <button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '6px',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: '#94979C',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              width: '28px',
              height: '28px',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#2D2D3B';
              e.currentTarget.style.color = '#CECFD2';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#94979C';
            }}
            onClick={() => console.log('Visualizar:', record.idAluno)}
          >
            <EyeIcon />
          </button>
        </div>
      )
    }
  ];

  // Debug logs

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0',
          background: 'transparent',
        }}
      >
        <h2
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '20px', // text-xl
            lineHeight: '28px', // Line height/text-xl
            letterSpacing: '0%',
            color: '#F7F7F7',
            margin: 0,
          }}
        >
          Alunos cadastrados ({pagination.total.toLocaleString()})
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            width: '596px',
            height: '40px',
            opacity: 1,
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <SearchMdIcon style={{ position: 'absolute', left: '12px', color: '#94979C', width: '16px', height: '16px' }} />
            <input
              type="text"
              placeholder="Buscar por nome, sobrenome, e-mail, CPF, plano ou status..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                padding: '12px 16px 12px 40px',
                background: '#2D2D3B',
                border: '1px solid #2C2C45',
                borderRadius: '8px',
                color: '#F7F7F7',
                fontFamily: 'Inter',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.01em',
                outline: 'none',
                boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.currentTarget.style.borderColor = '#C74228';
                e.currentTarget.style.boxShadow = '0px 0px 0px 2px rgba(199, 66, 40, 0.2)';
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                e.currentTarget.style.borderColor = '#2C2C45';
                e.currentTarget.style.boxShadow = '0px 2px 4px 0px rgba(0, 0, 0, 0.1)';
              }}
            />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div
        style={{
          background: '#252532',
          border: '1px solid #2C2C45',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Tabela usando o componente Table */}
        {loading ? (
          <TableLoading columns={columns.length} rows={pagination.limite} />
        ) : error ? (
          <div style={{
            padding: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ErrorFeedback 
              message="Erro ao carregar alunos"
              description={`${error}. Verifique sua conexão e tente novamente.`}
              onRetry={() => window.location.reload()}
            />
          </div>
        ) : students.length === 0 ? (
          <EmptyStudentsState onAddStudent={onAddStudent || (() => {})} />
        ) : (
          <>


            {paginationLoading ? (
              <TableLoading columns={columns.length} rows={pagination.limite} />
            ) : (
              <Table
                columns={columns}
                data={paginatedStudents}
                screenSize="desktop"
                loading={loading}
              />
            )}
            

            {/* Pagination - só mostra se houver dados */}
            {students.length > 0 && (
              <div
                style={{
                  background: '#252532',
                  borderRadius: '0 0 12px 12px',
                  border: '1px solid #2C2C45',
                  borderTop: 'none',
                }}
              >
                <AdminPagination 
                  currentPage={pagination.pagina}
                  totalPages={pagination.totalPaginas}
                  onPageChange={handlePageChange}
                  onPreviousPage={handlePreviousPage}
                  onNextPage={handleNextPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};