import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'red' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors select-none rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
      sm: 'h-9 px-3.5 text-xs font-semibold',
      md: 'h-10 px-5 text-sm font-semibold',
      lg: 'h-12 px-6 text-base font-semibold',
    };

    const variantStyles = {
      primary:
        'bg-brand-navy text-white hover:bg-brand-navy-dark shadow-subtle active:bg-black',
      red:
        'bg-brand-red text-white hover:bg-brand-red-hover shadow-subtle active:bg-brand-red-hover',
      secondary:
        'bg-brand-cool-grey text-brand-navy hover:bg-slate-200 active:bg-slate-300',
      outline:
        'bg-white text-brand-navy border border-brand-border hover:bg-brand-cool-grey-light hover:border-brand-slate-light active:bg-brand-cool-grey',
      ghost:
        'bg-transparent text-brand-navy hover:bg-brand-cool-grey-light active:bg-brand-cool-grey',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
