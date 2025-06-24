
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentTexture, setCurrentTexture] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  const maskTextures = [
    'linear-gradient(45deg, #177dff 0%, #03368d 50%, #177dff 100%)',
    'linear-gradient(135deg, #03045e 0%, #177dff 25%, #03368d 50%, #177dff 75%, #03045e 100%)',
    'radial-gradient(circle at 30% 40%, #177dff 0%, #03368d 30%, #03045e 60%, #177dff 100%)',
    'conic-gradient(from 0deg, #177dff, #03368d, #03045e, #177dff)',
    'linear-gradient(90deg, #03045e 0%, #177dff 20%, #03368d 40%, #177dff 60%, #03045e 80%, #177dff 100%)',
    'radial-gradient(ellipse at center, #177dff 0%, #03368d 40%, #03045e 70%, #177dff 100%)'
  ];

  useEffect(() => {
    const textTimer = setTimeout(() => setTextVisible(true), 1000);
    
    const textureInterval = setInterval(() => {
      setCurrentTexture((prev) => (prev + 1) % maskTextures.length);
    }, 4000);

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
              src="/klein-bottle-logo.svg" 
              alt="Deziro Logo" 
              className="w-7 h-7 md:w-8 md:h-8 text-deziro-blue filter brightness-0 invert"
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
      <div className="absolute inset-0 z-10">
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
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    animationDelay: `${index * 0.3}s`,
                    animation: 'bg-shift 4s ease-in-out infinite, text-glow 2s ease-in-out infinite alternate',
                    filter: 'contrast(1.2) brightness(1.1)',
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <div className={`transition-all duration-1000 ease-out delay-1500 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-white/90 text-lg md:text-2xl font-medium tracking-wide max-w-4xl mx-auto px-4 font-poppins">
              <span className="animate-typewriter">
                Architectural Solutions • Interior Design • 3D Innovation
              </span>
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
