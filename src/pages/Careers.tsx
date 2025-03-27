
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Search, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  posted: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Supply Chain Manager",
    department: "Operations",
    location: "Lagos, Nigeria",
    type: "full-time",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Food Quality Specialist",
    department: "Vara Foods",
    location: "Lagos, Nigeria",
    type: "full-time",
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Software Engineer",
    department: "Technology",
    location: "Abuja, Nigeria",
    type: "full-time",
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Remote",
    type: "full-time",
    posted: "2 weeks ago"
  },
  {
    id: 5,
    title: "Real Estate Analyst",
    department: "Vara Real Estate",
    location: "Lagos, Nigeria",
    type: "full-time",
    posted: "1 day ago"
  },
  {
    id: 6,
    title: "Product Designer",
    department: "Vara Electronics",
    location: "Abuja, Nigeria",
    type: "full-time",
    posted: "5 days ago"
  },
  {
    id: 7,
    title: "Finance Intern",
    department: "Finance",
    location: "Lagos, Nigeria",
    type: "part-time",
    posted: "1 week ago"
  },
  {
    id: 8,
    title: "HR Specialist",
    department: "Human Resources",
    location: "Lagos, Nigeria",
    type: "full-time",
    posted: "3 days ago"
  }
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "full-time" | "part-time" | "contract">("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredJobs = jobs.filter(job => 
    (activeFilter === "all" || job.type === activeFilter) &&
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <PageHeader
        title="Join Our Team"
        subtitle="Discover career opportunities across the Vara Global Trading family of companies"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                Work With Purpose
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Vara Global Trading, we believe that our success is built on the talents, dedication, and innovation of our diverse team. We're committed to creating an inclusive workplace where employees can grow, contribute, and thrive.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're looking to advance your career in food production, electronics innovation, real estate development, or corporate functions, Vara Global Trading offers challenging opportunities and a supportive environment.
              </p>
              <p className="text-lg text-gray-700">
                Join us in our mission to enhance lives through quality products and services across Africa and beyond.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=700"
                  alt="Team members at Vara Global Trading"
                  className="w-full h-auto rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-vara-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Culture & Benefits</h2>
            <p className="section-subtitle mx-auto">
              We believe in creating an environment where employees can thrive both professionally and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3273/3273462.png" 
                  alt="Growth" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Professional Growth</h3>
              <p className="text-gray-600">
                Continuous learning opportunities, mentorship programs, and clear career advancement paths.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2682/2682065.png" 
                  alt="Balance" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible work arrangements, generous leave policies, and wellness programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-vara-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/5295/5295179.png" 
                  alt="Benefits" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vara-primary">Comprehensive Benefits</h3>
              <p className="text-gray-600">
                Competitive compensation, health insurance, retirement plans, and performance bonuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Current Openings</h2>
            <p className="section-subtitle mx-auto">
              Explore available positions across our family of companies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:items-center mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions by title, department, or location..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vara-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "all" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("all")}
              >
                All Types
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "full-time" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("full-time")}
              >
                Full-time
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "part-time" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("part-time")}
              >
                Part-time
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300",
                  activeFilter === "contract" 
                    ? "bg-vara-primary text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => setActiveFilter("contract")}
              >
                Contract
              </button>
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <a 
                  key={job.id} 
                  href="#" 
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-vara-primary/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-vara-primary">{job.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{job.department}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={cn(
                        "text-xs font-medium px-3 py-1 rounded-full",
                        job.type === "full-time" ? "bg-green-100 text-green-800" :
                        job.type === "part-time" ? "bg-blue-100 text-blue-800" :
                        "bg-amber-100 text-amber-800"
                      )}>
                        {job.type === "full-time" ? "Full-time" : 
                        job.type === "part-time" ? "Part-time" : 
                        "Contract"}
                      </span>
                      <span className="text-xs text-gray-500 ml-3">Posted {job.posted}</span>
                    </div>
                    <div className="text-vara-secondary hover:text-vara-primary transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No positions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-vara-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              We're always looking for talented individuals to join our team. Submit your resume for future opportunities.
            </p>
            <a href="#" className="vara-btn-primary bg-white text-vara-primary hover:bg-gray-100">
              Submit Your Resume
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
