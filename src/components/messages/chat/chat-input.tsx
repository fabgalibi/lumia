import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '0px 24px 24px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '80px',
          backgroundColor: 'var(--Component-colors-Components-Inputs-Input-background, #2D2D3B)',
          borderRadius: '12px',
          border: '1px solid var(--Component-colors-Components-Inputs-Input-border, #3A3A4A)',
          boxShadow: '0px 1px 2px 0px var(--ColorsEffectsShadowsshadow-xs), 0px -2px 0px 0px var(--ColorsEffectsShadowsshadow-skeumorphic-inner) inset, 0px 0px 0px 1px var(--ColorsEffectsShadowsshadow-skeumorphic-inner-border) inset',
          position: 'relative',
          transition: 'all 0.2s ease'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '12px 16px',
            flex: 1,
            minHeight: '48px'
          }}
        >
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Envie sua mensagem..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: 'var(--Component-colors-Components-Inputs-Input-text, #D5D7DA)',
              resize: 'none',
              minHeight: '24px',
              maxHeight: '120px',
              width: '100%',
              padding: '0',
              margin: '0'
            }}
          />
        </div>

        {/* Ações */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '4px',
            padding: '8px 16px 12px'
          }}
        >
          {/* Botões de utilidade */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#404050';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1015 7.26647L8.09108 13.2769C6.72425 14.6437 4.50817 14.6437 3.14134 13.2769C1.7745 11.91 1.7745 9.69396 3.14134 8.32713L9.15174 2.31672C10.063 1.4055 11.5404 1.40549 12.4516 2.31672C13.3628 3.22794 13.3628 4.70533 12.4516 5.61655L6.67687 11.3913C6.22126 11.8469 5.48257 11.8469 5.02695 11.3913C4.57134 10.9356 4.57134 10.197 5.02695 9.74134L10.0946 4.67374"
                  stroke="#61656C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#404050';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3335 9.3335C5.3335 9.3335 6.3335 10.6668 8.00016 10.6668C9.66683 10.6668 10.6668 9.3335 10.6668 9.3335M10.0002 6.00016H10.0068M6.00016 6.00016H6.00683M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016ZM10.3335 6.00016C10.3335 6.18426 10.1843 6.3335 10.0002 6.3335C9.81607 6.3335 9.66683 6.18426 9.66683 6.00016C9.66683 5.81607 9.81607 5.66683 10.0002 5.66683C10.1843 5.66683 10.3335 5.81607 10.3335 6.00016ZM6.3335 6.00016C6.3335 6.18426 6.18426 6.3335 6.00016 6.3335C5.81607 6.3335 5.66683 6.18426 5.66683 6.00016C5.66683 5.81607 5.81607 5.66683 6.00016 5.66683C6.18426 5.66683 6.3335 5.81607 6.3335 6.00016Z"
                  stroke="#61656C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Botão Enviar */}
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '45px',
              height: '20px',
              padding: '0',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: newMessage.trim() ? 'pointer' : 'not-allowed',
              transition: 'opacity 0.2s ease',
              opacity: newMessage.trim() ? 1 : 0.4,
              gap: '4px'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '1.43em',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: '0%',
                whiteSpace: 'nowrap'
              }}
            >
              Enviar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
