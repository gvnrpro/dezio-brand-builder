
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
    <section ref={sectionRef} className="py-32 bg-gray-100">
      <div className="container mx-auto px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-black text-deziro-navy mb-12 leading-tight">
            Pushing the boundaries of design in Dubai since 2006
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
            Deziro Designs is a multidisciplinary studio specializing in architectural interiors, 
            immersive modeling, and 3D innovations. Inspired by the Klein Bottle's fluid form, 
            we deliver seamless design experiences with precision and imagination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
