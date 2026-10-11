import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Technology', href: '/technology' },
  { name: 'Industries', href: '/industries' },
  { name: 'R&D', href: '/rd' },
  { name: 'About', href: '/about' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border">
      <Container className="h-20 flex items-center justify-between">
        {/* Brand Official Logo & Title */}
        <Link
          to="/"
          className="flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg py-1 group"
          aria-label="Hatak R Home"
        >
          <div className="w-11 h-11 bg-white border border-brand-border rounded-lg p-1.5 flex items-center justify-center shrink-0 shadow-subtle group-hover:border-brand-slate-light transition-colors">
            <img
              src="/images/logo.png"
              alt="Hatak R Official Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl tracking-tight text-brand-navy">
                HATAK R
              </span>
              <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-1 py-0.5 rounded">
                TM
              </span>
            </div>
            <span className="text-xs text-brand-slate tracking-normal font-normal">
              Intelligent Security Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-brand-navy bg-brand-cool-grey font-semibold'
                    : 'text-brand-slate hover:text-brand-navy hover:bg-brand-cool-grey-light'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact?type=demo">
            <Button variant="primary" size="sm" className="gap-1.5 shadow-sm">
              <span>REQUEST A DEMO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-brand-navy hover:bg-brand-cool-grey-light focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-brand-cool-grey text-brand-navy font-semibold'
                    : 'text-brand-slate hover:bg-brand-cool-grey-light hover:text-brand-navy'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-brand-border mt-3">
            <Link to="/contact?type=demo" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full justify-center">
                REQUEST A DEMO
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
