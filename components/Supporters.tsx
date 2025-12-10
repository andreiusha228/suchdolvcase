'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Supporters = () => {
  const { t } = useLanguage();

  // Supporters logos
  const supporters = [
    { name: 'Suchdol Youth', logo: '/images/YOUTHLogo.jpg' },
    { name: 'Erasmus', logo: '/images/Erasmus.png' },
    { name: 'Suchdol', logo: '/images/suchdol.png' },
    { name: 'Historie Suchdola', logo: '/images/historiesuchdola.jpg' },
    { name: 'Praha', logo: '/images/praha.png' },
  ];

  return (
    <section className="py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight text-center">
            {t('supporters.title')}
          </h2>
          
          <div className="relative overflow-hidden">
            {/* Infinite scrolling container */}
            <div className="flex gap-16 animate-scroll hover:[animation-play-state:paused] w-fit items-center">
              {/* First set of logos */}
              {supporters.map((supporter, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-48 flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={supporter.logo}
                      alt={supporter.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 192px) 100vw, 192px"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {supporters.map((supporter, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-48 flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={supporter.logo}
                      alt={supporter.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 192px) 100vw, 192px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;

