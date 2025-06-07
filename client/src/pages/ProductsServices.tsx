
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Search, Filter, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  image: string;
  category: "food" | "electronics" | "trading";
  description: string;
  certifications: string[];
}

const products: Product[] = [
  // Food Products
  {
    id: 1,
    name: "Vegetable Oil",
    image: "/oil.png",
    category: "food",
    description: "High-quality long grain rice, perfect for any meal.",
    certifications: ["ISO 22000", "HACCP Certified"]
  },
  {
    id: 2,
    name: "Organic Tomato Paste",
    image: "/paste.png",
    category: "food",
    description: "100% organic tomato paste with no additives or preservatives.",
    certifications: ["Organic Certified", "Non-GMO"]
  },
  {
    id: 3,
    name: "Seasoning Powder",
    image: "/powder.png",
    category: "food",
    description: "Premium spices to enhance the flavor of any dish.",
    certifications: ["ISO 22000", "Premium Quality"]
  },
  {
    id: 4,
    name: "Chilli Powder",
    image: "/chilli.png",
    category: "food",
    description: "Our premium spice collection features locally sourced herbs and spices that add authentic flavor to any dish.",
    certifications: ["ISO 22000", "Premium Quality"]
  },
  {
    id: 5,
    name: "Yellow Chicken Broth Pond",
    image: "/broth.png",
    category: "food",
    description: "Our premium spice collection features locally sourced herbs and spices that add authentic flavor to any dish.",
    certifications: ["ISO 22000", "Premium Quality"]
  },
  {
    id: 6,
    name: "Ground Cinnamon Spice",
    image: "/spice.png",
    category: "food",
    description: "High-quality long grain rice, perfect for any meal.",
    certifications: ["ISO 22000", "HACCP Certified"]
  },
  {
    id: 7,
    name: "Bay Leaf Pound",
    image: "/leaf.png",
    category: "food",
    description: "High-quality long grain rice, perfect for any meal.",
    certifications: ["ISO 22000", "HACCP Certified"]
  },
  {
    id: 8,
    name: "Garlic Powder",
    image: "/garlic.png",
    category: "food",
    description: "High-quality long grain rice, perfect for any meal.",
    certifications: ["ISO 22000", "HACCP Certified"]
  },
  {
    id: 9,
    name: "Black Pepper",
    image: "/pepper.png",
    category: "food",
    description: "High-quality long grain rice, perfect for any meal.",
    certifications: ["ISO 22000", "HACCP Certified"]
  },
  
  // Electronics Products
  {
    id: 10,
    name: "Smart Home System",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "electronics",
    description: "Integrated home automation for modern living.",
    certifications: ["Energy Star", "CE Certified"]
  },
  {
    id: 11,
    name: "Energy Efficient Refrigerator",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&q=80&w=600",
    category: "electronics",
    description: "Cutting-edge cooling technology with minimal energy consumption.",
    certifications: ["Energy Star", "ISO 9001"]
  },
  {
    id: 12,
    name: "Air Purification System",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=600",
    category: "electronics",
    description: "Advanced air purifier for healthier indoor environments.",
    certifications: ["HEPA Certified", "CE Certified"]
  },
  
  // Trading Products (Petroleum)
  {
    id: 13,
    name: "PMS (Petrol Motor Spirit)",
    image: "/pms.png",
    category: "trading",
    description: "High-quality petrol suitable for all types of vehicles, ensuring smooth performance and efficiency.",
    certifications: ["International Standards", "Quality Assured"]
  },
  {
    id: 14,
    name: "AGO (Automotive Gas Oil)",
    image: "/engine.png",
    category: "trading",
    description: "Diesel fuel designed for commercial vehicles and industrial machinery, meeting all industry standards.",
    certifications: ["Industry Standards", "Quality Control"]
  },
  {
    id: 15,
    name: "Jet A-1",
    image: "/aviation.png",
    category: "trading",
    description: "Aviation turbine fuel that meets international quality standards, ensuring safety and reliability for aircraft operations.",
    certifications: ["Aviation Grade", "International Standards"]
  },
  {
    id: 16,
    name: "DPK (Dual Purpose Kerosene)",
    image: "/kerosene.png",
    category: "trading",
    description: "Versatile kerosene used for lighting, heating, and industrial applications.",
    certifications: ["Multi-Purpose", "Quality Certified"]
  },
  {
    id: 17,
    name: "LPG (Liquefied Petroleum Gas)",
    image: "/gas.png",
    category: "trading",
    description: "Clean-burning fuel used in residential, commercial, and industrial sectors for cooking and heating.",
    certifications: ["Clean Energy", "Safety Standards"]
  },
];

const ProductsServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "food" | "electronics" | "trading">("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter(product => 
    (activeFilter === "all" || product.category === activeFilter) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <PageHeader
        title="Products & Services"
        subtitle="Premium quality products across Foods, Electronics, and Real Estate throughout Africa"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-20 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:items-center mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300 flex items-center",
                  activeFilter === "all" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("all")}
              >
                <Filter className="h-4 w-4 mr-2" /> All Products
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "food" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("food")}
              >
                Food
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "electronics" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("electronics")}
              >
                Electronics
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "trading" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("trading")}
              >
                Trading
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="overflow-hidden h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className={cn(
                        "text-xs font-medium px-3 py-1 rounded-full",
                        product.category === "food" ? "bg-green-100 text-green-800" :
                        product.category === "electronics" ? "bg-blue-100 text-blue-800" :
                        "bg-amber-100 text-amber-800"
                      )}>
                        {product.category === "food" ? "Food" : 
                        product.category === "electronics" ? "Electronics" : 
                        "Trading"}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-vara-primary">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.map((cert, index) => (
                          <span key={index} className="text-xs bg-vara-accent text-vara-primary px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-vara-secondary font-medium hover:text-vara-primary transition-colors flex items-center">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                      <a href="#quote" className="text-vara-primary hover:underline text-sm">
                        Request Quote
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <section id="quote" className="py-20 px-4 md:px-12 bg-vara-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Request a Quote</h2>
              <p className="text-xl text-gray-600">
                Interested in our products? Fill out the form below and our team will get back to you.
              </p>
            </div>
            
            <form className="bg-white rounded-xl shadow-sm p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                    placeholder="+234 123 456 7890"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="product" className="block text-gray-700 font-medium mb-2">Product Category</label>
                <select
                  id="product"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="food">Vara Foods</option>
                  <option value="electronics">Vara Electronics</option>
                  <option value="trading">Vara Trading</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button type="submit" className="vara-btn-primary">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-4 md:px-12">
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

export default ProductsServices;
