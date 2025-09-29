// profile-footer.tsx
import React from "react";

/** ===== Props públicas ===== */
export type ProfileFooterProps = {
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  onBack: () => void;
  onNext: () => void;
  backButtonText: string;
  nextButtonText: string;
  canProceed: boolean;
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
};

/** ===== Componente principal ===== */
export default function ProfileFooter({ 
  screenSize, 
  onBack, 
  onNext, 
  backButtonText,
  nextButtonText, 
  canProceed,
  currentStep,
  totalSteps,
  stepTitle 
}: ProfileFooterProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row', // mode: row do Figma (layout_EMB3RB)
        justifyContent: 'space-between', // justifyContent: space-between do Figma
        alignItems: 'center', // alignItems: center do Figma
        gap: 0, // sem gap - space-between já distribui o espaço
        padding: screenSize === 'mobile' ? '24px 16px 16px' : '32px 56px', // mobile: 24px 16px 16px, desktop: 32px 56px
        width: '100%', // preenche toda a largura disponível
        background: '#0B1219', // cor sólida conforme imagem
        boxShadow: '0px -2px 4px 2px rgba(33, 33, 33, 0.04)', // effect_KIOCXP - sombra exata
        position: 'fixed', // posição fixa na parte inferior
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 'auto' // sizing: vertical hug
      }}
    >
      {/* Botão Voltar */}
      <BackButton onClick={onBack} screenSize={screenSize} text={backButtonText} />

      {/* Indicador de Progresso Central */}
      {screenSize === 'mobile' ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <span
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 400,
                fontSize: '12px', // Text xs Medium
                lineHeight: '1.5em',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              Passo {currentStep} de {totalSteps}:
            </span>
            <span
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 600,
                fontSize: '14px', // Text sm Semibold
                lineHeight: '1.43em',
                color: '#F48E2F',
                textAlign: 'center'
              }}
            >
              {stepTitle}
            </span>
          </div>
        </div>
      ) : (
        <StepIndicator 
          currentStep={currentStep}
          totalSteps={totalSteps}
          stepTitle={stepTitle}
        />
      )}

      {/* Botão Prosseguir */}
      <NextButton 
        onClick={onNext}
        text={nextButtonText}
        disabled={!canProceed}
        screenSize={screenSize}
      />
    </div>
  );
}

/** ===== Botão Voltar ===== */
type BackButtonProps = {
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  text: string;
};

function BackButton({ onClick, screenSize, text }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        // Layout
        display: 'flex',
        justifyContent: 'center', // centralização
        alignItems: 'center', // alinhamento vertical
        gap: screenSize === 'mobile' ? '0px' : '4px', // mobile: sem gap (só ícone), desktop: com gap
        
        // Dimensões
        width: screenSize === 'mobile' ? '48px' : '259px', // mobile: 48px conforme Figma, desktop: 259px
        height: screenSize === 'mobile' ? '48px' : 'auto', // mobile: 48px conforme Figma, desktop: auto
        
        // Padding
        padding: screenSize === 'mobile' ? '14px' : '12px 14px', // mobile: 14px conforme Figma, desktop: original
        
        // Visual
        background: 'rgba(45, 45, 69, 1)', // background exato fornecido
        border: 'none',
        borderRadius: '8px', // radius-md
        opacity: 1, // opacity exata fornecida
        transform: 'rotate(0deg)', // angle: 0 deg
        
        // Sombras conforme especificações
        boxShadow: `
          0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05),
          inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)
        `,
        
        // Interação
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(58, 58, 90, 1)'; // hover state
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(45, 45, 69, 1)'; // volta ao estado normal
      }}
    >
      {/* Ícone Chevron Left - Conforme Figma */}
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '20px', // dimensão exata do Figma (layout_X10UDY)
          height: '20px' // dimensão exata do Figma (layout_X10UDY)
        }}
      >
        <path 
          d="M12.5 15L7.5 10L12.5 5" 
          stroke="#CECFD2" // stroke_J5NOF4 - cor exata do Figma
          strokeWidth="1.6666666269302368" // strokeWeight exato do Figma
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
      
      {screenSize !== 'mobile' && (
        <span
          style={{
            fontFamily: 'Inter' /* MIGRATED */, // fontFamily do Figma
            fontWeight: 600, // Text md Semibold - weight do Figma
            fontSize: '16px', // Text md Semibold - fontSize do Figma
            lineHeight: '1.5em', // Text md Semibold - lineHeight do Figma
            color: '#CECFD2', // fill_HHKBRO - cor exata do Figma
            textAlign: 'left' // textAlignHorizontal: LEFT do Figma
          }}
        >
          {text}
        </span>
      )}
    </button>
  );
}

/** ===== Indicador de Etapa ===== */
type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
};

function StepIndicator({ currentStep, totalSteps, stepTitle }: StepIndicatorProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row', // mode: row do Figma (layout_HGWOXQ)
        justifyContent: 'center', // justifyContent: center do Figma
        alignItems: 'center', // alignItems: center do Figma
        gap: '16px', // gap exato do Figma (layout_HGWOXQ)
        width: 'auto', // sizing: horizontal hug
        height: 'auto' // sizing: vertical hug
      }}
    >
        <div
        style={{
          display: 'flex',
          flexDirection: 'column', // mode: column do Figma (layout_28TNSA)
          justifyContent: 'center', // justifyContent: center do Figma
          alignItems: 'center', // alignItems: center do Figma
          gap: '4px', // gap exato do Figma (layout_28TNSA)
          width: 'auto', // sizing: horizontal hug
          height: 'auto' // sizing: vertical hug
        }}
      >
        <span
          style={{
            fontFamily: 'Inter' /* MIGRATED */, // fontFamily do Figma
            fontWeight: 400, // Text sm Medium - weight do Figma
            fontSize: '14px', // Text sm Medium - fontSize do Figma
            lineHeight: '1.4285714285714286em', // Text sm Medium - lineHeight do Figma
            color: '#FFFFFF', // fill_Y66R8E - cor exata do Figma
            textAlign: 'center', // textAlignHorizontal: CENTER do Figma
            width: 'auto', // sizing: horizontal hug (layout_70MKB8)
            height: 'auto' // sizing: vertical hug (layout_70MKB8)
          }}
        >
          Passo {currentStep} de {totalSteps}:
        </span>
        
        <span
          style={{
            fontFamily: 'Inter' /* MIGRATED */, // fontFamily do Figma
            fontWeight: 600, // Text md Semibold - weight do Figma
            fontSize: '16px', // Text md Semibold - fontSize do Figma
            lineHeight: '1.5em', // Text md Semibold - lineHeight do Figma
            color: '#F48E2F', // fill_Q8AKPH - cor exata do Figma
            textAlign: 'center', // textAlignHorizontal: CENTER do Figma
            width: 'auto', // sizing: horizontal hug (layout_70MKB8)
            height: 'auto' // sizing: vertical hug (layout_70MKB8)
          }}
        >
          {stepTitle}
        </span>
      </div>
    </div>
  );
}

/** ===== Botão Prosseguir ===== */
type NextButtonProps = {
  onClick: () => void;
  text: string;
  disabled: boolean;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

function NextButton({ onClick, text, disabled, screenSize }: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: screenSize === 'mobile' ? '0px' : '6px', // mobile: sem gap (só ícone), desktop: com gap
        padding: screenSize === 'mobile' ? '14px' : '12px 18px', // mobile: 14px conforme Figma, desktop: com texto
        width: screenSize === 'mobile' ? '48px' : 'auto', // mobile: 48px conforme Figma, desktop: auto
        height: screenSize === 'mobile' ? '48px' : 'auto', // mobile: 48px conforme Figma, desktop: auto
        background: disabled ? '#4A4A4A' : '#C74228', // fill_58XQMB - cor exata do Figma
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
      {screenSize !== 'mobile' && (
        <span
          style={{
            fontFamily: 'Inter' /* MIGRATED */,
            fontWeight: 600, // weight exato do Figma
            fontSize: '16px', // tamanho exato do Figma
            lineHeight: '1.5em', // lineHeight exato do Figma
            color: disabled ? '#666666' : '#FFFFFF' // cor baseada no estado
          }}
        >
          {text}
        </span>
      )}
      
      {/* Ícone Chevron Right */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 5L12.5 10L7.5 15" stroke={disabled ? "#666666" : "#FFFFFF"} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
