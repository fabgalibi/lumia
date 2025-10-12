import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSidebar } from "@/contexts/sidebar-context";
import { useMainContent } from "@/contexts/main-content-context";
import { useNotificationsModal } from "@/contexts/notifications-modal-context";
import { useAuth } from "@/contexts/auth-context";
import { LogoutModal } from "@/components/modals/logout-modal";
import { SidebarTimer } from "@/components/lumia/timer";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const { setCurrentContent } = useMainContent();
  const { openModal: openNotificationsModal, closeModal: closeNotificationsModal } = useNotificationsModal();
  const { logout } = useAuth();
  const [showTexts, setShowTexts] = useState(true);
  const [activeItem, setActiveItem] = useState("Início");
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1100); // mobile/tablet breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detectar rota atual e definir item ativo automaticamente
  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath === '/home' || currentPath === '/') {
      setActiveItem("Início");
    } else if (currentPath.startsWith('/mentorias')) {
      setActiveItem("Mentorias");
    } else if (currentPath.startsWith('/account-settings')) {
      setActiveItem("Configurações");
    } else if (currentPath.startsWith('/ranking')) {
      setActiveItem("Ranking");
    } else if (currentPath.startsWith('/tutorials')) {
      setActiveItem("Tutoriais");
    } else if (currentPath.startsWith('/messages')) {
      setActiveItem("Mensagens");
    } else {
      // Para outras rotas, manter o item atual ou definir como "Início"
      setActiveItem("Início");
    }
  }, [location.pathname]);

  // No mobile, o sidebar deve iniciar fechado independente do estado do contexto
  const isSidebarOpen = isMobile ? !isCollapsed : !isCollapsed;


  const handleToggle = () => {
    if (isCollapsed) {
      // Expandindo: esconder textos primeiro, depois expandir
      setShowTexts(false);
      toggleSidebar();
    } else {
      // Colapsando: esconder textos imediatamente
      setShowTexts(false);
      toggleSidebar();
    }
  };

  // Controlar quando mostrar os textos
  useEffect(() => {
    if (!isCollapsed) {
      // Quando expandindo, aguardar 200ms para mostrar textos (bem próximo do sidebar)
      const timer = setTimeout(() => {
        setShowTexts(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isCollapsed]);

  const menuItems = [
    { 
      icon: () => (
        activeItem === "Início" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13.3333H10.6667V0H0V13.3333ZM0 24H10.6667V16H0V24ZM13.3333 24H24V10.6667H13.3333V24ZM13.3333 0V8H24V0H13.3333Z" fill="#F66649"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="#F0F0F1"/>
          </svg>
        )
            ), 
      label: "Início", 
      path: "/home",
      isEmoji: false 
    },
    { 
      icon: () => (
        activeItem === "Mentorias" ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 16V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V16H28ZM21.3333 4C21.687 4 22.0261 4.14048 22.2761 4.39052C22.5262 4.64057 22.6667 4.97971 22.6667 5.33333V6.66667H25.3333C26.0406 6.66667 26.7189 6.94762 27.219 7.44772C27.719 7.94781 28 8.62609 28 9.33333V13.3333H4V9.33333C4 8.62609 4.28095 7.94781 4.78105 7.44772C5.28115 6.94762 5.95942 6.66667 6.66667 6.66667H9.33333V5.33333C9.33333 4.97971 9.47381 4.64057 9.72386 4.39052C9.97391 4.14048 10.313 4 10.6667 4C11.0203 4 11.3594 4.14048 11.6095 4.39052C11.8595 4.64057 12 4.97971 12 5.33333V6.66667H20V5.33333C20 4.97971 20.1405 4.64057 20.3905 4.39052C20.6406 4.14048 20.9797 4 21.3333 4Z" fill="#F66649"/>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3333 4C21.6599 4.00004 21.9751 4.11994 22.2192 4.33695C22.4632 4.55397 22.6191 4.853 22.6573 5.17733L22.6667 5.33333V6.66667H25.3333C26.0061 6.66645 26.6541 6.92054 27.1474 7.378C27.6407 7.83545 27.9429 8.46246 27.9933 9.13333L28 9.33333V25.3333C28.0002 26.0061 27.7461 26.6541 27.2887 27.1474C26.8312 27.6407 26.2042 27.9429 25.5333 27.9933L25.3333 28H6.66667C5.9939 28.0002 5.34591 27.7461 4.8526 27.2887C4.35929 26.8312 4.05712 26.2042 4.00667 25.5333L4 25.3333V9.33333C3.99979 8.66056 4.25388 8.01258 4.71133 7.51927C5.16878 7.02596 5.79579 6.72379 6.46667 6.67333L6.66667 6.66667H9.33333V5.33333C9.33371 4.99349 9.46384 4.66662 9.69713 4.41951C9.93042 4.17239 10.2493 4.02369 10.5885 4.00377C10.9278 3.98385 11.2618 4.09423 11.5224 4.31235C11.783 4.53047 11.9505 4.83987 11.9907 5.17733L12 5.33333V6.66667H20V5.33333C20 4.97971 20.1405 4.64057 20.3905 4.39052C20.6406 4.14048 20.9797 4 21.3333 4ZM25.3333 16H6.66667V25.3333H25.3333V16ZM25.3333 9.33333H6.66667V13.3333H25.3333V9.33333Z" fill="#F0F0F1"/>
          </svg>
        )
      ), 
      label: "Mentorias", 
      path: "/mentorias",
      isEmoji: false 
    },
    { 
      icon: () => (
        activeItem === "Mensagens" ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.2 0H19.8C21.01 0 21.989 0.99 21.989 2.2L22 22L17.6 17.6H2.2C0.99 17.6 0 16.61 0 15.4V2.2C0 0.99 0.99 0 2.2 0ZM5.5 13.2H16.5C17.105 13.2 17.6 12.705 17.6 12.1C17.6 11.495 17.105 11 16.5 11H5.5C4.895 11 4.4 11.495 4.4 12.1C4.4 12.705 4.895 13.2 5.5 13.2ZM5.5 9.9H16.5C17.105 9.9 17.6 9.405 17.6 8.8C17.6 8.195 17.105 7.7 16.5 7.7H5.5C4.895 7.7 4.4 8.195 4.4 8.8C4.4 9.405 4.895 9.9 5.5 9.9ZM5.5 6.6H16.5C17.105 6.6 17.6 6.105 17.6 5.5C17.6 4.895 17.105 4.4 16.5 4.4H5.5C4.895 4.4 4.4 4.895 4.4 5.5C4.4 6.105 4.895 6.6 5.5 6.6Z" fill="#F66649"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8 2.2H2.2V15.4H18.513L19.8 16.687V2.2ZM19.8 0C21.01 0 21.989 0.99 21.989 2.2L22 22L17.6 17.6H2.2C0.99 17.6 0 16.61 0 15.4V2.2C0 0.99 0.99 0 2.2 0H19.8ZM17.6 11H4.4V13.2H17.6V11ZM17.6 7.7H4.4V9.9H17.6V7.7ZM17.6 4.4H4.4V6.6H17.6V4.4Z" fill="#F0F0F1"/>
              </svg>
        )
            ), 
      label: "Mensagens", 
      path: "/messages",
      isEmoji: false 
    },
    { 
      icon: () => (
        activeItem === "Notificações" ? (
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 24C11.5768 24 12.8558 22.657 12.8558 21H7.14421C7.14421 22.657 8.42322 24 10 24ZM19.6156 16.9823C18.7531 16.0092 17.1393 14.5453 17.1393 9.75C17.1393 6.10781 14.7071 3.19219 11.4277 2.47688V1.5C11.4277 0.671719 10.7884 0 10 0C9.21161 0 8.57233 0.671719 8.57233 1.5V2.47688C5.29287 3.19219 2.86074 6.10781 2.86074 9.75C2.86074 14.5453 1.2469 16.0092 0.384405 16.9823C0.116548 17.2847 -0.00220127 17.6461 3.08654e-05 18C0.00494156 18.7687 0.579493 19.5 1.43306 19.5H18.5669C19.4205 19.5 19.9955 18.7687 20 18C20.0022 17.6461 19.8835 17.2842 19.6156 16.9823Z" fill="#F66649"/>
          </svg>
        ) : (
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5772 16.9823C20.6284 16.0092 18.8532 14.5453 18.8532 9.75C18.8532 6.10781 16.1778 3.19219 12.5704 2.47688V1.5C12.5704 0.671719 11.8672 0 11 0C10.1328 0 9.42956 0.671719 9.42956 1.5V2.47688C5.82216 3.19219 3.14681 6.10781 3.14681 9.75C3.14681 14.5453 1.37159 16.0092 0.422845 16.9823C0.128203 17.2847 -0.0024214 17.6461 3.3952e-05 18C0.00543572 18.7687 0.637443 19.5 1.57637 19.5H20.4236C21.3626 19.5 21.9951 18.7687 22 18C22.0024 17.6461 21.8718 17.2842 21.5772 16.9823ZM3.31623 17.25C4.35828 15.9389 5.49756 13.7658 5.50296 9.77719C5.50296 9.76781 5.50002 9.75937 5.50002 9.75C5.50002 6.85031 7.96224 4.5 11 4.5C14.0378 4.5 16.5 6.85031 16.5 9.75C16.5 9.75937 16.497 9.76781 16.497 9.77719C16.5024 13.7662 17.6417 15.9394 18.6838 17.25H3.31623ZM11 24C12.7345 24 14.1414 22.657 14.1414 21H7.85863C7.85863 22.657 9.26554 24 11 24Z" fill="#F0F0F1"/>
          </svg>
        )
            ), 
      label: "Notificações", 
      path: "/notificacoes",
      isEmoji: false 
    },
    { 
      icon: () => (
        activeItem === "Estatísticas" ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(3.33, 3.4)">
              <path d="M11.81 0.265966C11.81 0.1094 11.675 -0.0147735 11.5184 0.00142308C8.3599 0.32427 5.43346 1.80749 3.30563 4.16396C1.1778 6.52043 -8.05701e-05 9.58255 4.13355e-09 12.7575C-1.82359e-05 15.2977 0.754443 17.7806 2.16768 19.8914C3.58091 22.0021 5.58923 23.6455 7.93788 24.6132C10.2865 25.5808 12.8696 25.829 15.3596 25.3263C17.8495 24.8237 20.134 23.5928 21.9234 21.7898C21.9495 21.7633 21.9698 21.7316 21.9829 21.6968C21.996 21.662 22.0017 21.6248 21.9995 21.5877C21.9973 21.5505 21.9874 21.5142 21.9703 21.4812C21.9533 21.4481 21.9295 21.419 21.9004 21.3957L12.1865 13.5444C12.0691 13.4496 11.9743 13.3298 11.9092 13.1936C11.844 13.0575 11.8101 12.9085 11.81 12.7575V0.265966Z" fill="#F66649"/>
            </g>
            <g transform="translate(17, 3.4)">
              <path d="M9.39502 19.9399C9.51721 20.039 9.69914 20.0132 9.78603 19.8801C10.9123 18.1584 11.608 16.191 11.8144 14.144C11.8178 14.1069 11.8134 14.0695 11.8015 14.0341C11.7896 13.9988 11.7704 13.9664 11.7452 13.9389C11.72 13.9114 11.6894 13.8895 11.6552 13.8745C11.6211 13.8596 11.5842 13.852 11.5469 13.8521H2.62979C2.57379 13.8522 2.51919 13.8696 2.47347 13.902C2.42776 13.9343 2.39317 13.98 2.37443 14.0328C2.3557 14.0856 2.35375 14.1429 2.36884 14.1968C2.38393 14.2507 2.41532 14.2987 2.45873 14.3341L9.39502 19.9399ZM11.5469 11.8156C11.7044 11.8156 11.8293 11.6799 11.8144 11.5224C11.5129 8.56954 10.2022 5.81104 8.1034 3.71223C6.00458 1.61341 3.24609 0.302712 0.293257 0.0012472C0.256028 -0.00236068 0.218456 0.00188007 0.182968 0.0136961C0.147479 0.025512 0.114865 0.0446405 0.0872288 0.0698456C0.0595928 0.0950506 0.0375498 0.125772 0.0225254 0.160025C0.00750093 0.194279 -0.000171502 0.231303 2.90811e-06 0.268706V11.4083C2.90811e-06 11.5163 0.0429143 11.6199 0.119298 11.6963C0.195681 11.7727 0.299279 11.8156 0.407302 11.8156H11.5469Z" fill="#F66649"/>
            </g>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.04533C10.2341 2.20681 8.53335 2.79283 7.04278 3.75346C5.55221 4.71408 4.31598 6.02084 3.43944 7.56235C2.5629 9.10387 2.07204 10.8345 2.00868 12.6066C1.94533 14.3788 2.31135 16.14 3.07557 17.7402C3.83979 19.3404 4.97955 20.7321 6.39771 21.7967C7.81588 22.8613 9.47041 23.5673 11.2203 23.8544C12.9702 24.1416 14.7636 24.0015 16.4476 23.4459C18.1317 22.8904 19.6564 21.936 20.892 20.664L12.372 13.7773C12.256 13.6837 12.1623 13.5653 12.098 13.4308C12.0336 13.2963 12.0001 13.1491 12 13V2.04533ZM14 2.04533V12H23.9547C23.7209 9.43869 22.597 7.04027 20.7784 5.22163C18.9597 3.40298 16.5613 2.2791 14 2.04533ZM23.9547 14H15.828L22.1493 19.108C23.1701 17.5838 23.7909 15.8272 23.9547 14ZM0 13C0 5.82 5.82 0 13 0C20.18 0 26 5.82 26 13C26.0058 15.9757 24.9854 18.8624 23.1107 21.1733C21.8932 22.6822 20.3529 23.8991 18.6032 24.7344C16.8535 25.5696 14.9388 26.0021 13 26C9.55218 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13Z" fill="#F0F0F1"/>
          </svg>
        )
            ), 
      label: "Estatísticas", 
      path: "/estatisticas",
      isEmoji: false 
    },
    { 
      icon: () => (
        activeItem === "Ranking" ? (
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.42977 14.84V23.9466C6.42977 24.4912 6.21687 25.0135 5.8379 25.3986C5.45894 25.7836 4.94494 26 4.409 26H2.03394C1.76746 26.0017 1.50328 25.9499 1.25659 25.8475C1.0099 25.7451 0.785583 25.5941 0.596545 25.4033C0.407507 25.2124 0.257484 24.9855 0.155111 24.7355C0.0527378 24.4855 3.72685e-05 24.2174 4.28867e-05 23.9466V14.84C-0.00170037 14.5681 0.0497176 14.2985 0.151313 14.047C0.252908 13.7955 0.402658 13.5669 0.591871 13.3747C0.781083 13.1824 1.00599 13.0303 1.25354 12.927C1.50109 12.8238 1.76636 12.7715 2.03394 12.7733H4.409C4.67548 12.7733 4.93933 12.8269 5.18536 12.9309C5.43139 13.0349 5.65474 13.1873 5.84256 13.3794C6.03038 13.5715 6.17896 13.7994 6.27973 14.0501C6.38051 14.3008 6.4315 14.5692 6.42977 14.84ZM15.2214 2.06666V23.9466C15.2215 24.2174 15.1688 24.4855 15.0664 24.7355C14.964 24.9855 14.814 25.2124 14.6249 25.4033C14.4359 25.5941 14.2116 25.7451 13.9649 25.8475C13.7182 25.9499 13.454 26.0017 13.1876 26H10.8125C10.2753 26 9.75998 25.7841 9.37893 25.3994C8.99787 25.0147 8.78206 24.4924 8.77859 23.9466V2.06666C8.78203 1.51963 8.99742 0.995994 9.37811 0.609174C9.7588 0.222355 10.2741 0.00349553 10.8125 0H13.1876C13.727 0 14.2443 0.217737 14.6257 0.605312C15.0072 0.992886 15.2214 1.51855 15.2214 2.06666ZM24 8.97332V23.9466C24 24.4912 23.7871 25.0135 23.4081 25.3986C23.0292 25.7836 22.5152 26 21.9792 26H19.6042C19.3377 26.0017 19.0735 25.9499 18.8268 25.8475C18.5801 25.7451 18.3558 25.5941 18.1668 25.4033C17.9777 25.2124 17.8277 24.9855 17.7253 24.7355C17.623 24.4855 17.5703 24.2174 17.5703 23.9466V8.97332C17.5703 8.70192 17.6229 8.43318 17.7251 8.18244C17.8273 7.9317 17.9771 7.70387 18.166 7.51197C18.3548 7.32006 18.5791 7.16783 18.8258 7.06397C19.0726 6.96011 19.3371 6.90665 19.6042 6.90665H22.0317C22.5597 6.92397 23.0603 7.14933 23.4277 7.53504C23.795 7.92075 24.0003 8.43656 24 8.97332Z" fill="#F66649"/>
          </svg>
        ) : (
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.79831 13.4203H2.39378C1.62374 13.4203 1 14.0301 1 14.7799V23.6404C1 24.3903 1.62507 25 2.39378 25H4.79964C5.57101 25 6.19475 24.3903 6.19475 23.6391V14.7799C6.1944 14.4191 6.0473 14.0731 5.78574 13.818C5.52419 13.5629 5.16954 13.4194 4.79964 13.419M13.7023 1H11.2977C10.5264 1 9.90263 1.60973 9.90263 2.36086V23.6378C9.90263 24.3903 10.5277 24.9987 11.2991 24.9987H13.7023C14.4736 24.9987 15.0974 24.389 15.0974 23.6378V2.36216C15.0974 1.60973 14.4723 1.0013 13.7009 1.0013M22.6062 7.71611H20.2004C19.429 7.71611 18.8053 8.32584 18.8053 9.07827V23.6378C18.8053 24.3903 19.4303 24.9987 20.2004 24.9987H22.6049C22.9748 24.9984 23.3294 24.8549 23.591 24.5997C23.8526 24.3446 23.9996 23.9987 24 23.6378V9.07697C24 8.32454 23.3749 7.71611 22.6036 7.71611" stroke="#F0F0F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
            ), 
      label: "Ranking", 
      path: "/ranking",
      isEmoji: false 
    },
    { 
      icon: () => (
        activeItem === "Tutoriais" ? (
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1584 8.82371C20.7146 9.13019 21.1798 9.58771 21.5042 10.1473C21.8286 10.7068 22 11.3472 22 12C22 12.6528 21.8286 13.2932 21.5042 13.8528C21.1798 14.4123 20.7146 14.8698 20.1584 15.1763L5.32302 23.5365C2.9342 24.884 0 23.1321 0 20.3614V3.63986C0 0.867943 2.9342 -0.882805 5.32302 0.462355L20.1584 8.82371Z" fill="#F66649"/>
          </svg>
        ) : (
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0747 9.82148C22.6562 10.128 23.1425 10.5855 23.4817 11.145C23.8208 11.7046 24 12.345 24 12.9978C24 13.6505 23.8208 14.291 23.4817 14.8505C23.1425 15.4101 22.6562 15.8676 22.0747 16.1741L6.56497 24.5342C4.06757 25.8818 1 24.1299 1 21.3591V4.63763C1 1.86572 4.06757 0.114967 6.56497 1.46013L22.0747 9.82148Z" stroke="#F0F0F1" strokeWidth="2"/>
          </svg>
        )
      ), 
      label: "Tutoriais", 
      path: "/tutorials",
      isEmoji: false 
    },
  ];

  const handleItemClick = (item: any) => {
    setActiveItem(item.label);
    console.log(`Navegando para: ${item.path}`);
    console.log(`Item ativo agora: ${item.label}`);
    
    // Se for notificações, abrir modal ao invés de navegar
    if (item.label === "Notificações") {
      openNotificationsModal();
      return;
    }
    
    // Fechar modal de notificações ao navegar para outra página
    closeNotificationsModal();
    
    // Navegar para o path do item
    navigate(item.path);
    
    // Se for "Início", definir currentContent como 'home'
    if (item.label === "Início") {
      setCurrentContent('home');
    }
    // TODO: Implementar navegação para outras páginas quando estiverem criadas
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    console.log('Usuário confirmou logout');
    setShowLogoutModal(false);
    logout();
    navigate('/login');
  };

  const handleLogoutClose = () => {
    console.log('Fechando modal de logout');
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* Overlay escuro para mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div 
        className="fixed left-0 top-0 h-screen z-50"
        style={{
          width: isMobile ? (isSidebarOpen ? '100vw' : '0px') : (isCollapsed ? '96px' : '244px'),
          height: isMobile ? '812px' : '100vh',
          transform: isMobile ? (isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
          overflow: 'hidden'
        }}
      >
      {/* Main Sidebar */}
      <div 
        className="h-full transition-all duration-300 shadow-lg"
        style={{
          background: 'rgba(37, 37, 50, 1)',
          borderRight: '1px solid #272737',
          borderRadius: isMobile ? '0px 24px 24px 0px' : (isCollapsed ? '0px' : '0px 16px 16px 0px'),
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
      {/* Header Desktop */}
        {!isMobile && (
          <div className="p-6 flex-shrink-0">
        <div className="flex items-center">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-44 h-12 flex items-center justify-center">
                <img 
                  src="/images/lumia-logo-718d50.png" 
                  alt="Lumia Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/images/lumia-logo-icon-only.png" 
                alt="Lumia Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          )}
            </div>
          </div>
        )}

        {/* Header Mobile - Status Bar + Logo + Botão Fechar */}
        {isMobile && (
          <div className="flex-shrink-0">
            {/* Status Bar iPhone */}
            <div className="w-full h-[38px] bg-black flex items-center justify-between px-4">
              <div className="text-white text-[11px] font-medium">9:41</div>
              <div className="flex items-center gap-1">
                {/* Signal */}
                <div className="flex items-end gap-0.5">
                  <div className="w-1 h-1 bg-white/40 rounded-sm"></div>
                  <div className="w-1 h-1.5 bg-white/40 rounded-sm"></div>
                  <div className="w-1 h-2 bg-white/40 rounded-sm"></div>
                  <div className="w-1 h-2.5 bg-white/40 rounded-sm"></div>
                </div>
                {/* WiFi */}
                <div className="ml-2">
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                    <path d="M7.5 8.5L3 4M7.5 8.5L12 4M7.5 8.5V11" stroke="#DADADA" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                {/* Battery */}
                <div className="ml-2 flex items-center">
                  <div className="w-6 h-3 border border-white/35 rounded-sm relative">
                    <div className="absolute right-0 top-0 w-0.5 h-1 bg-white/35 rounded-r-sm"></div>
                    <div className="w-4 h-2 bg-white/40 rounded-sm m-0.5"></div>
                  </div>
                </div>
        </div>
      </div>

            {/* Logo + Botão Fechar - Conforme Figma */}
            <div className="flex items-center justify-between px-4 py-5" style={{ gap: '154px' }}>
              <div className="w-[145px] h-10">
                <img 
                  src="/images/lumia-logo-718d50.png" 
                  alt="Lumia Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={toggleSidebar}
                className="flex items-center justify-center"
                style={{
                  background: '#24212D',
                  border: '1px solid #272737',
                  borderRadius: '40px',
                  padding: '10px',
                  width: '44px',
                  height: '44px'
                }}
              >
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H19M1 1H19M7 13H19" stroke="#F66649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Navigation - ocupa o espaço restante */}
        <nav 
          className="flex-1" 
          style={{ 
            gap: '12px', 
            display: 'flex', 
            flexDirection: 'column',
            padding: isMobile ? '12px 16px' : '16px'
          }}
        >
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className="flex items-center transition-all duration-200"
                  style={{
                    padding: isMobile ? '8px 14px' : (isCollapsed ? '8px' : '8px 14px'),
                    gap: '10px',
                    borderRadius: '8px',
                    background: activeItem === item.label ? '#4B3532' : 'transparent',
                    color: '#F0F0F1',
                    width: isMobile ? '100%' : (isCollapsed ? '48px' : '204px'),
                    justifyContent: isMobile ? 'flex-start' : (isCollapsed ? 'center' : 'flex-start'),
                    opacity: isCollapsed ? 1 : 1,
                    transform: isCollapsed ? 'scale(1)' : 'scale(1)',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (activeItem !== item.label) {
                      e.currentTarget.style.background = '#2D2D42';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeItem !== item.label) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <div className="w-8 h-8 flex items-center justify-center" style={{ position: 'relative' }}>
                    <item.icon />
                    {/* Notification badge */}
                    {item.label === "Notificações" && (
                      <div style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#E6483D',
                        borderRadius: '360px'
                      }} />
                    )}
                  </div>
                  {!isCollapsed && showTexts && (
                    <span 
                      className="font-medium transition-all duration-200" 
                      style={{ 
                        fontSize: '14px',
                        fontWeight: activeItem === item.label ? '600' : '400',
                        color: '#F0F0F1',
                        opacity: 1,
                        transform: 'translateX(0)'
                      }}
                      onMouseEnter={(e) => {
                        if (activeItem !== item.label) {
                          e.currentTarget.style.fontWeight = '600';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeItem !== item.label) {
                          e.currentTarget.style.fontWeight = '400';
                        }
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </button>
              ))}
            </nav>

        {/* Timer section */}
        {!isMobile && !isCollapsed && (
          <div className="flex-shrink-0" style={{ paddingTop: '16px' }}>
            <SidebarTimer />
          </div>
        )}

        {/* User section - fica no final */}
        <div className="flex-shrink-0" style={{ padding: isMobile ? '12px 16px' : '16px' }}>
        <button 
          onClick={handleLogoutClick}
          className="flex items-center transition-all duration-200 group"
          style={{
            padding: isMobile ? '8px 14px' : (isCollapsed ? '8px' : '8px 14px'),
            gap: '10px',
            borderRadius: '8px',
            background: 'transparent',
            color: '#F0F0F1',
            width: isMobile ? '100%' : (isCollapsed ? '48px' : '204px'),
            justifyContent: isMobile ? 'flex-start' : (isCollapsed ? 'center' : 'flex-start'),
            border: '1px solid transparent',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2D2D42';
            setIsLogoutHovered(true);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            setIsLogoutHovered(false);
          }}
        >
                           <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            {isLogoutHovered ? (
                                     <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                className="w-6 h-6 transition-colors duration-200"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M24 2.57143C24 1.88944 23.7291 1.23539 23.2468 0.753154C22.7646 0.270918 22.1105 0 21.4285 0L9.42788 0C8.74587 0 8.09178 0.270918 7.60952 0.753154C7.12726 1.23539 6.85633 1.88944 6.85633 2.57143V5.89543C7.55194 6.45257 8.00328 7.25865 8.11468 8.14286H14.1424C14.6489 8.14286 15.1505 8.24263 15.6185 8.43646C16.0865 8.6303 16.5117 8.91442 16.8699 9.27259C17.2281 9.63076 17.5122 10.056 17.7061 10.5239C17.8999 10.9919 17.9997 11.4935 17.9997 12C17.9997 12.5065 17.8999 13.0081 17.7061 13.4761C17.5122 13.944 17.2281 14.3692 16.8699 14.7274C16.5117 15.0856 16.0865 15.3697 15.6185 15.5635C15.1505 15.7574 14.6489 15.8571 14.1424 15.8571H8.11468C8.00328 16.7413 7.55194 17.5474 6.85633 18.1046V21.4286C6.85633 22.1106 7.12726 22.7646 7.60952 23.2468C8.09178 23.7291 8.74587 24 9.42788 24H21.4285C22.1105 24 22.7646 23.7291 23.2468 23.2468C23.7291 22.7646 24 22.1106 24 21.4286V2.57143ZM5.2054 7.38343C5.44037 7.48075 5.6412 7.64556 5.78249 7.85703C5.92378 8.06849 5.99918 8.31711 5.99915 8.57143V10.2857H14.1424C14.5971 10.2857 15.0331 10.4663 15.3546 10.7878C15.6761 11.1093 15.8568 11.5453 15.8568 12C15.8568 12.4547 15.6761 12.8907 15.3546 13.2122C15.0331 13.5337 14.5971 13.7143 14.1424 13.7143H5.99915V15.4286C5.99893 15.6827 5.9234 15.9311 5.7821 16.1423C5.6408 16.3535 5.44007 16.5181 5.20527 16.6154C4.97046 16.7126 4.71211 16.738 4.46284 16.6885C4.21358 16.639 3.98458 16.5167 3.80476 16.3371L0.37603 12.9086C0.135246 12.6675 0 12.3407 0 12C0 11.6593 0.135246 11.3325 0.37603 11.0914L3.80476 7.66286C3.98445 7.48304 4.21341 7.36053 4.46271 7.31079C4.71201 7.26106 4.97046 7.28633 5.2054 7.38343Z" fill="#F97066"/>
              </svg>
            ) : (
              <svg 
                width="22" 
                height="24" 
                viewBox="0 0 22 24" 
                fill="none" 
                className="w-6 h-6 transition-colors duration-200"
                    style={{ color: '#F0F0F1' }}
                  >
                <path fillRule="evenodd" clipRule="evenodd" d="M19.5666 2.32783C19.4353 2.20962 19.2621 2.14292 19.0817 2.14099H6.51035C6.32537 2.14099 6.15117 2.20956 6.02546 2.32783C5.96639 2.38309 5.91932 2.44894 5.88696 2.5216C5.85461 2.59425 5.83759 2.67229 5.83689 2.75123V4.40026C5.83689 4.6844 5.71863 4.9569 5.50813 5.15782C5.29764 5.35874 5.01214 5.47161 4.71445 5.47161C4.41676 5.47161 4.13126 5.35874 3.92076 5.15782C3.71027 4.9569 3.59201 4.6844 3.59201 4.40026V2.75123C3.59201 2.01414 3.9045 1.31134 4.45404 0.797086C5.00436 0.285625 5.74224 -0.000399814 6.51035 4.19468e-07H19.0817C19.8485 4.19468e-07 20.5902 0.286266 21.138 0.7988C21.6857 1.31134 22 2.01586 22 2.75295V21.2488C22 21.9859 21.6875 22.687 21.138 23.2029C20.5884 23.7154 19.8485 24 19.0817 24H6.51035C5.7435 24 5.00179 23.7154 4.45404 23.2012C3.90629 22.6869 3.59201 21.9841 3.59201 21.2471V19.5997C3.59201 19.3156 3.71027 19.0431 3.92076 18.8422C4.13126 18.6413 4.41676 18.5284 4.71445 18.5284C5.01214 18.5284 5.29764 18.6413 5.50813 18.8422C5.71863 19.0431 5.83689 19.3156 5.83689 19.5997V21.2488C5.83689 21.403 5.90334 21.5573 6.02725 21.6722C6.15837 21.7894 6.33073 21.8554 6.51035 21.8573H19.0817C19.2666 21.8573 19.4408 21.7887 19.5666 21.6722C19.6256 21.6169 19.6727 21.5511 19.705 21.4784C19.7374 21.4057 19.7544 21.3277 19.7551 21.2488V2.75123C19.7551 2.59696 19.6905 2.44268 19.5666 2.32783ZM5.14367 7.58174C5.34768 7.66394 5.52193 7.80146 5.64484 7.97728C5.76774 8.15309 5.83389 8.35946 5.83509 8.57082V10.9278H13.694C13.9916 10.9278 14.2771 11.0407 14.4876 11.2416C14.6981 11.4425 14.8164 11.715 14.8164 11.9991C14.8164 12.2833 14.6981 12.5558 14.4876 12.7567C14.2771 12.9576 13.9916 13.0705 13.694 13.0705H5.83689V15.4275C5.83693 15.6394 5.77112 15.8466 5.64779 16.0228C5.52446 16.199 5.34914 16.3364 5.14402 16.4175C4.93889 16.4986 4.71317 16.5198 4.49541 16.4784C4.27766 16.4371 4.07764 16.335 3.92066 16.1851L0.328857 12.7568C0.2246 12.6573 0.141895 12.5392 0.0854702 12.4092C0.0290432 12.2792 0 12.1399 0 11.9991C0 11.8584 0.0290432 11.7191 0.0854702 11.5891C0.141895 11.4591 0.2246 11.341 0.328857 11.2415L3.92066 7.81316C4.07771 7.66351 4.27772 7.56165 4.49541 7.52046C4.71309 7.47927 4.93868 7.5006 5.14367 7.58174Z" fill="currentColor"/>
                  </svg>
            )}
                 </div>
          {!isCollapsed && showTexts && (
            <span 
              className="font-medium transition-all duration-200" 
              style={{ 
                fontSize: '14px',
                fontWeight: isLogoutHovered ? '600' : '400',
                color: isLogoutHovered ? '#F97066' : '#F0F0F1',
                opacity: 1,
                transform: 'translateX(0)'
              }}
            >
              Sair da conta
            </span>
          )}
        </button>
      </div>
      </div>

      {/* Collapse Button - Desktop only */}


    </div>

    {/* Collapse Button - Outside sidebar container, synchronized movement */}
    {!isMobile && (
      <div
        className="fixed top-24 transition-all duration-100 ease-in-out"
        style={{
          left: isCollapsed ? '78px' : '226px',
          width: '40px',
          height: '40px',
          background: '#252532',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
      <button
        onClick={handleToggle}
          className="transition-all duration-300 hover:bg-[#333346] hover:shadow-md"
        style={{
          background: '#24212D',
          border: '1px solid rgba(12, 14, 18, 0.1)',
            borderRadius: '50%',
          padding: '4px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isCollapsed ? (
              // chevron-right quando colapsado
              <path
                d="M9 18L15 12L9 6"
                stroke="#F66649"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              // chevron-left quando expandido
              <path
                d="M15 18L9 12L15 6"
                stroke="#F66649"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
      </button>
    </div>
    )}

    {/* Logout Modal - Outside all containers */}
    <LogoutModal
      isOpen={showLogoutModal}
      onClose={handleLogoutClose}
      onConfirm={handleLogoutConfirm}
    />
    </>
  );
};
