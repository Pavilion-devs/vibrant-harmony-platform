import { useEffect } from "react";
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Microscope, 
  TestTube, 
  Beaker, 
  FlaskConical, 
  Droplet, 
  Thermometer,
  Shield,
  Settings,
  Users,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { Link } from 'wouter';

const LabSupplies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Laboratory Design, Supply & Installation Services"
        subtitle="Complete laboratory solutions for food & drink analysis"
        image="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Services Overview */}
      <section className="py-20 md:px-12">
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Our Laboratory Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive laboratory solutions specifically tailored for food safety testing, 
              nutritional analysis, and quality assurance in the food and drink industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-12 h-12 text-vara-primary" />,
                title: "Laboratory Design & Consultancy",
                description: "State-of-the-art food and beverage testing laboratories optimized for safety and efficiency."
              },
              {
                icon: <TestTube className="w-12 h-12 text-vara-primary" />,
                title: "Furniture Supply & Installation",
                description: "Premium laboratory furniture designed for demanding food analysis environments."
              },
              {
                icon: <Beaker className="w-12 h-12 text-vara-primary" />,
                title: "Laboratory Equipment Supply",
                description: "Full spectrum of analytical instruments for comprehensive food and beverage testing."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-vara-primary">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Laboratory Equipment Categories</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive range of analytical instruments for all your testing needs.
            </p>
          </div>

          <Tabs defaultValue="safety" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="safety" className="text-xs md:text-sm">Safety & Microbiology</TabsTrigger>
              <TabsTrigger value="nutritional" className="text-xs md:text-sm">Nutritional Analysis</TabsTrigger>
              <TabsTrigger value="chemical" className="text-xs md:text-sm">Chemical Analysis</TabsTrigger>
              <TabsTrigger value="physical" className="text-xs md:text-sm">Physical Properties</TabsTrigger>
            </TabsList>

            <TabsContent value="safety">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Autoclaves for sterilisation",
                  "Incubators for bacterial culture",
                  "Biosafety cabinets",
                  "Colony counters",
                  "Water activity meters",
                  "Rapid pathogen detection systems"
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-vara-primary" />
                      <span>{item}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nutritional">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Protein analysers",
                  "Fat analysers",
                  "Fibre analysers",
                  "Carbohydrate analysis equipment",
                  "Vitamin analysis systems",
                  "Calorie bomb calorimeters"
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <FlaskConical className="w-5 h-5 text-vara-primary" />
                      <span>{item}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chemical">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "HPLC systems",
                  "Gas chromatography",
                  "Mass spectrometry systems",
                  "Heavy metals analysers",
                  "Mycotoxin testing equipment",
                  "Allergen detection systems"
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <Droplet className="w-5 h-5 text-vara-primary" />
                      <span>{item}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="physical">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Texture analysers",
                  "Colour measurement systems",
                  "Viscosity analysers",
                  "Particle size analysers",
                  "Moisture analysers",
                  "pH metres and titration systems"
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <Thermometer className="w-5 h-5 text-vara-primary" />
                      <span>{item}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:px-12">
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Why Choose Vara Global Trading Ltd?</h2>
            <p className="section-subtitle mx-auto">
              Our experience in agricultural commodities trading provides deep insight into food supply chains
              and the critical quality control points required for safe food production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Settings className="w-8 h-8 text-vara-primary" />,
                title: "Food Industry Understanding",
                description: "Deep insight into food supply chains and quality control points."
              },
              {
                icon: <Shield className="w-8 h-8 text-vara-primary" />,
                title: "Regulatory Compliance",
                description: "Compliance with HACCP, ISO 22000, FDA regulations, and local requirements."
              },
              {
                icon: <FileCheck className="w-8 h-8 text-vara-primary" />,
                title: "Turnkey Solutions",
                description: "Complete project management from design to installation and training."
              },
              {
                icon: <Users className="w-8 h-8 text-vara-primary" />,
                title: "Local Expertise",
                description: "Combining local market knowledge with global standards."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-vara-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Industry Applications</h2>
            <p className="section-subtitle mx-auto">
              Specialized laboratory solutions for diverse food and beverage industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Food Manufacturing Quality Control",
                description: "Complete laboratory setups for production quality control, incoming raw material testing, and finished product verification."
              },
              {
                title: "Beverage Industry Testing",
                description: "Specialized laboratories for alcoholic and non-alcoholic beverage analysis, including fermentation monitoring and flavour profiling."
              },
              {
                title: "Food Import/Export Operations",
                description: "Laboratory facilities for compliance testing of imported food products and quality verification for export markets."
              },
              {
                title: "Restaurant & Catering QA",
                description: "Compact laboratory solutions for food service operations requiring regular safety testing and ingredient verification."
              },
              {
                title: "Independent Food Testing Services",
                description: "Complete laboratory design for third-party testing services supporting food manufacturers and regulatory bodies."
              },
              {
                title: "Research & Development",
                description: "Advanced laboratory facilities for food product development, nutritional research, and innovation projects."
              }
            ].map((application, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-vara-primary">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:px-12">
        <div className="px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-4">Contact Our Laboratory Solutions Team</h2>
            <p className="section-subtitle mb-8">
              Ready to discuss your laboratory needs? Our experts are here to help.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-lg">
                <strong>Email:</strong> sales@varaglobaltrading.com
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> +234 916 000 2934
              </p>
              <p className="text-lg">
                <strong>Location:</strong> Lagos, Nigeria
              </p>
            </div>
            <Link href="/contact" className="vara-btn-primary inline-flex items-center">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LabSupplies; 