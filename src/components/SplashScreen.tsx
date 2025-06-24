
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500);
    const timer2 = setTimeout(() => setAnimationPhase(2), 2000);
    const timer3 = setTimeout(() => setAnimationPhase(3), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Deziro Logo */}
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <div
            className={`transition-all duration-2000 ease-out ${
              animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{
              transform: animationPhase >= 1 ? 'rotateY(12deg) rotateX(5deg)' : 'rotateY(0deg)',
              filter: 'drop-shadow(0 20px 40px rgba(23, 125, 255, 0.3))',
            }}
          >
            <img
              src="/lovable-uploads/7a23b783-7d17-42f4-b517-38dd74e29ecf.png"
              alt="Deziro Designs Logo"
              className="w-32 h-32 object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(212deg) brightness(102%) contrast(97%)',
                animation: animationPhase >= 2 ? 'klein-glow 2s ease-in-out infinite' : 'none',
              }}
            />

            {/* Reflective Sweep */}
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                animationPhase >= 2 ? 'opacity-60' : 'opacity-0'
              }`}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                animation: animationPhase >= 2 ? 'sweep-light 2s ease-in-out' : 'none',
              }}
            />
          </div>

          {/* Pulse Glow Effect */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              animationPhase >= 3 ? 'animate-pulse-glow' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(circle, rgba(23,125,255,0.3) 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />
        </div>

        {/* Brand Text */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white font-grotesk tracking-wider mb-4">
            DEZIRO
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-deziro-blue to-transparent mx-auto mb-3" />
          <p className="text-white/70 text-lg font-medium tracking-wide font-poppins">
            DESIGNS
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
