import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "CreditGuard has transformed our team dynamics. Everyone feels valued and recognized for their contributions, leading to a 40% increase in innovative ideas shared.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechFlow Solutions",
    },
    {
      quote: "Performance reviews are now objective and data-driven. No more politics or forgotten contributions. It's all there in black and white.",
      author: "Marcus Rodriguez",
      role: "Head of Product",
      company: "InnovateLab",
    },
    {
      quote: "The collaborative environment has improved dramatically. People are more willing to share ideas because they know they'll get proper credit.",
      author: "Emma Thompson",
      role: "Team Lead",
      company: "CreativeWorks",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how CreditGuard is transforming workplace culture and driving innovation across organizations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Quote className="w-8 h-8 text-blue-600 mb-6" />
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t pt-6">
                <p className="text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-blue-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695067058684-da5a90013c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzU4NDIyODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Happy diverse business team celebrating success"
            className="rounded-2xl mx-auto max-w-2xl w-full h-auto shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}