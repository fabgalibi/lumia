import React, { useState, useEffect } from 'react';
import { UserMenu } from '@/components/lumia/user-menu';
import { useSidebar } from '../../contexts/sidebar-context';
import NewMessageModal from './new-message-modal';

interface MessagesHeaderProps {
  onNewMessage?: () => void;
}

const MessagesHeader: React.FC<MessagesHeaderProps> = ({ onNewMessage }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleSidebar } = useSidebar();

  // Detectar se é mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <header 
      className="w-full"
      style={{
        background: 'transparent',
        padding: isMobile ? '20px 16px 24px 16px' : '20px 32px 24px 32px',
        borderBottom: '1px solid #272737',
        borderLeft: '1px solid #272737',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div className="flex items-center justify-between w-full" style={{ gap: '25px' }}>
        {/* Lado esquerdo - Ícone de menu + Título */}
        <div className="flex items-center" style={{ gap: '12px' }}>
          {/* Ícone de menu (mobile) */}
          {isMobile && (
            <button 
              onClick={toggleSidebar}
              className="flex items-center justify-center cursor-pointer"
              style={{
                background: '#24212D',
                border: '1px solid #272737',
                borderRadius: '40px',
                padding: '10px',
                gap: '10px'
              }}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H15M3 1H15M3 11H15" stroke="#F66649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          {/* Título */}
          <h1 
            className="text-white"
            style={{ 
              fontFamily: 'Sora', 
              fontWeight: 600, 
              fontSize: '18px',
              lineHeight: '1.56em',
              textAlign: 'left',
              margin: 0
            }}
          >
            Todas as conversas (100)
          </h1>
        </div>

               {/* Lado direito - Botão Nova Mensagem + Menu + Avatar */}
               <div className="flex items-center" style={{ gap: '16px' }}>
                 {/* Botão Nova Mensagem - Apenas no Desktop */}
                 {!isMobile && (
                   <button
                     onClick={() => {
                       setIsModalOpen(true);
                       onNewMessage?.();
                     }}
                     style={{
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center',
                       gap: '4px',
                       padding: '10px 14px',
                       backgroundColor: '#C74228',
                       border: '2px solid rgba(255, 255, 255, 0.12)',
                       borderRadius: '8px',
                       boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
                       cursor: 'pointer'
                     }}
                   >
                     <svg
                       width="20"
                       height="20"
                       viewBox="0 0 20 20"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M10 10.25V5.25M7.5 7.75H12.5M5.33333 14V15.9463C5.33333 16.3903 5.33333 16.6123 5.42436 16.7263C5.50352 16.8255 5.62356 16.8832 5.75045 16.8831C5.89636 16.8829 6.06973 16.7442 6.41646 16.4668L8.40434 14.8765C8.81043 14.5517 9.0135 14.3892 9.2396 14.2737C9.4402 14.1712 9.6537 14.0963 9.8743 14.051C10.1231 14 10.3831 14 10.9031 14H13C14.4001 14 15.1002 14 15.635 13.7275C16.1054 13.4878 16.4878 13.1054 16.7275 12.635C17 12.1002 17 11.4001 17 10V5.5C17 4.09987 17 3.3998 16.7275 2.86502C16.4878 2.39462 16.1054 2.01217 15.635 1.77248C15.1002 1.5 14.4001 1.5 13 1.5H6C4.59987 1.5 3.8998 1.5 3.36502 1.77248C2.89462 2.01217 2.51217 2.39462 2.27248 2.86502C2 3.3998 2 4.09987 2 5.5V10.6667C2 11.4416 2 11.8291 2.08519 12.147C2.31635 13.0098 2.99022 13.6836 3.85295 13.9148C4.17087 14 4.55836 14 5.33333 14Z"
                         stroke="#F0F0F1"
                         strokeWidth="1.66667"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </svg>
                     <div
                       style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         padding: '0px 2px'
                       }}
                     >
                       <span
                         style={{
                           fontFamily: 'Sora',
                           fontWeight: '600',
                           fontSize: '14px',
                           lineHeight: '1.4285714285714286em',
                           color: '#F0F0F1'
                         }}
                       >
                         Nova mensagem
                       </span>
                     </div>
                   </button>
                 )}

                 {/* User Menu Component */}
                 <UserMenu />
               </div>
           </div>

           {/* Modal */}
           <NewMessageModal
             isOpen={isModalOpen}
             onClose={() => setIsModalOpen(false)}
           />
         </header>
       );
     };

     export default MessagesHeader;