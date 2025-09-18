// textarea-field.tsx
import React from "react";

/** ===== Props públicas ===== */
export type TextareaFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  hintText?: string;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function TextareaField({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  maxLength = 150, 
  hintText, 
  screenSize 
}: TextareaFieldProps) {
  const charactersRemaining = maxLength - value.length;
  const defaultHintText = `${charactersRemaining}/${maxLength} caracteres disponíveis`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '6px',
        flex: 1,
        width: '100%'
      }}
    >
      {/* Label */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2px',
          width: 'fit-content',
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

      {/* Textarea Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'stretch',
          alignItems: 'stretch',
          alignSelf: 'stretch',
          gap: '8px',
          padding: '12px 14px',
          flex: 1,
          background: '#2D2D3B', // fill_ILKQ7S
          border: '1px solid #2D2D36', // stroke_ZMXDSL
          borderRadius: '8px',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)', // Shadows/shadow-xs
          transition: 'border-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#373A41';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#2D2D36';
        }}
      >
        {/* Textarea */}
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: value ? '#FFFFFF' : '#94979C', // branco para texto, cinza para placeholder
            background: 'transparent',
            border: 'none',
            outline: 'none',
            resize: 'none',
            width: '100%',
            height: '100%',
            minHeight: screenSize === 'mobile' ? '100px' : '120px', // altura menor para economizar espaço
            textAlign: 'left',
            verticalAlign: 'top',
            margin: 0,
            padding: 0
          }}
          onFocus={(e) => {
            const container = e.currentTarget.parentElement;
            if (container) {
              container.style.borderColor = '#F66649';
            }
          }}
          onBlur={(e) => {
            const container = e.currentTarget.parentElement;
            if (container) {
              container.style.borderColor = '#2D2D36';
            }
          }}
        />
      </div>

      {/* Hint Text */}
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#94979C', // fill_Z73DF7
          margin: 0,
          textAlign: 'right',
          width: '100%',
          height: 'fit-content'
        }}
      >
        {hintText || defaultHintText}
      </span>
    </div>
  );
}
