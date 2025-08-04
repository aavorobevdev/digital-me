'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollAnimation } from '../ui/ScrollAnimation';

interface Skill {
  id: number;
  name: string;
  categories: string[];
}

const skills: Skill[] = [
  { id: 1, name: 'HTML/CSS', categories: ['frontend', 'styling'] },
  { id: 2, name: 'JavaScript', categories: ['frontend', 'language'] },
  { id: 3, name: 'TypeScript', categories: ['frontend', 'language'] },
  { id: 4, name: 'React', categories: ['frontend', 'framework'] },
  { id: 5, name: 'Next.js', categories: ['frontend', 'framework'] },
  { id: 6, name: 'Strapi', categories: ['backend', 'cms'] },
  { id: 7, name: 'Redux', categories: ['frontend', 'state'] },
  { id: 8, name: 'MobX', categories: ['frontend', 'state'] },
  { id: 9, name: 'Zustand', categories: ['frontend', 'state'] },
  { id: 10, name: 'Styled Components', categories: ['frontend', 'styling'] },
  { id: 11, name: 'Tailwind CSS', categories: ['frontend', 'styling'] },
  { id: 12, name: 'Material UI', categories: ['frontend', 'ui'] },
  { id: 13, name: 'Ant Design', categories: ['frontend', 'ui'] },
  { id: 14, name: 'AWS', categories: ['devops', 'cloud'] },
  { id: 15, name: 'Cloudflare', categories: ['devops', 'cloud'] },
  { id: 16, name: 'Storybook', categories: ['frontend', 'tools'] },
  { id: 17, name: 'Sentry', categories: ['devops', 'monitoring'] },
  { id: 18, name: 'Docker', categories: ['devops', 'containerization'] },
  { id: 19, name: 'Git', categories: ['devops', 'version-control'] },
  { id: 20, name: 'Webpack', categories: ['frontend', 'build-tools'] },
  { id: 21, name: 'Vite', categories: ['frontend', 'build-tools'] },
  { id: 22, name: 'Node.js', categories: ['backend', 'runtime'] },
  { id: 23, name: 'PostgreSQL', categories: ['backend', 'database'] },
  { id: 24, name: 'REST API', categories: ['backend', 'api'] },
  { id: 25, name: 'Responsive Design', categories: ['frontend', 'ui'] },
  { id: 26, name: 'Cross-browser', categories: ['frontend', 'compatibility'] },
  { id: 27, name: 'SEO', categories: ['frontend', 'optimization'] },
  { id: 28, name: 'Performance Optimization', categories: ['frontend', 'optimization'] },
  { id: 29, name: 'Accessibility', categories: ['frontend', 'ui'] },
  { id: 30, name: 'Testing', categories: ['frontend', 'quality'] },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
  { id: 'ui', label: 'UI/UX' },
  { id: 'tools', label: 'Tools' },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getSkillsCount = (categoryId: string) => {
    if (categoryId === 'all') return skills.length;
    return skills.filter((skill) => skill.categories.includes(categoryId)).length;
  };

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.categories.includes(activeCategory),
  );

  return (
    <section id="skills" className="space-y-6">
      <ScrollAnimation delay={0.1} direction="up" id="skills-title">
        <h2 className="text-3xl lg:text-4xl font-bold">SKILLS</h2>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2} direction="up" id="skills-filters">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const count = getSkillsCount(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 flex items-center gap-2 hover:scale-105 ${
                  activeCategory === category.id
                    ? 'border-accent text-accent shadow-lg shadow-accent/20'
                    : 'border-foreground/20 text-foreground/80 hover:border-foreground/40 hover:bg-foreground/5'
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-accent/20 text-accent'
                      : 'bg-foreground/10 text-foreground/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.3} direction="up" id="skills-list">
        <div className="border border-foreground/10 rounded-lg p-4 bg-foreground/5">
          <div className="max-h-128 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-3"
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-foreground/10 hover:border hover:border-accent/20 transition-all duration-200"
                  >
                    <div className="w-8 h-8 border border-foreground/20 rounded-full flex items-center justify-center text-xs text-foreground/60 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent transition-all duration-200 flex-shrink-0">
                      {skill.id.toString().padStart(2, '0')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-foreground font-medium group-hover:text-accent transition-colors duration-200 block truncate">
                        {skill.name}
                      </span>
                      <span className="text-foreground/60 text-sm group-hover:text-foreground/80 transition-colors duration-200 block truncate">
                        ({skill.categories.join(', ')})
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
