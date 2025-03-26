
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { DownloadCloud, TrendingUp, ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface FinancialReport {
  id: number;
  title: string;
  year: string;
  fileSize: string;
  type: "annual" | "quarterly";
}

const financialReports: FinancialReport[] = [
  {
    id: 1,
    title: "Annual Report 2023",
    year: "2023",
    fileSize: "4.2 MB",
    type: "annual"
  },
  {
    id: 2,
    title: "Q4 Financial Statement 2023",
    year: "2023",
    fileSize: "2.1 MB",
    type: "quarterly"
  },
  {
    id: 3,
    title: "Q3 Financial Statement 2023",
    year: "2023",
    fileSize: "1.9 MB",
    type: "quarterly"
  },
  {
    id: 4,
    title: "Q2 Financial Statement 2023",
    year: "2023",
    fileSize: "1.8 MB",
    type: "quarterly"
  },
  {
    id: 5,
    title: "Q1 Financial Statement 2023",
    year: "2023",
    fileSize: "1.7 MB",
    type: "quarterly"
  },
  {
    id: 6,
    title: "Annual Report 2022",
    year: "2022",
    fileSize: "3.9 MB",
    type: "annual"
  },
];

const InvestorRelations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Investor Relations"
        subtitle="Access financial information and investment opportunities"
        image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-8 text-vara-primary">
                Investing in Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Vara Group represents a compelling investment opportunity across multiple sectors with strong growth potential. Our diverse portfolio, spanning Foods, Electronics, and Real Estate, provides a balanced approach to market fluctuations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We maintain a commitment to sustainable growth, operational excellence, and strategic expansion, creating long-term value for our shareholders and stakeholders.
              </p>
              <p className="text-lg text-gray-700">
                Our strong financial foundation, experienced leadership team, and focus on innovation position us to capitalize on emerging opportunities in our target markets.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-vara-secondary rounded-xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vara-primary rounded-xl opacity-20 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=700"
                  alt="Investment Growth"
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
            <h2 className="section-title mb-4">Financial Reports</h2>
            <p className="section-subtitle mx-auto">
              Access our latest annual reports and quarterly financial statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialReports.map((report) => (
              <div key={report.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-vara-accent p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-vara-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-vara-primary mb-1">{report.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{report.type === "annual" ? "Annual Report" : "Quarterly Report"} • {report.fileSize}</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-vara-secondary hover:text-vara-primary transition-colors"
                    >
                      <DownloadCloud className="h-4 w-4 mr-1" /> Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="vara-btn-primary">
              View All Financial Reports
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Investment Opportunities</h2>
            <p className="section-subtitle mx-auto">
              Explore opportunities to grow with Vara Group across our diverse business portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-vara-primary flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-vara-primary">Equity Investment</h3>
                <p className="text-gray-600 mb-6">
                  Become a shareholder in Vara Group and participate in our long-term growth journey across multiple sectors.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Diverse portfolio exposure</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Quarterly dividend opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Voting rights on key decisions</span>
                  </li>
                </ul>
                <Link to="/contact" className="vara-btn-primary w-full block text-center">
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-vara-secondary flex items-center justify-center">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png" 
                  alt="Project" 
                  className="h-16 w-16"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-vara-primary">Project Partnership</h3>
                <p className="text-gray-600 mb-6">
                  Partner with us on specific development projects in real estate, food processing, or electronics manufacturing.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Targeted investment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Defined timeline and returns</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Active involvement options</span>
                  </li>
                </ul>
                <Link to="/contact" className="vara-btn-primary w-full block text-center">
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-vara-accent flex items-center justify-center">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2191/2191154.png" 
                  alt="Bond" 
                  className="h-16 w-16"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-vara-primary">Corporate Bonds</h3>
                <p className="text-gray-600 mb-6">
                  Invest in Vara Group's growth through our corporate bond program with competitive interest rates.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fixed income returns</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Various maturity options</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-vara-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lower risk profile</span>
                  </li>
                </ul>
                <Link to="/contact" className="vara-btn-primary w-full block text-center">
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-vara-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Contact Investor Relations
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Our dedicated investor relations team is available to answer your questions and provide additional information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Individual Investors</h3>
                <p className="mb-4 text-white/80">
                  Contact our retail investor support team for general inquiries and information.
                </p>
                <p className="font-medium">investors@varagroup.com</p>
                <p className="font-medium">+234 (0) 123 456 7891</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Institutional Investors</h3>
                <p className="mb-4 text-white/80">
                  Our institutional investment team is ready to discuss strategic partnerships.
                </p>
                <p className="font-medium">institutional@varagroup.com</p>
                <p className="font-medium">+234 (0) 123 456 7892</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorRelations;
