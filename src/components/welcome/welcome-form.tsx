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
      <div style={{ 
        alignSelf: screenSize === 'mobile' ? 'center' : 'flex-start' // mobile: center, desktop: flex-start
      }}>
        <img
          src="/images/lumia-logo-718d50.png"
          alt="Lumia Logo"
          style={{
            width: screenSize === 'mobile' ? '145px' : '174px', // tamanho exato do Figma mobile/desktop
            height: screenSize === 'mobile' ? '40px' : '48px', // altura exata do Figma
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
              alignSelf: 'stretch', // conforme Figma
              gap: '12px' // gap exato do Figma
            }}
          >
            <h1
              style={{
                fontFamily: 'Sora',
                fontWeight: 400, // weight exato do Figma
                fontSize: '20px', // tamanho exato do Figma
                lineHeight: '1.5em', // lineHeight exato do Figma
                color: '#FFFFFF', // cor exata do Figma
                margin: 0,
                textAlign: screenSize === 'mobile' ? 'center' : 'left' // mobile: center, desktop: left
              }}
            >
              Olá, Max William
            </h1>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'stretch', // conforme Figma
                gap: '8px' // gap exato do Figma
              }}
            >
              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400, // weight exato do Figma
                  fontSize: '18px', // tamanho exato do Figma
                  lineHeight: '1.5555555555555556em', // lineHeight exato do Figma
                  color: '#FFFFFF', // cor exata do Figma
                  margin: 0,
                  textAlign: screenSize === 'mobile' ? 'center' : 'left' // mobile: center, desktop: left
                }}
              >
                É bom ter você conosco, desejamos boas-vindas a nossa plataforma.
              </p>

              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400, // weight exato do Figma
                  fontSize: '16px', // tamanho exato do Figma
                  lineHeight: '1.5em', // lineHeight exato do Figma
                  color: '#FFFFFF', // cor exata do Figma
                  margin: 0,
                  textAlign: screenSize === 'mobile' ? 'center' : 'left' // mobile: center, desktop: left
                }}
              >
                Aqui você encontrará um espaço pensado para apoiar sua jornada, com acompanhamento de mentores especializados e materiais exclusivos para ajudar você a estudar com foco e evoluir de maneira consistente.
              </p>
            </div>
          </div>

          {/* Como acesso a plataforma? */}
          <div
            style={{
              width: '496px', // largura fixa do Figma
              maxWidth: '100%', // responsivo para telas menores
              display: 'flex',
              flexDirection: 'column',
              gap: '24px' // gap exato do Figma
            }}
          >
            <h2
              style={{
                fontFamily: 'Sora',
                fontWeight: 400, // weight exato do Figma
                fontSize: '16px', // tamanho exato do Figma
                lineHeight: '1.5em', // lineHeight exato do Figma
                color: '#FFFFFF', // cor exata do Figma
                margin: 0,
                textAlign: screenSize === 'mobile' ? 'center' : 'left' // mobile: center, desktop: left
              }}
            >
              Como acesso a plataforma? 🤔
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'stretch', // conforme Figma
                gap: '24px' // gap exato do Figma
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
              screenSize={screenSize}
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
            <BackButton onClick={onBackToStart} screenSize={screenSize} />
            <PrepareProfileButton
              onClick={onPrepareProfile}
              disabled={!termsAccepted}
              screenSize={screenSize}
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
        alignSelf: 'stretch', // conforme Figma
        gap: '16px', // gap exato do Figma
        width: '100%'
      }}
    >
      {/* Ícone */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center', // conforme Figma
          gap: '10px', // gap exato do Figma
          padding: '8px', // padding exato do Figma
          background: '#0F1E2D', // cor exata do Figma
          border: '1px solid #192634', // borda exata do Figma
          borderRadius: '6px', // border-radius exato do Figma
          width: 'fit-content', // hug horizontal
          height: 'fit-content' // hug vertical
        }}
      >
        {icon}
      </div>

      {/* Conteúdo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // conforme Figma
          gap: '8px', // gap exato do Figma
          flex: 1
        }}
      >
        <h3
          style={{
            fontFamily: 'Sora',
            fontWeight: 600, // weight exato do Figma
            fontSize: '16px', // tamanho exato do Figma
            lineHeight: '1.5em', // lineHeight exato do Figma
            color: '#F0F0F1', // cor exata do Figma
            margin: 0,
            textAlign: 'left' // cards sempre à esquerda
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 400, // weight exato do Figma
            fontSize: '16px', // tamanho exato do Figma
            lineHeight: '1.5em', // lineHeight exato do Figma
            color: '#CECFD2', // cor exata do Figma
            margin: 0,
            textAlign: 'left' // cards sempre à esquerda
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
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

function TermsCheckbox({ checked, onChange, screenSize: _ }: TermsCheckboxProps) {
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
        Confirmo que li e aceito os{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // Aqui você pode abrir modal ou navegar para página de termos
            console.log('Abrir Termos de Uso');
          }}
          style={{
            color: '#F66649', // cor laranja Lumia
            textDecoration: 'none',
            cursor: 'pointer',
            fontWeight: 500 // um pouco mais bold para destaque
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FF7A5C'; // hover mais claro
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#F66649'; // volta ao original
          }}
        >
          Termos de Uso
        </a>
        {' '}da plataforma.
      </span>
    </div>
  );
}

/** ===== Botão Voltar ===== */
type BackButtonProps = {
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

function BackButton({ onClick, screenSize }: BackButtonProps) {
  
  return (
    <button
      onClick={onClick}
      style={{
        width: screenSize === 'mobile' ? 'auto' : '259px', // mobile: auto width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        padding: screenSize === 'mobile' ? '14px' : '12px 14px', // mobile: só ícone
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
      {screenSize !== 'mobile' && (
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
      )}
    </button>
  );
}

/** ===== Botão Preparar Perfil ===== */
type PrepareProfileButtonProps = {
  onClick: () => void;
  disabled: boolean;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

function PrepareProfileButton({ onClick, disabled, screenSize }: PrepareProfileButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: screenSize === 'mobile' ? 'auto' : '260px', // mobile: auto width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
        padding: '12px 18px',
        flex: screenSize === 'mobile' ? 1 : 'none', // mobile: cresce para preencher
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
{screenSize === 'mobile' ? 'Prosseguir para etapa 2' : 'Preparar meu perfil'}
      </span>
      <ChevronRightIcon disabled={disabled} />
    </button>
  );
}

/** ===== Ícones ===== */
function UserSearchIcon() {
  return (
    <div style={{ width: '24px', height: '24px', position: 'relative' }}> {/* dimensões exatas do Figma */}
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', left: '3px', top: '1.5px' }} // centralizado no container 24x24
      >
        <path
          d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H6.5M15.2 18.2L17 20M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5ZM10 16C10 16.7956 10.3161 17.5587 10.8787 18.1213C11.4413 18.6839 12.2044 19 13 19C13.7956 19 14.5587 18.6839 15.1213 18.1213C15.6839 17.5587 16 16.7956 16 16C16 15.2044 15.6839 14.4413 15.1213 13.8787C14.5587 13.3161 13.7956 13 13 13C12.2044 13 11.4413 13.3161 10.8787 13.8787C10.3161 14.4413 10 15.2044 10 16Z"
          stroke="#F66649"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
        <circle cx="10" cy="10" r="9" stroke="#F66649" strokeWidth="2" fill="none" />
        <path d="M10 6V10" stroke="#F66649" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 14H10.01" stroke="#F66649" strokeWidth="2" strokeLinecap="round" />
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