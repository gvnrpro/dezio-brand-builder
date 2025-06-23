
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [showWordmark, setShowWordmark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWordmark(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-deziro-navy z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="mx-auto"
          >
            <path
              d="M100 20 C140 20, 180 60, 180 100 C180 140, 140 180, 100 180 C60 180, 20 140, 20 100 C20 60, 60 20, 100 20 Z M100 60 C120 60, 140 80, 140 100 C140 120, 120 140, 100 140 C80 140, 60 120, 60 100 C60 80, 80 60, 100 60 Z"
              fill="none"
              stroke="url(#kleinBottleGradient)"
              strokeWidth="3"
              className="animate-klein-bottle"
            />
            <defs>
              <linearGradient id="kleinBottleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#177dff" />
                <stop offset="50%" stopColor="#03368d" />
                <stop offset="100%" stopColor="#03318e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className={`transition-all duration-1000 ${showWordmark ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider">
            DEZIRO
          </h1>
          <p className="text-white/70 text-lg mt-2 font-medium tracking-wide">
            DESIGNS
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
