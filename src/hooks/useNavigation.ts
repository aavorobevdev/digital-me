import { useState, useEffect } from 'react';

const navigationItems = [
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
  { id: 'skills', label: 'SKILLS', href: '#skills' },
  { id: 'recommendations', label: 'RECOMMENDATIONS', href: '#recommendations' },
];

export function useNavigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    activeSection,
    navigationItems,
  };
}
