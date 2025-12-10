'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Kontakt = () => {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="py-40 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl space-y-16">
          <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed font-light">
            {t('contact.description')}
          </p>
          <div className="space-y-6 text-lg text-white/70 font-light">
            <p>
              {t('contact.instagram')}{' '}
              <a
                href="https://instagram.com/suchdolyouth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/60 transition-colors duration-400 border-b border-white/20 hover:border-white/40"
              >
                @suchdolyouth
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;

