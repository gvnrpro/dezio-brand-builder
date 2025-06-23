
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
    'FALLA', 'QANAWAT', 'SEALAND', 'ROTANA', 
    'EMIRATES', 'DUBAI MALL', 'BURJ AL ARAB', 'ATLANTIS'
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
              key={client}
              className={`bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-24 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-lg font-bold text-gray-400 tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoScroll;
