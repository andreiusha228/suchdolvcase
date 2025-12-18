'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { t, language } = useLanguage();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/hero-animation.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Error loading animation:', err));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-16 overflow-hidden">
      {/* Animated Background - Lottie */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {animationData && (
          <div className="w-full h-full scale-150 md:scale-125 lg:scale-110">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full"
              style={{ width: '100%', height: '100%', opacity: 0.8 }}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content - Centered, Minimalist */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-10">
          <div className="space-y-6">
            <span className="text-white/60 text-xs uppercase tracking-[0.25em] font-light block">
              {t('hero.label')}
            </span>
            <h1 className="text-6xl lg:text-8xl font-extralight tracking-tight leading-[0.95]">
              {language === 'cz' ? (
                <>
                  Suchdol<br />v čase
                </>
              ) : (
                <>
                  Suchdol<br />in Time
                </>
              )}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#film"
              onClick={(e) => handleClick(e, '#film')}
              className="bg-white text-black px-10 py-4 text-xs font-light tracking-wide hover:bg-white/90 transition-all duration-400 inline-block text-center rounded-full"
            >
              {t('hero.watch')}
            </a>
            <a
              href="#o-projektu"
              onClick={(e) => handleClick(e, '#o-projektu')}
              className="border border-white/30 text-white px-10 py-4 text-xs font-light tracking-wide hover:border-white/50 hover:bg-white/10 transition-all duration-400 inline-block text-center rounded-full"
            >
              {t('hero.about')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

