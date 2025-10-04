import React from 'react';

const MessagesEmptyState: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      width: '100%',
      padding: '40px 0'
    }}
  >
    {/* Ícone */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '24px',
        backgroundColor: '#232332',
        border: '3px solid #2C2C45',
        borderRadius: '360px'
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2517 29.9436C16.0859 28.8754 15.9999 27.7811 15.9999 26.6668C15.9999 14.8848 25.614 5.3335 37.4736 5.3335C49.3332 5.3335 58.9473 14.8848 58.9473 26.6668C58.9473 29.3284 58.4567 31.876 57.5605 34.2255C57.3743 34.7135 57.2812 34.9574 57.239 35.1479C57.1971 35.3367 57.181 35.4694 57.1764 35.6627C57.1718 35.8578 57.1982 36.0726 57.2512 36.5024L58.3247 45.2229C58.4409 46.1669 58.499 46.6389 58.342 46.9821C58.2044 47.2827 57.96 47.5216 57.6563 47.6522C57.3096 47.8013 56.839 47.7323 55.898 47.5943L47.4039 46.3493C46.9604 46.2843 46.7386 46.2517 46.5367 46.2529C46.3369 46.254 46.1986 46.2688 46.0031 46.3099C45.8055 46.3514 45.553 46.446 45.048 46.6352C42.6925 47.5174 40.1398 48.0002 37.4736 48.0002C36.3585 48.0002 35.2631 47.9157 34.1938 47.7529M20.3509 58.6668C28.2573 58.6668 34.6667 52.1003 34.6667 44.0002C34.6667 35.9 28.2573 29.3335 20.3509 29.3335C12.4445 29.3335 6.03513 35.9 6.03513 44.0002C6.03513 45.6284 6.29411 47.1947 6.77217 48.6581C6.97426 49.2767 7.0753 49.586 7.10846 49.7973C7.14308 50.0179 7.14915 50.1418 7.13625 50.3647C7.1239 50.5783 7.07048 50.8196 6.96363 51.3023L5.33337 58.6668L13.3195 57.5762C13.7554 57.5166 13.9734 57.4869 14.1637 57.4882C14.3641 57.4895 14.4705 57.5004 14.667 57.5396C14.8537 57.5768 15.1311 57.6747 15.6861 57.8706C17.1483 58.3866 18.7177 58.6668 20.3509 58.6668Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    
    {/* Container principal do conteúdo */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: '32px'
      }}
    >
      {/* Texto */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          width: '708px',
          height: '48px',
          opacity: 1,
          alignSelf: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#FFFFFF',
            lineHeight: '1.5',
            margin: 0,
            fontFamily: 'Sora',
            textAlign: 'left'
          }}
        >
          Suas mensagens
        </h2>
        
        <p
          style={{
            fontSize: '16px',
            fontWeight: '400',
            color: '#ECECED',
            lineHeight: '1.5',
            textAlign: 'center',
            margin: 0,
            fontFamily: 'Sora',
            letterSpacing: '0%'
          }}
        >
          Aqui você verá suas conversas com os mentores, assim como os materiais compartilhados. Envie uma mensagem e comece sua jornada de estudos.
        </p>
      </div>
      
      {/* Botão */}
            <button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                padding: '10px 20px',
                backgroundColor: '#C74228',
                border: '2px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
                cursor: 'pointer',
                fontFamily: 'Sora'
              }}
            >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10.25V5.25M7.5 7.75H12.5M5.33333 14V15.9463C5.33333 16.3903 5.33333 16.6123 5.42436 16.7263C5.50352 16.8255 5.62356 16.8832 5.75045 16.8831C5.89636 16.8829 6.06973 16.7442 6.41646 16.4668L8.40434 14.8765C8.81043 14.5517 9.0135 14.3892 9.2396 14.2737C9.4402 14.1712 9.6537 14.0963 9.8743 14.051C10.1231 14 10.3831 14 10.9031 14H13C14.4001 14 15.1002 14 15.635 13.7275C16.1054 13.4878 16.4878 13.1054 16.7275 12.635C17 12.1002 17 11.4001 17 10V5.5C17 4.09987 17 3.3998 16.7275 2.86502C16.4878 2.39462 16.1054 2.01217 15.635 1.77248C15.1002 1.5 14.4001 1.5 13 1.5H6C4.59987 1.5 3.8998 1.5 3.36502 1.77248C2.89462 2.01217 2.51217 2.39462 2.27248 2.86502C2 3.3998 2 4.09987 2 5.5V10.6667C2 11.4416 2 11.8291 2.08519 12.147C2.31635 13.0098 2.99022 13.6836 3.85295 13.9148C4.17087 14 4.55836 14 5.33333 14Z"
            stroke="#F0F0F1"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px 2px'
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#F0F0F1',
              fontFamily: 'Sora'
            }}
          >
            Nova mensagem
          </span>
        </div>
      </button>
    </div>
  </div>
);

export default MessagesEmptyState;
