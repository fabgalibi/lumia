import React, { useState } from 'react';
import { Table } from '@/components/ui/design-system';
import { TableColumn } from '@/types/table';

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

interface Student {
  id: string;
  name: string;
  email: string;
  cpf: string;
  currentPlan: string;
  startedOn: string;
  status: 'Ativo' | 'Inativo';
}

const mockStudents: Student[] = [
  { id: '1', name: 'Fernanda Albuquerque da Silva', email: 'fernanda.silva.albuquerque@gmail.com', cpf: '032.654.981-40', currentPlan: 'Polícia Federal', startedOn: '14/02/2024', status: 'Ativo' },
  { id: '2', name: 'Roberto Henrique Monteiro Filho', email: 'roberto.monteiro.filho@gmail.com', cpf: 'Não preenchido', currentPlan: 'Nenhum', startedOn: '14/02/2024', status: 'Inativo' },
  { id: '3', name: 'Juliana Costa Pereira Andrade', email: 'juliana.p.andrade@gmail.com', cpf: '248.316.579-92', currentPlan: 'Polícia Federal', startedOn: '14/02/2024', status: 'Ativo' },
  { id: '4', name: 'Marcelo Augusto Fernandes Lima', email: 'marcelo.a.lima@gmail.com', cpf: 'Não preenchido', currentPlan: 'Nenhum', startedOn: '14/02/2024', status: 'Ativo' },
  { id: '5', name: 'Patrícia Regina Duarte Campos', email: 'patricia.r.campos@gmail.com', cpf: 'Não preenchido', currentPlan: 'Nenhum', startedOn: '14/02/2024', status: 'Inativo' },
  { id: '6', name: 'Rafael Domingos Oliveira Souza', email: 'rafael.d.oliveira@gmail.com', cpf: '581.473.206-18', currentPlan: 'Nenhum', startedOn: '14/02/2024', status: 'Ativo' },
  { id: '7', name: 'Carolina Beatriz Nogueira Martins', email: 'carolina.b.martins@gmail.com', cpf: '692.805.134-03', currentPlan: 'Polícia Federal', startedOn: '14/02/2024', status: 'Ativo' },
  { id: '8', name: 'Carolina Beatriz Nogueira Martins', email: 'carolina.b.martins@gmail.com', cpf: '692.805.134-03', currentPlan: 'Polícia Federal', startedOn: '14/02/2024', status: 'Ativo' },
];

export const AdminStudentsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
      title: (
        <CustomCheckbox
          checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
          onChange={(checked) => {
            if (checked) {
              setSelectedStudents(filteredStudents.map(student => student.id));
            } else {
              setSelectedStudents([]);
            }
          }}
          size={20}
        />
      ),
      width: '60px',
      align: 'center',
      render: (_, record: Student) => (
        <CustomCheckbox
          checked={selectedStudents.includes(record.id)}
          onChange={() => handleSelectStudent(record.id)}
          size={20}
        />
      )
    },
    {
      key: 'name',
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
          {record.name}
        </span>
      )
    },
    {
      key: 'email',
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
          {record.email}
        </span>
      )
    },
    {
      key: 'cpf',
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
          {record.cpf}
        </span>
      )
    },
    {
      key: 'currentPlan',
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
          {record.currentPlan}
        </span>
      )
    },
    {
      key: 'startedOn',
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
          {record.startedOn}
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
          background: record.status === 'Ativo' ? '#243D2A' : '#5B5B5B',
          color: record.status === 'Ativo' ? '#3DC462' : '#E0E0E0',
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
          {record.status}
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
          gap: '8px',
        }}>
          <button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: '#CECFD2',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#3A3A4A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#CECFD2';
            }}
            onClick={() => console.log('Ver detalhes:', record.id)}
          >
            <MoreVerticalIcon />
          </button>
          <button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: '#CECFD2',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#3A3A4A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#CECFD2';
            }}
            onClick={() => console.log('Visualizar:', record.id)}
          >
            <EyeIcon />
          </button>
        </div>
      )
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0 16px 0',
          background: 'transparent',
          borderRadius: '12px 12px 0 0',
          border: 'none',
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
          Alunos cadastrados (1.999.999)
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            width: '596px',
            height: '40px',
            opacity: 1,
            angle: '0deg',
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
              placeholder="Buscar aluno, e-mail, etc..."
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
          borderTop: 'none',
          borderBottom: 'none',
          borderRadius: '0',
          overflow: 'hidden',
        }}
      >
        {/* Tabela usando o componente Table */}
        <Table
          columns={columns}
          data={filteredStudents}
          screenSize="desktop"
        />
      </div>

      {/* Pagination */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          background: '#252532',
          borderRadius: '0 0 12px 12px',
          border: '1px solid #2C2C45',
          borderTop: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <button
          style={{
              background: '#363946',
              border: 'none',
              borderRadius: '6px',
            padding: '8px 12px',
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
            cursor: 'not-allowed',
              transition: 'all 0.2s ease',
          }}
        >
          Anterior
        </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <button
              style={{
                background: '#4A4C60',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 12px',
                minWidth: '32px',
                height: '32px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              1
            </button>
            
            <span style={{
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
              padding: '0 8px',
            }}>2</span>
            
            <span style={{
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
              padding: '0 8px',
            }}>3</span>
            
            <span style={{
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
              padding: '0 8px',
            }}>...</span>
            
            <span style={{
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
              padding: '0 8px',
            }}>8</span>
            
            <span style={{
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
              padding: '0 8px',
            }}>9</span>
            
            <span style={{
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
              padding: '0 8px',
            }}>10</span>
        </div>
          
        <button
          style={{
              background: '#993D2B',
              border: 'none',
              borderRadius: '6px',
            padding: '8px 12px',
            color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
            cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#B03A20';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#993D2B';
          }}
        >
          Próxima
        </button>
        </div>
      </div>
    </div>
  );
};