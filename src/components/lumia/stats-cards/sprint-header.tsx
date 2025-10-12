import React from 'react';

interface SprintHeaderProps {
  metasPendentes: number;
  isLoading: boolean;
}

export const SprintHeader: React.FC<SprintHeaderProps> = ({ metasPendentes, isLoading }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4" style={{ background: 'transparent' }}>
      <div className="flex items-center gap-4 flex-1">
        <div className="rounded-lg overflow-hidden flex-shrink-0" style={{ width: '61px', height: '56px' }}>
          <img 
            src="/images/sprint-image.png" 
            alt="Sprint Progress" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm mb-2" style={{ fontFamily: 'var(--font-sora)', fontWeight: 400, fontSize: '14px', lineHeight: '1.4285714285714286em' }}>
            {isLoading 
              ? "Carregando..." 
              : metasPendentes === 0
                ? "Parabéns! Você completou todas as metas desta sprint."
                : `Faltam ${metasPendentes} ${metasPendentes === 1 ? 'meta' : 'metas'} para completar essa sprint.`
            }
          </p>
          <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 hover:bg-[#333346] transition-all duration-200 px-2 py-1 rounded cursor-pointer" style={{ fontFamily: 'var(--font-sora)', fontWeight: 600, fontSize: '14px', lineHeight: '1.4285714285714286em' }}>
            <span>Completar agora</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#F66649' }}>
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <button 
        className="flex items-center text-white rounded-lg transition-all duration-200 flex-shrink-0 cursor-pointer"
        style={{ 
          background: '#C74228',
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
          fontFamily: 'var(--font-sora)',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '1.4285714285714286em',
          padding: '10px 14px',
          gap: '4px',
          borderRadius: '8px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#B03A20';
          e.currentTarget.style.borderImage = 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%) 1';
          e.currentTarget.style.boxShadow = '0px 1px 2px 0px rgba(255, 255, 255, 0.1), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.1), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#C74228';
          e.currentTarget.style.borderImage = 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1';
          e.currentTarget.style.boxShadow = '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)';
        }}
      >
        {/* Ícone download-cloud-02 */}
        <div 
          style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#FFFFFF' }}>
            <path
              d="M8 17L12 21M12 21L16 17M12 21V12M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        {/* Text padding */}
        <div 
          style={{
            padding: '0px 2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span className="hidden sm:inline">Baixar relatório</span>
          <span className="sm:hidden">Relatório</span>
        </div>
      </button>
    </div>
  );
};

