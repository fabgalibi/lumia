import { ProgressBar as BaseProgressBar } from '../ui/progress-bar';

interface ProgressBarProps {
  percentage: number;
  label: string;
  isExpanded?: boolean;
  className?: string;
}

export const ProgressBar = ({ 
  percentage, 
  label, 
  className = "" 
}: ProgressBarProps) => {
  return (
    <BaseProgressBar
      percentage={percentage}
      label={label}
      showRocket={true}
      showLabel={true}
      labelPosition="left"
      className={className}
      height="40px"
      padding="0 32px"
    />
  );
};
