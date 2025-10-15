import React from 'react';
import { MediaItem } from '@/components/ui/MediaItem';

interface MetaDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  metaTitle: string;
  status: 'pendente' | 'concluida';
  assunto: string;
  relevancia: 'low' | 'medium' | 'high';
  tipoEstudo: string;
  desempenho: string;
  comandosMentor: string;
  materiais?: Array<{
    id: string;
    nome: string;
    tipo: 'pdf' | 'png' | 'image' | 'docx' | 'document';
    tamanho: string;
  }>;
}

export const MetaDetailsModal: React.FC<MetaDetailsModalProps> = ({
  isOpen,
  onClose,
  metaTitle,
  status,
  assunto,
  relevancia,
  tipoEstudo,
  desempenho,
  comandosMentor,
  materiais = [],
}) => {
  if (!isOpen) return null;

  const getRelevanceStars = () => {
    const starCount = relevancia === 'high' ? 3 : relevancia === 'medium' ? 2 : 1;
    return (
      <div style={{ display: 'flex', gap: '0px' }}>
        {[1, 2, 3].map((i) => (
          <svg
            key={i}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={i <= starCount ? '#FFFFFF' : 'none'}
            stroke="#FFFFFF"
            strokeWidth="2"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '40px',
          right: '40px',
          width: '617px',
          maxHeight: 'calc(100vh - 80px)',
          background: '#202028',
          border: '1px solid #272737',
          borderRadius: '16px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '24px 16px 16px 24px',
            background: '#252532',
            borderBottom: '1.5px solid #272737',
          }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h2
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '1.56em',
                color: '#F7F7F7',
                margin: 0,
              }}
            >
              {metaTitle}
            </h2>
            {/* Status with Dot */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  minWidth: '8px',
                  minHeight: '8px',
                  borderRadius: '50%',
                  background: status === 'pendente' ? '#F79009' : '#17B26A',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: status === 'pendente' ? '#F79009' : '#17B26A',
                }}
              >
                Meta {status}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#F0F0F1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Body - Scrollable */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Info Card */}
          <div
            style={{
              background: '#272737',
              border: '1px solid #2C2C45',
              borderRadius: '8px',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Row 1 */}
            <div style={{ display: 'flex', alignItems: 'stretch', alignSelf: 'stretch', gap: '24px' }}>
              {/* Assunto */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#CECFD2',
                  }}
                >
                  Assunto
                </span>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#FFFFFF',
                  }}
                >
                  {assunto}
                </span>
              </div>

              {/* Relevância */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#CECFD2',
                  }}
                >
                  Relevância da meta
                </span>
                {getRelevanceStars()}
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'flex', alignItems: 'stretch', alignSelf: 'stretch', gap: '24px' }}>
              {/* Tipo de estudo */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#CECFD2',
                  }}
                >
                  Tipo de estudo
                </span>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#FFFFFF',
                  }}
                >
                  {tipoEstudo}
                </span>
              </div>

              {/* Desempenho */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#CECFD2',
                  }}
                >
                  Desempenho (%)
                </span>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#FFFFFF',
                  }}
                >
                  {desempenho}
                </span>
              </div>
            </div>

            {/* Comandos do Mentor */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '252.5px' }}>
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#CECFD2',
                }}
              >
                Comandos do mentor
              </span>
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF',
                }}
              >
                {comandosMentor}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ flex: 1, height: '1px', background: '#22262F' }} />
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#94979C',
              }}
            >
              Conteúdos de mídia ({materiais.length})
            </span>
            <div style={{ flex: 1, height: '1px', background: '#22262F' }} />
          </div>

          {/* Materials Grid */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            {materiais.map((material) => (
              <MediaItem
                key={material.id}
                title={material.nome}
                size={material.tamanho}
                type={material.tipo}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            padding: '32px 24px',
            borderTop: '1px solid #2C2C45',
          }}
        >
          <button
            onClick={onClose}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '12px 18px',
              background: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#CECFD2',
              boxShadow:
                '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3D3D55';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2D2D45';
            }}
          >
            Fechar aba
          </button>

          <button
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '12px 18px',
              background: '#C74228',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
              boxShadow:
                '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D55A3A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C74228';
            }}
          >
            Ir para a meta
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.75 6.50001L16.75 1.50001M16.75 1.50001H11.75M16.75 1.50001L9.25 9M7.58333 1.5H5.75C4.34987 1.5 3.6498 1.5 3.11502 1.77248C2.64462 2.01217 2.26217 2.39462 2.02248 2.86502C1.75 3.3998 1.75 4.09987 1.75 5.5V12.5C1.75 13.9001 1.75 14.6002 2.02248 15.135C2.26217 15.6054 2.64462 15.9878 3.11502 16.2275C3.6498 16.5 4.34987 16.5 5.75 16.5H12.75C14.1501 16.5 14.8502 16.5 15.385 16.2275C15.8554 15.9878 16.2378 15.6054 16.4775 15.135C16.75 14.6002 16.75 13.9001 16.75 12.5V10.6667"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

