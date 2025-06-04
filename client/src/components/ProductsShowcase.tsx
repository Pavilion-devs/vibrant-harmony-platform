
import { useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  image: string;
  category: "food" | "electronics" | "trading";
  description: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cinnamon Spice",
    image: "/spice.png",
    category: "food",
    description: "High-quality long grain rice, perfect for any meal.",
    link: "/products#rice",
  },
  {
    id: 2,
    name: "Organic Tomato Paste",
    image: "/paste.png",
    category: "food",
    description: "100% organic tomato paste with no additives or preservatives.",
    link: "/products#tomato",
  },
  {
    id: 3,
    name: "Vegetable Oil",
    image: "/oil.png",
    category: "food",
    description: "Premium vegetable oil for cooking and food preparation.",
    link: "/products#oil",
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
    name: "PMS (Petrol Motor Spirit)",
    image: "https://images.unsplash.com/photo-1545262811-8e4ab5ac6ead?auto=format&fit=crop&q=80&w=600",
    category: "trading",
    description: "High-quality petrol suitable for all types of vehicles, ensuring smooth performance and efficiency.",
    link: "/products#pms",
  },
  {
    id: 6,
    name: "AGO (Automotive Gas Oil)",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600",
    category: "trading",
    description: "Diesel fuel designed for commercial vehicles and industrial machinery, meeting all industry standards.",
    link: "/products#ago",
  },
];

const ProductsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-vara-accent rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-vara-secondary rounded-full mr-3 animate-pulse"></span>
            <span className="text-vara-primary text-sm font-medium">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vara-primary mb-6 leading-tight">
            Premium Quality Products
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of quality products designed to enhance lives across Africa
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button 
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base",
                activeFilter === "all" 
                  ? "bg-vara-primary text-white shadow-lg" 
                  : "bg-white text-vara-primary hover:bg-vara-accent border border-vara-primary/20"
              )}
              onClick={() => setActiveFilter("all")}
            >
              All Products
            </button>
            <button 
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base",
                activeFilter === "food" 
                  ? "bg-vara-primary text-white shadow-lg" 
                  : "bg-white text-vara-primary hover:bg-vara-accent border border-vara-primary/20"
              )}
              onClick={() => setActiveFilter("food")}
            >
              Foods
            </button>
            <button 
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base",
                activeFilter === "electronics" 
                  ? "bg-vara-primary text-white shadow-lg" 
                  : "bg-white text-vara-primary hover:bg-vara-accent border border-vara-primary/20"
              )}
              onClick={() => setActiveFilter("electronics")}
            >
              Electronics
            </button>
            <button 
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base",
                activeFilter === "trading" 
                  ? "bg-vara-primary text-white shadow-lg" 
                  : "bg-white text-vara-primary hover:bg-vara-accent border border-vara-primary/20"
              )}
              onClick={() => setActiveFilter("trading")}
            >
              Trading
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
                     "Trading"}
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
          <Link href="/products" className="vara-btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
