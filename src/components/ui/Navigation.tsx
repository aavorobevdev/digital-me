'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigationContext } from '../../utils/NavigationProvider';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavigationProps {
  items?: NavItem[];
  activeItem?: string;
}

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};

export function Navigation({ items, activeItem }: NavigationProps = {}) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const context = useNavigationContext();
  const navigationItems = items || context.navigationItems;
  const currentActiveItem = activeItem || context.activeSection;

  return (
    <nav className="space-y-2">
      {navigationItems.map((item, index) => {
        const isHovered = hoveredItem === item.id;
        const isActive = isHovered || currentActiveItem === item.id;
        return (
          <motion.a
            key={item.id}
            href={item.href}
            className={`block transition-colors duration-300 ease-in-out`}
            initial={'hidden'}
            animate={'visible'}
            variants={variants}
            custom={index}
            transition={{
              delay: index * 0.1,
              duration: 1,
              ease: [0.4, 0, 0.2, 1],
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center">
              <motion.div
                className="relative w-6 h-4 flex items-center justify-center mr-2"
                whileHover={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={
                  isHovered
                    ? {
                        duration: 1.2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.3,
                      }
                    : { duration: 0.3 }
                }
              >
                <motion.div
                  className="absolute inset-0 flex items-center"
                  initial={false}
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-4 h-0.5 bg-foreground/30" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="h-0.5 origin-left"
                    initial={false}
                    animate={{
                      width: isActive ? 16 : 0,
                      backgroundColor: isActive
                        ? ['var(--accent)', 'var(--muted-foreground)', 'var(--accent)']
                        : 'var(--foreground)',
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      backgroundColor: {
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      },
                    }}
                  />

                  <motion.div
                    className="absolute right-0 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
                    style={{
                      borderLeftWidth: '6px',
                    }}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0,
                      borderLeftColor: isActive
                        ? ['var(--accent)', 'var(--muted-foreground)', 'var(--accent)']
                        : 'var(--foreground)',
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.1,
                      borderLeftColor: {
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      },
                    }}
                  />
                </motion.div>
              </motion.div>

              <motion.span
                className="block"
                initial={false}
                animate={{
                  x: isActive ? 8 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                {item.label}
              </motion.span>
            </div>
          </motion.a>
        );
      })}
    </nav>
  );
}
