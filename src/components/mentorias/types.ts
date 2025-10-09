export interface MentoriaEvent {
  id: string;
  title: string;
  time: string;
  color: 'gray' | 'brand' | 'blue' | 'pink' | 'orange' | 'yellow';
  showDot?: boolean;
}

export interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: MentoriaEvent[];
}

