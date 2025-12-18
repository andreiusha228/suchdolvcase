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
            SUCHDOL V ČASE
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white/60 hover:text-white transition-colors duration-400"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-px bg-current transition-all duration-400 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-400 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-400 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container mx-auto px-6 pt-24">
            <div className="flex flex-col space-y-8">
              <a
                href="#o-projektu"
                onClick={(e) => handleClick(e, '#o-projektu')}
                className="text-white/60 text-base font-light tracking-wide hover:text-white transition-colors duration-400"
              >
                {t('nav.about')}
              </a>
              <a
                href="#film"
                onClick={(e) => handleClick(e, '#film')}
                className="text-white/60 text-base font-light tracking-wide hover:text-white transition-colors duration-400"
              >
                {t('nav.film')}
              </a>
              <a
                href="#kontakt"
                onClick={(e) => handleClick(e, '#kontakt')}
                className="text-white/60 text-base font-light tracking-wide hover:text-white transition-colors duration-400"
              >
                {t('nav.contact')}
              </a>
              <button
                onClick={() => {
                  toggleLanguage();
                }}
                className="text-white/60 text-base font-light tracking-wide hover:text-white transition-colors duration-400 uppercase text-left"
              >
                {language === 'cz' ? 'EN' : 'CZ'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

