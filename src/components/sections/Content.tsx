import { About, Experience, Skills, Recommendations } from './index';

export function Content() {
  return (
    <div className="lg:ml-[calc(50%+60px)] pt-8 lg:pt-0 space-y-8 lg:space-y-16 pb-20 lg:pb-8">
      <About />
      <Experience />
      <Skills />
      <Recommendations />
    </div>
  );
}
