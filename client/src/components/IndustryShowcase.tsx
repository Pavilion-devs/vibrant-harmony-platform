
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Industry {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

const industries: Industry[] = [
  {
    id: 1,
    name: "Vara Foods",
    image: "https://images.unsplash.com/photo-1563865436874-9aef32095fad?auto=format&fit=crop&q=80&w=600",
    description: "Premium staple foods including rice, tomato paste, and a variety of spices that enrich meals across Africa.",
    link: "/industries/foods",
  },
  {
    id: 2,
    name: "Vara Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600",
    description: "Innovative smart appliances and gadgets designed to enhance comfort and efficiency in modern homes.",
    link: "/industries/electronics",
  },
  {
    id: 3,
    name: "Vara Trading",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600",
    description: "Premier commodities trading company specializing in the procurement and distribution of petroleum products.",
    link: "/industries",
  },
];

interface IndustryShowcaseProps {
  className?: string;
}

const IndustryShowcase = ({ className }: IndustryShowcaseProps) => {
  return (
    <section id="industries" className={cn("py-20", className)}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Industries</h2>
          <p className="section-subtitle mx-auto">
            Explore our diverse portfolio of businesses that are transforming industries and improving lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={industry.id} 
              className="industry-card group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="industry-card-image"
                />
                <div className="absolute inset-0 bg-vara-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={industry.link}
                    className="bg-white text-vara-primary py-2 px-4 rounded-full font-medium transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="industry-card-content">
                <h3 className="text-2xl font-semibold mb-2 text-vara-primary">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Link 
                  to={industry.link} 
                  className="inline-flex items-center text-vara-secondary font-medium hover:text-vara-primary transition-colors duration-300"
                >
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;
