import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentTexture, setCurrentTexture] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  const maskTextures = [
    'linear-gradient(45deg, #177dff, #03368d)',
    'linear-gradient(135deg, #03045e, #177dff, #03368d)',
    'radial-gradient(circle at 30% 40%, #177dff, #03045e)',
    'conic-gradient(from 0deg, #177dff, #03368d, #03045e)',
    'linear-gradient(90deg, #03045e, #177dff, #03368d)',
    'radial-gradient(ellipse at center, #177dff, #03045e)'
  ];

  useEffect(() => {
    const textTimer = setTimeout(() => setTextVisible(true), 1000);
    const textureInterval = setInterval(() => {
      setCurrentTexture((prev) => (prev + 1) % maskTextures.length);
    }, 8000); // slower, smoother

    return () => {
      clearTimeout(textTimer);
      clearInterval(textureInterval);
    };
  }, []);

  return (
    <section className="min-h-screen bg-deziro-navy relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 p-6 md:p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 md:space-x-4">
            <img
              src="/lovable-uploads/7a23b783-7d17-42f4-b517-38dd74e29ecf.png"
              alt="Deziro Designs Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div className="text-white font-black text-xl md:text-2xl tracking-wide font-grotesk">
              DEZIRO
            </div>
          </div>
          <div className="flex space-x-6 md:space-x-8">
            <a href="#services" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group text-sm md:text-base font-poppins">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group text-sm md:text-base font-poppins">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-deziro-blue/40 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-px h-24 bg-gradient-to-t from-deziro-blue/40 to-transparent animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-deziro-blue/60 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/5 right-1/5 w-2 h-2 border border-deziro-blue/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 border border-white/20 animate-pulse" />
      </div>

      {/* Main Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
        <div className="text-center relative max-w-6xl">
          <h1 className="leading-[0.85] relative mb-8">
            {['SHAPING', 'SPACES FOR', 'TOMORROW'].map((line, index) => (
              <div key={line} className="relative overflow-hidden mb-2">
                <span
                  className={`block font-black font-grotesk transition-all duration-1200 ease-out
                    text-[clamp(3rem,12vw,9rem)] lg:text-[clamp(5rem,15vw,13rem)]
                    ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{
                    background: maskTextures[currentTexture],
                    backgroundSize: '200% 200%',
                    backgroundPosition: 'center',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: '#ffffff',
                    filter: 'contrast(1.05) brightness(1)',
                    textShadow: '0 0 6px rgba(0, 0, 0, 0.3)',
                    transition: 'background 2s ease-in-out',
                    animation: 'bg-shift 12s ease-in-out infinite',
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </h1>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 ease-out delay-1500 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-white/90 text-lg md:text-2xl font-medium tracking-wide max-w-4xl mx-auto px-4 font-poppins">
              Architectural Solutions • Interior Design • 3D Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <div className="text-white/70 text-sm font-medium mb-2 tracking-wide font-poppins">SCROLL</div>
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
