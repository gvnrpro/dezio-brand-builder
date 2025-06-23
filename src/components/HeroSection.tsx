
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const maskImages = [
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&q=80',
    'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&q=80',
    'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&q=80',
    'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % maskImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-deziro-navy relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-8">
        <div className="flex justify-between items-center">
          <div className="text-white font-black text-2xl tracking-wide">
            DEZIRO
          </div>
          <div className="flex space-x-8">
            <a href="#work" className="text-white hover:text-deziro-blue transition-colors font-medium">
              WORK
            </a>
            <a href="#contact" className="text-white hover:text-deziro-blue transition-colors font-medium">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black text-white leading-none">
            <div className="relative">
              <span
                className="block transition-opacity duration-1000"
                style={{
                  backgroundImage: `url(${maskImages[currentImage]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                DESIGNING
              </span>
              <span
                className="block transition-opacity duration-1000"
                style={{
                  backgroundImage: `url(${maskImages[currentImage]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                FUTURE
              </span>
              <span
                className="block transition-opacity duration-1000"
                style={{
                  backgroundImage: `url(${maskImages[currentImage]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ENVIRONMENTS
              </span>
            </div>
          </h1>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/70 text-sm font-medium mb-2">SCROLL</div>
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce-gentle mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
