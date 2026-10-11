import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'subtle' | 'bordered';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  header,
  footer,
  variant = 'default',
}) => {
  const variantStyles = {
    default: 'bg-white border border-brand-border shadow-subtle hover:shadow-card',
    subtle: 'bg-brand-cool-grey-light border border-brand-border/70',
    bordered: 'bg-white border-2 border-brand-navy shadow-subtle',
  };

  return (
    <div
      className={`rounded-lg transition-all duration-200 overflow-hidden ${variantStyles[variant]} ${className}`}
    >
      {header && (
        <div className="px-6 py-4 border-b border-brand-border bg-brand-cool-grey-light/50 font-medium text-brand-navy">
          {header}
        </div>
      )}

      <div className="p-6">{children}</div>

      {footer && (
        <div className="px-6 py-3.5 border-t border-brand-border bg-brand-cool-grey-light/30 text-xs font-mono text-brand-slate">
          {footer}
        </div>
      )}
    </div>
  );
};
