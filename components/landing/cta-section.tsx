import { Button } from "@/components/ui/button";
import PageContainer from "@/components/shared/page-container";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black py-32 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <PageContainer>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 via-black to-cyan-500/10 px-8 py-20 text-center backdrop-blur-xl md:px-16">
          {/* Small Badge */}
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
            Start Your Journey
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Ready to take control of your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              fitness goals?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300/80">
            Join thousands of fitness enthusiasts using FitTrack to
            build healthier routines, track progress, and stay
            motivated every single day.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
            >
              Get Started Free
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/5 px-8 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              Explore Features
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="mt-2 text-zinc-400">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">1M+</h3>
              <p className="mt-2 text-zinc-400">
                Workouts Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="mt-2 text-zinc-400">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}