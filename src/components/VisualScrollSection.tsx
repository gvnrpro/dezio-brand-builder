
import { useEffect, useRef, useState } from 'react';

const VisualScrollSection = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              setLeftVisible(true);
            } else if (entry.target === rightRef.current) {
              setRightVisible(true);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div 
          ref={leftRef}
          className={`relative h-[70vh] overflow-hidden group transition-all duration-1000 ${
            leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <img
            src="/service-scale-modeling.jpg"
            alt="Scale Modeling"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="p-12 w-full">
              <div className="mb-4">
                <div className="w-16 h-0.5 bg-white mb-4" />
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Scale Modeling
                </h3>
                <p className="text-white/90 text-lg font-medium max-w-md leading-relaxed">
                  Precision-crafted architectural models that bring concepts to life with meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
          
          {/* Hover Effect */}
          <div className="absolute top-0 right-0 w-0 h-full bg-deziro-blue/20 transition-all duration-500 group-hover:w-full" />
        </div>

        <div 
          ref={rightRef}
          className={`relative h-[70vh] overflow-hidden group transition-all duration-1000 ${
            rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <img
            src="/service-lighting.jpg"
            alt="Conceptual Lighting"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="p-12 w-full">
              <div className="mb-4">
                <div className="w-16 h-0.5 bg-white mb-4" />
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Conceptual Lighting
                </h3>
                <p className="text-white/90 text-lg font-medium max-w-md leading-relaxed">
                  Illuminating spaces with artistic vision that transforms environments through innovative lighting design.
                </p>
              </div>
            </div>
          </div>
          
          {/* Hover Effect */}
          <div className="absolute top-0 left-0 w-0 h-full bg-deziro-blue/20 transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </section>
  );
};

export default VisualScrollSection;
