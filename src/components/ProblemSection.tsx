import { TrendingDown, Lightbulb, Users } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Demotivation",
      description: "When hard work goes unnoticed, morale plummets, directly impacting productivity.",
    },
    {
      icon: Lightbulb,
      title: "Reduced Innovation",
      description: "Fear of ideas being stolen stifles creativity and prevents employees from sharing groundbreaking concepts.",
    },
    {
      icon: Users,
      title: "High Turnover",
      description: "A culture of unacknowledged contributions leads to burnout, driving valuable talent away.",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            The Unseen Drain on <span className="text-golden-accent">Innovation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unacknowledged work creates a cascade of negative effects that silently undermines your organization's potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}