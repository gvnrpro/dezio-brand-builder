
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [showWordmark, setShowWordmark] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Klein Bottle animation (0-2s)
    const timer1 = setTimeout(() => {
      setAnimationPhase(1);
    }, 100);

    // Phase 2: Wordmark appears (2-3s)
    const timer2 = setTimeout(() => {
      setShowWordmark(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-deziro-navy z-50 flex items-center justify-center overflow-hidden">
      <div className="text-center">
        <div className="mb-8 relative">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="mx-auto"
          >
            {/* Klein Bottle Path - Mathematically Inspired */}
            <path
              d="M100 40 C140 40, 160 60, 160 100 C160 120, 150 130, 130 130 C110 130, 90 120, 90 100 C90 90, 95 85, 100 85 C105 85, 110 90, 110 100 C110 110, 105 115, 100 115 C95 115, 90 110, 90 100 C90 80, 110 60, 130 60 C150 60, 170 80, 170 100 C170 140, 140 160, 100 160 C60 160, 40 140, 40 100 C40 60, 60 40, 100 40 Z"
              fill="none"
              stroke="url(#kleinBottleGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-2000 ease-out ${
                animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: '800',
                strokeDashoffset: animationPhase >= 1 ? '0' : '800',
                filter: 'drop-shadow(0 0 20px rgba(23, 125, 255, 0.3))'
              }}
            />
            
            {/* Inner Klein Bottle Detail */}
            <path
              d="M100 70 C120 70, 130 80, 130 100 C130 110, 125 115, 115 115 C105 115, 100 110, 100 100 C100 95, 102 93, 105 93 C108 93, 110 95, 110 100"
              fill="none"
              stroke="url(#kleinBottleGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={`transition-all duration-1500 ease-out delay-500 ${
                animationPhase >= 1 ? 'opacity-70' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: '200',
                strokeDashoffset: animationPhase >= 1 ? '0' : '200'
              }}
            />

            {/* Glowing Center Point */}
            <circle
              cx="100"
              cy="100"
              r="3"
              fill="url(#centerGlow)"
              className={`transition-all duration-1000 ease-out delay-1000 ${
                animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            />

            <defs>
              <linearGradient id="kleinBottleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#177dff" stopOpacity="1" />
                <stop offset="30%" stopColor="#03368d" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#03318e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#177dff" stopOpacity="1" />
              </linearGradient>
              
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#177dff" stopOpacity="1" />
                <stop offset="70%" stopColor="#03368d" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        
        <div className={`transition-all duration-1000 ease-out ${
          showWordmark ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider mb-2">
            DEZIRO
          </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-deziro-blue to-transparent mx-auto mb-3" />
          <p className="text-white/70 text-lg font-medium tracking-wide">
            DESIGNS
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
