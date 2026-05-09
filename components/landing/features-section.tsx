import {
  Activity,
  Dumbbell,
  Salad,
  Users,
} from "lucide-react";

import PageContainer from "@/components/shared/page-container";

const features = [
  {
    title: "Workout Tracking",
    description:
      "Track workouts, sets, reps, and calories with beautifully designed fitness analytics.",
    icon: Dumbbell,
  },
  {
    title: "Nutrition Plans",
    description:
      "Personalized meal plans and nutrition tracking tailored to your fitness goals.",
    icon: Salad,
  },
  {
    title: "Progress Analytics",
    description:
      "Visualize your transformation journey with powerful charts and insights.",
    icon: Activity,
  },
  {
    title: "Community Support",
    description:
      "Stay motivated with challenges, communities, and shared fitness achievements.",
    icon: Users,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative border-t border-white/10 bg-black py-28 text-white"
    >
      <PageContainer>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
            Features
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to stay on track.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Powerful fitness tools designed to help you train smarter,
            stay consistent, and achieve long-term wellness goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.05]"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                  <Icon className="h-7 w-7 text-violet-300 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}