
import { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
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

  return (
    <section ref={sectionRef} className="py-32 bg-deziro-navy relative overflow-hidden" id="contact">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src="/lovable-uploads/7a23b783-7d17-42f4-b517-38dd74e29ecf.png" 
          alt="Deziro Logo Watermark"
          className="w-96 h-96 object-contain animate-pulse"
        />
      </div>

      <div className="container mx-auto px-8 relative">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight font-grotesk">
              Let's Create Something Exceptional.
            </h2>
            <button className="bg-deziro-blue hover:bg-deziro-dark-blue text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-poppins">
              Let's Create Together
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-2 font-grotesk">Phone</h3>
              <a href="tel:+97144220701" className="text-white/80 hover:text-deziro-blue transition-colors font-medium font-poppins">
                +971 4 422 0701
              </a>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-2 font-grotesk">Email</h3>
              <a href="mailto:info@dezirodesigns.com" className="text-white/80 hover:text-deziro-blue transition-colors font-medium font-poppins">
                info@dezirodesigns.com
              </a>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-2 font-grotesk">Address</h3>
              <p className="text-white/80 font-medium leading-relaxed font-poppins">
                Office 703, Saheel Tower 2<br />
                Al Ittihad Road<br />
                Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 font-medium font-poppins">
            © 2024 Deziro Designs. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
