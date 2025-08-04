import { ScrollAnimation } from '../ui/ScrollAnimation';

export function About() {
  return (
    <ScrollAnimation delay={0.1} direction="left" id="about-section">
      <section
        id="about"
        className="space-y-4 lg:space-y-6 p-4 lg:p-6 rounded-lg border border-foreground/10 hover:border-accent/30 hover:bg-foreground/5 transition-all duration-300 group"
      >
        <ScrollAnimation delay={0.2} direction="up" id="about-title">
          <h2 className="text-2xl lg:text-4xl font-bold group-hover:text-accent transition-colors duration-300">
            ABOUT
          </h2>
        </ScrollAnimation>
        <div className="space-y-3 lg:space-y-4 text-foreground/80 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
          <ScrollAnimation delay={0.3} direction="up" id="about-text-1">
            <p>
              I'm passionate about creating solutions that drive business growth and satisfy user
              needs. My focus is on building features that help businesses develop, automating
              workflows, improving user experience, and implementing new technologies that simplify
              people's lives.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4} direction="up" id="about-text-2">
            <p>
              With more than 5 years of experience in web development, I specialize in building
              scalable applications that deliver real business value. I love collaborating with
              cross-functional teams to bring innovative ideas to life and create solutions that
              make a real impact on user workflows and company processes.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </ScrollAnimation>
  );
}
