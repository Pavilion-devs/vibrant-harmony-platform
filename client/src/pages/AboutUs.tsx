import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import MilestonesTimeline from "@/components/MilestonesTimeline";
import { Users, Award, Heart, Globe, TrendingUp, Shield, Truck, BarChart3, DollarSign, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
                title="About Vara Group"
                subtitle="Your trusted partner in petroleum products and comprehensive commodities trading, delivering reliable solutions across international markets with unmatched expertise and integrity."
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
        
      />

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-vara-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png" 
                  alt="Petroleum Specialists" 
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-2xl font-semibold text-vara-primary mb-4">Petroleum Specialists</h3>
              <p className="text-gray-700">
                Leading the industry with deep expertise in crude oil, refined products, and petrochemicals. Our specialised knowledge ensures optimal sourcing, pricing, and delivery solutions for petroleum products worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-vara-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-vara-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-vara-primary mb-4">Global Reach</h3>
              <p className="text-gray-700">
                Operating across continents with established networks in major commodity hubs. From Lagos to London, Singapore to New York, we connect markets and facilitate seamless international trade.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-vara-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-vara-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-vara-primary mb-4">Market Agility</h3>
              <p className="text-gray-700">
                Rapid response to market opportunities with real-time intelligence and flexible execution. Our team monitors global trends 24/7 to capitalise on emerging opportunities and mitigate risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive trading and logistics solutions for global commodity markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Physical Trading</h3>
              <p className="text-gray-600">
                Direct procurement and sale of physical commodities with end-to-end logistics management. We handle everything from sourcing to final delivery, ensuring quality and compliance at every step.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Comprehensive hedging strategies and derivative solutions to protect against price volatility. Our risk management experts develop tailored approaches to safeguard your commodity exposures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" 
                  alt="Logistics" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Logistics Solutions</h3>
              <p className="text-gray-600">
                Integrated supply chain management including transportation, storage, and distribution. Our logistics network ensures efficient movement of commodities from origin to destination.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Market Intelligence</h3>
              <p className="text-gray-600">
                Real-time market analysis and strategic insights to inform trading decisions. Access to proprietary research and industry expertise that drives profitable outcomes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Trade Finance</h3>
              <p className="text-gray-600">
                Flexible financing solutions including letters of credit, trade loans, and structured finance. We facilitate complex transactions with comprehensive financial support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Compliance & Quality</h3>
              <p className="text-gray-600">
                Rigorous quality assurance and regulatory compliance across all jurisdictions. Our quality control processes ensure products meet international standards and specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Commodity Portfolio</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive range of petroleum products and other commodities for global markets.
            </p>
          </div>

          <div className="space-y-12">
            {/* Petroleum Products */}
            <div className="bg-vara-light p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-vara-primary mb-6 text-center">Petroleum Products (Our Speciality)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Crude Oil</h4>
                  <p className="text-sm text-gray-600">Bonny Light Crude Oil - Premium Nigerian crude with excellent refining yields<br/>West African crude grades and speciality blends<br/>Brent, WTI, and regional crude grades with flexible delivery terms</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Gasoline</h4>
                  <p className="text-sm text-gray-600">Premium, regular, and speciality gasoline blends for global markets</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Diesel Fuel</h4>
                  <p className="text-sm text-gray-600">Ultra-low sulfur diesel, marine gas oil, and heating oil</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Jet Fuel</h4>
                  <p className="text-sm text-gray-600">Aviation turbine fuel (ATF) and military specification jet fuel</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Fuel Oil</h4>
                  <p className="text-sm text-gray-600">Heavy fuel oil, marine bunker fuel, and industrial fuel oil</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">LPG & Natural Gas</h4>
                  <p className="text-sm text-gray-600">Liquefied petroleum gas, propane, butane, and natural gas products</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Petrochemicals</h4>
                  <p className="text-sm text-gray-600">Ethylene, propylene, benzene, and speciality chemical feedstocks</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Lubricants</h4>
                  <p className="text-sm text-gray-600">Base oils, finished lubricants, and speciality industrial oils</p>
                </div>
              </div>
            </div>

            {/* Other Commodities */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-vara-primary mb-6 text-center">Other Commodities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Agricultural Products</h4>
                  <p className="text-sm text-gray-600">Grains, oilseeds, sugar, coffee, cocoa, and soft commodities</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Base Metals</h4>
                  <p className="text-sm text-gray-600">Copper, aluminum, zinc, lead, nickel, and tin</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Precious Metals</h4>
                  <p className="text-sm text-gray-600">Gold, silver, platinum, and palladium</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Iron Ore & Steel</h4>
                  <p className="text-sm text-gray-600">Iron ore, steel products, and ferrous metals</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Coal</h4>
                  <p className="text-sm text-gray-600">Thermal coal, coking coal, and coal derivatives</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-vara-primary mb-2">Fertilizers</h4>
                  <p className="text-sm text-gray-600">Urea, phosphates, potash, and specialty fertilizers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Track Record</h2>
            <p className="section-subtitle mx-auto">
              Energy Trading Excellence with Experienced Leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-lg font-semibold text-vara-primary mb-4">Experienced Team</div>
              <div className="text-gray-600">60+ years of combined experience in commodities trading</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-vara-primary mb-4">Many Satisfied Clients</div>
              <div className="text-gray-600">across diverse industries</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-vara-primary mb-4">Established Network</div>
              <div className="text-gray-600">of suppliers and buyers worldwide</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Vara Global Trading Ltd?</h2>
            <p className="section-subtitle mx-auto">
              Our competitive advantages drive success in global commodity markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Our team brings over 60 years of combined experience in commodities trading, delivering unparalleled knowledge of market dynamics, regulatory requirements, and operational excellence. Our petroleum specialisation sets us apart in the energy sector.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Global Network</h3>
              <p className="text-gray-600">
                Our extensive network spans major commodity trading centres worldwide, enabling us to source products efficiently and deliver to any destination. We maintain strategic relationships with producers, refiners, and end-users globally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Financial Strength</h3>
              <p className="text-gray-600">
                Strong financial backing allows us to handle large-volume transactions and provide flexible payment terms. Our established banking relationships facilitate smooth trade finance solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Operational Excellence</h3>
              <p className="text-gray-600">
                State-of-the-art systems for trade execution, risk management, and logistics coordination ensure seamless operations. Our experienced team delivers consistent, reliable service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Compliance Leadership</h3>
              <p className="text-gray-600">
                Rigorous adherence to international trading standards, environmental regulations, and quality specifications. We maintain certifications and accreditations across all operating jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Contact Information</h2>
            <p className="section-subtitle mx-auto">
              Get in touch with our commodity trading specialists.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-vara-primary mb-4">Vara Global Trading Ltd</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700">Specialisation:</h4>
                      <p className="text-gray-600">Petroleum Products & Global Commodities Trading</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Services:</h4>
                      <p className="text-gray-600">Physical Trading | Risk Management | Logistics | Market Intelligence | Trade Finance</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Operations:</h4>
                      <p className="text-gray-600">Global</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-vara-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Email</h4>
                      <a href="mailto:sales@varaglobaltrading.com" className="text-gray-600 hover:text-vara-primary transition-colors">
                        sales@varaglobaltrading.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Head Offices */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <MapPin className="h-8 w-8 text-vara-primary mx-auto mb-4" />
                <h4 className="font-semibold text-gray-700 mb-2">Lagos Office</h4>
                <p className="text-gray-600 mb-2">Nigeria</p>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 text-vara-primary mr-2" />
                  <p className="text-gray-600">+234 7032-378-235</p>
                </div>
                
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <MapPin className="h-8 w-8 text-vara-primary mx-auto mb-4" />
                <h4 className="font-semibold text-gray-700 mb-2">Abuja Office</h4>
                <p className="text-gray-600 mb-2">Nigeria</p>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 text-vara-primary mr-2" />
                  <p className="text-gray-600">+234 7032-378-235</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <MapPin className="h-8 w-8 text-vara-primary mx-auto mb-4" />
                <h4 className="font-semibold text-gray-700 mb-2">Panama City Office</h4>
                <p className="text-gray-600 mb-2">Panama</p>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 text-vara-primary mr-2" />
                  <p className="text-gray-600">+507 6331-6313</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
