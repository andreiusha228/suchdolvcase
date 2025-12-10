'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'cs' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  cs: {
    // Navbar
    'nav.about': 'O projektu',
    'nav.film': 'Film',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.label': 'DOKUMENTÁRNÍ PROJEKT · SUCHDOL YOUTH',
    'hero.title': 'Suchdol v čase',
    'hero.description': 'Suchdol v čase je dokumentární projekt, který propjil historii Suchdolu s moderními technologiemi, filmovou tvorbou a umělou inteligencí.',
    'hero.text1': 'Suchdol v čase (1919–2025) je dokumentární projekt tvořený očima mladých lidí.',
    'hero.text2': 'Propojuje archivní fotografie, historické materiály a současné dronové záběry s umělou inteligencí, která pomáhá oživit minulost a vizuálně propojit časy, které dělí více než jedno století.',
    'hero.text3': 'Mladí tvůrci nad videem pracují s digitálními nástroji budoucnosti a přetvářejí historii do nové, živé podoby.',
    'hero.watch': 'Pustit film',
    'hero.about': 'O projektu',
    
    // About
    'about.title': 'O projektu',
    'about.p1': 'Projekt Suchdol v čase zdokumentoval proměny Suchdola pomocí kombinace archivních materiálů, dronových záběrů a animací vytvářených umělou inteligencí. Cílem bylo oživit historické fotografie, porovnat je se současnou podobou míst a vytvořit krátký dokument, který sloužil také jako výukový materiál pro ZŠ Mikoláše Alše.',
    'about.p2': 'Výsledný film byl prezentován online i na komunitních akcích a stal se vizuální připomínkou toho, jak se Suchdol během desetiletí proměnil.',
    
    // Film
    'film.title': 'Film Suchdol v čase',
    'film.description': 'Krátký dokument zachycoval vývoj Suchdola od historických fotografií až po současné záběry.',
    'film.duration': 'Délka: XX minut · Rok dokončení: 2025',
    'film.placeholder': '// TODO: doplnit odkaz',
    'film.placeholder2': 'YouTube embed bude zde',
    
    // Supporters
    'supporters.title': 'Podporovatelé projektu',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.description': 'Projekt byl realizován skupinou Suchdol Youth v městské části Praha-Suchdol.',
    'contact.email': 'E-mail:',
    'contact.instagram': 'Instagram:',
    
    // Footer
    'footer.copyright': '© 2025 Suchdol Youth · Projekt Suchdol v čase',
    'footer.created': 'created by andrey bukovsky',
  },
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.film': 'Film',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.label': 'DOCUMENTARY PROJECT · SUCHDOL YOUTH',
    'hero.title': 'Suchdol in Time',
    'hero.description': 'Suchdol in Time was a documentary project that connected the history of Prague-Suchdol with modern technologies, filmmaking, and artificial intelligence.',
    'hero.text1': 'Suchdol in Time (1919–2025) is a documentary project created through the eyes of young people.',
    'hero.text2': 'It connects archival photographs, historical materials, and contemporary drone footage with artificial intelligence, which helps bring the past to life and visually connect times separated by more than a century.',
    'hero.text3': 'Young creators work on the video with digital tools of the future, transforming history into a new, living form.',
    'hero.watch': 'Watch Film',
    'hero.about': 'About',
    
    // About
    'about.title': 'About the Project',
    'about.p1': 'The Suchdol in Time project documented the transformations of Suchdol through a combination of archival materials, drone footage, and animations created by artificial intelligence. The goal was to bring historical photographs to life, compare them with the current appearance of places, and create a short documentary that also served as educational material for Mikoláš Aleš Elementary School.',
    'about.p2': 'The resulting film was presented online and at community events, becoming a visual reminder of how Suchdol has transformed over the decades.',
    
    // Film
    'film.title': 'Film Suchdol in Time',
    'film.description': 'The short documentary captured the development of Suchdol from historical photographs to contemporary footage.',
    'film.duration': 'Duration: XX minutes · Year completed: 2025',
    'film.placeholder': '// TODO: add link',
    'film.placeholder2': 'YouTube embed will be here',
    
    // Supporters
    'supporters.title': 'Supporters',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'The project was realized by the Suchdol Youth group in the Prague-Suchdol district.',
    'contact.email': 'Email:',
    'contact.instagram': 'Instagram:',
    
    // Footer
    'footer.copyright': '© 2025 Suchdol Youth · Suchdol in Time Project',
    'footer.created': 'created by andrey bukovsky',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('cs');

  useEffect(() => {
    // Load language from localStorage or default to Czech
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'cs' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.cs] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

