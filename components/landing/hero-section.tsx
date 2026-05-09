import { Button } from "@/components/ui/button";
import PageContainer from "@/components/shared/page-container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.30),transparent_45%)]" />

      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <PageContainer>
        <div className="relative flex min-h-screen flex-col items-center justify-center py-24 text-center">
          {/* Badge */}
          <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-md">
            Trusted by 50K+ fitness enthusiasts
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Transform your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              fitness journey
            </span>{" "}
            with intelligent progress tracking.
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-xl">
            Track workouts, monitor nutrition, and achieve your goals with a
            premium fitness experience designed for modern lifestyles.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
              Watch Demo
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-24 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-6 md:grid-cols-4">
              {/* Card 1 */}
              <div className="rounded-2xl bg-black/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-black/60">
                <p className="text-sm text-zinc-400">Calories Burned</p>

                <h3 className="mt-3 text-3xl font-bold">1,840</h3>

                <div className="mt-4 h-2 rounded-full bg-zinc-800">
                  <div className="h-2 w-[84%] rounded-full bg-violet-500" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-black/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-black/60">
                <p className="text-sm text-zinc-400">Workouts</p>

                <h3 className="mt-3 text-3xl font-bold">12</h3>

                <div className="mt-4 flex gap-2">
                  <div className="h-10 w-2 rounded-full bg-cyan-500" />
                  <div className="h-6 w-2 rounded-full bg-cyan-400" />
                  <div className="h-14 w-2 rounded-full bg-cyan-300" />
                  <div className="h-8 w-2 rounded-full bg-cyan-500" />
                  <div className="h-12 w-2 rounded-full bg-cyan-400" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-black/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-black/60">
                <p className="text-sm text-zinc-400">Streak</p>

                <h3 className="mt-3 text-3xl font-bold">28 Days</h3>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="text-sm text-zinc-400">
                    Consistent this month
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl bg-black/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-black/60">
                <p className="text-sm text-zinc-400">Goal Progress</p>

                <h3 className="mt-3 text-3xl font-bold">84%</h3>

                <div className="mt-4 h-2 rounded-full bg-zinc-800">
                  <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}