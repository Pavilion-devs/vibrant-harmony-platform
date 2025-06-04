
import { CheckCircle } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="bg-vara-light py-20 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="heading-underline text-center text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Vara Global Trading, we are committed to enriching lives through innovation and quality across all our business sectors. Our goal is to create products and services that address the fundamental needs of communities while maintaining the highest standards of excellence.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-vara-secondary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-vara-primary text-lg">Quality Excellence</h3>
                  <p className="text-gray-600">Uncompromising standards in all our products and services</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-vara-secondary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-vara-primary text-lg">Sustainable Innovation</h3>
                  <p className="text-gray-600">Developing solutions that are both innovative and environmentally responsible</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-vara-secondary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-vara-primary text-lg">Community Impact</h3>
                  <p className="text-gray-600">Making meaningful contributions to the communities we serve</p>
                </div>
              </div>
            </div>
            <a href="/about" className="vara-btn-primary text-center justify-center items-center inline-block">
              Learn About Our Company
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=700"
                alt="Team at Vara Group"
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
