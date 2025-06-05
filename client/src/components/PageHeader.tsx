
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, subtitle, image, children, className }: PageHeaderProps) => {
  return (
    <div 
      className={cn(
        "relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center pt-16",
        className
      )}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-vara-primary/90 via-vara-primary/70 to-vara-primary/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-vara-secondary rounded-full mr-3 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Vara Global Trading</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-white/20 hidden md:block z-20"></div>
      <div className="absolute top-1/3 right-8 w-20 h-20 border-r-4 border-t-4 border-vara-secondary/30 hidden lg:block z-20"></div>
    </div>
  );
};

export default PageHeader;
