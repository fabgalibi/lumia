import React from 'react';
import type { Goal } from '@/types/goal';

interface ContentProps {
  goal: Goal;
  expandedSections: { [key: string]: boolean };
  onToggleSection: (section: string) => void;
  isFullscreen: boolean;
}

const sections = [
  {
    key: 'subjects',
    title: 'Assuntos abordados',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_14978_4464" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <rect width="32" height="32" fill="url(#paint0_linear_14978_4464)"/>
        </mask>
        <g mask="url(#mask0_14978_4464)">
          <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
        </g>
        <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
        <path d="M22 16L14 16M22 12L14 12M22 20L14 20M11.3333 16C11.3333 16.3682 11.0349 16.6667 10.6667 16.6667C10.2985 16.6667 10 16.3682 10 16C10 15.6319 10.2985 15.3334 10.6667 15.3334C11.0349 15.3334 11.3333 15.6319 11.3333 16ZM11.3333 12C11.3333 12.3682 11.0349 12.6667 10.6667 12.6667C10.2985 12.6667 10 12.3682 10 12C10 11.6319 10.2985 11.3334 10.6667 11.3334C11.0349 11.3334 11.3333 11.6319 11.3333 12ZM11.3333 20C11.3333 20.3682 11.0349 20.6667 10.6667 20.6667C10.2985 20.6667 10 20.3682 10 20C10 19.6319 10.2985 19.3334 10.6667 19.3334C11.0349 19.3334 11.3333 19.6319 11.3333 20Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_14978_4464" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    key: 'materials',
    title: 'Materiais de apoio',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_14978_5257" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <rect width="32" height="32" fill="url(#paint0_linear_14978_5257)"/>
        </mask>
        <g mask="url(#mask0_14978_5257)">
          <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
        </g>
        <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
        <path d="M22 14.1667H16M22 10.6667L16 10.6667M22 17.8334H10M22 21.3334H10M10.8533 9.97338L13.4311 11.9067C13.6241 12.0515 13.7206 12.1238 13.7551 12.2126C13.7853 12.2903 13.7853 12.3765 13.7551 12.4542C13.7206 12.5429 13.6241 12.6153 13.4311 12.76L10.8533 14.6934C10.5787 14.8994 10.4414 15.0024 10.3264 15C10.2264 14.9979 10.1326 14.951 10.0709 14.8722C10 14.7817 10 14.61 10 14.2667V10.4001C10 10.0567 10 9.88508 10.0709 9.79455C10.1326 9.71577 10.2264 9.66887 10.3264 9.66679C10.4414 9.6644 10.5787 9.76739 10.8533 9.97338Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_14978_5257" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    key: 'commands',
    title: 'Comandos do mentor',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_14978_15142" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <rect width="32" height="32" fill="url(#paint0_linear_14978_15142)"/>
        </mask>
        <g mask="url(#mask0_14978_15142)">
          <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
        </g>
        <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
        <path d="M16 21.3333H22M10 21.3333H11.1164C11.4425 21.3333 11.6055 21.3333 11.759 21.2964C11.895 21.2638 12.0251 21.2099 12.1444 21.1368C12.279 21.0543 12.3943 20.939 12.6249 20.7084L21 12.3333C21.5523 11.781 21.5523 10.8856 21 10.3333C20.4477 9.781 19.5523 9.781 19 10.3333L10.6248 18.7084C10.3942 18.939 10.2789 19.0543 10.1965 19.1889C10.1234 19.3082 10.0695 19.4383 10.0368 19.5743C10 19.7278 10 19.8908 10 20.2169V21.3333Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_14978_15142" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    key: 'links',
    title: 'Links',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15630_21485" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <rect width="32" height="32" fill="url(#paint0_linear_15630_21485)"/>
        </mask>
        <g mask="url(#mask0_15630_21485)">
          <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
        </g>
        <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
        <path d="M16.4715 20.2427L15.5287 21.1855C14.227 22.4872 12.1164 22.4872 10.8147 21.1855C9.51294 19.8837 9.51294 17.7732 10.8147 16.4714L11.7575 15.5286M20.2428 16.4714L21.1856 15.5286C22.4873 14.2269 22.4873 12.1163 21.1856 10.8146C19.8838 9.51282 17.7733 9.51282 16.4715 10.8146L15.5287 11.7574M13.6668 18.3333L18.3335 13.6667" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_15630_21485" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    key: 'additionalTips',
    title: 'Dicas adicionais',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_14978_1962" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <rect width="32" height="32" fill="url(#paint0_linear_14978_1962)"/>
        </mask>
        <g mask="url(#mask0_14978_1962)">
          <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
        </g>
        <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
        <path d="M21.3332 15V12.5334C21.3332 11.4133 21.3332 10.8532 21.1152 10.4254C20.9234 10.0491 20.6175 9.74311 20.2412 9.55136C19.8133 9.33337 19.2533 9.33337 18.1332 9.33337H13.8665C12.7464 9.33337 12.1863 9.33337 11.7585 9.55136C11.3822 9.74311 11.0762 10.0491 10.8845 10.4254C10.6665 10.8532 10.6665 11.4133 10.6665 12.5334V19.4667C10.6665 20.5868 10.6665 21.1469 10.8845 21.5747C11.0762 21.951 11.3822 22.257 11.7585 22.4487C12.1863 22.6667 12.7464 22.6667 13.8665 22.6667H15.9998M17.3332 15.3334H13.3332M14.6665 18H13.3332M18.6665 12.6667H13.3332M19.9998 22V18M17.9998 20H21.9998" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_14978_1962" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  }
];

export const GoalDetailsContent: React.FC<ContentProps> = ({
  goal,
  expandedSections,
  onToggleSection,
  isFullscreen
}) => {
  return (
    <div
      className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
      style={{
        minHeight: 0,
        padding: '24px',
        gap: '24px'
      }}
    >
      {sections.map((section) => (
        <div key={section.key} className="w-full min-w-0">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => onToggleSection(section.key)}
            style={{
              padding: '16px',
              background: '#252532',
              border: '1px solid #2C2C45',
              borderBottom: expandedSections[section.key] ? 'none' : '1px solid #2C2C45',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              borderBottomLeftRadius: expandedSections[section.key] ? '0px' : '8px',
              borderBottomRightRadius: expandedSections[section.key] ? '0px' : '8px',
              gap: '12px',
              minWidth: 0
            }}
          >
            <div className="flex items-center flex-1 min-w-0" style={{ gap: '10px' }}>
              <div 
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '32px',
                  height: '32px'
                }}
              >
                {section.icon}
              </div>
              <span 
                className="truncate"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#F0F0F1'
                }}
              >
                {section.title}
              </span>
            </div>
            
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              style={{
                transform: expandedSections[section.key] ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease-in-out'
              }}
            >
              <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {expandedSections[section.key] && (
            <div 
              style={{
                padding: '20px 16px',
                background: '#272737',
                border: '1px solid #2C2C45',
                borderTop: 'none',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(goal as any)[section.key].map((item: string, index: number) => (
                  <span 
                    key={index}
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '1.6666666666666667em',
                      color: '#FFFFFF'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
