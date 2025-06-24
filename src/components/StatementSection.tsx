
import { useEffect, useRef, useState } from 'react';

const StatementSection = () => {
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
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(23,125,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-8 text-center relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-deziro-navy mb-8 leading-tight font-poppins">
            Your complete{' '}
            <span 
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #177dff 0%, #03368d 50%, #177dff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                animation: 'text-grow 2s ease-in-out infinite alternate',
              }}
            >
              360 design
            </span>{' '}
            solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto font-poppins">
            Blending architecture, interiors, scale modeling and 3D technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
