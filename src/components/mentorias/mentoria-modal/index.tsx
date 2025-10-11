import React from 'react';
import { ModalHeader } from './modal-header';
import { InfoCard } from './info-card';
import { PlatformIcon } from './platform-icon';
import { 
  ClockIcon, 
  CalendarIcon, 
  RecordingIcon, 
  UserIcon, 
  BellIcon,
  ArrowRightIcon,
  ShareIcon
} from './mentoria-icons';

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
        <ModalHeader
          title={mentoria.title}
          subtitle={`${mentoria.date}, das ${mentoria.time} às ${mentoria.duration}`}
          onClose={onClose}
        />

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
              <InfoCard
                icon={<ClockIcon />}
                label="Horário da mentoria"
                value={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontFamily: 'Sora', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em', textAlign: 'center', color: '#FFFFFF' }}>
                      {mentoria.time} AM
                    </span>
                    <ArrowRightIcon />
                    <span style={{ fontFamily: 'Sora', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em', textAlign: 'center', color: '#FFFFFF' }}>
                      {mentoria.duration} AM
                    </span>
                  </div>
                }
              />

              {/* Data */}
              <InfoCard
                icon={<CalendarIcon />}
                label="Data da mentoria"
                value={
                  <span style={{ fontFamily: 'Sora', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em', textAlign: 'center', color: '#FFFFFF' }}>
                    Terça-feira, {mentoria.date}
                  </span>
                }
              />

              {/* Plataforma */}
              <InfoCard
                icon={<RecordingIcon />}
                label="Plataforma escolhida"
                gap="20px"
                value={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PlatformIcon platform={mentoria.platform} />
                    <span style={{ fontFamily: 'Sora', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em', color: '#F7F7F7' }}>
                      {mentoria.platform}
                    </span>
                  </div>
                }
              />

              {/* Mentor */}
              <InfoCard
                icon={<UserIcon />}
                label="Mentor(a) responsável"
                gap="20px"
                padding="12px 16px"
                value={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundImage: `url('/images/mentorias/avatar-ana-beatriz.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '0.5px solid rgba(255, 255, 255, 0.12)',
                      }}
                    />
                    <span style={{ fontFamily: 'Sora', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em', color: '#F7F7F7' }}>
                      {mentoria.mentor.name}
                    </span>
                  </div>
                }
              />

              {/* Notificação */}
              <InfoCard
                icon={<BellIcon />}
                label="Notificar antes da mentoria"
                gap="20px"
                padding="12px 16px"
                value={
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
                    <span style={{ fontFamily: 'Sora', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em', color: '#CECFD2' }}>
                      {mentoria.notifyBefore ? 'Sim' : 'Não'}
                    </span>
                  </div>
                }
              />
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
              backgroundImage: 'linear-gradient(#085D3A, #085D3A), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              borderRadius: '8px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 2px',
              }}
            >
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
            </div>
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

