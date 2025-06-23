
import { useEffect, useRef, useState } from 'react';

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { title: '3D Printing', color: 'bg-deziro-medium-blue', delay: '0ms' },
    { title: '3D Walkthrough', color: 'bg-deziro-dark-blue', delay: '100ms' },
    { title: 'Scale Modeling', color: 'bg-deziro-blue', delay: '200ms' },
    { title: 'Booth Design', color: 'bg-deziro-navy', delay: '300ms' }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-8">
        {/* Large Color Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div 
            className={`bg-deziro-blue h-64 rounded-lg flex items-center justify-center transition-all duration-800 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <h3 className="text-4xl font-black text-white text-center">
              ARCHITECTURAL<br />SOLUTIONS
            </h3>
          </div>
          <div 
            className={`bg-deziro-dark-blue h-64 rounded-lg flex items-center justify-center transition-all duration-800 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-4xl font-black text-white text-center">
              INTERIOR<br />DESIGN
            </h3>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${service.color} h-48 rounded-lg flex items-center justify-center transition-all duration-800 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: service.delay }}
            >
              <h4 className="text-xl font-bold text-white text-center px-4">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
