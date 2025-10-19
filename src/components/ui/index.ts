// UI Components
export { Calendar } from './calendar';
export type { CalendarProps } from './calendar';

// Other UI Components
export { FeaturedIcon } from './featured-icon';
export type { IconType } from './featured-icon';
export { AreaCard } from './area-card';
export type { AreaCardProps } from './area-card';
export { SuccessNotification } from './success-notification';
export { ErrorNotification } from './error-notification';
export { TokenExpiredNotification } from './token-expired-notification';
export { ErrorFeedback } from './error-feedback';
export { EmptyStudentsState } from './empty-students-state';
export { FeaturedIconLarge } from './featured-icon-large';
export { AdminPagination } from './admin-pagination';
export { TableLoading } from './table-loading';

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
//
// Error notification:
// <ErrorNotification
//   isOpen={showError}
//   onClose={() => setShowError(false)}
//   title="Erro ao processar"
//   message="Ocorreu um erro inesperado. Tente novamente."
//   autoCloseDelay={5000} // opcional, padrão 5000ms
// />
//
// Success notification:
// <SuccessNotification
//   isOpen={showSuccess}
//   onClose={() => setShowSuccess(false)}
//   title="Operação concluída"
//   message="A operação foi realizada com sucesso."
// />
//
// Empty students state:
// <EmptyStudentsState
//   onAddStudent={() => setShowStudentModal(true)}
// />