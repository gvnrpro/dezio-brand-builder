
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

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
      title: 'ARCHITECTURAL SOLUTIONS',
      subtitle: 'Visionary Design',
      description: 'Crafting spaces that define the future of living and working environments.',
      image: '/lovable-uploads/service-architecture.jpg',
      color: 'from-deziro-blue to-deziro-dark-blue',
      delay: '0ms',
      span: 'md:col-span-2 md:row-span-2'
    },
    { 
      title: 'INTERIOR DESIGN',
      subtitle: 'Curated Experiences',
      description: 'Transforming interiors into immersive experiences that inspire and elevate.',
      image: '/lovable-uploads/service-interior.jpg',
      color: 'from-deziro-dark-blue to-deziro-navy',
      delay: '200ms',
      span: 'md:col-span-1 md:row-span-1'
    },
    { 
      title: '3D MODELING',
      subtitle: 'Digital Precision',
      description: 'Bringing concepts to life with photorealistic 3D visualizations.',
      image: '/lovable-uploads/service-3d-modeling.jpg',
      color: 'from-deziro-medium-blue to-deziro-blue',
      delay: '400ms',
      span: 'md:col-span-1 md:row-span-1'
    },
    { 
      title: 'LIGHTING DESIGN',
      subtitle: 'Ambient Artistry',
      description: 'Illuminating spaces with intelligent lighting solutions.',
      image: '/lovable-uploads/service-lighting.jpg',
      color: 'from-deziro-navy to-black',
      delay: '600ms',
      span: 'md:col-span-2 md:row-span-1'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(23,125,255,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(3,4,94,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-deziro-blue mr-3" />
            <span className="text-deziro-blue font-semibold tracking-wide text-sm md:text-base uppercase">
              What We Create
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif' }}>
            Services That<br />
            <span className="bg-gradient-to-r from-deziro-blue to-deziro-dark-blue bg-clip-text text-transparent">
              Define Excellence
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer 
                transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl
                min-h-[300px] md:min-h-[350px] ${service.span}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: service.delay }}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Dynamic Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-85 group-hover:opacity-75 transition-all duration-500`} />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-white/80 text-xs md:text-sm font-medium tracking-wider uppercase">
                      {service.subtitle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Bottom Section */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight"
                      style={{ fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                  
                  {/* Hover Line Animation */}
                  <div className="w-0 h-0.5 bg-white group-hover:w-16 transition-all duration-500 delay-100" />
                </div>
              </div>

              {/* Magnetic Effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded-3xl" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 md:mt-24 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group relative px-8 py-4 bg-deziro-blue text-white font-semibold rounded-full 
                           hover:bg-deziro-dark-blue transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-deziro-blue to-deziro-dark-blue rounded-full 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
