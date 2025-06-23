
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  
  const maskImages = [
    '/service-architecture.jpg',
    '/service-interior.jpg', 
    '/service-3d-modeling.jpg',
    '/service-lighting.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % maskImages.length);
    }, 4000);

    // Trigger text animation after component mounts
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="min-h-screen bg-deziro-navy relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deziro-navy via-deziro-navy/95 to-deziro-navy" />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Klein Bottle Logo */}
            <svg width="32" height="32" viewBox="0 0 60 60" className="text-deziro-blue">
              <path
                d="M30 12 C40 12, 48 18, 48 30 C48 36, 45 39, 39 39 C33 39, 27 36, 27 30 C27 27, 28.5 25.5, 30 25.5 C31.5 25.5, 33 27, 33 30 C33 33, 31.5 34.5, 30 34.5 C28.5 34.5, 27 33, 27 30 C27 24, 33 18, 39 18 C45 18, 51 24, 51 30 C51 42, 42 48, 30 48 C18 48, 12 42, 12 30 C12 18, 18 12, 30 12 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="text-white font-black text-2xl tracking-wide">
              DEZIRO
            </div>
          </div>
          <div className="flex space-x-8">
            <a href="#work" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="text-white hover:text-deziro-blue transition-all duration-300 font-medium tracking-wide relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deziro-blue transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="leading-none">
            <div className="relative overflow-hidden">
              {['DESIGNING', 'FUTURE', 'ENVIRONMENTS'].map((word, index) => (
                <span
                  key={word}
                  className={`block font-black transition-all duration-1000 ease-out
                    text-[clamp(3rem,8vw,12rem)] md:text-[clamp(4rem,10vw,14rem)] lg:text-[clamp(6rem,12vw,16rem)]
                    ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{
                    backgroundImage: `url(${maskImages[currentImage]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transitionDelay: `${index * 200}ms`,
                    filter: 'contrast(1.2) brightness(1.1)'
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>
          
          {/* Subtitle */}
          <div className={`mt-8 transition-all duration-1000 ease-out delay-700 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
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
      <div className="absolute top-1/4 left-10 w-1 h-32 bg-gradient-to-b from-deziro-blue/30 to-transparent animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-1 h-24 bg-gradient-to-t from-deziro-blue/30 to-transparent animate-pulse delay-700" />
    </section>
  );
};

export default HeroSection;
