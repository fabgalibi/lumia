// welcome-form.tsx
import React from "react";

/** ===== Props públicas ===== */
export type WelcomeFormProps = {
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  termsAccepted: boolean;
  onTermsChange: (accepted: boolean) => void;
  onBackToStart: () => void;
  onPrepareProfile: () => void;
};

/** ===== Componente principal ===== */
export default function WelcomeForm({
  screenSize,
  termsAccepted,
  onTermsChange,
  onBackToStart,
  onPrepareProfile,
}: WelcomeFormProps) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: screenSize === 'mobile' ? '32px 24px' : screenSize === 'tablet' ? '40px 32px' : screenSize === 'notebook' ? '48px 40px' : '56px', // padding interno por tela
        display: 'flex',
        flexDirection: 'column',
        gap: screenSize === 'mobile' ? '24px' : screenSize === 'tablet' ? '32px' : screenSize === 'notebook' ? '40px' : '56px', // gap progressivo
        height: 'auto', // altura sempre automática
        minHeight: screenSize === 'mobile' ? '500px' : '600px',
        justifyContent: 'space-between'
      }}
    >
      {/* Logo */}
      <div style={{ alignSelf: 'flex-start' }}>
        <img
          src="/images/lumia-logo-718d50.png"
          alt="Lumia Logo"
          style={{
            width: screenSize === 'mobile' ? '140px' : '174px', // tamanho responsivo simples
            height: screenSize === 'mobile' ? '38px' : '48px', // altura proporcional
            objectFit: 'contain'
          }}
        />
      </div>

        {/* Conteúdo Principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // conforme Figma
            gap: '184px', // gap exato do Figma
            flex: 1,
            alignSelf: 'stretch' // conforme Figma
          }}
        >
        {/* Seção de Boas-vindas */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch', // conforme Figma
            gap: '76px' // gap exato do Figma
          }}
        >
          {/* Título e Descrição */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <h1
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: screenSize === 'mobile' ? '18px' : '20px', // fonte responsiva simples
                lineHeight: '1.5em',
                color: '#FFFFFF',
                margin: 0
              }}
            >
              Olá, Max William
            </h1>
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '1.5555555555555556em',
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                É bom ter você conosco, desejamos boas-vindas a nossa plataforma.
              </p>
              
              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                Aqui você encontrará um espaço pensado para apoiar sua jornada, com acompanhamento de mentores especializados e materiais exclusivos para ajudar você a estudar com foco e evoluir de maneira consistente.
              </p>
            </div>
          </div>

          {/* Como acesso a plataforma? */}
          <div
            style={{
              width: screenSize === 'mobile' ? '100%' : '496px', // responsivo
              maxWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <h2
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#FFFFFF',
                margin: 0
              }}
            >
              Como acesso a plataforma? 🤔
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              {/* Card 1 - Entender Perfil */}
              <InfoCard
                icon={<UserSearchIcon />}
                title="Primeiro precisamos entender seu perfil"
                description="Para montar um planejamento de estudos feito sob medida, queremos conhecer você melhor"
              />

              {/* Card 2 - Atenção */}
              <InfoCard
                icon={<AlertCircleIcon />}
                title="Atenção"
                description="Preencha atentamente, cada detalhe ajuda a personalizar sua jornada até a aprovação."
              />
            </div>
          </div>
        </div>

        {/* Seção Inferior - Checkbox e Botões */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // conforme Figma
            alignItems: 'center',
            alignSelf: 'stretch', // conforme Figma
            gap: '32px' // gap exato do Figma
          }}
        >
          {/* Checkbox */}
          <TermsCheckbox
            checked={termsAccepted}
            onChange={onTermsChange}
          />

          {/* Botões */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between', // conforme Figma
              alignItems: 'center',
              alignSelf: 'stretch', // conforme Figma
              gap: '24px' // gap exato do Figma
            }}
          >
            <BackButton onClick={onBackToStart} />
            <PrepareProfileButton 
              onClick={onPrepareProfile} 
              disabled={!termsAccepted} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** ===== Card Informativo ===== */
type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        width: '100%'
      }}
    >
      {/* Ícone */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px',
          background: '#0F1E2D',
          border: '1px solid #192634',
          borderRadius: '6px',
          width: 'fit-content',
          height: 'fit-content'
        }}
      >
        {icon}
      </div>

      {/* Conteúdo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flex: 1
        }}
      >
        <h3
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#F0F0F1',
            margin: 0
          }}
        >
          {title}
        </h3>
        
        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#CECFD2',
            margin: 0
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/** ===== Checkbox de Termos ===== */
type TermsCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function TermsCheckbox({ checked, onChange }: TermsCheckboxProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start'
      }}
    >
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: '20px',
          height: '20px',
          background: checked ? '#F66649' : 'transparent',
          border: checked ? 'none' : '1px solid #F66649',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
          marginTop: '2px'
        }}
      >
        {checked && <CheckIcon />}
      </div>
      
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: '#CECFD2'
        }}
      >
        Confirmo que li e aceito os Termos de Uso da plataforma.
      </span>
    </div>
  );
}

/** ===== Botão Voltar ===== */
type BackButtonProps = {
  onClick: () => void;
};

function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '259px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        padding: '12px 14px',
        background: '#2D2D45',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#3A3A5A';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#2D2D45';
      }}
    >
      <ChevronLeftIcon />
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: '#CECFD2'
        }}
      >
        Voltar ao início
      </span>
    </button>
  );
}

/** ===== Botão Preparar Perfil ===== */
type PrepareProfileButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

function PrepareProfileButton({ onClick, disabled }: PrepareProfileButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '260px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
        padding: '12px 18px',
        background: disabled ? '#4A4A4A' : '#C74228',
        border: disabled ? 'none' : '2px solid transparent',
        backgroundImage: disabled ? 'none' : 'linear-gradient(#C74228, #C74228), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
        backgroundOrigin: disabled ? 'border-box' : 'border-box, border-box',
        backgroundClip: disabled ? 'border-box' : 'padding-box, border-box',
        borderRadius: '8px',
        boxShadow: disabled ? 'none' : '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = '#B03A20';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = '#C74228';
          e.currentTarget.style.backgroundImage = 'linear-gradient(#C74228, #C74228), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)';
        }
      }}
    >
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: disabled ? '#666666' : '#FFFFFF'
        }}
      >
        Preparar meu perfil
      </span>
      <ChevronRightIcon disabled={disabled} />
    </button>
  );
}

/** ===== Ícones ===== */
function UserSearchIcon() {
  return (
    <div style={{ width: '24px', height: '24px', position: 'relative' }}>
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', left: '6px', top: '3px' }}
      >
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16C0 17.1 0.9 18 2 18H14C15.1 18 16 17.1 16 16V14C16 11.34 10.67 10 8 10Z"
          stroke="#F66649"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}

function AlertCircleIcon() {
  return (
    <div style={{ width: '24px', height: '24px', position: 'relative' }}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', left: '2px', top: '2px' }}
      >
        <circle cx="10" cy="10" r="9" stroke="#F66649" strokeWidth="2" fill="none"/>
        <path d="M10 6V10" stroke="#F66649" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 14H10.01" stroke="#F66649" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.67 3.5L5.25 9.92L2.33 7"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="#CECFD2"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ disabled }: { disabled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke={disabled ? "#666666" : "#FFFFFF"}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}