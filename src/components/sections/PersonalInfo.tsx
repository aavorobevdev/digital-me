'use client';

import { motion } from 'framer-motion';
import { Navigation } from '../ui/Navigation';
import { FadeInAnimation } from '../ui/FadeInAnimation';
import { Telegram } from '../icons/Telegram';
import { Email } from '../icons/Email';
import { Linkedin } from '../icons/Linkedin';

const contacts = [
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/aavorobevdev', icon: <Telegram /> },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrei-frontend/',
    icon: <Linkedin />,
  },
  // { id: 'github', label: 'GitHub', href: '', icon: <Github /> },
  { id: 'email', label: 'Email', href: 'mailto:avorobev.ph@gmail.com', icon: <Email /> },
];

export function PersonalInfo() {
  return (
    <div className="lg:fixed lg:top-[60px] lg:left-[60px] lg:w-[calc(50%-60px)] lg:h-[calc(100vh-120px)] lg:overflow-y-auto space-y-6 lg:space-y-8 pb-8 lg:pb-0">
      <FadeInAnimation delay={0.1} direction="up" id="status">
        <div className="flex justify-start">
          <div className="px-4 py-2 rounded-lg border border-foreground/20 bg-foreground/5 text-sm text-foreground/80">
            <motion.span
              className="mr-2 inline-block text-lg font-bold"
              animate={{
                opacity: [1, 0.8, 0.6, 0.8, 1],
                color: ['#00d4ff', '#00b8e6', '#0099cc', '#00b8e6', '#00d4ff'],
                textShadow: [
                  '0 0 8px #00d4ff',
                  '0 0 6px #00b8e6',
                  '0 0 4px #0099cc',
                  '0 0 6px #00b8e6',
                  '0 0 8px #00d4ff',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              • OPEN TO WORK
              {/*
              - AVAILABLE FOR PROJECTS
              - READY TO COLLABORATE
              - BRINGING IDEAS TO LIFE
              - TURNING VISION INTO REALITY
              - BUILDING BRIDGES TO SUCCESS
              - BUILDING BETTER TOMORROW
              - BUILDING GREAT EXPERIENCES
              */}
            </motion.span>
            <motion.span
              animate={{
                opacity: [1, 0.8, 0.6, 0.8, 1],
                color: ['#00d4ff', '#00b8e6', '#0099cc', '#00b8e6', '#00d4ff'],
                textShadow: [
                  '0 0 8px #00d4ff',
                  '0 0 6px #00b8e6',
                  '0 0 4px #0099cc',
                  '0 0 6px #00b8e6',
                  '0 0 8px #00d4ff',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            ></motion.span>
          </div>
        </div>
      </FadeInAnimation>

      <FadeInAnimation delay={0.2} direction="up" id="name-title">
        <div className="space-y-2">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">Andrei Vorobev</h1>
          <h2 className="text-lg lg:text-2xl font-normal text-foreground/80">Front End Engineer</h2>
        </div>
      </FadeInAnimation>

      <FadeInAnimation delay={0.3} direction="up" id="description">
        <p className="text-foreground/70 text-base lg:text-lg leading-relaxed max-w-md">
          I craft digital solutions that turn complex challenges into elegant experiences
        </p>
      </FadeInAnimation>

      <FadeInAnimation delay={0.4} direction="up" id="navigation">
        <div className="hidden lg:block">
          <Navigation />
        </div>
      </FadeInAnimation>

      <FadeInAnimation delay={0.5} direction="up" id="social-links">
        <ul className="flex space-x-4">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <a
                href={contact.href}
                className="w-10 h-10 border border-foreground/20 rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300 group"
              >
                <div className="transition-all duration-300 group-hover:scale-110">
                  {contact.icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </FadeInAnimation>
    </div>
  );
}
