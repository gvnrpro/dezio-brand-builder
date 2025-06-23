
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
    <section ref={sectionRef} className="py-32 bg-deziro-navy" id="contact">
      <div className="container mx-auto px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Let's build something exceptional.
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+97144220701" className="text-white/80 hover:text-deziro-blue transition-colors font-medium">
                +971 4 422 0701
              </a>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@dezirodesigns.com" className="text-white/80 hover:text-deziro-blue transition-colors font-medium">
                info@dezirodesigns.com
              </a>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-2">Address</h3>
              <p className="text-white/80 font-medium leading-relaxed">
                Office 703, Saheel Tower 2<br />
                Al Ittihad Road<br />
                Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 font-medium">
            © 2024 Deziro Designs. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
