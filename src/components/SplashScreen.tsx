
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
        {/* Klein Bottle Logo */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div
            className={`w-full h-full transition-all duration-2000 ease-out ${
              animationPhase >= 1 ? 'opacity-100 rotate-y-12' : 'opacity-0'
            }`}
            style={{
              transform: animationPhase >= 1 ? 'rotateY(12deg) rotateX(5deg)' : 'rotateY(0deg)',
              filter: 'drop-shadow(0 20px 40px rgba(23, 125, 255, 0.3))',
            }}
          >
            <svg
              width="192"
              height="192"
              viewBox="0 0 200 200"
              className="w-full h-full"
            >
              {/* Klein Bottle Path */}
              <path
                d="M100 40 C140 40, 160 60, 160 100 C160 120, 150 130, 130 130 C110 130, 90 120, 90 100 C90 90, 95 85, 100 85 C105 85, 110 90, 110 100 C110 110, 105 115, 100 115 C95 115, 90 110, 90 100 C90 80, 110 60, 130 60 C150 60, 170 80, 170 100 C170 140, 140 160, 100 160 C60 160, 40 140, 40 100 C40 60, 60 40, 100 40 Z"
                fill="none"
                stroke="url(#kleinGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-1500 ${
                  animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: '1000',
                  strokeDashoffset: animationPhase >= 1 ? '0' : '1000',
                  animation: animationPhase >= 2 ? 'klein-glow 2s ease-in-out infinite' : 'none',
                }}
              />

              {/* Reflective Sweep */}
              <rect
                x="0"
                y="0"
                width="200"
                height="200"
                fill="url(#sweepGradient)"
                className={`transition-all duration-1000 ${
                  animationPhase >= 2 ? 'opacity-60' : 'opacity-0'
                }`}
                style={{
                  animation: animationPhase >= 2 ? 'sweep-light 2s ease-in-out' : 'none',
                }}
              />

              <defs>
                <linearGradient id="kleinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#177dff" />
                  <stop offset="50%" stopColor="#03368d" />
                  <stop offset="100%" stopColor="#177dff" />
                </linearGradient>

                <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
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
