import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Technology', href: '/technology' },
  { name: 'Industries', href: '/industries' },
  { name: 'R&D', href: '/rnd' },
  { name: 'About', href: '/about' },
  { name: 'Partners', href: '/partners' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      {/* Top Engineering Advisory Banner */}
      <div className="bg-brand-navy text-white text-[11px] py-1.5 px-4 font-mono tracking-wide border-b border-brand-navy">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-brand-cool-grey font-medium">
              HATAK R™ SYSTEM STATUS:
            </span>
            <span className="text-slate-300">
              Bench Testing Verified • Field Pilots in Scheduling
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <span>PATENT PENDING</span>
            <span>•</span>
            <span>HUMAN-IN-THE-LOOP ARCHITECTURE</span>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <Container className="h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red py-1"
          aria-label="HATAK R Homepage"
        >
          <div className="w-8 h-8 rounded-sm bg-brand-navy flex items-center justify-center text-white relative shadow-sm">
            <Shield className="w-4 h-4 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-red border-2 border-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold tracking-tight text-lg leading-none text-brand-navy">
                HATAK
              </span>
              <span className="text-xs font-mono font-bold text-brand-red bg-brand-red-light px-1 py-0.5 rounded-sm">
                R™
              </span>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-brand-slate leading-tight mt-0.5">
              Intelligent Security
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors rounded-sm ${
                  isActive
                    ? 'text-brand-red bg-brand-red-light/60 font-semibold'
                    : 'text-brand-navy hover:text-brand-red hover:bg-brand-cool-grey-light'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA & Contact */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button variant="outline" size="sm">
              Contact
            </Button>
          </Link>
          <Link to="/contact?type=pilot">
            <Button variant="primary" size="sm">
              Request a Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Link to="/contact?type=pilot">
            <Button variant="primary" size="sm" className="text-xs px-2.5 h-8">
              Demo
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-navy hover:bg-brand-cool-grey rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white px-4 py-4 space-y-1 shadow-lg">
          <div className="space-y-1 pb-3 border-b border-brand-border">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium rounded-sm ${
                    isActive
                      ? 'text-brand-red bg-brand-red-light font-semibold'
                      : 'text-brand-navy hover:bg-brand-cool-grey-light'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-3 space-y-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <Button variant="outline" size="md" className="w-full">
                Business & Technical Inquiries
              </Button>
            </Link>
            <Link
              to="/contact?type=pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <Button variant="primary" size="md" className="w-full">
                Request a Perimeter Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
