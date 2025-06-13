import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Check, ArrowRight, Building, Home, Handshake, MapPin, Phone, Mail, Users } from "lucide-react";
import { Link } from "wouter";

interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  category: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Commercial Real Estate",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600",
    description: "Prime commercial properties including shopping centres, office buildings, industrial facilities, and mixed-use developments in strategic locations across Nigeria.",
    category: "Commercial",
    features: [
      "Shopping centres & retail spaces in high-footfall locations",
      "Modern office buildings in business districts",
      "Industrial properties & manufacturing facilities",
      "Warehouses & distribution centres",
      "Mixed-use developments combining commercial and residential"
    ]
  },
  {
    id: 2,
    name: "Residential Properties",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600",
    description: "Comprehensive residential portfolio featuring luxury apartments, family houses, and gated communities across Nigeria's most desirable neighbourhoods.",
    category: "Residential",
    features: [
      "Luxury apartments in premium neighbourhoods",
      "Family houses from starter homes to executive mansions",
      "Serviced flats fully furnished for immediate occupancy",
      "Gated communities with modern amenities",
      "Prime land for custom development projects"
    ]
  },
  {
    id: 3,
    name: "Joint Ventures & Partnerships",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    description: "Strategic partnerships and investment opportunities for property development, commercial ventures, and infrastructure projects across Nigeria.",
    category: "Investment",
    features: [
      "Property development project partnerships",
      "Investment consortium opportunities",
      "Commercial real estate ventures",
      "Residential development schemes",
      "Infrastructure project collaborations"
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
        subtitle="Your Premier Real Estate Partner Across Nigeria"
        image="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                About Vara Global Trading Limited
              </h2>
              <p className="text-lg text-left text-gray-700 mb-6">
                Vara Global Trading Limited is a leading real estate company specialising in commercial and residential properties throughout Nigeria. With our extensive network and deep market knowledge, we connect investors, developers, and property seekers with exceptional opportunities across the nation.
              </p>
              <p className="text-lg text-left text-gray-700 mb-6">
                Our commitment to excellence and client satisfaction has established us as a trusted partner in Nigeria's dynamic property market.
              </p>
              <p className="text-lg text-left text-gray-700">
                Whether you're looking to invest, develop, or find your perfect property, we provide comprehensive solutions tailored to your unique requirements.
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

      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive real estate solutions across commercial, residential, and investment sectors.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-semibold mb-2 text-vara-primary">{service.name}</h3>
                  <p className="text-vara-secondary mb-4">{service.category}</p>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="vara-btn-primary inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Vara Global Trading Limited?</h2>
            <p className="section-subtitle mx-auto">
              Your trusted partner in Nigeria's dynamic property market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-vara-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Nationwide Coverage</h3>
              <p className="text-gray-600">
                Access to properties across all Nigerian states, from Lagos to Abuja, Port Harcourt to Kano, and everywhere in between.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-vara-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Market Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of local markets, regulations, and investment opportunities throughout Nigeria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-vara-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Verified Properties</h3>
              <p className="text-gray-600">
                All properties undergo thorough due diligence to ensure clear titles and legal compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-vara-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Professional Service</h3>
              <p className="text-gray-600">
                Our experienced team provides personalised attention and expert guidance throughout your property journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8 text-vara-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Investment Focus</h3>
              <p className="text-gray-600">
                We identify properties with strong growth potential and excellent returns on investment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-vara-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Comprehensive Support</h3>
              <p className="text-gray-600">
                From initial consultation to final transaction, we handle all aspects of your property needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Investment Opportunities</h2>
            <p className="section-subtitle mx-auto">
              Exceptional investment opportunities across Nigeria's most promising markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" 
                alt="Commercial Investment" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">High-Yield Commercial Properties</h3>
              <p className="text-gray-600 mb-4">
                Generate consistent rental income from established businesses and blue-chip tenants.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Shopping malls in major Nigerian cities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Grade A office complexes in CBDs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Industrial facilities with excellent transport links</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" 
                alt="Development Projects" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Development Projects</h3>
              <p className="text-gray-600 mb-4">
                Join profitable joint ventures in emerging areas with significant growth potential.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Off-plan properties at pre-construction prices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Strategic land banking opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Infrastructure development partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Head Offices */}
      <section className="py-20 md:px-12">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Head Offices</h2>
            <p className="section-subtitle mx-auto">
              Strategically located to serve clients across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" 
                alt="Lagos Office" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <MapPin className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Lagos Head Office</h3>
              <p className="text-gray-600">
                Located in Nigeria's commercial capital, our Lagos office serves as our primary hub for commercial and residential property transactions across southwestern Nigeria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=600" 
                alt="Abuja Office" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <Building className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Abuja Head Office</h3>
              <p className="text-gray-600">
                Strategically positioned in the Federal Capital Territory, our Abuja office handles properties and joint ventures throughout the northern regions with direct access to government and institutional clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Ready to Explore Nigeria's Property Market?</h2>
            <p className="section-subtitle mx-auto">
              Get in touch today to discover your perfect property or explore investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Home className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Discover Properties</h3>
              <p className="text-gray-600 text-sm">Find your perfect property across Nigeria</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Building className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Investment Opportunities</h3>
              <p className="text-gray-600 text-sm">Explore high-yield real estate investments</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Handshake className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Joint Ventures</h3>
              <p className="text-gray-600 text-sm">Discuss partnership opportunities</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <MapPin className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Property Viewings</h3>
              <p className="text-gray-600 text-sm">Schedule visits to properties</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-vara-primary">Vara Global Trading Limited</h3>
            <p className="text-lg text-vara-secondary mb-8">Your Gateway to Nigerian Real Estate</p>
            <Link href="/contact" className="vara-btn-primary inline-flex items-center">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VaraRealEstate;
