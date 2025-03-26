
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
        "relative h-[40vh] md:h-[50vh] flex items-center",
        className
      )}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-vara-primary/60 z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
