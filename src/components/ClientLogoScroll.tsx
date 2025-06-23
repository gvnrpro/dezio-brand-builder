
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
    <section ref={sectionRef} className="py-24 bg-[#faf9f7]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-wide">
            Trusted by Leading Brands
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-24 transition-all duration-800 hover:shadow-md hover:scale-105 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoScroll;
