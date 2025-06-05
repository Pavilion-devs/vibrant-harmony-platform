
import { CheckCircle } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="bg-gradient-to-br from-vara-accent to-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-vara-secondary rounded-full mr-3 animate-pulse"></span>
              <span className="text-vara-primary text-sm font-medium">Our Purpose</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vara-primary mb-6 leading-tight">
              Our Mission & Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              At Vara Global Trading, we are committed to enriching lives through innovation and quality across all our business sectors. Our goal is to create products and services that address the fundamental needs of communities while maintaining the highest standards of excellence.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300">
                <CheckCircle className="h-7 w-7 text-vara-secondary mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-vara-primary text-lg sm:text-xl mb-2">Quality Excellence</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Uncompromising standards in all our products and services</p>
                </div>
              </div>
              <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300">
                <CheckCircle className="h-7 w-7 text-vara-secondary mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-vara-primary text-lg sm:text-xl mb-2">Sustainable Innovation</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Developing solutions that are both innovative and environmentally responsible</p>
                </div>
              </div>
              <div className="flex items-start bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300">
                <CheckCircle className="h-7 w-7 text-vara-secondary mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-vara-primary text-lg sm:text-xl mb-2">Community Impact</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Making meaningful contributions to the communities we serve</p>
                </div>
              </div>
            </div>
            <a href="/about" className="vara-btn-primary inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300">
              Learn About Our Company
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-32 sm:h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800"
                  alt="Team at Vara Group"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vara-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
