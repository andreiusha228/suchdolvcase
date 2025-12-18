'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'cz' ? 'en' : 'cz');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-white text-sm font-light tracking-[0.15em] hover:opacity-60 transition-opacity duration-400"
          >
            SUCHDOL
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <a
              href="#o-projektu"
              onClick={(e) => handleClick(e, '#o-projektu')}
              className="text-white/60 text-xs font-light tracking-wide hover:text-white transition-colors duration-400"
            >
              {t('nav.about')}
            </a>
            <a
              href="#film"
              onClick={(e) => handleClick(e, '#film')}
              className="text-white/60 text-xs font-light tracking-wide hover:text-white transition-colors duration-400"
            >
              {t('nav.film')}
            </a>
            <a
              href="#kontakt"
              onClick={(e) => handleClick(e, '#kontakt')}
              className="text-white/60 text-xs font-light tracking-wide hover:text-white transition-colors duration-400"
            >
              {t('nav.contact')}
            </a>
            <button
              onClick={toggleLanguage}
              className="text-white/60 text-xs font-light tracking-wide hover:text-white transition-colors duration-400 uppercase"
            >
              {language === 'cz' ? 'EN' : 'CZ'}
            </button>
          </div>

          {/* Mobile Hamburger/Close Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-white transition-colors duration-400 w-8 h-8 flex items-center justify-center relative z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block h-px bg-white" />
                <span className="block h-px bg-white" />
                <span className="block h-px bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel - Left Side */}
          <div
            className={`absolute left-0 top-0 h-full w-64 max-w-[75vw] bg-black border-r border-white/10 transition-transform duration-500 ease-out ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <div className="flex flex-col space-y-1">
                <a
                  href="#o-projektu"
                  onClick={(e) => handleClick(e, '#o-projektu')}
                  className="text-white/60 text-base font-light tracking-wide hover:text-white transition-all duration-300 py-2"
                >
                  {t('nav.about')}
                </a>
                <a
                  href="#film"
                  onClick={(e) => handleClick(e, '#film')}
                  className="text-white/60 text-base font-light tracking-wide hover:text-white transition-all duration-300 py-2"
                >
                  {t('nav.film')}
                </a>
                <a
                  href="#kontakt"
                  onClick={(e) => handleClick(e, '#kontakt')}
                  className="text-white/60 text-base font-light tracking-wide hover:text-white transition-all duration-300 py-2"
                >
                  {t('nav.contact')}
                </a>
                <div className="pt-4 mt-4 border-t border-white/10">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

