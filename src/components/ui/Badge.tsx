import React from 'react';

export type StatusType =
  | 'Demonstrated'
  | 'In Development'
  | 'Planned'
  | 'Validated'
  | 'Patent Pending'
  | 'Completed'
  | 'In Progress'
  | 'Default';

interface BadgeProps {
  status?: StatusType | string;
  label?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  status = 'Default', 
  label, 
  className = '' 
}) => {
  const displayLabel = label || status;

  const getStyle = () => {
    switch (status) {
      case 'Demonstrated':
      case 'Completed':
        return 'bg-emerald-50 text-emerald-900 border-emerald-300';
      case 'In Development':
      case 'In Progress':
        return 'bg-amber-50 text-amber-900 border-amber-300';
      case 'Planned':
        return 'bg-sky-50 text-sky-900 border-sky-300';
      case 'Validated':
        return 'bg-indigo-50 text-indigo-900 border-indigo-300';
      case 'Patent Pending':
        return 'bg-slate-100 text-slate-800 border-slate-300';
      default:
        return 'bg-brand-cool-grey-light text-brand-navy border-brand-border';
    }
  };

  const getDotColor = () => {
    switch (status) {
      case 'Demonstrated':
      case 'Completed':
        return 'bg-emerald-600';
      case 'In Development':
      case 'In Progress':
        return 'bg-amber-600';
      case 'Planned':
        return 'bg-sky-600';
      case 'Validated':
        return 'bg-indigo-600';
      case 'Patent Pending':
        return 'bg-slate-500';
      default:
        return 'bg-brand-slate';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono font-medium rounded border ${getStyle()} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()} shrink-0`} aria-hidden="true" />
      <span>{displayLabel}</span>
    </span>
  );
};
