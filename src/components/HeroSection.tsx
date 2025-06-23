import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [maskLoaded, setMaskLoaded] = useState(false);

  const maskImages = [
    '/lovable-uploads/service-architecture.jpg',
    '/lovable-uploads/service-interior.jpg',
    '/lovable-uploads/service-3d-modeling.jpg',
    '/lovable-uploads/service-lighting.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % maskImages.length);
    }, 4000);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
      setMaskLoaded(true);
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="min-h-screen bg-deziro-navy relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 p-6 md:p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Klein Bottle Logo */}
            <svg width="28" height="28" viewBox="0 0 60 60" className="text-deziro-blue md:w-8 md:h-8">
              <path
                d="M30 12 C40 12, 48 18, 48 30 C48 36, 45 39, 39 39 C33 39, 27 36, 27 30 C27 27, 28.5 25.5, 30 25.5 C31.5 25.5, 33 27, 33 30 C33 33, 31.5 34.5, 30 34.5 C28.5 34.5, 27 33, 27 30 C27 24, 33 18, 39 18 C45 18, 51 24, 51 30 C51 42, 42 48, 30 48 C18 48, 12 42, 12 30 C12 18, 18 12, 30 12 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
            </svg>
            <div className="text-white font-black text-xl md:text-2xl tracking-wide">
              DEZIRO
            </div>
          </div>
          <div className="flex space-x-6 md:space-x-8">
            <a href="#work" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group text-sm md:text-base">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group text-sm md:text-base">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center relative">
          <h1 className="leading-[0.85] relative">
            <div className="relative">
              {['SHAPING', 'SPACES FOR', 'TOMORROW'].map((line, index) => (
                <div key={line} className="relative overflow-hidden">
                  <span
                    className={`block font-black transition-all duration-1200 ease-out
                      text-[clamp(2.5rem,12vw,8rem)] lg:text-[clamp(4rem,14vw,12rem)]
                      ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                    style={{
                      transitionDelay: `${index * 300}ms`,
                      fontFamily: '"Space Grotesk", "Inter", sans-serif',
                      fontWeight: '900',
                      backgroundImage: `url(${maskImages[currentImage]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent',
                      filter: 'contrast(1.2) brightness(1.1)',
                      textShadow: 'none',
                      animation: maskLoaded ? 'animate-bg-pan 15s linear infinite' : 'none',
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </h1>

          {/* Subtitle */}
          <div className={`mt-6 md:mt-8 transition-all duration-1000 ease-out delay-1000 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-white/80 text-base md:text-xl font-medium tracking-wide max-w-2xl mx-auto px-4"
              style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>
              Architectural Solutions • Interior Design • 3D Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/70 text-sm font-medium mb-2 tracking-wide">SCROLL</div>
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce-gentle mx-auto" />
      </div>

      {/* Parallax Elements */}
      <div className="absolute top-1/4 left-4 md:left-10 w-px h-20 md:h-32 bg-gradient-to-b from-deziro-blue/40 to-transparent animate-pulse" />
      <div className="absolute bottom-1/4 right-4 md:right-10 w-px h-16 md:h-24 bg-gradient-to-t from-deziro-blue/40 to-transparent animate-pulse delay-500" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-deziro-blue/60 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default HeroSection;