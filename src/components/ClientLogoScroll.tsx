
import { useEffect, useRef, useState } from 'react';

const ClientLogoScroll = () => {
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

  const clients = [
    { name: 'Almaya', logo: '/lovable-uploads/da8ecae9-c005-4825-ad95-18882eb9834d.png' },
    { name: 'Qanawat', logo: '/lovable-uploads/92c5e88e-dcd0-4524-85f6-735b3d64f0e7.png' },
    { name: 'Sealand', logo: '/lovable-uploads/9f948f52-535c-4ee0-8b22-f697d155f0dc.png' },
    { name: 'Rotana', logo: '/lovable-uploads/bced2e81-6731-4d79-8c0a-f46a99eb0793.png' }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(23,125,255,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-wider mb-4 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif' }}>
            Trusted by Leading Brands
          </h2>
          <div className={`w-24 h-0.5 bg-gradient-to-r from-deziro-blue to-deziro-dark-blue mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100
                        flex items-center justify-center h-32 md:h-40 
                        transition-all duration-800 hover:shadow-xl hover:scale-105 hover:-translate-y-2
                        cursor-pointer relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-deziro-blue/5 to-deziro-dark-blue/5 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 md:max-h-20 max-w-full object-contain 
                         filter grayscale group-hover:grayscale-0 
                         transition-all duration-500 group-hover:scale-110 relative z-10"
              />
              
              {/* Subtle Border Animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            group-hover:border-deziro-blue/20 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Additional Brand Statement */}
        <div className={`text-center mt-16 md:mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
             style={{ fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif' }}>
            Partnering with visionary brands to create spaces that inspire, innovate, and endure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoScroll;
