'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-black text-white pt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20 lg:gap-24">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <span className="text-white/40 text-xs uppercase tracking-[0.25em] font-light block">
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
            <div className="space-y-4 text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl font-light">
              <p>{t('hero.text1')}</p>
              <p>{t('hero.text2')}</p>
              <p>{t('hero.text3')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
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
                className="border border-white/20 text-white px-10 py-4 text-xs font-light tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-400 inline-block text-center rounded-full"
              >
                {t('hero.about')}
              </a>
            </div>
          </div>

          {/* Right: Video Mockup */}
          <div className="lg:w-1/2 w-full max-w-2xl">
            <a
              href="#film"
              onClick={(e) => handleClick(e, '#film')}
              className="block"
            >
              <div className="relative aspect-video border border-white/10 bg-black flex items-center justify-center group cursor-pointer hover:border-white/20 transition-all duration-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-white/30 group-hover:text-white/50 group-hover:scale-105 transition-all duration-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

