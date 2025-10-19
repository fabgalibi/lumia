import React from 'react';

interface AdminPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const AdminPagination: React.FC<AdminPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPreviousPage,
  onNextPage
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 24px',
        position: 'relative',
        borderTop: '1px solid #22262F'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <button
          style={{
            background: currentPage <= 1 ? '#363946' : '#2D2D45',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 12px',
            color: currentPage <= 1 ? '#9CA3AF' : '#F7F7F7',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0px',
            cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
          }}
          onClick={onPreviousPage}
          disabled={currentPage <= 1}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (currentPage > 1) {
              e.currentTarget.style.background = '#363946';
            }
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (currentPage > 1) {
              e.currentTarget.style.background = '#2D2D45';
            }
          }}
        >
          Anterior
        </button>
          
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {/* Gerar números das páginas baseado no total de páginas */}
          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
            const pageNumber = i + 1;
            const isCurrentPage = pageNumber === currentPage;
            
            return (
              <button
                key={pageNumber}
                style={{
                  background: isCurrentPage ? '#2D2D45' : 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  minWidth: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: isCurrentPage ? '#F7F7F7' : '#9CA3AF',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '0px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => onPageChange(pageNumber)}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (!isCurrentPage) {
                    e.currentTarget.style.background = '#363946';
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (!isCurrentPage) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {pageNumber}
              </button>
            );
          })}
          
          {/* Mostrar reticências se houver mais de 10 páginas */}
          {totalPages > 10 && (
            <span style={{
              color: '#9CA3AF',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0px',
              padding: '0 8px',
            }}>...</span>
          )}
          
          {/* Mostrar última página se houver mais de 10 páginas */}
          {totalPages > 10 && (
            <button
              style={{
                background: currentPage === totalPages ? '#2D2D45' : 'transparent',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 12px',
                minWidth: '32px',
                height: '32px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: currentPage === totalPages ? '#F7F7F7' : '#9CA3AF',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          )}
        </div>
          
        <button
          style={{
            background: currentPage >= totalPages ? '#363946' : '#993D2B',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 12px',
            color: currentPage >= totalPages ? '#9CA3AF' : '#FFFFFF',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0px',
            cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
          }}
          onClick={onNextPage}
          disabled={currentPage >= totalPages}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (currentPage < totalPages) {
              e.currentTarget.style.background = '#B03A20';
            }
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (currentPage < totalPages) {
              e.currentTarget.style.background = '#993D2B';
            }
          }}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};
