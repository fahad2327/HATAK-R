import React from 'react';
import { Container } from './Container';
import { Badge, StatusType } from '../ui/Badge';

interface PageHeaderProps {
  category: string;
  title: string;
  description: string;
  statusBadge?: StatusType | string;
  statusLabel?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  description,
  statusBadge,
  statusLabel,
  actions,
}) => {
  return (
    <div className="bg-brand-cool-grey-light/60 border-b border-brand-border py-12 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {/* Category Tag & Status Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red bg-brand-red-light px-2.5 py-1 rounded">
                {category}
              </span>
              {statusBadge && <Badge status={statusBadge as StatusType} label={statusLabel} />}
            </div>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
              {title}
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-4 text-base md:text-lg text-brand-slate leading-relaxed">
              {description}
            </p>
          </div>

          {actions && <div className="shrink-0 pt-2 md:pt-0">{actions}</div>}
        </div>
      </Container>
    </div>
  );
};
