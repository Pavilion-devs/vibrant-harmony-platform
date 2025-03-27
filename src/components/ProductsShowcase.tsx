
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  image: string;
  category: "food" | "electronics" | "real-estate";
  description: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80&w=600",
    category: "food",
    description: "High-quality long grain rice, perfect for any meal.",
    link: "/products#rice",
  },
  {
    id: 2,
    name: "Organic Tomato Paste",
    image: "https://images.unsplash.com/photo-1608500219063-e5154ff20ced?auto=format&fit=crop&q=80&w=600",
    category: "food",
    description: "100% organic tomato paste with no additives or preservatives.",
    link: "/products#tomato",
  },
  {
    id: 3,
    name: "Smart Home System",
    image: "https://images.unsplash.com/photo-1558002038-1055e2e94a17?auto=format&fit=crop&q=80&w=600",
    category: "electronics",
    description: "Integrated home automation for modern living.",
    link: "/products#smarthome",
  },
  {
    id: 4,
    name: "Energy Efficient Refrigerator",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&q=80&w=600",
    category: "electronics",
    description: "Cutting-edge cooling technology with minimal energy consumption.",
    link: "/products#refrigerator",
  },
  {
    id: 5,
    name: "Lakeview Apartments",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600",
    category: "real-estate",
    description: "Luxury waterfront apartments in prime location.",
    link: "/products#lakeview",
  },
  {
    id: 6,
    name: "Eco-Garden Homes",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600",
    category: "real-estate",
    description: "Sustainable housing development with green spaces.",
    link: "/products#ecogarden",
  },
];

const ProductsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-20 px-6 md:px-12 bg-vara-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Featured Products</h2>
          <p className="section-subtitle mx-auto">
            Discover our range of high-quality products designed to improve daily living.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button 
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                activeFilter === "all" 
                  ? "bg-vara-primary text-white" 
                  : "bg-white text-vara-primary hover:bg-vara-light"
              )}
              onClick={() => setActiveFilter("all")}
            >
              All Products
            </button>
            <button 
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                activeFilter === "food" 
                  ? "bg-vara-primary text-white" 
                  : "bg-white text-vara-primary hover:bg-vara-light"
              )}
              onClick={() => setActiveFilter("food")}
            >
              Foods
            </button>
            <button 
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                activeFilter === "electronics" 
                  ? "bg-vara-primary text-white" 
                  : "bg-white text-vara-primary hover:bg-vara-light"
              )}
              onClick={() => setActiveFilter("electronics")}
            >
              Electronics
            </button>
            <button 
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                activeFilter === "real-estate" 
                  ? "bg-vara-primary text-white" 
                  : "bg-white text-vara-primary hover:bg-vara-light"
              )}
              onClick={() => setActiveFilter("real-estate")}
            >
              Real Estate
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
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
                     "Real Estate"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-vara-primary">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to={product.link}
                  className="text-vara-secondary font-medium hover:text-vara-primary transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="vara-btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
