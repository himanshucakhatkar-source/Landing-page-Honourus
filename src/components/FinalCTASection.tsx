import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              Ready to Transform Your Workplace Culture?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Foster a transparent, fair environment where meritocracy thrives. 
              Give every team member the recognition they deserve and watch innovation soar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Request a Demo
              </Button>
              <Button size="lg" className="bg-golden-accent text-golden-accent-foreground hover:bg-golden-accent/90 px-8 py-3 shadow-lg ring-2 ring-white/20 hover:ring-white/30 transition-all duration-200">
                Get Started Today
              </Button>
            </div>

          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1676276377440-c180867b1e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkYXRhJTIwYW5hbHl0aWNzJTIwc2NyZWVuc3xlbnwxfHx8fDE3NTg0MjI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business team analyzing data and analytics on screens"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 to-indigo-800/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}