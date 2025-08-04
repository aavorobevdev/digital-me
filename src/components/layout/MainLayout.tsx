'use client';

import { PersonalInfo } from '../sections/PersonalInfo';
import { Content } from '../sections/Content';
import { ScrollToTopButton } from '../ui/Button';
import { MobileNavigation } from '../ui/MobileNavigation';
import { NavigationProvider } from '../../utils/NavigationProvider';

function MainLayoutContent() {
  return (
    <div className="min-h-screen bg-background px-6 pt-[60px] pb-[60px] lg:px-[60px] lg:pt-[60px] lg:pb-[60px]">
      <PersonalInfo />
      <Content />
      <ScrollToTopButton />
      <MobileNavigation />
    </div>
  );
}

export function MainLayout() {
  return (
    <NavigationProvider>
      <MainLayoutContent />
    </NavigationProvider>
  );
}
