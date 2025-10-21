import React from 'react';
import { Search } from 'lucide-react';

interface AdminEntitySearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder: string;
}

export const AdminEntitySearch: React.FC<AdminEntitySearchProps> = ({
  searchTerm,
  onSearchChange,
  placeholder
}) => {
  return (
    <div 
      className="admin-entity-search"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: '465px'
      }}
    >
      {/* Search Input */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        background: '#2D2D3B',
        border: '1px solid #2D2D36',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
        height: '40px',
        width: '100%'
      }}>
        <Search size={20} color="#94979C" strokeWidth={1.67} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#CECFD2'
          }}
          className="admin-entity-search-input"
        />
      </div>
      
      <style>{`
        .admin-entity-search-input::placeholder {
          color: #CECFD2;
        }
      `}</style>
    </div>
  );
};
