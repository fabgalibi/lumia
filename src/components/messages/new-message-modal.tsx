import React, { useState } from 'react';

interface NewMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Mentor {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  isSelected: boolean;
}

const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'Gabriel Fernandes',
    avatar: '/images/messages/modal-avatar-gabriel-fernandes-5e5d17.png',
    isOnline: true,
    isSelected: false
  },
  {
    id: '2',
    name: 'Isabela Rocha',
    avatar: '/images/messages/modal-avatar-isabela-rocha.png',
    isOnline: true,
    isSelected: true
  },
  {
    id: '3',
    name: 'Mateus Carvalho',
    avatar: '/images/messages/modal-avatar-mateus-carvalho.png',
    isOnline: false,
    isSelected: false
  },
  {
    id: '4',
    name: 'Larissa Gomes',
    avatar: '/images/messages/modal-avatar-larissa-gomes-49d31f.png',
    isOnline: true,
    isSelected: false
  }
];

const NewMessageModal: React.FC<NewMessageModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mentors, setMentors] = useState<Mentor[]>(mockMentors);

  const handleMentorSelect = (mentorId: string) => {
    setMentors(prev => 
      prev.map(mentor => ({
        ...mentor,
        isSelected: mentor.id === mentorId
      }))
    );
  };

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: '532px',
          backgroundColor: '#202028',
          border: '1px solid #2C2C45',
          borderRadius: '12px',
          boxShadow: '0px 3px 3px -1.5px rgba(255, 255, 255, 0), 0px 8px 8px -4px rgba(255, 255, 255, 0), 0px 20px 24px -4px rgba(255, 255, 255, 0)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              gap: '12px',
              padding: '24px 24px 0px',
              minHeight: '48px'
            }}
          >
            {/* Featured icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="#2F3239"
                />
                <path
                  d="M24 25.5V19.5M21 22.5H27M19 30V32.3355C19 32.8684 19 33.1348 19.1092 33.2716C19.2042 33.3906 19.3483 33.4599 19.5005 33.4597C19.6756 33.4595 19.8837 33.2931 20.2998 32.9602L22.6852 31.0518C23.1725 30.662 23.4162 30.4671 23.6875 30.3285C23.9282 30.2055 24.1844 30.1156 24.4492 30.0613C24.7477 30 25.0597 30 25.6837 30H28.2C29.8802 30 30.7202 30 31.362 29.673C31.9265 29.3854 32.3854 28.9265 32.673 28.362C33 27.7202 33 26.8802 33 25.2V19.8C33 18.1198 33 17.2798 32.673 16.638C32.3854 16.0735 31.9265 15.6146 31.362 15.327C30.7202 15 29.8802 15 28.2 15H19.8C18.1198 15 17.2798 15 16.638 15.327C16.0735 15.6146 15.6146 16.0735 15.327 16.638C15 17.2798 15 18.1198 15 19.8V26C15 26.93 15 27.395 15.1022 27.7765C15.3796 28.8117 16.1883 29.6204 17.2235 29.8978C17.605 30 18.07 30 19 30Z"
                  stroke="#ECECED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Text and supporting text */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                flex: 1,
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '1.5555555555555556em',
                  color: '#F7F7F7'
                }}
              >
                Nova mensagem
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                right: '12px',
                top: '12px',
                width: '44px',
                height: '44px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#85888E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Padding bottom */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '20px'
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '16px',
            padding: '0px 24px'
          }}
        >
          {/* Search input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              gap: '8px',
              padding: '8px 12px',
              backgroundColor: '#2D2D3B',
              border: '1px solid #2D2D36',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
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
                d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                stroke="#94979C"
                strokeWidth="1.6666666269302368"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar mentores"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#D5D7DA'
              }}
            />
          </div>

          {/* Padding bottom */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '20px'
            }}
          />
        </div>

        {/* Suggestions */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '16px',
            padding: '0px 24px'
          }}
        >
          <div
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#F7F7F7'
            }}
          >
            Sugestões para você
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: '12px',
              maxHeight: '292px',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#535372 #1D1D2E'
            }}
          >
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                onClick={() => handleMentorSelect(mentor.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  gap: '12px',
                  padding: '16px',
                  backgroundColor: '#252532',
                  border: mentor.isSelected ? '2px solid #F66649' : '1px solid #2C2C45',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '9999px',
                    backgroundImage: `url(${mentor.avatar})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    border: '0.5px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  {/* Online indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      width: '8px',
                      height: '8px',
                      borderRadius: '9999px',
                      backgroundColor: mentor.isOnline ? '#47CD89' : '#61656C',
                      border: '1.5px solid #0C0E12'
                    }}
                  />
                </div>

                {/* Text */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      color: '#CECFD2'
                    }}
                  >
                    {mentor.name}
                  </div>
                </div>

                {/* Radio button */}
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '9999px',
                    border: '1px solid #373A41',
                    backgroundColor: mentor.isSelected ? '#F66649' : 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {mentor.isSelected && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33333 2.5L3.75 7.08333L1.66667 5"
                        stroke="#FFFFFF"
                        strokeWidth="1.666599988937378"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            padding: '20px 0px 0px'
          }}
        >
          {/* Divider */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '1px',
              backgroundColor: '#22262F',
              marginBottom: '24px'
            }}
          />

          {/* Button */}
          <div
            style={{
              display: 'flex',
              alignSelf: 'stretch',
              gap: '12px',
              padding: '0px 24px 24px'
            }}
          >
            <button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                padding: '12px 18px',
                backgroundColor: '#C74228',
                border: '2px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
                cursor: 'pointer',
                flex: 1,
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#FFFFFF'
              }}
            >
              Iniciar conversa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessageModal;
