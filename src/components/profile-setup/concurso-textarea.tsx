// concurso-textarea.tsx
import React from "react";

/** ===== Props públicas ===== */
export type ConcursoTextareaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function ConcursoTextarea({ 
  value, 
  onChange, 
  placeholder = "Digite o nome do concurso ou órgão...", 
  screenSize 
}: ConcursoTextareaProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '6px', // gap conforme Figma
        width: '100%'
      }}
    >
      {/* Label */}
      <label
        style={{
          fontFamily: 'Sora',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#FFFFFF',
          margin: 0
        }}
      >
        Concurso específico (opcional)
      </label>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          minHeight: screenSize === 'mobile' ? '120px' : '200px', // altura responsiva
          padding: '12px 16px',
          background: '#0B1219',
          border: '1px solid #2D2D45',
          borderRadius: '8px',
          color: '#FFFFFF',
          fontFamily: 'Sora',
          fontSize: '16px',
          lineHeight: '1.5em',
          resize: 'vertical',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.3s ease'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#F66649';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#2D2D45';
        }}
      />

      {/* Hint text */}
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '1.5em',
          color: '#CECFD2',
          margin: 0
        }}
      >
        Exemplo: "PCDF 2024", "Concurso TRT", "INSS"
      </span>
    </div>
  );
}
