import { Star } from "lucide-react";

import PageContainer from "@/components/shared/page-container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Coach",
    initials: "SJ",
    review:
      "FitTrack completely transformed how I manage my clients and workouts. The UI is incredibly smooth and motivating.",
  },
  {
    name: "Michael Lee",
    role: "Marathon Runner",
    initials: "ML",
    review:
      "The progress tracking and analytics helped me stay consistent and improve my endurance week after week.",
  },
  {
    name: "Emily Carter",
    role: "Yoga Trainer",
    initials: "EC",
    review:
      "Beautiful experience, easy onboarding, and genuinely one of the cleanest wellness platforms I’ve used.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/5 bg-black py-28 text-white"
    >
      {/* Background Blurs */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <PageContainer>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
            Testimonials
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Loved by athletes and wellness enthusiasts.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300/80">
            Thousands of users trust FitTrack to stay motivated,
            monitor progress, and achieve their fitness goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 leading-relaxed text-zinc-300/80">
                “{testimonial.review}”
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-white/10">
                  <AvatarFallback className="bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>

                  <p className="text-sm text-zinc-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}