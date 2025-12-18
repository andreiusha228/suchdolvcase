'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const OProjektu = () => {
  const { t } = useLanguage();

  return (
    <section id="o-projektu" className="py-40 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto space-y-16">
          <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight text-center">
            {t('about.title')}
          </h2>
          <div className="space-y-8 text-lg lg:text-xl text-white/70 leading-relaxed font-light">
            <p>
              {t('hero.text1')}
            </p>
            <p>
              {t('hero.text2')}
            </p>
            <p>
              {t('hero.text3')}
            </p>
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OProjektu;

