'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-white text-sm font-light tracking-[0.15em] hover:opacity-60 transition-opacity duration-400"
          >
            SUCHDOL V ČASE
          </a>
          <div className="flex items-center space-x-12">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

