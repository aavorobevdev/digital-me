import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Andrei Vorobev</h1>
        <h2 className="text-xl md:text-2xl font-medium text-foreground/80">Frontend Engineer</h2>
        <div className="max-w-md mx-auto">
          <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
            This website is currently under development and will be updated soon with my portfolio,
            projects, and professional experience.
          </p>
        </div>
      </div>
    </div>
  );
}
