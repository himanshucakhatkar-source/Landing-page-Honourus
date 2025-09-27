import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Basic Team",
      price: "₹500",
      period: "per month",
      description: "Perfect for small teams starting their contribution tracking journey",
      features: [
        "Up to 20 team members",
        "4-layer team hierarchy support",
        "Immutable contribution records",
        "Basic task attribution",
        "Monthly recognition reports",
        "Standard integrations",
        "Email support",
        "Recognition dashboards",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹1,000",
      period: "per month",
      description: "Advanced features for larger organizations with complex structures",
      features: [
        "Up to 100 team members",
        "20-layer team hierarchy support",
        "Everything in Basic Team",
        "Advanced analytics dashboards",
        "Custom reporting",
        "Priority integrations",
        "Priority support",
        "Custom branding options",
        "Advanced recognition workflows",
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Simple <span className="text-golden-accent">Pricing</span>. Powerful Results.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Honorus offers transparent pricing that scales with your team size and organizational complexity. Choose the plan that fits your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-blue-600 text-white shadow-2xl scale-105"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-golden-accent text-golden-accent-foreground px-6 py-2 rounded-full">Most Popular</span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? "text-blue-200" : "text-green-accent"
                    }`} />
                    <span className={plan.popular ? "text-blue-100" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full py-3 ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                size="lg"
              >
                {plan.popular ? "Get Started" : "Contact Sales"}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom plan for your enterprise? 
            <button className="text-blue-600 hover:text-blue-700 ml-1 underline">
              Contact our sales team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}