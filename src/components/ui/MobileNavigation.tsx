'use client';

import { motion } from 'framer-motion';
import { useNavigationContext } from '../../utils/NavigationProvider';

export function MobileNavigation() {
  const { navigationItems, activeSection } = useNavigationContext();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[5] bg-background/95 backdrop-blur-sm border-t border-foreground/10 lg:hidden">
      <div className="flex justify-center items-center px-6 py-3">
        <div className="flex space-x-8">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
                  isActive
                    ? 'text-accent scale-110'
                    : 'text-foreground/60 hover:text-foreground hover:scale-105'
                }`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${isActive ? 'bg-accent' : 'bg-foreground/20'}`}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
