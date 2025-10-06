import React from 'react';

interface InfoItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value, icon }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      {icon && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            flexShrink: 0
          }}
        >
          {icon}
        </div>
      )}
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '1.5em',
          color: '#CECFD2'
        }}
      >
        {value}
      </span>
    </div>
  );
};

interface ProfileInfoSectionProps {
  contactName: string;
}

const ProfileInfoSection: React.FC<ProfileInfoSectionProps> = ({ contactName }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div style={{ marginBottom: isMobile ? '20px' : '24px' }}>
      <h3
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#F7F7F7',
          margin: '0 0 12px 0'
        }}
      >
        Informações de contato
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <InfoItem
          label="Email"
          value="anabeatriz074@gmail.com"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#85888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="#85888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        
        <InfoItem
          label="Telefone"
          value="+55 (00) 93454-8563"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1468 21.5902 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3157 6.72533 15.2672 5.19001 12.85C3.49997 10.2412 2.44824 7.27099 2.12001 4.18C2.09496 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30438 2.17052C3.55896 2.05833 3.83489 2.00026 4.11334 2H7.11334C7.59531 1.99522 8.06691 2.16708 8.43376 2.48353C8.80061 2.79999 9.04207 3.23945 9.12001 3.72C9.20147 4.68007 9.36043 5.63073 9.59501 6.56C9.73012 7.13282 9.74407 7.72356 9.63623 8.30209C9.52839 8.88062 9.30091 9.43369 8.97001 9.92L8.06001 11.06C9.26756 13.375 10.9325 15.0399 13.2475 16.2475L14.3875 15.3375C14.8738 15.0066 15.4269 14.7791 16.0054 14.6713C16.5839 14.5634 17.1747 14.5774 17.7475 14.7125C18.6768 14.9471 19.6275 15.106 20.5875 15.1875C21.068 15.2654 21.5074 15.5069 21.8239 15.8737C22.1403 16.2406 22.3122 16.7122 22.3075 17.2" stroke="#85888E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default ProfileInfoSection;