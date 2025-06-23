
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

  const mainServices = [
    { 
      title: 'ARCHITECTURAL\nSOLUTIONS', 
      color: 'bg-deziro-blue',
      image: '/service-architecture.jpg',
      delay: '0ms' 
    },
    { 
      title: 'INTERIOR\nDESIGN', 
      color: 'bg-deziro-dark-blue',
      image: '/service-interior.jpg', 
      delay: '100ms' 
    }
  ];

  const services = [
    { title: '3D MODELING', image: '/service-3d-modeling.jpg', color: 'bg-deziro-medium-blue', delay: '200ms' },
    { title: '3D WALKTHROUGH', image: '/service-3d-walkthrough.jpg', color: 'bg-deziro-dark-blue', delay: '300ms' },
    { title: 'SCALE MODELING', image: '/service-scale-modeling.jpg', color: 'bg-deziro-blue', delay: '400ms' },
    { title: 'LIGHTING DESIGN', image: '/service-lighting.jpg', color: 'bg-deziro-navy', delay: '500ms' }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-8">
        {/* Main Services - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={service.title}
              className={`relative h-80 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-800 hover:scale-[1.02] hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: service.delay }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <h3 className="text-4xl md:text-5xl font-black text-white text-center leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
              
              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Services Grid - Smaller Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative h-64 rounded-xl overflow-hidden group cursor-pointer transition-all duration-800 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: service.delay }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 ${service.color} opacity-75 group-hover:opacity-60 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h4 className="text-lg md:text-xl font-bold text-white text-center leading-tight">
                  {service.title}
                </h4>
              </div>
              
              {/* Magnetic Effect Border */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
