import { Clock } from "@untitledui/icons";

export const StatsCards = () => {
  const stats = [
    {
      icon: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M19 5L5 19M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17Z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Seu desempenho",
      value: "75,29%",
      change: "15%",
      changeText: "comparado à semana passada",
      showChange: true
    },
    {
      icon: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M9 16L11 18L15.5 13.5M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Metas resolvidas",
      value: "12 metas",
      change: null,
      changeText: null,
      showChange: false
    },
    {
      icon: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.4696 11.7893 19.9609 11.4142 19.5858C11.0391 19.2107 10.5304 19 10 19H2V3Z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.4696 12.2107 19.9609 12.5858 19.5858C12.9609 19.2107 13.4696 19 14 19H22V3Z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Horas estudadas",
      value: "13h25m",
      change: null,
      changeText: null,
      showChange: false
    },
    {
      icon: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M12 6V12L16 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Média de horas diárias",
      value: "2h25m",
      change: null,
      changeText: null,
      showChange: false
    }
  ];

  return (
    <div className="w-full">
      {/* Header com Sprint Progress */}
      <div className="flex items-center justify-between mb-6 px-8 py-6" style={{ background: 'transparent' }}>
        <div className="flex items-center gap-4">
          <div className="rounded-lg overflow-hidden" style={{ width: '61px', height: '56px' }}>
            <img 
              src="/images/sprint-image.png" 
              alt="Sprint Progress" 
              className="w-full h-full object-cover"
            />
          </div>
          <div style={{ width: '325px' }}>
            <p className="text-white text-sm mb-2" style={{ fontFamily: 'Sora', fontWeight: 400, fontSize: '14px', lineHeight: '1.43' }}>
              Faltam 6 metas para completar essa sprint.
            </p>
            <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors" style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '14px' }}>
              <span>Completar agora</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#F66649' }}>
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <button 
          className="flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-colors"
          style={{ 
            background: '#C74228',
            border: '2px solid',
            borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#FFFFFF' }}>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Baixar relatório</span>
        </button>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px', padding: '0 32px 12px' }}>
        {stats.map((stat, index) => (
          <div key={index} className="rounded-xl border shadow-lg" style={{ 
            background: '#252532', 
            borderColor: '#2C2C45', 
            borderRadius: '12px',
            padding: '16px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Header com ícone e mudança */}
            <div className="flex items-center justify-between" style={{ gap: '24px' }}>
              <div className="rounded-full flex items-center justify-center text-white" style={{ 
                width: '40px', 
                height: '40px',
                background: '#333346',
                backdropFilter: 'blur(16px)'
              }}>
                <stat.icon className="text-white" style={{ width: '20px', height: '20px' }} />
              </div>
              
              {stat.showChange && stat.change && (
                <div className="flex flex-col items-end" style={{ gap: '2px' }}>
                  <div className="flex items-center" style={{ gap: '2px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 20V4M12 4L6 10M12 4L18 10"
                        stroke="#47CD89"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ 
                      fontFamily: 'Sora', 
                      fontWeight: 600, 
                      fontSize: '14px', 
                      lineHeight: '1.4285714285714286em', 
                      color: '#26BD6C',
                      textAlign: 'center'
                    }}>
                      {stat.change}
                    </span>
                  </div>
                  <span style={{ 
                    fontFamily: 'Sora', 
                    fontWeight: 400, 
                    fontSize: '10px', 
                    lineHeight: '1.3em', 
                    color: '#F7F7F7',
                    textAlign: 'left'
                  }}>
                    {stat.changeText}
                  </span>
                </div>
              )}
            </div>
            
            {/* Conteúdo principal */}
            <div className="flex items-end justify-between" style={{ gap: '8px' }}>
              <div className="flex flex-col" style={{ gap: '16px', flex: 1 }}>
                <div className="flex flex-col" style={{ gap: '4px' }}>
                  <h3 style={{ 
                    fontFamily: 'Sora', 
                    fontWeight: 400, 
                    fontSize: '12px', 
                    lineHeight: '1.5em', 
                    color: '#E9EAEB',
                    textAlign: 'left'
                  }}>
                    {stat.title}
                  </h3>
                  <p style={{ 
                    fontFamily: 'Sora', 
                    fontWeight: 400, 
                    fontSize: '24px', 
                    lineHeight: '1.25em', 
                    color: '#F7F7F7',
                    textAlign: 'left'
                  }}>
                    {stat.value}
                  </p>
                </div>
              </div>
              
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#FFFFFF' }}>
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
