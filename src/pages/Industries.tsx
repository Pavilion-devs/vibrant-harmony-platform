
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Our Industries"
        subtitle="Explore our diverse business portfolio across key sectors"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Driving Innovation Across Sectors</h2>
            <p className="section-subtitle mx-auto">
              Our diverse portfolio of businesses is united by a commitment to quality, innovation, and positive impact.
            </p>
          </div>

          <div className="space-y-16">
            {/* Vara Foods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-underline text-3xl font-semibold mb-6 text-vara-primary">Vara Foods</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our food division is dedicated to providing high-quality, nutritious staple foods to households across Africa. We specialize in rice, tomato paste, and a variety of spices that enhance the flavors of everyday meals.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With a focus on sustainable agriculture and rigorous quality control, we ensure that our products meet the highest standards of safety and nutrition.
                </p>
                <Link 
                  to="/industries/foods" 
                  className="vara-btn-primary inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1563865436874-9aef32095fad?auto=format&fit=crop&q=80&w=800" 
                    alt="Vara Foods" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Vara Electronics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" 
                    alt="Vara Electronics" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h2 className="heading-underline text-3xl font-semibold mb-6 text-vara-primary">Vara Electronics</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Vara Electronics develops innovative smart appliances and household gadgets designed to enhance comfort, efficiency, and connectivity in modern homes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our product range includes energy-efficient refrigerators, smart home systems, and other devices that combine cutting-edge technology with user-friendly design.
                </p>
                <Link 
                  to="/industries/electronics" 
                  className="vara-btn-primary inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Vara Real Estate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-underline text-3xl font-semibold mb-6 text-vara-primary">Vara Real Estate</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our real estate division develops sustainable housing projects and commercial properties that prioritize quality, functionality, and environmental responsibility.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From luxury waterfront apartments to eco-friendly housing developments, we create spaces that enhance quality of life while offering excellent investment opportunities.
                </p>
                <Link 
                  to="/industries/real-estate" 
                  className="vara-btn-primary inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                    alt="Vara Real Estate" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
