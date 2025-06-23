
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
          className={`relative h-[60vh] overflow-hidden transition-all duration-1000 ${
            leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
            alt="Scale Modeling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Scale Modeling</h3>
              <p className="text-white/80 font-medium">Precision crafted architectural models</p>
            </div>
          </div>
        </div>

        <div 
          ref={rightRef}
          className={`relative h-[60vh] overflow-hidden transition-all duration-1000 ${
            rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&q=80"
            alt="Conceptual Lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Conceptual Lighting</h3>
              <p className="text-white/80 font-medium">Illuminating spaces with artistic vision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualScrollSection;
