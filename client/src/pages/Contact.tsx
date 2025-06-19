import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Connect with Africa's premier trading company for partnerships and inquiries"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-20 md:px-12">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">How Can We Help?</h2>
            <p className="section-subtitle mx-auto">
              Our team is ready to assist you with any questions or needs regarding our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and information about our products and services.
              </p>
              <a href="mailto:info@varatrading.com" className="text-vara-primary font-medium hover:underline">sales@varatrading.com</a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our customer service team during business hours.
              </p>
              <a href="tel:+2347032378235" className="text-vara-primary font-medium hover:underline">+234 (0) 7032  378 235</a>
              
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-vara-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Get instant assistance through our WhatsApp business account.
              </p>
              <a href="wa:+2349157364488" className="text-vara-primary font-medium hover:underline">+234 (0) 915 736 4488</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-vara-primary">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <button type="submit" className="vara-btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-vara-primary">Visit Our Offices</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
                <div className="w-full h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7168465326975!2d3.4214995!3d6.4280556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf527587e7ffb%3A0x48f3d69cb3e54c3d!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1652889714261!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vara Global Trading Headquarters"
                  ></iframe>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-vara-primary">Lagos Head Office</h3>
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-vara-secondary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-600 mb-2">
                        10A Ajanaku Street, off Salvation Road, Awuse Estate, Opebi, Lagos, Nigeria
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        +234 7032-378-235
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-vara-primary">Abuja Head Office</h3>
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-vara-secondary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-600 mb-2">
                        Federal Capital Territory, Abuja, Nigeria
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        +234 7032-378-235
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-vara-primary">Panama City Office</h3>
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-vara-secondary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-600 mb-2">
                        Panama City, Panama
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        +507 6331-6313
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-vara-primary">Vara Foods Processing Center</h3>
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-vara-secondary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Vara Foods Industrial Zone, Agbara Industrial Estate, Ogun State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 md:px-12 bg-vara-light">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Department Contacts</h2>
            <p className="section-subtitle mx-auto">
              Reach out directly to specific departments for specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-vara-primary">Customer Support</h3>
              <p className="text-gray-600 mb-3">
                For product inquiries, orders, and after-sales support.
              </p>
              <p className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="mailto:support@varatrading.com" className="hover:underline">support@varatrading.com</a>
              </p>
              <p className="flex items-center text-gray-700 mt-1">
                <Phone className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="tel:+2341234567890" className="hover:underline">+234 (0) 123 456 7890</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-vara-primary">Business Development</h3>
              <p className="text-gray-600 mb-3">
                For partnership inquiries and business opportunities.
              </p>
              <p className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="mailto:partnerships@varatrading.com" className="hover:underline">partnerships@varatrading.com</a>
              </p>
              <p className="flex items-center text-gray-700 mt-1">
                <Phone className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="tel:+2341234567891" className="hover:underline">+234 (0) 123 456 7891</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-vara-primary">Media Relations</h3>
              <p className="text-gray-600 mb-3">
                For press inquiries and media resources.
              </p>
              <p className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="mailto:media@varatrading.com" className="hover:underline">media@varatrading.com</a>
              </p>
              <p className="flex items-center text-gray-700 mt-1">
                <Phone className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="tel:+2341234567892" className="hover:underline">+234 (0) 123 456 7892</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-vara-primary">Human Resources</h3>
              <p className="text-gray-600 mb-3">
                For recruitment and employment inquiries.
              </p>
              <p className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="mailto:careers@varatrading.com" className="hover:underline">careers@varatrading.com</a>
              </p>
              <p className="flex items-center text-gray-700 mt-1">
                <Phone className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="tel:+2341234567893" className="hover:underline">+234 (0) 123 456 7893</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-vara-primary">Investor Relations</h3>
              <p className="text-gray-600 mb-3">
                For investment opportunities and financial information.
              </p>
              <p className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="mailto:investors@varatrading.com" className="hover:underline">investors@varatrading.com</a>
              </p>
              <p className="flex items-center text-gray-700 mt-1">
                <Phone className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="tel:+2341234567894" className="hover:underline">+234 (0) 123 456 7894</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-vara-primary">Technical Support</h3>
              <p className="text-gray-600 mb-3">
                For electronics product technical assistance.
              </p>
              <p className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="mailto:tech@varatrading.com" className="hover:underline">tech@varatrading.com</a>
              </p>
              <p className="flex items-center text-gray-700 mt-1">
                <Phone className="h-4 w-4 mr-2 text-vara-secondary" />
                <a href="tel:+2341234567895" className="hover:underline">+234 (0) 123 456 7895</a>
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Contact;
