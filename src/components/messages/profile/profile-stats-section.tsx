import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color = '#F7F7F7' }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        backgroundColor: '#252532',
        borderRadius: '12px',
        border: '1px solid #2C2C45'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          backgroundColor: 'rgba(91, 91, 214, 0.1)',
          flexShrink: 0
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#94979C',
            margin: '0 0 4px 0'
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '1.33em',
            color: color,
            margin: 0,
            letterSpacing: '-0.01em'
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

const ProfileStatsSection: React.FC = () => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h3
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: '#F7F7F7',
          margin: '0 0 16px 0',
          letterSpacing: '-0.01em'
        }}
      >
        Estatísticas
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <StatCard
          label="Alunos mentorados"
          value="150+"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16667C3.28261 12.5 2.43477 12.8512 1.80965 13.4763C1.18453 14.1014 0.833336 14.9493 0.833336 15.8333V17.5" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.50001 9.16667C9.34096 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34096 2.5 7.50001 2.5C5.65906 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65906 9.16667 7.50001 9.16667Z" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.1667 17.5V15.8333C19.1661 15.0948 18.9204 14.3773 18.4679 13.7936C18.0154 13.2099 17.3819 12.793 16.6667 12.6083" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3333 2.60834C14.0503 2.79192 14.6858 3.20892 15.1397 3.7936C15.5935 4.37827 15.8398 5.09736 15.8398 5.8375C15.8398 6.57765 15.5935 7.29674 15.1397 7.88141C14.6858 8.46609 14.0503 8.88309 13.3333 9.06667" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <StatCard
          label="Taxa de aprovação"
          value="85%"
          color="#3DC462"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3333 9.23333V10C18.3323 11.797 17.7504 13.5456 16.6744 14.9849C15.5985 16.4241 14.0861 17.4771 12.3628 17.9866C10.6395 18.4961 8.79769 18.4349 7.11205 17.8122C5.42642 17.1894 3.98718 16.0384 3.00912 14.5309C2.03106 13.0234 1.56648 11.24 1.68472 9.44693C1.80296 7.65385 2.49766 5.94694 3.66522 4.58089C4.83278 3.21485 6.41064 2.26282 8.16348 1.86679C9.91632 1.47076 11.7502 1.65195 13.3917 2.38333" stroke="#3DC462" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 3.33334L10 11.675L7.5 9.17501" stroke="#3DC462" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <StatCard
          label="Anos de experiência"
          value="10+"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3333 1.66666V5" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66667 1.66666V5" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 8.33334H17.5" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default ProfileStatsSection;
