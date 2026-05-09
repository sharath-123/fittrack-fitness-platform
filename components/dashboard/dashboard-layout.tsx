"use client";

import { motion } from "framer-motion";

import Sidebar from "./sidebar";
import ProgressChart from "./progress-chart";
import ThemeToggle from "./theme-toggle";

import { useOnboardingStore } from "@/store/onboarding-store";

export default function DashboardLayout() {
  const {
    username,
    goals,
    activityLevel,
  } = useOnboardingStore();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="flex-1 p-6 md:p-10">
          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
          >
            <div>
              <h1 className="text-4xl font-bold">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {username || "Athlete"}
                </span>{" "}
                👋
              </h1>

              <p className="mt-2 text-zinc-400">
                Here's your fitness overview for today.
              </p>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <ThemeToggle />

              <div className="text-right">
                <p className="font-medium">
                  {username || "Athlete"}
                </p>

                <p className="text-sm text-zinc-400">
                  Premium Member
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-2xl">
                👤
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Calories Burned",
                value: "1,840",
              },
              {
                title: "Workout Time",
                value: "6.5 hrs",
              },
              {
                title: "Daily Steps",
                value: "12,450",
              },
              {
                title: "Goal Completion",
                value: "84%",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-500/20"
              >
                <p className="text-zinc-400">
                  {card.title}
                </p>

                <h3 className="mt-4 text-4xl font-bold">
                  {card.value}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {/* Progress Chart */}
            <ProgressChart />

            {/* Goals */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-2xl font-bold">
                Today's Goals
              </h3>

              <div className="mt-6 space-y-5">
                {[
                  {
                    goal: "Drink Water",
                    progress: "80%",
                  },
                  {
                    goal: "Workout",
                    progress: "60%",
                  },
                  {
                    goal: "Sleep",
                    progress: "90%",
                  },
                ].map((item) => (
                  <div key={item.goal}>
                    <div className="mb-2 flex items-center justify-between">
                      <p>{item.goal}</p>

                      <span className="text-sm text-zinc-400">
                        {item.progress}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                        style={{
                          width: item.progress,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* User Insights */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-2xl font-bold">
              Your Fitness Profile
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {/* Activity */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-zinc-400">
                  Activity Level
                </p>

                <h4 className="mt-2 text-xl font-semibold">
                  {activityLevel ||
                    "Not selected"}
                </h4>
              </div>

              {/* Goals */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-zinc-400">
                  Goals
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {goals.length > 0 ? (
                    goals.map((goal) => (
                      <span
                        key={goal}
                        className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300"
                      >
                        {goal}
                      </span>
                    ))
                  ) : (
                    <p className="text-zinc-500">
                      No goals selected
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Workouts */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Recent Workouts
              </h3>

              <button className="text-sm text-violet-400 hover:text-violet-300">
                View All
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  name: "Upper Body Strength",
                  duration: "45 mins",
                },
                {
                  name: "HIIT Cardio",
                  duration: "30 mins",
                },
                {
                  name: "Yoga Recovery",
                  duration: "50 mins",
                },
              ].map((workout, index) => (
                <motion.div
                  key={workout.name}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.01,
                    borderColor:
                      "rgba(139,92,246,0.3)",
                  }}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4 transition"
                >
                  <div>
                    <h4 className="font-semibold">
                      {workout.name}
                    </h4>

                    <p className="mt-1 text-sm text-zinc-400">
                      {workout.duration}
                    </p>
                  </div>

                  <button className="rounded-full bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
                    Details
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}