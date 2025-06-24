
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

  const highlightWords = ['Dubai', '2006', '3D Walkthroughs', 'Klein Bottle'];

  const renderTextWithHighlights = (text: string) => {
    let result = text;
    highlightWords.forEach(word => {
      result = result.replace(
        new RegExp(`\\b${word}\\b`, 'g'),
        `<span class="highlight-word">${word}</span>`
      );
    });
    return result;
  };

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(23,125,255,0.1),transparent_70%)]" />
        {/* Blueprint-style background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(23,125,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,125,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'blueprint-float 20s linear infinite'
        }} />
      </div>

      <div className="container mx-auto px-8 relative">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Klein Bottle Icon */}
          <div className="mb-12">
            <img 
              src="/klein-bottle-logo.svg" 
              alt="Klein Bottle" 
              className="w-16 h-16 mx-auto opacity-70 animate-pulse"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(212deg) brightness(102%) contrast(97%)' }}
            />
          </div>

          <div className="space-y-8">
            <p 
              className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed font-poppins"
              dangerouslySetInnerHTML={{
                __html: renderTextWithHighlights(
                  "Deziro Designs is a Dubai-based design consultancy specializing in architectural interiors, immersive modeling, and 3D innovations. Since 2006, we've been pushing the boundaries of design with precision 3D Walkthroughs and innovative solutions."
                )
              }}
            />
            
            <div className="w-24 h-0.5 bg-gradient-to-r from-deziro-blue to-deziro-dark-blue mx-auto" />
            
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto font-poppins">
              Inspired by the Klein Bottle's fluid form, we deliver seamless design experiences 
              with precision and imagination, transforming spaces into extraordinary environments.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-deziro-blue mb-2 font-grotesk animate-counter">18+</div>
              <div className="text-gray-600 font-medium font-poppins">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-deziro-blue mb-2 font-grotesk animate-counter">500+</div>
              <div className="text-gray-600 font-medium font-poppins">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-deziro-blue mb-2 font-grotesk animate-counter">50+</div>
              <div className="text-gray-600 font-medium font-poppins">Global Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
