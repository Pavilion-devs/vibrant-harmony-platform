
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
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">What Our Partners Say</h2>
          <p className="section-subtitle mx-auto">
            Trusted by businesses and consumers across various industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 -left-10 text-vara-accent">
            <Quote className="h-20 w-20 opacity-40" />
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-vara-light p-8 md:p-12 shadow-sm min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-600 ease-in-out absolute w-full flex flex-col md:flex-row gap-8",
                  currentSlide === index ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
              >
                <div className="md:w-1/4 flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-vara-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-vara-light hover:bg-vara-accent text-vara-primary p-2 rounded-full transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
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
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentSlide === index
                      ? "bg-vara-secondary w-6"
                      : "bg-vara-accent hover:bg-vara-secondary/40"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-vara-light hover:bg-vara-accent text-vara-primary p-2 rounded-full transition-colors duration-300"
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
