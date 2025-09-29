import React from 'react';
import { colors, spacing, type ScreenSize } from './tokens';
import { Text } from './Text';
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
  style,
  screenSize = 'desktop'
}: TableComponentProps<T>) => {

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'transparent', // Transparente pois o container já tem o fundo
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: 'transparent', // Header com mesma cor do body
    borderTop: `1px solid #2C2C45`, // border-top-width: 1px
    borderBottom: `1px solid #2C2C45`, // border-bottom-width: 1px
  };

  const headerCellStyle: React.CSSProperties = {
    height: '44px', // Altura específica do Figma
    padding: '12px 16px', // spacing-lg (12px) top/bottom, 16px left/right
    textAlign: 'left',
    borderTop: `1px solid #2C2C45`, // border-top-width: 1px
    borderBottom: `1px solid #2C2C45`, // border-bottom-width: 1px
    opacity: 1, // opacity: 1
    boxSizing: 'border-box',
  };

  const rowStyle: React.CSSProperties = {
    transition: 'background-color 0.2s ease',
  };

  const cellStyle: React.CSSProperties = {
    height: '72px', // Altura específica do Figma
    padding: '20px 16px', // spacing-xl (20px) top/bottom, 16px left/right
    borderBottom: `1px solid rgba(44, 44, 69, 1)`, // border-bottom específico
    backgroundColor: 'transparent',
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

  const getCellAlignment = (align?: string): React.CSSProperties => {
    const alignment = align as any || 'left';
    return {
      textAlign: alignment,
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
        <Text 
          variant="body" 
          color={colors.text.secondary}
          screenSize={screenSize}
        >
          Carregando...
        </Text>
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
        <Text 
          variant="body" 
          color={colors.text.secondary}
          screenSize={screenSize}
        >
          {emptyText}
        </Text>
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
                         ...getCellAlignment(column.align),
                         width: column.width,
                       }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: column.align === 'center' ? 'center' : column.align === 'right' ? 'flex-end' : 'flex-start',
                  gap: '12px',
                  height: '100%'
                }}>
                  <Text
                    variant="label"
                    weight="semibold"
                    color={colors.text.primary}
                    screenSize={screenSize}
                  >
                    {column.title}
                  </Text>
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
                backgroundColor: 'transparent', // Fundo transparente baseado no Figma
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1A1D23'; // Hover sutil
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{
                    ...cellStyle,
                    width: column.width,
                    ...getCellAlignment(column.align),
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
