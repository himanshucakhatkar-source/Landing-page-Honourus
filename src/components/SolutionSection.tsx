import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, CheckCircle } from "lucide-react";

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl text-gray-900">
                Introducing Honorus: Your Solution for Fair Recognition
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide a transparent contribution tracking system that logs who did what, when, 
              and ensures deserved recognition. Every idea, every task, every contribution is 
              permanently attributed to its rightful owner.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-accent mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Transparent tracking of all contributions and ideas</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-accent mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Tamper-proof logging with immutable records</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-accent mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">AI-powered attribution and recognition system</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzZWN1cml0eSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTg0MjI4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mobile security interface showing locked and protected data"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-green-600/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}