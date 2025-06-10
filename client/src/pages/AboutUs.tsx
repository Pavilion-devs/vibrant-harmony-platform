
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import MilestonesTimeline from "@/components/MilestonesTimeline";
import { Users, Award, Heart } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="About Vara Group"
        subtitle="A legacy of excellence, innovation, and community impact across Africa"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2005, Vara Group began as a small food distribution company with a vision to provide high-quality staple foods to Nigerian households. Under the leadership of our founder, we quickly established a reputation for reliability and excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As we grew, we recognized opportunities to diversify our operations while maintaining our core commitment to quality and innovation. This led to our expansion into electronics in 2010 and real estate in 2015.
              </p>
              <p className="text-lg text-gray-700">
                Today, Vara Group stands as a leading conglomerate with a presence across multiple sectors, united by our mission to enhance lives through quality products and services that address fundamental needs.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=700"
                  alt="Vara Group Headquarters"
                  className="w-full h-64 rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Leadership</h2>
            <p className="section-subtitle mx-auto">
              Meet the visionary team driving innovation and excellence across Vara Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="CEO"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-vara-primary mb-1">Adebayo Johnson</h3>
                <p className="text-vara-secondary mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 20 years of industry experience, Adebayo has led Vara Group's growth and diversification strategy since its founding.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="COO"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-vara-primary mb-1">Folake Adeosun</h3>
                <p className="text-vara-secondary mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Folake oversees the operational excellence of all Vara Group companies, ensuring consistent quality and efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <img
                src="https://randomuser.me/api/portraits/men/42.jpg"
                alt="CTO"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-vara-primary mb-1">Emmanuel Okonkwo</h3>
                <p className="text-vara-secondary mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Emmanuel leads our technology initiatives, driving innovation across all business units with a focus on sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <MilestonesTimeline />

      <section className="py-20 md:px-12">
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Corporate Social Responsibility</h2>
            <p className="section-subtitle mx-auto">
              Our commitment to making a positive impact extends beyond our business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Community Development</h3>
              <p className="text-gray-600">
                We invest in educational programs, healthcare initiatives, and infrastructure projects in the communities where we operate.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Environmental Stewardship</h3>
              <p className="text-gray-600">
                Our sustainable practices include renewable energy usage, waste reduction programs, and eco-friendly product development.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-vara-primary mb-4">Employee Welfare</h3>
              <p className="text-gray-600">
                We prioritize the well-being of our team through comprehensive benefits, professional development, and work-life balance initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
