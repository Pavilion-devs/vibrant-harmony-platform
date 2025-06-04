
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

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
    name: "Premium Basmati Rice",
    image: "/spice.png",
    description: "Our signature long-grain basmati rice is sourced from the finest rice fields and processed to maintain optimal nutrition and flavor.",
    features: [
      "Long grain variety",
      "No artificial additives",
      "Rich in essential nutrients",
      "Consistent cooking results"
    ]
  },
  {
    id: 2,
    name: "Organic Tomato Paste",
    image: "/paste.png",
    description: "Made from vine-ripened tomatoes, our organic tomato paste delivers rich flavor and vibrant color to enhance your cooking.",
    features: [
      "100% organic ingredients",
      "No preservatives",
      "High concentration for rich flavor",
      "Convenient packaging"
    ]
  },
  {
    id: 3,
    name: "Spice Collection",
    image: "/garlic.png",
    description: "Our premium spice collection features locally sourced herbs and spices that add authentic flavor to any dish.",
    features: [
      "Freshly ground",
      "Sealed for maximum freshness",
      "Available individually or as sets",
      "Ethically sourced ingredients"
    ]
  },
];

const VaraFoods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Vara Foods"
        subtitle="Nourishing homes with high-quality food products"
        image="https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="heading-underline text-center text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                About Vara Foods
              </h2>
              <p className="text-lg text-left text-gray-700 mb-6">
                Established in 2005, Vara Foods is dedicated to providing high-quality staple foods that form the foundation of nutritious meals in homes across Africa.
              </p>
              <p className="text-lg text-left text-gray-700 mb-6">
                Our commitment to quality begins with careful sourcing of raw materials, continues through our state-of-the-art processing facilities, and extends to our rigorous quality control measures.
              </p>
              <p className="text-lg text-left text-gray-700">
                With a focus on nutrition, flavor, and sustainability, we aim to be the preferred choice for households seeking reliable, wholesome food products.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?auto=format&fit=crop&q=80&w=700"
                  alt="Vara Foods Production"
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
              Discover our range of high-quality food products designed to enhance your everyday meals.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className={`grid grid-cols-1 ${index % 2 !== 0 ? 'lg:grid-cols-2 lg:flex-row-reverse' : 'lg:grid-cols-2'}`}>
                  <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
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
            <h2 className="section-title mb-4">Our Quality Commitment</h2>
            <p className="section-subtitle mx-auto">
              Every Vara Foods product meets the highest standards of quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1147/1147832.png" 
                  alt="Sourcing" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Responsible Sourcing</h3>
              <p className="text-gray-600">
                We carefully select suppliers who share our commitment to quality, sustainability, and ethical practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2822/2822788.png" 
                  alt="Processing" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Modern Processing</h3>
              <p className="text-gray-600">
                Our state-of-the-art facilities ensure that products are processed under optimal conditions to preserve quality and nutrition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/4107/4107420.png" 
                  alt="Testing" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Rigorous Testing</h3>
              <p className="text-gray-600">
                Every batch of our products undergoes comprehensive testing for safety, nutrition, and consistency before reaching consumers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VaraFoods;
