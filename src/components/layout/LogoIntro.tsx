import React, { useState, useEffect } from 'react';

interface LogoIntroProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete, forceShow = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState<'enter' | 'show' | 'exit'>('enter');

  useEffect(() => {
    // Check if user has already seen the intro or prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeen = sessionStorage.getItem('hatak_intro_seen');

    if (!forceShow && (hasSeen === 'true' || prefersReducedMotion)) {
      if (onComplete) onComplete();
      return;
    }

    setIsVisible(true);

    const showTimer = setTimeout(() => {
      setStage('show');
    }, 150);

    const exitTimer = setTimeout(() => {
      setStage('exit');
    }, 1900);

    const endTimer = setTimeout(() => {
      sessionStorage.setItem('hatak_intro_seen', 'true');
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2400);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
      clearTimeout(endTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [forceShow, onComplete]);

  const dismissIntro = () => {
    sessionStorage.setItem('hatak_intro_seen', 'true');
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  if (!isVisible) return null;

  return (
    <div
      aria-label="Hatak R Brand Introduction"
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#101827] transition-opacity duration-500 ease-out p-6 ${
        stage === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Utility: Minimalist Skip */}
      <button
        onClick={dismissIntro}
        className="absolute top-6 right-6 text-xs font-mono tracking-widest text-slate-400 hover:text-white transition-colors px-3 py-1.5 focus:outline-none"
        aria-label="Skip brand animation"
      >
        Skip [Esc]
      </button>

      {/* Center Authentic Logo - Single Element on Even Background */}
      <div className="relative flex flex-col items-center max-w-sm">
        <img
          src="/images/logo-transparent.png"
          alt="Hatak R Official Mark"
          className={`w-44 h-auto md:w-56 object-contain transition-all duration-700 ease-out ${
            stage === 'enter' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        />
      </div>
    </div>
  );
};
