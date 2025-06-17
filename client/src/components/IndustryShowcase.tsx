
import { Link } from "wouter";
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
    image: "/staple.png",
    description: "Premium staple foods including rice, tomato paste, and a variety of spices that enrich meals across Africa.",
    link: "/industries/foods",
  },
  {
    id: 2,
    name: "Vara Lab Supplies",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600",
    description: "Comprehensive laboratory solutions specifically tailored for food safety testing, nutritional analysis, and quality assurance in the food and drink industries.",
    link: "/industries/electronics",
  },
  {
    id: 3,
    name: "Vara Real Estate",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600",
    description: "Comprehensive residential portfolio featuring luxury apartments, family houses, and gated communities across Nigeria's most desirable neighbourhoods.",
    link: "/industries",
  },
];

interface IndustryShowcaseProps {
  className?: string;
}

const IndustryShowcase = ({ className }: IndustryShowcaseProps) => {
  return (
    <section id="industries" className={cn("py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-vara-accent rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-vara-secondary rounded-full mr-3 animate-pulse"></span>
            <span className="text-vara-primary text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vara-primary mb-6 leading-tight">
            Transforming Industries
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we're making a meaningful impact across multiple sectors, improving lives and building sustainable communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {industries.map((industry, index) => (
            <div 
              key={industry.id} 
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2",
                index === 1 && "md:mt-8 lg:mt-12"
              )}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vara-primary/80 via-vara-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Action Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-vara-primary mb-3 group-hover:text-vara-secondary transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  {industry.description}
                </p>
                
                <Link
                  href={industry.link}
                  className="inline-flex items-center text-vara-secondary hover:text-vara-primary transition-all duration-300 font-medium group/link"
                >
                  <span>Explore {industry.name.split(' ')[1]}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vara-secondary to-vara-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-vara-primary mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Explore all our industries and discover opportunities for collaboration and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/industries"
                className="vara-btn-primary inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300"
              >
                <span>View All Industries</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="vara-btn-secondary inline-flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;
