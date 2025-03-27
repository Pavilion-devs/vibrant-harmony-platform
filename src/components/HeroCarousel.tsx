
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80&w=1920",
    title: "Empowering Lives Through Quality",
    subtitle: "Delivering excellence across Foods, Electronics, and Real Estate",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=1920",
    title: "Food Products That Nourish",
    subtitle: "High-quality staples for homes across Africa",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1615224299941-04a854c101d4?auto=format&fit=crop&q=80&w=1920",
    title: "Smart Electronics for Modern Living",
    subtitle: "Innovative technology solutions for homes and businesses",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1627844718626-4c6b963deaf1?auto=format&fit=crop&q=80&w=1920",
    title: "Building Tomorrow's Communities",
    subtitle: "Sustainable real estate developments for a better future",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
              transition: "transform 10s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-vara-primary/30" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 md:px-12 text-center">
              <div className={cn(
                "transition-all duration-1000",
                currentSlide === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              )}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 max-w-5xl mx-auto leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="#industries" className="vara-btn-primary">
                    Explore Our Industries
                  </a>
                  <a href="/contact" className="vara-btn-secondary bg-white/10 text-white border-white/40 hover:bg-white/20">
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentSlide(index);
              setTimeout(() => setIsAnimating(false), 800);
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
