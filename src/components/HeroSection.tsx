import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Empower Every Contribution. Elevate Your Business.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Honorus is a revolutionary platform designed to ensure every employee's 
                contribution is accurately tracked, attributed, and celebrated.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 ring-2 ring-golden-accent/20 hover:ring-golden-accent/30 transition-all duration-200">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="lg:order-last">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739302750702-e26a61113758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzU4NDIyODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team collaborating in a high-tech environment"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}