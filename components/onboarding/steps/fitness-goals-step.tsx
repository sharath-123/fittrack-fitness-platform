"use client";

import { Button } from "@/components/ui/button";

import { useOnboardingStore } from "@/store/onboarding-store";

const goals = [
  {
    title: "Lose Weight",
    emoji: "🔥",
  },
  {
    title: "Build Muscle",
    emoji: "💪",
  },
  {
    title: "Stay Active",
    emoji: "🏃",
  },
  {
    title: "Improve Flexibility",
    emoji: "🧘",
  },
  {
    title: "Eat Healthier",
    emoji: "🥗",
  },
  {
    title: "Reduce Stress",
    emoji: "🧠",
  },
];

export default function FitnessGoalsStep() {
  const {
    goals: selectedGoals,
    setGoals,
    nextStep,
    prevStep,
  } = useOnboardingStore();

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setGoals(
        selectedGoals.filter(
          (g) => g !== goal
        )
      );
    } else {
      if (selectedGoals.length < 3) {
        setGoals([
          ...selectedGoals,
          goal,
        ]);
      }
    }
  };

  const isValid =
    selectedGoals.length > 0;

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Your fitness goals
        </h2>

        <p className="mt-3 text-zinc-400">
          Select up to 3 goals to
          personalize your journey.
        </p>
      </div>

      {/* Goal Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => {
          const isSelected =
            selectedGoals.includes(
              goal.title
            );

          return (
            <button
              key={goal.title}
              type="button"
              onClick={() =>
                toggleGoal(goal.title)
              }
              className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
                isSelected
                  ? "border-violet-500 bg-violet-500/10 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                  : "border-white/10 bg-white/[0.03] hover:border-violet-500/20 hover:bg-white/[0.05]"
              }`}
            >
              <div className="text-4xl">
                {goal.emoji}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {goal.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Validation Message */}
      {!isValid && (
        <p className="mt-4 text-sm text-red-400">
          Please select at least one
          goal.
        </p>
      )}

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="border-white/10 bg-white/5 text-white hover:bg-white/10"
        >
          Back
        </Button>

        <Button
          type="button"
          disabled={!isValid}
          onClick={nextStep}
          className={`${
            isValid
              ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90"
              : "cursor-not-allowed bg-zinc-800 text-zinc-500"
          }`}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}