import React, { useState } from 'react';

// Ícones SVG inline
const SearchMdIcon = (props: any) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const EyeIcon = (props: any) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Edit01Icon = (props: any) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const Trash01Icon = (props: any) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="3,6 5,6 21,6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
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

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedStudents(filteredStudents.map(student => student.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSelectStudent = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
      }}
    >
      {/* Filters Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          background: '#252532',
          borderRadius: '8px',
        }}
      >
        <h2
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '1.5em',
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
            gap: '8px',
            width: '300px',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <SearchMdIcon style={{ position: 'absolute', left: '12px', color: '#94979C', width: '20px', height: '20px' }} />
            <input
              type="text"
              placeholder="Buscar aluno, e-mail, etc..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 40px',
                background: '#2D2D3B',
                border: '1px solid #2D2D36',
                borderRadius: '8px',
                color: '#F7F7F7',
                fontFamily: 'Sora',
                fontSize: '16px',
                lineHeight: '1.5em',
                outline: 'none',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          background: '#252532',
          border: '1px solid #22262F',
          borderRadius: '12px',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
          overflowX: 'auto',
        }}
      >
        <div style={{ display: 'flex' }}>
          {/* Nome do usuário Column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                borderBottom: '1px solid #2C2C45',
              }}
            >
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                style={{
                  width: '20px',
                  height: '20px',
                  background: '#373A41',
                  border: '1px solid #373A41',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              />
              <span
                style={{
                  color: '#94979C',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                }}
              >
                Nome do usuário
              </span>
            </div>
            
            {/* Rows */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  borderBottom: '1px solid #2C2C45',
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => handleSelectStudent(student.id)}
                  style={{
                    width: '20px',
                    height: '20px',
                    background: '#373A41',
                    border: '1px solid #373A41',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                />
                <span
                  style={{
                    color: '#F7F7F7',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    flex: 1,
                  }}
                >
                  {student.name}
                </span>
              </div>
            ))}
          </div>

          {/* E-mail Column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 20px',
                borderBottom: '1px solid #2C2C45',
              }}
            >
              <span
                style={{
                  color: '#94979C',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                }}
              >
                E-mail
              </span>
            </div>
            
            {/* Rows */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 20px',
                  borderBottom: '1px solid #2C2C45',
                }}
              >
                <span
                  style={{
                    color: '#F7F7F7',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    textAlign: 'center',
                  }}
                >
                  {student.email}
                </span>
              </div>
            ))}
          </div>

          {/* CPF Column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 0.8 }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 20px',
                borderBottom: '1px solid #2C2C45',
              }}
            >
              <span
                style={{
                  color: '#94979C',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                }}
              >
                CPF
              </span>
            </div>
            
            {/* Rows */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 20px',
                  borderBottom: '1px solid #2C2C45',
                }}
              >
                <span
                  style={{
                    color: '#F7F7F7',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    textAlign: 'center',
                  }}
                >
                  {student.cpf}
                </span>
              </div>
            ))}
          </div>

          {/* Plano atual Column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 0.8 }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px',
                borderBottom: '1px solid #2C2C45',
              }}
            >
              <span
                style={{
                  color: '#94979C',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                }}
              >
                Plano atual
              </span>
            </div>
            
            {/* Rows */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 24px',
                  borderBottom: '1px solid #2C2C45',
                }}
              >
                <span
                  style={{
                    color: '#F7F7F7',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    textAlign: 'center',
                  }}
                >
                  {student.currentPlan}
                </span>
              </div>
            ))}
          </div>

          {/* Iniciou em Column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 0.6 }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px',
                borderBottom: '1px solid #2C2C45',
              }}
            >
              <span
                style={{
                  color: '#94979C',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                }}
              >
                Iniciou em
              </span>
            </div>
            
            {/* Rows */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 24px',
                  borderBottom: '1px solid #2C2C45',
                }}
              >
                <span
                  style={{
                    color: '#F7F7F7',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    textAlign: 'center',
                  }}
                >
                  {student.startedOn}
                </span>
              </div>
            ))}
          </div>

          {/* Status Column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 0.6 }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px',
                borderBottom: '1px solid #2C2C45',
              }}
            >
              <span
                style={{
                  color: '#94979C',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                }}
              >
                Status
              </span>
            </div>
            
            {/* Rows */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 24px',
                  borderBottom: '1px solid #2C2C45',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: student.status === 'Ativo' ? '2px 13px' : '2px 8px',
                    borderRadius: '9999px',
                    background: student.status === 'Ativo' ? '#243D2A' : '#5B5B5B',
                    color: student.status === 'Ativo' ? '#3DC462' : '#E0E0E0',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    border: '1px solid transparent',
                    backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                  }}
                >
                  {student.status}
                </span>
              </div>
            ))}
          </div>

          {/* Ações Column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 0.6 }}>
            {/* Header */}
            <div
              style={{
                padding: '16px 24px',
                borderBottom: '1px solid #2C2C45',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  color: '#94979C',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.5em',
                }}
              >
                Ações
              </span>
            </div>
            
            {/* Rows */}
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid #2C2C45',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    gap: '2px',
                    padding: '16px',
                  }}
                >
                  {/* Ícone de 3 Pontos */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z" fill="#FFFFFF"/>
                      <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="#FFFFFF"/>
                      <path d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  
                  {/* Ícone de Olho */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.61342 14.4754C7.52262 14.3317 7.47723 14.2598 7.45182 14.1489C7.43273 14.0656 7.43273 13.9343 7.45182 13.851C7.47723 13.7402 7.52262 13.6683 7.61341 13.5245C8.36369 12.3365 10.5969 9.33331 14.0003 9.33331C17.4036 9.33331 19.6369 12.3365 20.3871 13.5245C20.4779 13.6683 20.5233 13.7402 20.5487 13.851C20.5678 13.9343 20.5678 14.0656 20.5487 14.1489C20.5233 14.2598 20.4779 14.3317 20.3871 14.4754C19.6369 15.6634 17.4036 18.6666 14.0003 18.6666C10.5969 18.6666 8.36369 15.6634 7.61342 14.4754Z" stroke="#CECFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.0003 16C15.1048 16 16.0003 15.1045 16.0003 14C16.0003 12.8954 15.1048 12 14.0003 12C12.8957 12 12.0003 12.8954 12.0003 14C12.0003 15.1045 12.8957 16 14.0003 16Z" stroke="#CECFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          padding: '20px 24px',
          borderTop: '1px solid #22262F',
        }}
      >
        <button
          style={{
            background: '#2F343E',
            border: '1px solid #22262F',
            borderRadius: '8px',
            padding: '8px 12px',
            color: '#85888E',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.43em',
            cursor: 'not-allowed',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
          }}
        >
          Anterior
        </button>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
            <button
              key={index}
              style={{
                background: page === 1 ? '#2D2D45' : 'transparent',
                borderRadius: '8px',
                padding: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: page === 1 ? '#CECFD2' : '#94979C',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '1.43em',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          style={{
            background: '#7F3020',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
            borderRadius: '8px',
            padding: '8px 12px',
            color: '#FFFFFF',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.43em',
            cursor: 'pointer',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
          }}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};