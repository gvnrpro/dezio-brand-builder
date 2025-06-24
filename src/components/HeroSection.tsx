
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

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
            <div className="text-white font-black text-xl md:text-2xl tracking-wide font-grotesk">
              DEZIRO
            </div>
          </div>
          <div className="flex space-x-6 md:space-x-8">
            <a href="#work" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group text-sm md:text-base font-grotesk">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group text-sm md:text-base font-grotesk">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* Animated Background Mask */}
      <div className="absolute inset-0 z-10">
        {maskImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-2000 ${
              index === currentImage ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'soft-light',
              filter: 'contrast(1.2) saturate(0.8)',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-deziro-navy/90 via-deziro-dark-blue/70 to-deziro-navy/90" />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
        <div className="text-center relative">
          <h1 className="leading-[0.85] relative">
            <div className="relative">
              {['SHAPING', 'SPACES FOR', 'TOMORROW'].map((line, index) => (
                <div key={line} className="relative overflow-hidden mb-2">
                  {/* Main Text with Masking Animation */}
                  <span
                    className={`block font-black transition-all duration-1200 ease-out font-grotesk
                      text-[clamp(2.5rem,12vw,8rem)] lg:text-[clamp(4rem,14vw,12rem)]
                      ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                    style={{
                      background: `url(${maskImages[currentImage]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                      filter: 'contrast(2) brightness(1.5) saturate(1.2)',
                      animationDelay: `${index * 0.2}s`,
                      transition: 'background-image 2s ease-in-out',
                    }}
                  >
                    {line}
                  </span>
                  
                  {/* Gradient Overlay for Better Readability */}
                  <span
                    className={`absolute inset-0 block font-black font-grotesk
                      text-[clamp(2.5rem,12vw,8rem)] lg:text-[clamp(4rem,14vw,12rem)]
                      ${textVisible ? 'opacity-40' : 'opacity-0'}
                    `}
                    style={{
                      background: `linear-gradient(
                        135deg,
                        #ffffff 0%,
                        #177dff 25%,
                        #03368d 50%,
                        #177dff 75%,
                        #ffffff 100%
                      )`,
                      backgroundSize: '400% 400%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                      animation: 'bg-pan 8s ease-in-out infinite',
                      animationDelay: `${index * 0.3}s`,
                      mixBlendMode: 'overlay',
                    }}
                  >
                    {line}
                  </span>

                  {/* Shimmer Effect */}
                  <span
                    className={`absolute inset-0 block font-black font-grotesk
                      text-[clamp(2.5rem,12vw,8rem)] lg:text-[clamp(4rem,14vw,12rem)]
                      ${textVisible ? 'opacity-20' : 'opacity-0'}
                    `}
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                      animation: 'text-shimmer 4s ease-in-out infinite',
                      animationDelay: `${index * 0.5}s`,
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
            <p className="text-white/90 text-base md:text-xl font-medium tracking-wide max-w-2xl mx-auto px-4 font-grotesk">
              Architectural Solutions • Interior Design • 3D Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <div className="text-white/70 text-sm font-medium mb-2 tracking-wide font-grotesk">SCROLL</div>
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce-gentle mx-auto" />
      </div>

      {/* Enhanced Parallax Elements */}
      <div className="absolute top-1/4 left-4 md:left-10 w-px h-20 md:h-32 bg-gradient-to-b from-deziro-blue/40 to-transparent animate-pulse z-10" />
      <div className="absolute bottom-1/4 right-4 md:right-10 w-px h-16 md:h-24 bg-gradient-to-t from-deziro-blue/40 to-transparent animate-pulse delay-500 z-10" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-deziro-blue/60 rounded-full animate-ping z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping z-10" style={{ animationDelay: '3s' }} />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-1/5 right-1/5 w-2 h-2 border border-deziro-blue/30 rotate-45 animate-spin-slow z-10" />
      <div className="absolute bottom-1/3 left-1/6 w-3 h-3 border border-white/20 animate-pulse z-10" />
    </section>
  );
};

export default HeroSection;
