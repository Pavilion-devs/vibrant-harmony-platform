import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Check, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
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
    name: "PMS (Petrol Motor Spirit)",
    image: "/pms.png",
    description: "High-quality petrol suitable for all types of vehicles, ensuring smooth performance and efficiency.",
    features: [
      "Premium octane rating",
      "Meets international quality standards",
      "Suitable for all vehicle types",
      "Optimized for fuel efficiency"
    ]
  },
  {
    id: 2,
    name: "AGO (Automotive Gas Oil)",
    image: "/engine.png",
    description: "Diesel fuel designed for commercial vehicles and industrial machinery, meeting all industry standards.",
    features: [
      "Low sulfur content",
      "Suitable for commercial vehicles",
      "Industrial machinery compatible",
      "Meets Euro standards"
    ]
  },
  {
    id: 3,
    name: "Jet A-1",
    image: "/aviation.png",
    description: "Aviation turbine fuel that meets international quality standards, ensuring safety and reliability for aircraft operations.",
    features: [
      "Aviation-grade quality",
      "International safety standards",
      "Temperature resistant",
      "High performance reliability"
    ]
  },
  {
    id: 4,
    name: "DPK (Dual Purpose Kerosene)",
    image: "/kerosene.png",
    description: "Versatile kerosene used for lighting, heating, and industrial applications.",
    features: [
      "Multi-purpose application",
      "Clean burning",
      "Long burning duration",
      "Cost-effective solution"
    ]
  },
  {
    id: 5,
    name: "LPG (Liquefied Petroleum Gas)",
    image: "/gas.png",
    description: "Clean-burning fuel used in residential, commercial, and industrial sectors for cooking and heating.",
    features: [
      "Environmentally friendly",
      "High energy efficiency",
      "Safe and reliable",
      "Multiple applications"
    ]
  }
];

const VaraOilGas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Vara Oil & Gas"
        subtitle="Premier petroleum products trading and distribution"
        image="/oilandgas.jpg"
      />

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="heading-underline text-center text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                About Vara Trading
              </h2>
              <p className="text-lg text-left text-gray-700 mb-6">
                Vara Trading is a premier commodities trading company specializing in the procurement and distribution of petroleum products. We lift fuel directly from the largest refineries as well as several smaller ones, ensuring access to high-quality products at competitive prices.
              </p>
              <p className="text-lg text-left text-gray-700 mb-6">
                Committed to quality, reliability, and customer satisfaction, we serve clients across various industries, providing timely delivery of our products including PMS, AGO, Jet A-1, DPK, and LPG.
              </p>
              <p className="text-lg text-left text-gray-700">
                Our extensive network and strategic partnerships enable us to maintain consistent supply chains while delivering exceptional value to our customers in the petroleum trading sector.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="/ops.png"
                  alt="Oil and Gas Operations"
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
              Comprehensive range of premium petroleum products for all your energy needs.
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
                    <Link href="/contact" className="vara-btn-primary inline-flex items-center self-start">
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive petroleum trading and distribution services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png" 
                  alt="Supply & Distribution" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Supply & Distribution</h3>
              <p className="text-gray-600">
                We lift fuel directly from the largest refineries and several smaller ones, ensuring a steady and reliable supply chain with timely delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2235/2235367.png" 
                  alt="Quality Assurance" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Quality Assurance</h3>
              <p className="text-gray-600">
                Strict quality control protocols to ensure our products meet international standards and exceed customer expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" 
                  alt="Consultation & Trading" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Consultation & Trading</h3>
              <p className="text-gray-600">
                Expert advice and trading services to help clients optimize their energy procurement strategies and market positioning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3388/3388464.png" 
                  alt="Custom Solutions" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored solutions to meet the unique requirements of each client in the petroleum trading sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Contact Us</h2>
            <p className="section-subtitle mx-auto">
              For inquiries, partnerships, or quotations, please reach out to us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="bg-vara-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-vara-primary">Our Address</h3>
                <p className="text-gray-600">
                  10A Ajanaku Street, off Salvation Road, Awuse Estate, Opebi, Lagos, Nigeria
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="bg-vara-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-vara-primary">Phone</h3>
                <a href="tel:+2347032378235" className="text-gray-600 hover:text-vara-primary transition-colors">
                  +234 7032-378-235
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="bg-vara-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-vara-primary">Email</h3>
                <a href="mailto:sales@varatrading.com" className="text-gray-600 hover:text-vara-primary transition-colors">
                  sales@varatrading.com
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="vara-btn-primary inline-flex items-center">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VaraOilGas; 