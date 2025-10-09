export interface MentoriaEvent {
  id: string;
  title: string;
  time: string;
  color: 'gray' | 'brand' | 'blue' | 'pink' | 'orange' | 'yellow' | 'green' | 'indigo';
  showDot?: boolean;
}

export interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: MentoriaEvent[];
}

