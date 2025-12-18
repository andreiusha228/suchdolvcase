'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Film = () => {
  const { t } = useLanguage();

  return (
    <section id="film" className="py-40 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
              {t('film.title')}
            </h2>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              {t('film.description')}
            </p>
          </div>

          <div className="relative w-full aspect-video bg-black border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/50XAirjU74E"
              title="Suchdol v čase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-center text-xs text-white/40 font-light tracking-wide">
            {t('film.duration')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Film;

