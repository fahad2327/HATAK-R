import React from 'react';

export type StatusType = 'Demonstrated' | 'In Development' | 'Planned Architecture' | 'Patent Pending' | 'Default';

interface BadgeProps {
  status?: StatusType;
  label?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status = 'Default', label, className = '' }) => {
  const displayLabel = label || status;

  const getStyle = () => {
    switch (status) {
      case 'Demonstrated':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'In Development':
        return 'bg-amber-50 text-amber-950 border-amber-300';
      case 'Planned Architecture':
        return 'bg-slate-100 text-slate-800 border-slate-300';
      case 'Patent Pending':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      default:
        return 'bg-brand-cool-grey-light text-brand-navy border-brand-border';
    }
  };

  const getDotColor = () => {
    switch (status) {
      case 'Demonstrated':
        return 'bg-emerald-600';
      case 'In Development':
        return 'bg-amber-600';
      case 'Planned Architecture':
        return 'bg-slate-500';
      case 'Patent Pending':
        return 'bg-blue-600';
      default:
        return 'bg-brand-navy';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border font-mono tracking-tight ${getStyle()} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()}`} aria-hidden="true" />
      {displayLabel}
    </span>
  );
};
