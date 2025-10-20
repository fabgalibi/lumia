import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, Edit, PlusCircle, Copy, Trash2 } from 'lucide-react';

interface DisciplineOptionsMenuProps {
  onEdit: () => void;
  onAddSubjects: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export const DisciplineOptionsMenu: React.FC<DisciplineOptionsMenuProps> = ({
  onEdit,
  onAddSubjects,
  onDuplicate,
  onDelete
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Botão de menu */}
      <button
        ref={buttonRef}
        onClick={handleMenuToggle}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
          padding: '10px',
          background: '#2D2D45',
          border: '1px solid #272737',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#373A41';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2D2D45';
        }}
      >
        <MoreVertical size={20} color="#CECFD2" strokeWidth={1.67} />
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: '46px',
            right: '0px',
            width: '270px',
            backgroundColor: '#202028',
            border: '1px solid #272737',
            borderRadius: '12px',
            padding: '4px 0px',
            zIndex: 1000,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Editar dados */}
          <div
            onClick={() => handleMenuItemClick(onEdit)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              margin: '1px 6px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2D2D3B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Edit size={16} color="#ECECED" strokeWidth={1.5} />
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#ECECED'
            }}>
              Editar dados
            </span>
          </div>

          {/* Divisor */}
          <div style={{
            height: '1px',
            backgroundColor: '#373A41',
            margin: '4px 0px'
          }} />

          {/* Adicionar assuntos */}
          <div
            onClick={() => handleMenuItemClick(onAddSubjects)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              margin: '1px 6px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2D2D3B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <PlusCircle size={16} color="#ECECED" strokeWidth={1.5} />
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#ECECED'
            }}>
              Adicionar assuntos
            </span>
          </div>

          {/* Divisor */}
          <div style={{
            height: '1px',
            backgroundColor: '#373A41',
            margin: '4px 0px'
          }} />

          {/* Duplicar */}
          <div
            onClick={() => handleMenuItemClick(onDuplicate)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              margin: '1px 6px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2D2D3B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Copy size={16} color="#ECECED" strokeWidth={1.5} />
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#ECECED'
            }}>
              Duplicar
            </span>
          </div>

          {/* Divisor */}
          <div style={{
            height: '1px',
            backgroundColor: '#373A41',
            margin: '4px 0px'
          }} />

          {/* Apagar disciplina */}
          <div
            onClick={() => handleMenuItemClick(onDelete)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              margin: '1px 6px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2D2D3B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Trash2 size={16} color="#E66B59" strokeWidth={1.5} />
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#E66B59'
            }}>
              Apagar disciplina
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
