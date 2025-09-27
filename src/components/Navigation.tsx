import { Button } from "./ui/button";
import honorusLogo from "figma:asset/99da343fc9d5f663b3fce307295eaa851c9e60a3.png";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={honorusLogo} alt="Honorus" className="h-16" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-700 hover:text-blue-600 transition-colors scroll-smooth">
              Problem
            </a>
            <a href="#solution" className="text-gray-700 hover:text-blue-600 transition-colors scroll-smooth">
              Solution
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors scroll-smooth">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors scroll-smooth">
              Pricing
            </a>
            <a href="#target" className="text-gray-700 hover:text-blue-600 transition-colors scroll-smooth">
              Who We Serve
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white ring-1 ring-golden-accent/30 hover:ring-golden-accent/50 transition-all duration-200">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}