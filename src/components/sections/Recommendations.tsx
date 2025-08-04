'use client';

import { ScrollAnimation } from '../ui/ScrollAnimation';
import { motion } from 'framer-motion';

interface Recommendation {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  text: string;
  technologies: string[];
}

const recommendations: Recommendation[] = [
  {
    id: 'kirill-chernenko',
    name: 'Kirill Chernenko',
    title: 'Lead Frontend Engineer',
    company: 'Fojin-tech',
    avatar: '👨‍💻',
    text: "I highly recommend Andrei as he possesses exceptional qualities such as perseverance, dedication to completing tasks, continuous self-improvement, and a helpful nature. He is not only a valuable professional but also a kind-hearted team member and a wonderful father. Andrei's commitment and interpersonal skills make him an invaluable asset to any organization.",
    technologies: ['React', 'TypeScript', 'Leadership', 'Team Management', 'Frontend Development'],
  },
  {
    id: 'ruslan-makaev',
    name: 'Ruslan Makaev',
    title: 'Tech Lead',
    company: 'Fojin-tech',
    avatar: '👨‍💼',
    text: 'Working with Andrei as his direct technical supervisor, I would like to note the following. Andrei was able to quickly find common ground with the team. He knows how to find compromises in disputes and clearly demonstrated his flexibility in terms of technology, he had no problem mastering new tools in a short period of time. Andrei approached the tasks with full responsiveness and dedication, which allowed him to successfully develop the product. I enjoyed working with Andrei and I believe that all his future mates will too. Thank you, Andrei, and success!',
    technologies: [
      'Team Collaboration',
      'Problem Solving',
      'Adaptability',
      'Product Development',
      'Technical Leadership',
    ],
  },
];

export function Recommendations() {
  return (
    <section id="recommendations" className="space-y-8">
      <ScrollAnimation delay={0.1} direction="up" id="recommendations-title">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl lg:text-4xl font-bold">RECOMMENDATIONS</h2>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2} direction="up" id="recommendations-list">
        <div className="space-y-6">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={recommendation.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="p-6 rounded-lg border border-foreground/10 hover:border-accent/30 hover:bg-foreground/5 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center text-3xl border border-foreground/20 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
                  {recommendation.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {recommendation.name}
                  </h3>
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                    {recommendation.title}
                  </p>
                  <p className="text-foreground/40 text-sm group-hover:text-foreground/60 transition-colors duration-300">
                    {recommendation.company}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-foreground/80 leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300">
                  <span className="text-accent mr-3 text-xl group-hover:scale-110 transition-transform duration-200">
                    →
                  </span>
                  {recommendation.text}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {recommendation.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.2 + techIndex * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="px-3 py-1 text-xs border border-accent text-accent rounded-full hover:bg-accent/10 hover:scale-105 transition-all duration-200 group-hover:border-accent/60"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
