import React from 'react';
import { Plus, User } from 'lucide-react';

interface EmptyStudentsStateProps {
  onAddStudent: () => void;
}

export const EmptyStudentsState: React.FC<EmptyStudentsStateProps> = ({
  onAddStudent
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        paddingTop: '32px',
        width: '1280px',
        height: '518px',
        position: 'relative',
        background: 'rgba(45, 45, 69, 1)',
        border: '1px solid #22262F',
        borderRadius: '12px',
        opacity: 1
      }}
    >
      {/* Background Pattern Decorative */}
      <div
        style={{
          position: 'absolute',
          top: '34%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '480px',
          height: '480px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.2 }}>
          <mask id="mask0_16468_69012" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="480" height="480">
            <rect width="480" height="480" fill="url(#paint0_radial_16468_69012)"/>
          </mask>
          <g mask="url(#mask0_16468_69012)">
            <circle cx="240" cy="240" r="47.5" stroke="#666666" strokeWidth="1"/>
            <circle cx="240" cy="240" r="79.5" stroke="#666666" strokeWidth="1"/>
            <circle cx="240" cy="240" r="111.5" stroke="#666666" strokeWidth="1"/>
            <circle cx="240" cy="240" r="143.5" stroke="#666666" strokeWidth="1"/>
            <circle cx="240" cy="240" r="175.5" stroke="#666666" strokeWidth="1"/>
            <circle cx="240" cy="240" r="207.5" stroke="#666666" strokeWidth="1"/>
            <circle cx="240" cy="240" r="239.5" stroke="#666666" strokeWidth="1"/>
          </g>
          <defs>
            <radialGradient id="paint0_radial_16468_69012" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 240) rotate(90) scale(240 240)">
              <stop/>
              <stop offset="1" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Content Inner */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '16px',
            width: '100%'
          }}
        >
          {/* Icon Container */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px'
            }}
          >
        {/* Featured Icon SVG */}
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'relative',
            zIndex: 3
          }}
        >
          <path d="M12 0.5H36C42.3513 0.5 47.5 5.64873 47.5 12V36C47.5 42.3513 42.3513 47.5 36 47.5H12C5.64873 47.5 0.5 42.3513 0.5 36V12C0.5 5.64873 5.64873 0.5 12 0.5Z" fill="#13161B"/>
          <path d="M12 0.5H36C42.3513 0.5 47.5 5.64873 47.5 12V36C47.5 42.3513 42.3513 47.5 36 47.5H12C5.64873 47.5 0.5 42.3513 0.5 36V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#192634"/>
          <path d="M12 0.5H36C42.3513 0.5 47.5 5.64873 47.5 12V36C47.5 42.3513 42.3513 47.5 36 47.5H12C5.64873 47.5 0.5 42.3513 0.5 36V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="url(#paint0_linear_16468_69015)"/>
          <path d="M36 3.5C40.6944 3.5 44.5 7.30558 44.5 12V36C44.5 40.6944 40.6944 44.5 36 44.5H12C7.30558 44.5 3.5 40.6944 3.5 36V12C3.5 7.30558 7.30558 3.5 12 3.5H36Z" fill="#0F1E2D"/>
          <path d="M36 3.5C40.6944 3.5 44.5 7.30558 44.5 12V36C44.5 40.6944 40.6944 44.5 36 44.5H12C7.30558 44.5 3.5 40.6944 3.5 36V12C3.5 7.30558 7.30558 3.5 12 3.5H36Z" stroke="#192634"/>
          <path d="M32 33C32 31.6044 32 30.9067 31.8278 30.3389C31.44 29.0605 30.4395 28.06 29.1611 27.6722C28.5933 27.5 27.8956 27.5 26.5 27.5H21.5C20.1044 27.5 19.4067 27.5 18.8389 27.6722C17.5605 28.06 16.56 29.0605 16.1722 30.3389C16 30.9067 16 31.6044 16 33M28.5 19.5C28.5 21.9853 26.4853 24 24 24C21.5147 24 19.5 21.9853 19.5 19.5C19.5 17.0147 21.5147 15 24 15C26.4853 15 28.5 17.0147 28.5 19.5Z" stroke="#F66649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_16468_69015" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.12"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
          </div>

          {/* Text Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              width: '442px'
            }}
          >
          <h3
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#F7F7F7',
              margin: 0,
              textAlign: 'center'
            }}
          >
            Nenhum aluno cadastrado
          </h3>
          <p
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#CECFD2',
              margin: 0,
              textAlign: 'center'
            }}
          >
            Comece a cadastrar novos alunos para começar a vincular planos, disciplinas e acompanhar o progresso individual.
          </p>
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            width: 'fit-content',
            height: 'fit-content'
          }}
        >
        <button
          onClick={onAddStudent}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            padding: '10px 30px',
            background: '#C74228',
            border: 'none',
            backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
            borderRadius: '8px',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#FFFFFF',
            cursor: 'pointer',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
            transition: 'background 0.2s ease',
            width: 'fit-content',
            height: 'fit-content'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#D55A3A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#C74228';
          }}
        >
          <Plus size={20} color="#F0F0F1" strokeWidth={1.67} />
          <span>Cadastrar aluno</span>
        </button>
        </div>
      </div>
    </div>
  );
};
