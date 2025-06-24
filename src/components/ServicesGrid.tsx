
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      title: 'Architectural Solutions',
      description: 'Innovative architectural designs that redefine spaces',
      gradient: 'linear-gradient(135deg, #177dff 0%, #03368d 100%)',
      delay: '0ms'
    },
    { 
      title: 'Interior Design',
      description: 'Curated interior experiences that inspire',
      gradient: 'linear-gradient(135deg, #03368d 0%, #03045e 100%)',
      delay: '200ms'
    },
    { 
      title: '3D Visualization',
      description: 'Photorealistic 3D renderings and walkthroughs',
      gradient: 'linear-gradient(135deg, #177dff 0%, #03045e 100%)',
      delay: '400ms'
    },
    { 
      title: '3D Printing',
      description: 'Advanced 3D printing for architectural models',
      gradient: 'linear-gradient(135deg, #03045e 0%, #177dff 100%)',
      delay: '600ms'
    },
    { 
      title: 'Scale Modeling',
      description: 'Precision architectural scale models',
      gradient: 'linear-gradient(135deg, #03368d 0%, #177dff 100%)',
      delay: '800ms'
    },
    { 
      title: 'Conceptual Lighting',
      description: 'Intelligent lighting design solutions',
      gradient: 'linear-gradient(135deg, #177dff 0%, #03368d 50%, #03045e 100%)',
      delay: '1000ms'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gray-50 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(23,125,255,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(3,4,94,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-grotesk mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-deziro-blue to-deziro-dark-blue mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer 
                transition-all duration-700 hover:scale-105 hover:shadow-2xl
                min-h-[320px] bg-white border border-gray-100 hover:border-transparent
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: service.delay }}
            >
              {/* Animated Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-all duration-500"
                style={{ 
                  background: service.gradient,
                  backgroundSize: '200% 200%',
                  animation: 'bg-shift 6s ease-in-out infinite'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 font-grotesk">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-poppins">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Bottom Section */}
                <div className="mt-auto">
                  <div className="w-0 h-0.5 bg-white group-hover:w-16 transition-all duration-500 delay-100" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                   style={{ boxShadow: `inset 0 0 60px ${service.gradient}` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
