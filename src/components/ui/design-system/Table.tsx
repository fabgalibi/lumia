import React from 'react';
import { colors, spacing, typography, type ScreenSize } from './tokens';
import { TableProps, TableColumn } from '@/types/table';

interface TableComponentProps<T = any> extends TableProps<T> {
  screenSize?: ScreenSize;
}

/**
 * Componente de Tabela Genérico
 * 
 * Um componente de tabela reutilizável que suporta:
 * - Colunas customizáveis com renderização personalizada
 * - Responsividade
 * - Estados de loading e empty
 * - Alinhamento de conteúdo
 * - Estilos consistentes com o Design System
 */
export const Table = <T extends Record<string, any>>({
  columns,
  data,
  loading = false,
  emptyText = 'Nenhum dado encontrado',
  className,
  style
}: TableComponentProps<T>) => {

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'transparent', // Transparente pois o container já tem o fundo
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#252532', // Fundo da tabela
    borderTop: `1px solid #2C2C45`, // border-top-width: 1px
    borderBottom: `1px solid #2C2C45`, // border-bottom-width: 1px
  };

  const headerCellStyle: React.CSSProperties = {
    height: '48px', // Altura ajustada conforme Figma
    padding: '16px', // Padding uniforme
    textAlign: 'left',
    borderTop: `1px solid #2C2C45`, // border-top-width: 1px
    borderBottom: `1px solid #2C2C45`, // border-bottom-width: 1px
    opacity: 1, // opacity: 1
    boxSizing: 'border-box',
    backgroundColor: '#252532', // Fundo da tabela
    borderLeft: 'none',
    borderRight: 'none',
  };

  const rowStyle: React.CSSProperties = {
    transition: 'background-color 0.2s ease',
  };

  const cellStyle: React.CSSProperties = {
    height: '60px', // Altura ajustada conforme Figma
    padding: '16px', // Padding uniforme
    borderBottom: `1px solid #2C2C45`, // border-bottom específico
    backgroundColor: '#252532', // Fundo das células do corpo
    opacity: 1, // opacity: 1
    boxSizing: 'border-box',
  };

  const getCellContent = (column: TableColumn<T>, record: T, index: number) => {
    if (column.render) {
      return column.render(
        column.dataIndex ? record[column.dataIndex] : record,
        record,
        index
      );
    }
    
    // Fallback sem padding adicional - já controlado pelo cellStyle
    const content = column.dataIndex ? record[column.dataIndex] : '';
    return content;
  };

  const getCellAlignment = (): React.CSSProperties => {
    return {
      textAlign: 'left',
    };
  };

  if (loading) {
    return (
      <div
        className={className}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: spacing[12],
          ...style
        }}
      >
        <span style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.md,
          fontWeight: typography.fontWeight.regular,
          color: colors.text.secondary,
        }}>
          Carregando...
        </span>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div
        className={className}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: spacing[12],
          ...style
        }}
      >
        <span style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.md,
          fontWeight: typography.fontWeight.regular,
          color: colors.text.secondary,
        }}>
          {emptyText}
        </span>
      </div>
    );
  }

  return (
    <div 
      className={className} 
      style={{ 
        width: '100%',
        overflow: 'auto',
        ...style 
      }}
    >
      <table style={tableStyle}>
        {/* Header */}
        <thead>
          <tr style={headerStyle}>
            {columns.map((column) => (
              <th
                key={column.key}
                       style={{
                         ...headerCellStyle,
                         ...getCellAlignment(),
                         width: column.width,
                       }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'flex-start',
                  gap: '8px',
                  height: '100%'
                }}>
                  <span
                    style={{
                      fontSize: '11px',
                      lineHeight: '16px',
                      letterSpacing: '0.5px',
                      fontFamily: typography.fontFamily.secondary,
                      fontWeight: '600',
                      color: '#94979C',
                      textAlign: 'left',
                    }}
                  >
                    {column.title}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((record, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                ...rowStyle,
                backgroundColor: '#252532', // Fundo das linhas conforme Figma
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLTableRowElement>) => {
                e.currentTarget.style.backgroundColor = '#1A1D23'; // Hover sutil
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLTableRowElement>) => {
                e.currentTarget.style.backgroundColor = '#252532';
              }}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{
                    ...cellStyle,
                    width: column.width,
                    ...getCellAlignment(),
                  }}
                >
                  {getCellContent(column, record, rowIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
