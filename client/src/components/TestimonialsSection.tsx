
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Operations Director",
    company: "GreenLife Foods",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Vara's rice products have consistently met our high standards for quality. Their reliable supply chain has been instrumental in helping us serve our customers without interruption.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "TechSolutions Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The smart home systems from Vara Electronics have transformed how we design our client projects. The integration capabilities and reliability are unmatched in the market.",
    rating: 5,
  },
  {
    id: 3,
    name: "Aisha Okafor",
    position: "Property Developer",
    company: "Horizon Builders",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    quote: "Partnering with Vara Real Estate has allowed us to offer truly sustainable housing options. Their attention to detail and commitment to quality is evident in every project.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-vara-accent rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-vara-secondary rounded-full mr-3 animate-pulse"></span>
            <span className="text-vara-primary text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vara-primary mb-6 leading-tight">
            What Our Partners Say
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by businesses and consumers across various industries throughout Africa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 text-vara-accent/20 hidden sm:block">
            <Quote className="h-16 w-16 sm:h-20 sm:w-20" />
          </div>
          
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-600 ease-in-out absolute inset-6 sm:inset-8 lg:inset-12 flex flex-col gap-6 sm:gap-8",
                  "sm:flex-row",
                  currentSlide === index ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
              >
                <div className="sm:w-1/3 lg:w-1/4 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-vara-accent shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-vara-secondary rounded-full p-2">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4 sm:h-5 sm:w-5",
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-vara-primary text-lg sm:text-xl">{testimonial.name}</p>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-xs sm:text-sm text-vara-secondary font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 lg:w-3/4 flex items-center">
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-vara-accent hover:bg-vara-secondary hover:text-white text-vara-primary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-3 px-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    currentSlide === index
                      ? "bg-vara-secondary w-8 h-3"
                      : "bg-vara-accent hover:bg-vara-secondary/40 w-3 h-3"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-vara-accent hover:bg-vara-secondary hover:text-white text-vara-primary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
