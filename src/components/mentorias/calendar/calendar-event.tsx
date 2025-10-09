import React from 'react';
import { MentoriaEvent } from '../types';

interface CalendarEventProps {
  event: MentoriaEvent;
}

const eventColors = {
  gray: {
    bg: '#13161B',
    border: '#373A41',
    text: '#CECFD2',
    time: '#94979C',
  },
  brand: {
    bg: '#2C1C5F',
    border: '#53389E',
    text: '#D6BBFB',
    time: '#B692F6',
  },
  blue: {
    bg: '#102A56',
    border: '#1849A9',
    text: '#84CAFF',
    time: '#53B1FD',
  },
  pink: {
    bg: '#4E0D30',
    border: '#9E165F',
    text: '#FAA7E0',
    time: '#F670C7',
  },
  orange: {
    bg: '#511C10',
    border: '#932F19',
    text: '#F7B27A',
    time: '#F38744',
  },
  yellow: {
    bg: '#542C0D',
    border: '#854A0E',
    text: '#FDE272',
    time: '#FAC515',
  },
  green: { // Added for week-view mock
    bg: '#053321',
    border: '#0A7440',
    text: '#6CE9A6',
    time: '#32D583',
  },
  indigo: { // Added for calendar compatibility
    bg: '#1F235B',
    border: '#2D31A6',
    text: '#A4BCFD',
    time: '#8098F9',
  },
};

export const CalendarEvent: React.FC<CalendarEventProps> = ({ event }) => {
  const colors = eventColors[event.color];

  return (
    <div
      style={{
        padding: '4px 8px',
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        width: '100%', // Garante que ocupa toda a largura disponível
        boxSizing: 'border-box', // Inclui padding e border no cálculo da largura
      }}
    >
      {event.showDot && (
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: colors.text,
            flexShrink: 0,
          }}
        />
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          flex: 1,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: colors.text,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1,
          }}
        >
          {event.title}
        </span>
        <span
          style={{
            fontFamily: 'Inter',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: colors.time,
            flexShrink: 0,
          }}
        >
          {event.time}
        </span>
      </div>
    </div>
  );
};

