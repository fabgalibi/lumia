// Main components
export { NotificationsModal } from './notifications-modal';
export type { NotificationsModalProps } from './notifications-modal';

export { NotificationHeader } from './notification-header';
export type { NotificationHeaderProps } from './notification-header';

export { NotificationSection } from './notification-section';
export type { NotificationSectionProps } from './notification-section';

export { NotificationItem } from './notification-item';
export type { NotificationItemProps, NotificationType } from './notification-item';

export { NotificationPagination } from './notification-pagination';
export type { NotificationPaginationProps } from './notification-pagination';

// Utility components
export { Divider } from './divider';
export type { DividerProps } from './divider';

export { Overlay } from './overlay';
export type { OverlayProps } from './overlay';

export { EmptyState } from './empty-state';
export type { EmptyStateProps } from './empty-state';

// Other notification components
export { SuccessNotification } from './success-notification';
export { SkipGoalNotification } from './skip-goal-notification';

// Data and utilities
export { mockNotifications, organizeNotificationsByPeriod } from './mock-data';
export type { NotificationsByPeriod } from './mock-data';
