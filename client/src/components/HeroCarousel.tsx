
import { useState, useEffect } from "react";
import { ArrowRight, Play, TrendingUp, Globe, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  highlight: string;
  stats: Array<{ label: string; value: string; icon: any }>;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=1920",
    title: "Empowering Lives Through Quality",
    subtitle: "Leading trading company delivering excellence across Foods, Electronics, and Real Estate throughout Africa",
    highlight: "Quality & Innovation",
    stats: [
      { label: "Countries Served", value: "15+", icon: Globe },
      { label: "Happy Customers", value: "10K+", icon: Users },
      { label: "Growth Rate", value: "150%", icon: TrendingUp }
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&q=80&w=1920",
    title: "Premium Food Products",
    subtitle: "Sourcing and distributing the finest rice, spices, and food essentials to nourish communities across Africa",
    highlight: "Vara Foods",
    stats: [
      { label: "Product Lines", value: "50+", icon: Globe },
      { label: "Families Fed", value: "100K+", icon: Users },
      { label: "Quality Score", value: "99%", icon: TrendingUp }
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=1920",
    title: "Smart Electronics",
    subtitle: "Cutting-edge appliances and technology solutions designed for modern African homes and businesses",
    highlight: "Vara Electronics",
    stats: [
      { label: "Tech Products", value: "200+", icon: Globe },
      { label: "Homes Connected", value: "25K+", icon: Users },
      { label: "Energy Saved", value: "40%", icon: TrendingUp }
    ],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920",
    title: "Real Estate Excellence",
    subtitle: "Developing sustainable communities and commercial spaces that shape the future of African urban living",
    highlight: "Vara Real Estate",
    stats: [
      { label: "Projects", value: "30+", icon: Globe },
      { label: "Sq Ft Developed", value: "2M+", icon: Users },
      { label: "ROI Average", value: "25%", icon: TrendingUp }
    ],
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

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              currentSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
                transition: "transform 10s ease-out",
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-vara-primary/80 via-vara-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className={cn(
                "transition-all duration-1000 delay-300",
                "opacity-100 transform translate-y-0"
              )}>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-vara-secondary rounded-full mr-3 animate-pulse"></span>
                  <span className="text-white/90 text-sm font-medium">{currentSlideData.highlight}</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  {currentSlideData.title}
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                  {currentSlideData.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/industries" className="group vara-btn-primary bg-vara-secondary hover:bg-vara-secondary/90 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
                    <span>Explore Our Industries</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="group vara-btn-secondary bg-white/10 text-white border-white/40 hover:bg-white/20 backdrop-blur-sm inline-flex items-center justify-center">
                    <Play className="mr-2 h-5 w-5" />
                    <span>Partner With Us</span>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {currentSlideData.stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start mb-2">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mr-3">
                            <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-vara-secondary" />
                          </div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <Globe className="h-8 w-8 text-vara-secondary mb-4" />
                    <h3 className="text-white font-semibold mb-2">Global Reach</h3>
                    <p className="text-white/70 text-sm">Serving communities across 15+ African countries</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 mt-8">
                    <TrendingUp className="h-8 w-8 text-vara-secondary mb-4" />
                    <h3 className="text-white font-semibold mb-2">Proven Growth</h3>
                    <p className="text-white/70 text-sm">150% year-over-year expansion</p>
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <Users className="h-8 w-8 text-vara-secondary mb-4" />
                    <h3 className="text-white font-semibold mb-2">Customer Focus</h3>
                    <p className="text-white/70 text-sm">10,000+ satisfied customers and growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
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
              "transition-all duration-300 rounded-full",
              currentSlide === index
                ? "bg-vara-secondary w-8 h-3"
                : "bg-white/40 hover:bg-white/60 w-3 h-3"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-white/40 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
