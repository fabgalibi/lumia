import React from 'react';

interface TutorialCardMainProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  isWatched?: boolean;
  className?: string;
}

export const TutorialCardMain: React.FC<TutorialCardMainProps> = ({
  id,
  title,
  description,
  image,
  isWatched = false,
  className = ''
}) => {
  return (
    <div 
      className={className}
      style={{
        width: '265px',
        height: '296px',
        background: '#252532',
        borderRadius: '8px',
        border: '1px solid',
        borderImageSource: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
        borderImageSlice: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Image section */}
      <div 
        style={{
          width: '100%',
          height: '122px',
          background: '#414151',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Watched badge positioned over image */}
      {isWatched && (
        <div 
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: '#3B2A1A',
            border: '1px solid transparent',
            borderImageSource: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
            borderImageSlice: 1,
            borderRadius: '9999px',
            padding: '2px 8px 2px 6px',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          {/* Check icon */}
          <div
            style={{
              width: '12px',
              height: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg
              width="8"
              height="5.5"
              viewBox="0 0 8 6"
              fill="none"
              style={{
                stroke: '#E98B39',
                strokeWidth: '1px'
              }}
            >
              <path
                d="M1 3L3 5L7 1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* Text */}
          <span 
            style={{
              fontFamily: 'Inter',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '18px',
              color: '#E98B39',
              whiteSpace: 'nowrap'
            }}
          >
            Assistido
          </span>
        </div>
      )}
      
      {/* Content section */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'stretch',
          gap: '16px',
          padding: '16px 16px 20px',
          flex: 1
        }}
      >
        {/* Title and Description container */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'stretch',
            gap: '6px'
          }}
        >
          {/* Title */}
          <h3 
            style={{
              fontFamily: 'Sora',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#FFFFFF',
              width: '100%',
              margin: '0'
            }}
          >
            {title}
          </h3>
          
          {/* Description */}
          {description && (
            <p 
              style={{
                fontFamily: 'Sora',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '20px',
                color: '#FFFFFF',
                width: '100%',
                margin: '0'
              }}
            >
              {description}
            </p>
          )}
        </div>
        
        {/* Button */}
        <button 
          onClick={() => console.log(`${isWatched ? 'Assistir novamente' : 'Assistir tutorial'}: ${title}`)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '4px',
            padding: '10px 14px',
            background: '#562524',
            border: '1px solid #C74228',
            borderRadius: '8px',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C74228';
            e.currentTarget.style.border = '1px solid #C74228';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#562524';
            e.currentTarget.style.border = '1px solid #C74228';
          }}
        >
          <span 
            style={{
              fontFamily: 'Sora',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#F0F0F1',
              padding: '0px 2px'
            }}
          >
            {isWatched ? 'Assistir novamente' : 'Assistir tutorial'}
          </span>
        </button>
      </div>
    </div>
  );
};
