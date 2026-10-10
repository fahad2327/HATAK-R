import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  header,
  footer,
  highlight = false,
}) => {
  return (
    <div
      className={`border rounded-sm bg-white transition-all ${
        highlight
          ? 'border-brand-navy shadow-sm'
          : 'border-brand-border hover:border-brand-slate/40'
      } ${className}`}
    >
      {header && (
        <div className="px-6 py-4 border-b border-brand-border bg-brand-cool-grey-light/40">
          {header}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && (
        <div className="px-6 py-3.5 border-t border-brand-border bg-brand-cool-grey-light/20 text-xs text-brand-slate">
          {footer}
        </div>
      )}
    </div>
  );
};
