import { Rocket, Lightbulb, Code } from "lucide-react";

export function TargetMarketSection() {
  const targets = [
    {
      icon: Rocket,
      title: "Growing Startups",
      description: "Establishing a foundation of fairness from day one, preventing future recognition issues.",
    },
    {
      icon: Lightbulb,
      title: "Creative Teams & Agencies",
      description: "Protecting intellectual property and ensuring creatives are credited for their original ideas.",
    },
    {
      icon: Code,
      title: "Tech Companies",
      description: "Attracting and retaining top engineering talent by guaranteeing recognition for code, architecture, and problem-solving.",
    },
  ];

  return (
    <section id="target" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Built for Dynamic Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Honorus empowers forward-thinking organizations that value innovation, collaboration, and fair recognition of every team member's contributions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${
                index === 1 ? "bg-green-accent/10 group-hover:bg-green-accent/20" : "bg-blue-100 group-hover:bg-blue-200"
              }`}>
                <target.icon className={`w-8 h-8 ${index === 1 ? "text-green-accent" : "text-blue-600"}`} />
              </div>
              <h3 className="text-xl text-gray-900 mb-4">{target.title}</h3>
              <p className="text-gray-600 leading-relaxed">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}