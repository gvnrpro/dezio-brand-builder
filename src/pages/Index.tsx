
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import HeroSection from '@/components/HeroSection';
import StatementSection from '@/components/StatementSection';
import VisualScrollSection from '@/components/VisualScrollSection';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import ClientLogoScroll from '@/components/ClientLogoScroll';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-poppins">
      {showSplash && <SplashScreen />}
      <div className={`${showSplash ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <HeroSection />
        <StatementSection />
        <VisualScrollSection />
        <ServicesGrid />
        <AboutSection />
        <ClientLogoScroll />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
