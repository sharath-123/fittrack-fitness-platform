import { Check } from "lucide-react";

import PageContainer from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for getting started on your fitness journey.",
    features: [
      "Workout tracking",
      "Basic analytics",
      "Community access",
      "3 active goals",
    ],
  },
  {
    name: "Pro",
    price: "₹999",
    description: "Advanced insights and personalized wellness tracking.",
    popular: true,
    features: [
      "Everything in Free",
      "Nutrition plans",
      "Advanced analytics",
      "Unlimited goals",
      "Priority support",
    ],
  },
  {
    name: "Elite",
    price: "₹2,499",
    description: "Complete wellness experience for athletes and professionals.",
    features: [
      "Everything in Pro",
      "1-on-1 coaching",
      "Custom workout plans",
      "Performance reports",
      "Early feature access",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/5 bg-black py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <PageContainer>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
            Pricing
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Flexible pricing for every fitness journey.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300/80">
            Start for free and upgrade whenever you're ready to unlock
            advanced wellness tools and personalized experiences.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-cyan-500/5 shadow-[0_0_50px_rgba(139,92,246,0.15)]"
                  : "border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] hover:border-violet-500/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>

              {/* Description */}
              <p className="mt-3 text-sm text-zinc-400">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="mb-1 text-sm text-zinc-400">
                  /month
                </span>
              </div>

              {/* Features */}
              <div className="mt-10 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20">
                      <Check className="h-3 w-3 text-violet-300" />
                    </div>

                    <span className="text-zinc-300/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                className={`mt-10 w-full rounded-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}