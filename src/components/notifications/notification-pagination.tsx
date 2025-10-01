import React from 'react';

export interface NotificationPaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const NotificationPagination: React.FC<NotificationPaginationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext
}) => {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div style={{
      position: 'absolute',
      left: '12px',
      right: '12px',
      bottom: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 24px 16px',
      borderTop: '1px solid #424257',
      backgroundColor: '#2D2D45'
    }}>
      {/* Page details */}
      <span style={{
        fontFamily: 'Sora',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '1.4285714285714286em',
        color: '#CECFD2'
      }}>
        Página {currentPage} de {totalPages}
      </span>

      {/* Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '12px',
        flex: 1
      }}>
        {/* Previous button */}
        <button
          onClick={onPrevious}
          disabled={isPreviousDisabled}
          style={{
            width: '89px',
            height: '36px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            padding: '12px 16px',
            backgroundColor: '#22262F',
            border: '1px solid #22262F',
            borderRadius: '8px',
            cursor: isPreviousDisabled ? 'not-allowed' : 'pointer',
            opacity: isPreviousDisabled ? 0.5 : 1,
            outline: 'none'
          }}
        >
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#CECFD2',
            padding: '0px 2px'
          }}>
            Anterior
          </span>
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          style={{
            width: '88px',
            height: '36px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            padding: '12px 16px',
            backgroundColor: '#C74228',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), #C74228',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(#C74228, #C74228), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            borderRadius: '8px',
            cursor: isNextDisabled ? 'not-allowed' : 'pointer',
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            opacity: isNextDisabled ? 0.5 : 1,
            outline: 'none'
          }}
        >
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#F7F7F7',
            padding: '0px 2px'
          }}>
            Próxima
          </span>
        </button>
      </div>
    </div>
  );
};
