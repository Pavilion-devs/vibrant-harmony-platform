import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart Home System",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Our comprehensive smart home system integrates lighting, security, climate control, and entertainment for seamless home automation.",
    features: [
      "Voice control compatibility",
      "Mobile app integration",
      "Energy usage monitoring",
      "Customizable automation routines"
    ]
  },
  {
    id: 2,
    name: "Energy Efficient Refrigerator",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&q=80&w=600",
    description: "Designed with cutting-edge cooling technology, our refrigerators maintain optimal food freshness while minimizing energy consumption.",
    features: [
      "Advanced temperature control",
      "Low energy consumption",
      "Smart diagnostics",
      "Spacious interior design"
    ]
  },
  {
    id: 3,
    name: "Air Purification System",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=600",
    description: "Create a healthier living environment with our advanced air purification systems that remove pollutants, allergens, and odors.",
    features: [
      "HEPA filtration",
      "Quiet operation",
      "Air quality monitoring",
      "Smart scheduling"
    ]
  },
];

const VaraElectronics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Vara Electronics"
        subtitle="Smart solutions for modern living"
        image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="heading-underline text-left text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                About Vara Electronics
              </h2>
              <p className="text-lg text-left text-gray-700 mb-6">
                Established in 2010, Vara Electronics creates innovative smart appliances and household technologies that enhance comfort, efficiency, and connectivity in modern homes.
              </p>
              <p className="text-lg text-left text-gray-700 mb-6">
                Our R&D team is dedicated to developing products that combine cutting-edge technology with intuitive user experiences, ensuring that our solutions are accessible to everyone.
              </p>
              <p className="text-lg text-left text-gray-700">
                With a focus on energy efficiency and sustainability, we're committed to creating products that not only improve daily living but also minimize environmental impact.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1595303526913-c7037797ebe7?q=80&w=3629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vara Electronics Innovation"
                  className="w-full h-auto rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Products</h2>
            <p className="section-subtitle mx-auto">
              Discover our range of innovative electronic products designed to enhance your home.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className={`grid grid-cols-1 ${index % 2 !== 0 ? 'lg:grid-cols-2 lg:flex-row-reverse' : 'lg:grid-cols-2'}`}>
                  <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                    <div className="h-64 sm:h-80 lg:h-96 w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    </div>
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-semibold mb-4 text-vara-primary">{product.name}</h3>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/products" className="vara-btn-primary inline-flex items-center self-start">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Innovation Principles</h2>
            <p className="section-subtitle mx-auto">
              The core values that drive our product development process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2618/2618594.png" 
                  alt="User-Centered" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">User-Centered Design</h3>
              <p className="text-gray-600">
                We prioritize intuitive interfaces and seamless experiences that make technology accessible to everyone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" 
                  alt="Energy Efficiency" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Energy Efficiency</h3>
              <p className="text-gray-600">
                Our products are designed to minimize energy consumption without compromising on performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1534/1534938.png" 
                  alt="Connectivity" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Seamless Connectivity</h3>
              <p className="text-gray-600">
                We create ecosystems of devices that work together harmoniously to enhance your living environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VaraElectronics;
