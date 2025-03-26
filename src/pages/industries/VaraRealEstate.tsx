
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  location: string;
}

const properties: Property[] = [
  {
    id: 1,
    name: "Lakeview Apartments",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600",
    description: "Luxurious waterfront apartments offering stunning views and premium amenities in a prime location.",
    location: "Victoria Island, Lagos",
    features: [
      "1-3 bedroom units available",
      "Private balconies with lake views",
      "State-of-the-art fitness center",
      "24/7 security and concierge"
    ]
  },
  {
    id: 2,
    name: "Eco-Garden Homes",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600",
    description: "Sustainable housing development featuring energy-efficient homes and abundant green spaces.",
    location: "Abuja, Nigeria",
    features: [
      "Solar-powered electricity",
      "Rainwater harvesting systems",
      "Community gardens",
      "Energy-efficient appliances included"
    ]
  },
  {
    id: 3,
    name: "Horizon Business Park",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600",
    description: "Modern office spaces designed for productivity and collaboration in a strategic business district.",
    location: "Ikeja, Lagos",
    features: [
      "Flexible office configurations",
      "High-speed internet infrastructure",
      "Conference and meeting facilities",
      "Secure parking and 24/7 access"
    ]
  },
];

const VaraRealEstate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Vara Real Estate"
        subtitle="Building sustainable communities for tomorrow"
        image="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                About Vara Real Estate
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Established in 2015, Vara Real Estate develops residential and commercial properties that combine functionality, aesthetics, and sustainability.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our portfolio includes luxury apartments, eco-friendly housing developments, and modern office spaces, all designed with attention to detail and built to the highest standards.
              </p>
              <p className="text-lg text-gray-700">
                With a commitment to creating spaces that enhance quality of life and offer strong investment value, we're shaping the future of real estate in Nigeria and beyond.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=700"
                  alt="Vara Real Estate Development"
                  className="w-full h-auto rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-vara-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Properties</h2>
            <p className="section-subtitle mx-auto">
              Explore our signature developments combining quality, innovation, and sustainability.
            </p>
          </div>

          <div className="space-y-16">
            {properties.map((property, index) => (
              <div key={property.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 !== 0 ? 'order-2 lg:order-1' : ''}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <h3 className="text-2xl font-semibold mb-2 text-vara-primary">{property.name}</h3>
                  <p className="text-vara-secondary mb-4">{property.location}</p>
                  <p className="text-gray-700 mb-6">{property.description}</p>
                  <div className="space-y-3 mb-6">
                    {property.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/products" className="vara-btn-primary inline-flex items-center">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Approach</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide every Vara Real Estate development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3094/3094851.png" 
                  alt="Sustainable" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Sustainable Design</h3>
              <p className="text-gray-600">
                We integrate eco-friendly features and materials that minimize environmental impact and reduce long-term operating costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2422/2422652.png" 
                  alt="Quality" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Quality Construction</h3>
              <p className="text-gray-600">
                We maintain rigorous standards throughout the construction process, using premium materials and expert craftsmanship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png" 
                  alt="Community" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Community Focus</h3>
              <p className="text-gray-600">
                We design spaces that foster connection and enhance the quality of life for residents and the surrounding neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VaraRealEstate;
