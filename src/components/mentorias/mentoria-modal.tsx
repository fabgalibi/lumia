import React from 'react';

interface MentoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentoria?: {
    id: string;
    title: string;
    date: string;
    time: string;
    duration: string;
    description: string;
    platform: string;
    mentor: {
      name: string;
      avatar: string;
      isOnline: boolean;
    };
    notifyBefore: boolean;
  };
}

export const MentoriaModal: React.FC<MentoriaModalProps> = ({
  isOpen,
  onClose,
  mentoria
}) => {
  if (!isOpen || !mentoria) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(89, 89, 89, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 1000,
        padding: '40px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#202028',
          border: '1px solid #272737',
          borderRadius: '16px',
          width: '617px',
          height: '944px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            padding: '24px 16px 16px 24px',
            borderBottom: '1.5px solid #272737',
            backgroundColor: '#252532',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', flex: 1 }}>
            <h2
              style={{
                fontFamily: 'Sora',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '1.56em',
                color: '#F7F7F7',
                margin: 0,
              }}
            >
              {mentoria.title}
            </h2>
            <p
              style={{
                fontFamily: 'Sora',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.43em',
                color: '#CECFD2',
                margin: 0,
              }}
            >
              {mentoria.date}, das {mentoria.time} às {mentoria.duration}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              padding: '8px 12px',
              flexShrink: 0,
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
                d="M15 5L5 15M5 5L15 15"
                stroke="#F0F0F1"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
          {/* Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label
              style={{
                fontFamily: 'Sora',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.43em',
                color: '#CECFD2',
              }}
            >
              Descrição
            </label>
            <div
              style={{
                backgroundColor: '#2D2D3B',
                border: '1px solid #2D2D36',
                borderRadius: '8px',
                padding: '12px 14px',
                minHeight: '120px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Sora',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.43em',
                  color: '#CECFD2',
                  margin: 0,
                }}
              >
                {mentoria.description}
              </p>
            </div>
          </div>

          {/* General Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ height: '1px', backgroundColor: '#22262F', flex: 1 }} />
              <span
                style={{
                  fontFamily: 'Sora',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.43em',
                  color: '#94979C',
                }}
              >
                Informações gerais
              </span>
              <div style={{ height: '1px', backgroundColor: '#22262F', flex: 1 }} />
            </div>

            {/* Information Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Horário */}
              <div
                style={{
                  backgroundColor: '#272737',
                  border: '1px solid #2C2C45',
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 6V10L13 13"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#ECECED',
                    }}
                  >
                    Horário da mentoria
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#FFFFFF',
                    }}
                  >
                    {mentoria.time}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#FFFFFF',
                    }}
                  >
                    {mentoria.duration}
                  </span>
                </div>
              </div>

              {/* Data */}
              <div
                style={{
                  backgroundColor: '#272737',
                  border: '1px solid #2C2C45',
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 8H1M14 1V5M6 1V5M3 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19Z"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#ECECED',
                    }}
                  >
                    Data da mentoria
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '1.43em',
                    color: '#FFFFFF',
                  }}
                >
                  {mentoria.date}
                </span>
              </div>

              {/* Plataforma */}
              <div
                style={{
                  backgroundColor: '#272737',
                  border: '1px solid #2C2C45',
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5H5C3.89543 5 3 5.89543 3 7V13C3 14.1046 3.89543 15 5 15H15C16.1046 15 17 14.1046 17 13V7C17 5.89543 16.1046 5 15 5Z"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 9L11 12L17 6"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#ECECED',
                    }}
                  >
                    Plataforma escolhida
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0L11.5 6H18L13 10L15 16L9.5 12L4 16L6 10L1 6H7.5L9.5 0Z"
                      fill="#00832D"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#F7F7F7',
                    }}
                  >
                    {mentoria.platform}
                  </span>
                </div>
              </div>

              {/* Mentor */}
              <div
                style={{
                  backgroundColor: '#272737',
                  border: '1px solid #2C2C45',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#ECECED',
                    }}
                  >
                    Mentor(a) responsável
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#D6B3B3',
                      border: '1.5px solid #F48E2F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        right: '-2px',
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#00AC47',
                        borderRadius: '50%',
                        border: '2px solid #272737',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#F7F7F7',
                    }}
                  >
                    {mentoria.mentor.name}
                  </span>
                </div>
              </div>

              {/* Notificação */}
              <div
                style={{
                  backgroundColor: '#272737',
                  border: '1px solid #2C2C45',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                      stroke="#ECECED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#ECECED',
                    }}
                  >
                    Notificar antes da mentoria
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '20px',
                      backgroundColor: mentoria.notifyBefore ? '#F66649' : '#2D2D45',
                      borderRadius: '9999px',
                      padding: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: mentoria.notifyBefore ? 'flex-end' : 'flex-start',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50%',
                        boxShadow: '0px 1px 2px -1px rgba(255, 255, 255, 0), 0px 1px 3px 0px rgba(255, 255, 255, 0)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '1.43em',
                      color: '#CECFD2',
                    }}
                  >
                    {mentoria.notifyBefore ? 'Sim' : 'Não'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: '1px solid #2C2C45',
            padding: '32px 24px',
            display: 'flex',
            gap: '16px',
          }}
        >
          <button
            style={{
              flex: 1,
              backgroundColor: '#085D3A',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
              borderRadius: '8px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
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
                d="M8 2H12C13.1046 2 14 2.89543 14 4V6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6H6V4C6 2.89543 6.89543 2 8 2Z"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2H12C13.1046 2 14 2.89543 14 4V6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6H6V4C6 2.89543 6.89543 2 8 2Z"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: 'Sora',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '1.5em',
                color: '#FFFFFF',
              }}
            >
              Participar da mentoria
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L10 12L16 6"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
