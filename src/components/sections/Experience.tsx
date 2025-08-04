import { ScrollAnimation } from '../ui/ScrollAnimation';

interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  title: string;
  description: string[];
  technologies: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    id: 'villacarte',
    period: 'JULY 2023 - PRESENT',
    company: 'VillaCarte',
    title: 'Frontend Developer',
    description: [
      'Developed and implemented an admin panel from scratch for managing renting, selling, and constructing villas and hotels',
      'Automated and enhanced workflows by implementing modern solutions and development approaches',
      "Successfully created and launched admin panels for 4 websites, which improved the efficiency of the company's internal processes and increased sales",
      'Collaborated with a team including designers, developers, and managers to ensure consistency and quality of the final product',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Redux',
      'Node.js',
      'PostgreSQL',
      'REST API',
    ],
  },
  {
    id: 'fojin-tech',
    period: 'JULY 2021 - JULY 2023',
    company: 'Fojin-tech',
    title: 'Frontend Developer',
    description: [
      'Analysis of requirements, evaluation of implemented functionality, and its decomposition',
      'Refactoring and optimization of the code base following best practices',
      'Participated in front-end architecture design from scratch',
      'Optimization and expansion of existing functionality',
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'MUI',
      'Redux',
      'Node.js',
      'Git',
      'Webpack',
    ],
  },
  {
    id: 'exceed-team',
    period: 'MARCH 2020 - JULY 2021',
    company: 'Exceed-team',
    title: 'Frontend Developer',
    description: [
      'Refactoring and optimization of the code base in accordance with best practices',
      'Developed high-quality reusable modules for internal use',
      'Built internal applications from concept through deployment, with a responsive, mobile-first approach',
    ],
    technologies: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SASS',
      'Responsive Design',
      'Git',
      'REST API',
    ],
  },
  {
    id: 'freelance',
    period: 'SEPTEMBER 2019 - MARCH 2020',
    company: 'Freelance',
    title: 'Frontend Developer',
    description: [
      'Developed E-commerce SPA (Single Page Application) using React-redux',
      'Developed 3 adaptive, cross-browser landing pages',
      'Provided new functionality to existing projects',
      'Performed semantic layout and SEO optimization for existing projects',
    ],
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SEO',
      'Cross-browser',
      'Responsive Design',
    ],
  },
];

export function Experience() {
  return (
    <ScrollAnimation delay={0.1} direction="left" id="experience-section">
      <section id="experience" className="space-y-6 lg:space-y-8">
        <ScrollAnimation delay={0.2} direction="up" id="experience-title">
          <h2 className="text-2xl lg:text-4xl font-bold">EXPERIENCE</h2>
        </ScrollAnimation>

        {experienceItems.map((item, index) => (
          <ScrollAnimation key={item.id} delay={0.3 + index * 0.2} direction="up" id={item.id}>
            <div className="p-4 lg:p-6 rounded-lg border border-foreground/10 hover:border-accent/30 hover:bg-foreground/5 transition-all duration-300 group">
              <div className="space-y-3 lg:space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    {item.period}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold group-hover:text-accent transition-colors">
                    {item.company}
                  </h3>
                  <div className="text-base lg:text-lg text-foreground/80 group-hover:text-foreground/90 transition-colors">
                    {item.title}
                  </div>
                </div>

                <ul className="space-y-2 text-foreground/80 group-hover:text-foreground/90 transition-colors">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start">
                      <span className="text-accent mr-2 group-hover:scale-110 transition-transform">
                        →
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <ScrollAnimation
                      key={tech}
                      delay={0.4 + index * 0.2 + techIndex * 0.05}
                      direction="up"
                      id={`tech-${item.id}-${tech}`}
                    >
                      <span className="px-3 py-1 text-xs border border-accent text-accent rounded-full group-hover:bg-accent/10 group-hover:scale-105 transition-all duration-200">
                        {tech}
                      </span>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </section>
    </ScrollAnimation>
  );
}
