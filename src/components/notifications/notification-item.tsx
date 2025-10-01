import React from 'react';
import { FeaturedIcon, type IconType } from '@/components/ui';

export type NotificationType = 'user' | 'system';

export interface NotificationItemProps {
  type: NotificationType;
  title: string;
  subtitle: string;
  description: string;
  highlightedText?: string; // Texto que deve ser destacado em laranja
  isUnread?: boolean;
  avatar?: string;
  icon?: IconType;
  attachment?: {
    name: string;
    size: string;
    fileType: 'PDF' | 'TXT';
  };
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  title,
  subtitle,
  description,
  highlightedText,
  isUnread = false,
  avatar,
  icon,
  attachment
}) => {
  const renderAvatar = () => {
    if (type === 'user' && avatar) {
      return (
        <div style={{
          position: 'relative',
          width: '32px',
          height: '32px',
          flexShrink: 0,
          borderRadius: '9999px'
        }}>
          {/* Contrast border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '32px',
            height: '32px',
            border: '0.5px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9999px',
            pointerEvents: 'none',
            zIndex: 1
          }} />
          
          {/* Avatar image */}
          <img 
            src={avatar}
            alt={title}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          {/* Online indicator */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '8px',
            height: '8px',
            backgroundColor: '#47CD89',
            border: '1.5px solid #0C0E12',
            borderRadius: '9999px',
            zIndex: 2
          }} />
        </div>
      );
    }

    return null;
  };

  const renderIcon = () => {
    if (type === 'system' && icon) {
      return <FeaturedIcon icon={icon} />;
    }
    return null;
  };

  const renderFileIcon = (fileType: 'PDF' | 'TXT') => {
    const colors = {
      PDF: { bg: '#D92D20', text: 'PDF' },
      TXT: { bg: '#414651', text: 'TXT' }
    };

    return (
      <div style={{
        width: '40px',
        height: '40px',
        position: 'relative',
        flexShrink: 0
      }}>
        {/* Page background */}
        <svg width="32" height="40" viewBox="0 0 32 40" style={{ position: 'absolute', left: '4px', top: 0 }}>
          <rect width="32" height="40" rx="2" fill={colors[fileType].bg}/>
        </svg>
        {/* Earmark */}
        <svg width="12" height="12" viewBox="0 0 12 12" style={{ position: 'absolute', left: '24px', top: 0 }}>
          <path d="M0 0L12 0L12 12L0 0Z" fill="#FFFFFF" fillOpacity="0.3"/>
        </svg>
        {/* File type text */}
        <div style={{
          position: 'absolute',
          left: '4px',
          top: '23px',
          width: '32px',
          height: '11px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '9px',
          lineHeight: '1.21em',
          color: '#FFFFFF',
          textAlign: 'center'
        }}>
          {colors[fileType].text}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      width: '100%',
      position: 'relative',
      alignItems: 'flex-start',
      minWidth: 0,
      boxSizing: 'border-box'
    }}>
      {/* Avatar ou Icon */}
      {renderAvatar()}
      {renderIcon()}

      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: 1,
        minWidth: 0,
        overflow: 'hidden'
      }}>
        {/* Text and supporting text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          width: '100%',
          alignSelf: 'stretch'
        }}>
          {/* Text and subtext */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            flexWrap: 'nowrap'
          }}>
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '13px',
              lineHeight: '1.3846153846153846em',
              color: '#FFFFFF',
              whiteSpace: 'nowrap'
            }}>
              {title}
            </span>
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '11px',
              lineHeight: '1.4545454545454546em',
              color: '#F0F0F1',
              whiteSpace: 'nowrap'
            }}>
              {subtitle}
            </span>
          </div>
          
          {/* Supporting text */}
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '1.3846153846153846em',
            color: '#F0F0F1',
            margin: 0,
            width: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            minWidth: 0
          }}>
            {highlightedText ? (
              <>
                {description.split(highlightedText)[0]}
                <span style={{ color: '#F66649' }}>{highlightedText}</span>
                {description.split(highlightedText)[1]}
              </>
            ) : (
              description
            )}
          </p>
        </div>

        {/* Attachment (if exists) */}
        {attachment && (
          <div style={{
            display: 'flex',
            gap: '12px',
            width: '100%',
            alignItems: 'flex-start',
            minWidth: 0
          }}>
            {renderFileIcon(attachment.fileType)}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
              alignSelf: 'stretch',
              flex: 1,
              minWidth: 0,
              overflow: 'hidden'
            }}>
              <span style={{
                fontFamily: 'Sora',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '1.3846153846153846em',
                color: '#FFFFFF',
                width: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                minWidth: 0
              }}>
                {attachment.name}
              </span>
              <span style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '1.3333333333333333em',
                color: '#CECFD2',
                width: '100%',
                whiteSpace: 'nowrap'
              }}>
                {attachment.size}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Unread indicator - posicionado conforme Figma */}
      {isUnread && (
        <div style={{
          width: '10px',
          height: '10px',
          backgroundColor: '#E6483D',
          borderRadius: '360px',
          flexShrink: 0,
          marginTop: '5px'
        }} />
      )}
    </div>
  );
};
