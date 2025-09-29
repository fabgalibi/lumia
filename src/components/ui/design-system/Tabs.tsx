import React from 'react';
import { colors, type ScreenSize } from './tokens';
import { Text } from './Text';

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  screenSize?: ScreenSize;
  variant?: 'default' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Componente de Abas Reutilizável
 * 
 * Baseado no padrão usado em configurações de conta e outras seções.
 * Suporta diferentes variantes e tamanhos.
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  screenSize = 'desktop',
  variant = 'default',
  size = 'md',
  className,
  style
}) => {
  // Garantir que sempre haja uma aba ativa por padrão
  const effectiveActiveTab = activeTab && activeTab.trim() !== '' ? activeTab : (tabs.length > 0 ? tabs[0].id : '');

  const getTabsContainerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      borderBottom: variant === 'underline' ? '1px solid #22262F' : 'none',
    };

    return baseStyle;
  };

  const getTabsInnerStyle = (): React.CSSProperties => {
    return {
      display: 'flex',
      gap: '12px', // Conforme Figma - sempre 12px
      flexWrap: screenSize === 'mobile' || screenSize === 'tablet' ? 'wrap' : 'nowrap',
    };
  };

  const getTabStyle = (tab: Tab): React.CSSProperties => {
    const isActive = effectiveActiveTab === tab.id;
    const isDisabled = tab.disabled;

    const baseStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '0px 4px 12px',
      height: '32px',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: isActive ? '2px solid #F48E2F' : '2px solid transparent',
      backgroundColor: 'transparent',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      position: 'relative',
      opacity: isDisabled ? 0.5 : 1,
    };

    if (variant === 'default') {
      // Para variant default, usar background em vez de border
      baseStyle.borderRadius = '8px';
      baseStyle.borderBottom = 'none';
      baseStyle.padding = size === 'sm' ? '8px 12px' : size === 'lg' ? '12px 16px' : '10px 14px';
      baseStyle.height = 'auto';
      
      if (isActive) {
        baseStyle.backgroundColor = colors.bg.elevated;
      }
    }

    return baseStyle;
  };

  const getTextColor = (tab: Tab): string => {
    const isActive = effectiveActiveTab === tab.id;
    const isDisabled = tab.disabled;

    if (isDisabled) {
      return colors.text.disabled;
    }

    return isActive ? '#F48E2F' : colors.text.secondary;
  };

  const getTextWeight = (tab: Tab): 'regular' | 'medium' | 'semibold' => {
    const isActive = effectiveActiveTab === tab.id;
    return isActive ? 'semibold' : 'regular';
  };

  const getTextVariant = (): 'caption' | 'body' | 'label' => {
    // Sempre usar caption como nas configurações de conta
    return 'caption';
  };

  return (
    <div
      className={className}
      style={{
        ...getTabsContainerStyle(),
        ...style
      }}
    >
      <div style={getTabsInnerStyle()}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && onTabChange(tab.id)}
            style={getTabStyle(tab)}
            disabled={tab.disabled}
            onMouseEnter={(e) => {
              if (!tab.disabled && effectiveActiveTab !== tab.id) {
                if (variant === 'underline') {
                  e.currentTarget.style.borderBottom = '2px solid rgba(244, 142, 47, 0.5)';
                } else {
                  e.currentTarget.style.backgroundColor = colors.bg.tertiary;
                }
              }
            }}
            onMouseLeave={(e) => {
              if (!tab.disabled && effectiveActiveTab !== tab.id) {
                if (variant === 'underline') {
                  e.currentTarget.style.borderBottom = '2px solid transparent';
                } else {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }
            }}
          >
            <Text
              variant={getTextVariant()}
              weight={getTextWeight(tab)}
              color={getTextColor(tab)}
              screenSize={screenSize}
              style={{ 
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </Text>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;