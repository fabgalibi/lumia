// UI Components
export { Calendar } from './calendar';
export type { CalendarProps } from './calendar';

// Other UI Components
export { FeaturedIcon } from './featured-icon';
export type { IconType } from './featured-icon';
export { AreaCard } from './area-card';
export type { AreaCardProps } from './area-card';
export { SuccessNotification } from './success-notification';

// Design System Components
export * from './design-system';

// Usage examples:
// 
// Basic usage:
// <Calendar
//   selectedDate={selectedDate}
//   onDateSelect={handleDateSelect}
// />
//
// With restrictions:
// <Calendar
//   selectedDate={selectedDate}
//   onDateSelect={handleDateSelect}
//   minDate={new Date()}
//   maxDate={new Date(2025, 11, 31)}
//   disabledDates={[new Date(2025, 0, 1)]}
// />
//
// In modal:
// <Calendar
//   selectedDate={selectedDate}
//   onDateSelect={handleDateSelect}
//   onClose={() => setShowCalendar(false)}
//   isInModal={true}
//   screenSize="desktop"
// />