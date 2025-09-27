import { Lock, Brain, Workflow, BarChart3 } from "lucide-react";
import { Badge } from "./ui/badge";

export function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: "Immutable Records",
      description: "Utilizing tamper-proof logging, every contribution is permanently linked to its originator. No more disputed claims.",
    },
    {
      icon: Brain,
      title: "AI-Powered Attribution",
      description: "Advanced AI will analyze meeting transcripts and chat logs to intelligently tag idea originators and key contributors.",
      comingSoon: true,
    },
    {
      icon: Workflow,
      title: "Integrated Task Management",
      description: "Seamlessly integrates with existing workflows to automatically attribute credit for completed tasks, project milestones, and code commits.",
    },
    {
      icon: BarChart3,
      title: "Recognition Dashboards",
      description: "Visualize individual and team contributions with intuitive dashboards. Build a clear reputation score based on documented impact and innovation.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Core Features: Precision & Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge technology to ensure every contribution is captured, protected, and properly attributed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl border border-gray-100 relative">
              {feature.comingSoon && (
                <Badge className="absolute top-4 right-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                  Coming Soon
                </Badge>
              )}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                feature.comingSoon 
                  ? "bg-gray-100 group-hover:bg-gray-200" 
                  : index === 0 ? "bg-green-accent/10 group-hover:bg-green-accent/20" 
                  : index === 3 ? "bg-golden-accent/10 group-hover:bg-golden-accent/20"
                  : "bg-blue-100 group-hover:bg-blue-200"
              }`}>
                <feature.icon className={`w-6 h-6 ${
                  feature.comingSoon ? "text-gray-500" 
                  : index === 0 ? "text-green-accent" 
                  : index === 3 ? "text-golden-accent"
                  : "text-blue-600"
                }`} />
              </div>
              <h3 className={`text-lg mb-3 ${
                feature.comingSoon ? "text-gray-700" : "text-gray-900"
              }`}>{feature.title}</h3>
              <p className={`leading-relaxed ${
                feature.comingSoon ? "text-gray-500" : "text-gray-600"
              }`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}