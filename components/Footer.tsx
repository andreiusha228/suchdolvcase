'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-2">
          <div className="text-xs text-white/40 font-light tracking-wide">
            {t('footer.copyright')}
          </div>
          <div className="text-sm text-white/50 font-light tracking-wide">
            created by <span className="text-white/80 text-base">andrey bukovsky</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

