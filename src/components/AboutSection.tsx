
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-deziro-blue to-transparent opacity-30" />
      
      <div className="container mx-auto px-8 relative">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Klein Bottle Icon */}
          <div className="mb-12">
            <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto text-deziro-blue opacity-70">
              <path
                d="M30 12 C40 12, 48 18, 48 30 C48 36, 45 39, 39 39 C33 39, 27 36, 27 30 C27 27, 28.5 25.5, 30 25.5 C31.5 25.5, 33 27, 33 30 C33 33, 31.5 34.5, 30 34.5 C28.5 34.5, 27 33, 27 30 C27 24, 33 18, 39 18 C45 18, 51 24, 51 30 C51 42, 42 48, 30 48 C18 48, 12 42, 12 30 C12 18, 18 12, 30 12 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-glow-pulse"
              />
            </svg>
          </div>

          <h2 className="text-fluid-4xl md:text-6xl lg:text-7xl font-black text-deziro-navy mb-16 leading-tight">
            Pushing the boundaries of design in{' '}
            <span className="text-deziro-blue">Dubai</span> since 2006
          </h2>
          
          <div className="space-y-8">
            <p className="text-fluid-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
              Deziro Designs is a multidisciplinary studio specializing in architectural interiors, 
              immersive modeling, and 3D innovations.
            </p>
            
            <div className="w-24 h-0.5 bg-deziro-blue mx-auto" />
            
            <p className="text-fluid-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Inspired by the Klein Bottle's fluid form, we deliver seamless design experiences 
              with precision and imagination, transforming spaces into extraordinary environments.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-deziro-blue mb-2">18+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-deziro-blue mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-deziro-blue mb-2">50+</div>
              <div className="text-gray-600 font-medium">Global Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
