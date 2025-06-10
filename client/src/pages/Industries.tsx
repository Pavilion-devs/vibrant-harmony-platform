import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Our Industries"
        subtitle="Diverse sectors enhancing lives across Africa"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Industry Sectors</h2>
            <p className="section-subtitle mx-auto">
              From essential foods to innovative electronics and energy solutions, we serve diverse markets with quality and integrity.
            </p>
          </div>

          <div className="space-y-20">
            {/* Vara Foods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-underline text-3xl font-semibold mb-6 text-vara-primary">Vara Foods</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Established in 2005, Vara Foods is dedicated to providing high-quality staple foods that form the foundation of nutritious meals in homes across Africa.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our commitment to quality begins with careful sourcing of raw materials, continues through our state-of-the-art processing facilities, and extends to our rigorous quality control measures.
                </p>
                <Link 
                  href="/industries/foods" 
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
                  href="/industries/electronics" 
                  className="vara-btn-primary inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Vara Oil & Gas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-underline text-3xl font-semibold mb-6 text-vara-primary">Vara Oil & Gas</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Vara Trading is a premier commodities trading company specializing in the procurement and distribution of petroleum products. We lift fuel directly from the largest refineries as well as several smaller ones, ensuring access to high-quality products at competitive prices.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Committed to quality, reliability, and customer satisfaction, we serve clients across various industries, providing timely delivery of our products including PMS, AGO, Jet A-1, DPK, and LPG.
                </p>
                <Link 
                  href="/industries/oil-gas" 
                  className="vara-btn-primary inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800" 
                    alt="Vara Oil & Gas" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Vara Real Estate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                    alt="Vara Real Estate" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h2 className="heading-underline text-3xl font-semibold mb-6 text-vara-primary">Vara Real Estate</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Vara Real Estate focuses on developing sustainable residential and commercial properties that meet the evolving needs of modern communities.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our projects emphasize quality construction, environmental responsibility, and thoughtful design to create spaces where people can live, work, and thrive.
                </p>
                <Link 
                  href="/industries/real-estate" 
                  className="vara-btn-primary inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="py-20 px-4 md:px-12 bg-vara-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Vara Global Trading</h2>
            <p className="section-subtitle mx-auto">
              Our commitment to excellence across all sectors drives sustainable growth and meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1147/1147832.png" 
                  alt="Quality" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Quality Excellence</h3>
              <p className="text-gray-600">
                Rigorous quality standards across all our industries ensure customers receive premium products and services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png" 
                  alt="Innovation" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Innovation & Technology</h3>
              <p className="text-gray-600">
                Embracing cutting-edge technology and innovative solutions to stay ahead in dynamic markets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2822/2822788.png" 
                  alt="Sustainability" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Sustainable Practices</h3>
              <p className="text-gray-600">
                Environmental responsibility and sustainable business practices are at the core of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 px-4 md:px-12 bg-vara-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Products</h2>
            <p className="section-subtitle mx-auto">
              High-quality petroleum products meeting international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-vara-primary">PMS (Petrol Motor Spirit)</h3>
              <p className="text-gray-600">
                High-quality petrol suitable for all types of vehicles, ensuring smooth performance and efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-vara-primary">AGO (Automotive Gas Oil)</h3>
              <p className="text-gray-600">
                Diesel fuel designed for commercial vehicles and industrial machinery, meeting all industry standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-vara-primary">Jet A-1</h3>
              <p className="text-gray-600">
                Aviation turbine fuel that meets international quality standards, ensuring safety and reliability for aircraft operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-vara-primary">DPK (Dual Purpose Kerosene)</h3>
              <p className="text-gray-600">
                Versatile kerosene used for lighting, heating, and industrial applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-vara-primary">LPG (Liquefied Petroleum Gas)</h3>
              <p className="text-gray-600">
                Clean-burning fuel used in residential, commercial, and industrial sectors for cooking and heating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive petroleum trading services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Supply & Distribution</h3>
              <p className="text-gray-600">
                We lift fuel directly from the largest refineries and several smaller ones, ensuring a steady and reliable supply chain. We efficiently source and distribute petroleum products across regions, ensuring timely delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Quality Assurance</h3>
              <p className="text-gray-600">
                Strict quality control protocols to ensure our products meet international standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Consultation & Trading</h3>
              <p className="text-gray-600">
                Expert advice and trading services to help clients optimize their energy procurement strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored solutions to meet the unique requirements of each client in the petroleum trading sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-4 md:px-12 bg-vara-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Contact Us</h2>
            <p className="section-subtitle mx-auto">
              For inquiries, partnerships, or quotations, please reach out to us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <MapPin className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                10A Ajanaku Street, off Salvation Road, Awuse Estate, Opebi, Lagos, Nigeria
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Phone className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+234 7032-378-235</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Mail className="h-8 w-8 text-vara-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">sales@varatrading.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
