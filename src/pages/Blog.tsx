
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Calendar, User, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  category: "industry-insights" | "company-news" | "csr-initiatives";
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Sustainable Food Production in Africa",
    excerpt: "Exploring innovative approaches to enhance food security while minimizing environmental impact across the continent.",
    image: "https://images.unsplash.com/photo-1592982551635-069fee19abc9?auto=format&fit=crop&q=80&w=600",
    date: "May 15, 2023",
    author: "Dr. Adebayo Johnson",
    readTime: "5 min read",
    category: "industry-insights"
  },
  {
    id: 2,
    title: "Vara Group Expands Electronic Manufacturing Facilities",
    excerpt: "Announcing our new state-of-the-art production facility that will increase capacity and create jobs in the region.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
    date: "April 28, 2023",
    author: "Folake Adeosun",
    readTime: "3 min read",
    category: "company-news"
  },
  {
    id: 3,
    title: "Building Communities: The Eco-Garden Homes Initiative",
    excerpt: "How our sustainable housing projects are transforming neighborhoods and setting new standards for green building.",
    image: "https://images.unsplash.com/photo-1604014138233-43383d51fe3e?auto=format&fit=crop&q=80&w=600",
    date: "April 10, 2023",
    author: "Emmanuel Okonkwo",
    readTime: "4 min read",
    category: "csr-initiatives"
  },
  {
    id: 4,
    title: "Smart Home Technology Trends for 2023",
    excerpt: "Discover the latest innovations in home automation and how they're enhancing comfort, security, and energy efficiency.",
    image: "https://images.unsplash.com/photo-1558002038-1055e2e94a17?auto=format&fit=crop&q=80&w=600",
    date: "March 22, 2023",
    author: "Chioma Nwosu",
    readTime: "6 min read",
    category: "industry-insights"
  },
  {
    id: 5,
    title: "Vara Foods Launches New Product Line",
    excerpt: "Introducing our new range of organic, locally-sourced food products designed to meet the growing demand for healthy options.",
    image: "https://images.unsplash.com/photo-1594489573234-5e350efc85a6?auto=format&fit=crop&q=80&w=600",
    date: "March 5, 2023",
    author: "Aisha Omar",
    readTime: "3 min read",
    category: "company-news"
  },
  {
    id: 6,
    title: "Supporting Education in Rural Communities",
    excerpt: "Our foundation's initiatives to improve access to quality education and technology in underserved areas.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
    date: "February 18, 2023",
    author: "Michael Adeyemi",
    readTime: "4 min read",
    category: "csr-initiatives"
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "industry-insights" | "company-news" | "csr-initiatives">("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter(post => 
    (activeFilter === "all" || post.category === activeFilter) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <PageHeader
        title="Blog & News"
        subtitle="Industry insights, company updates, and stories of impact"
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:items-center mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
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
                <Tag className="h-4 w-4 mr-2" /> All Categories
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "industry-insights" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("industry-insights")}
              >
                Industry Insights
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "company-news" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("company-news")}
              >
                Company News
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "csr-initiatives" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("csr-initiatives")}
              >
                CSR Initiatives
              </button>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className={cn(
                        "text-xs font-medium px-3 py-1 rounded-full",
                        post.category === "industry-insights" ? "bg-blue-100 text-blue-800" :
                        post.category === "company-news" ? "bg-green-100 text-green-800" :
                        "bg-amber-100 text-amber-800"
                      )}>
                        {post.category === "industry-insights" ? "Industry Insights" : 
                         post.category === "company-news" ? "Company News" : 
                         "CSR Initiatives"}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-vara-primary">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" /> {post.date}
                      </span>
                      <span className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" /> {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> {post.readTime}
                      </span>
                    </div>
                    
                    <Link 
                      to="#" 
                      className="text-vara-secondary font-medium hover:text-vara-primary transition-colors flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          <div className="flex justify-center mt-12">
            <button className="vara-btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-vara-light">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-vara-primary">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Stay updated with our latest news, industry insights, and company announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
              />
              <button className="vara-btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
