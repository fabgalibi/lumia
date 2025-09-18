// radio-group.tsx
import React from "react";

/** ===== Props públicas ===== */
export type RadioGroupProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  name: string;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function RadioGroup({ 
  value, 
  onChange, 
  options, 
  name, 
  screenSize 
}: RadioGroupProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
        width: 'fit-content',
        height: 'fit-content'
      }}
    >
      {options.map((option) => (
        <RadioOption
          key={option.value}
          value={option.value}
          label={option.label}
          isSelected={value === option.value}
          onChange={() => onChange(option.value)}
          name={name}
          screenSize={screenSize}
        />
      ))}
    </div>
  );
}

/** ===== Componente de opção individual ===== */
type RadioOptionProps = {
  value: string;
  label: string;
  isSelected: boolean;
  onChange: () => void;
  name: string;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

function RadioOption({ 
  value, 
  label, 
  isSelected, 
  onChange, 
  name, 
  screenSize 
}: RadioOptionProps) {
  return (
    <div
      onClick={onChange}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        width: '171.5px', // largura exata do Figma
        height: 'fit-content',
        background: '#252532', // fill_YIXB5B
        border: isSelected ? '2px solid #F66649' : '1px solid #2C2C45', // stroke conforme seleção
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#373A41';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#2C2C45';
        }
      }}
    >
      {/* Conteúdo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px',
          flex: 1,
          height: 'fit-content'
        }}
      >
        {/* Texto */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            height: 'fit-content'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#CECFD2', // fill_SAJ0N4
              margin: 0,
              textAlign: 'left',
              width: 'fit-content',
              height: 'fit-content'
            }}
          >
            {label}
          </span>
        </div>
      </div>

      {/* Radio Button */}
      <div
        style={{
          position: 'relative',
          width: '16px',
          height: '16px',
          background: isSelected ? '#F66649' : 'transparent', // fill_2WUX2I quando selecionado
          border: isSelected ? 'none' : '1px solid #373A41', // stroke_KKI334 quando não selecionado
          borderRadius: '50%', // 9999px = circular
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Check Icon quando selecionado */}
        {isSelected && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              top: '3px',
              left: '3px'
            }}
          >
            <path
              d="M8.33333 2.5L3.75 7.08333L1.66667 5"
              stroke="#FFFFFF"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Input hidden para acessibilidade */}
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={onChange}
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
