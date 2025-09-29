import React from 'react';
import { Table, Text, colors } from '@/components/ui/design-system';
import { TableColumn, User, Contest } from '@/types/table';

// Exemplo 1: Tabela de Usuários
const usersData: User[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    role: 'Admin',
    status: 'active',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
    role: 'User',
    status: 'inactive',
    createdAt: '2024-02-20'
  }
];

const userColumns: TableColumn<User>[] = [
  {
    key: 'name',
    title: 'Nome',
    dataIndex: 'name',
    width: '25%',
    render: (value: string) => (
      <div style={{ padding: '16px' }}>
        <Text variant="body" weight="medium" color={colors.text.primary}>
          {value}
        </Text>
      </div>
    )
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    width: '30%',
    render: (value: string) => (
      <div style={{ padding: '16px' }}>
        <Text variant="body" color={colors.text.secondary}>
          {value}
        </Text>
      </div>
    )
  },
  {
    key: 'role',
    title: 'Função',
    dataIndex: 'role',
    width: '15%',
    align: 'center',
    render: (value: string) => (
      <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <span style={{
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: value === 'Admin' ? '#FEF3C7' : '#E0F2FE',
          color: value === 'Admin' ? '#92400E' : '#0C4A6E'
        }}>
          {value}
        </span>
      </div>
    )
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    width: '15%',
    align: 'center',
    render: (value: string) => (
      <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <span style={{
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: value === 'active' ? '#D1FAE5' : '#FEE2E2',
          color: value === 'active' ? '#065F46' : '#991B1B'
        }}>
          {value === 'active' ? 'Ativo' : 'Inativo'}
        </span>
      </div>
    )
  },
  {
    key: 'createdAt',
    title: 'Criado em',
    dataIndex: 'createdAt',
    width: '15%',
    align: 'center',
    render: (value: string) => (
      <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <Text variant="body" color={colors.text.secondary}>
          {new Date(value).toLocaleDateString('pt-BR')}
        </Text>
      </div>
    )
  }
];

// Exemplo 2: Tabela de Concursos
const contestsData: Contest[] = [
  {
    id: '1',
    name: 'Concurso INSS 2024',
    institution: 'INSS',
    positions: 1000,
    deadline: '2024-06-15',
    status: 'open'
  },
  {
    id: '2',
    name: 'Concurso Receita Federal',
    institution: 'RFB',
    positions: 500,
    deadline: '2024-08-30',
    status: 'upcoming'
  }
];

const contestColumns: TableColumn<Contest>[] = [
  {
    key: 'name',
    title: 'Concurso',
    dataIndex: 'name',
    width: '30%',
    render: (value: string) => (
      <Text variant="body" weight="medium" color={colors.text.primary}>
        {value}
      </Text>
    )
  },
  {
    key: 'institution',
    title: 'Órgão',
    dataIndex: 'institution',
    width: '20%',
    render: (value: string) => (
      <Text variant="body" color={colors.text.secondary}>
        {value}
      </Text>
    )
  },
  {
    key: 'positions',
    title: 'Vagas',
    dataIndex: 'positions',
    width: '15%',
    align: 'center',
    render: (value: number) => (
      <Text variant="body" weight="medium" color={colors.text.primary}>
        {value.toLocaleString('pt-BR')}
      </Text>
    )
  },
  {
    key: 'deadline',
    title: 'Prazo',
    dataIndex: 'deadline',
    width: '20%',
    align: 'center',
    render: (value: string) => (
      <Text variant="body" color={colors.text.secondary}>
        {new Date(value).toLocaleDateString('pt-BR')}
      </Text>
    )
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    width: '15%',
    align: 'center',
    render: (value: string) => {
      const statusConfig = {
        open: { label: 'Aberto', bg: '#D1FAE5', color: '#065F46' },
        closed: { label: 'Fechado', bg: '#FEE2E2', color: '#991B1B' },
        upcoming: { label: 'Em breve', bg: '#FEF3C7', color: '#92400E' }
      };
      const config = statusConfig[value as keyof typeof statusConfig];
      
      return (
        <span style={{
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: config.bg,
          color: config.color
        }}>
          {config.label}
        </span>
      );
    }
  }
];

/**
 * Exemplos de uso do componente Table genérico
 * 
 * Este arquivo demonstra como usar o componente Table para diferentes tipos de dados:
 * - Tabela de usuários com status e badges
 * - Tabela de concursos com formatação de datas e números
 * - Customização de renderização de células
 * - Alinhamento de colunas
 * - Estados de loading e empty
 */
export const TableExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <Text variant="h2" weight="bold" color={colors.text.primary} style={{ marginBottom: '16px' }}>
          Exemplo 1: Tabela de Usuários
        </Text>
        <Table
          columns={userColumns}
          data={usersData}
          screenSize="desktop"
        />
      </div>

      <div>
        <Text variant="h2" weight="bold" color={colors.text.primary} style={{ marginBottom: '16px' }}>
          Exemplo 2: Tabela de Concursos
        </Text>
        <Table
          columns={contestColumns}
          data={contestsData}
          screenSize="desktop"
        />
      </div>

      <div>
        <Text variant="h2" weight="bold" color={colors.text.primary} style={{ marginBottom: '16px' }}>
          Exemplo 3: Estado de Loading
        </Text>
        <Table
          columns={userColumns}
          data={[]}
          loading={true}
          screenSize="desktop"
        />
      </div>

      <div>
        <Text variant="h2" weight="bold" color={colors.text.primary} style={{ marginBottom: '16px' }}>
          Exemplo 4: Estado Empty
        </Text>
        <Table
          columns={userColumns}
          data={[]}
          emptyText="Nenhum usuário encontrado"
          screenSize="desktop"
        />
      </div>
    </div>
  );
};

export default TableExamples;
