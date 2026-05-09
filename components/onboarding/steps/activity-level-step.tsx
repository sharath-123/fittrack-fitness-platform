"use client";

import { Button } from "@/components/ui/button";

import { useOnboardingStore } from "@/store/onboarding-store";

const activityLevels = [
  {
    title: "Sedentary",
    description: "Little or no exercise",
    emoji: "🛋️",
  },
  {
    title: "Lightly Active",
    description: "1-2 workouts per week",
    emoji: "🚶",
  },
  {
    title: "Moderately Active",
    description: "3-4 workouts per week",
    emoji: "🏃",
  },
  {
    title: "Very Active",
    description: "5+ workouts per week",
    emoji: "🔥",
  },
  {
    title: "Athlete",
    description: "Professional level training",
    emoji: "🏆",
  },
];

export default function ActivityLevelStep() {
  const {
    activityLevel: selectedLevel,
    setActivityLevel,
    nextStep,
    prevStep,
  } = useOnboardingStore();

  const isValid =
    selectedLevel.length > 0;

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Your activity level
        </h2>

        <p className="mt-3 text-zinc-400">
          This helps us personalize
          your recommendations.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="space-y-4">
        {activityLevels.map((level) => {
          const isSelected =
            selectedLevel ===
            level.title;

          return (
            <button
              key={level.title}
              type="button"
              onClick={() =>
                setActivityLevel(
                  level.title
                )
              }
              className={`flex w-full items-center gap-5 rounded-3xl border p-5 text-left transition-all duration-300 ${
                isSelected
                  ? "border-violet-500 bg-violet-500/10 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                  : "border-white/10 bg-white/[0.03] hover:border-violet-500/20 hover:bg-white/[0.05]"
              }`}
            >
              {/* Emoji */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl">
                {level.emoji}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {level.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {level.description}
                </p>
              </div>

              {/* Radio Indicator */}
              <div
                className={`h-5 w-5 rounded-full border-2 transition-all ${
                  isSelected
                    ? "border-violet-500 bg-violet-500"
                    : "border-zinc-600"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Validation */}
      {!isValid && (
        <p className="mt-4 text-sm text-red-400">
          Please select your activity
          level.
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