import { create } from "zustand";

import { persist } from "zustand/middleware";

type OnboardingStore = {
  currentStep: number;

  username: string;

  goals: string[];

  activityLevel: string;

  onboardingCompleted: boolean;

  setUsername: (
    username: string
  ) => void;

  setGoals: (
    goals: string[]
  ) => void;

  setActivityLevel: (
    level: string
  ) => void;

  completeOnboarding: () => void;

  nextStep: () => void;

  prevStep: () => void;

  reset: () => void;
};

export const useOnboardingStore =
  create<OnboardingStore>()(
    persist(
      (set) => ({
        currentStep: 1,

        username: "",

        goals: [],

        activityLevel: "",

        onboardingCompleted: false,

        setUsername: (username) =>
          set({ username }),

        setGoals: (goals) =>
          set({ goals }),

        setActivityLevel: (
          activityLevel
        ) =>
          set({ activityLevel }),

        completeOnboarding: () =>
          set({
            onboardingCompleted: true,
          }),

        nextStep: () =>
          set((state) => ({
            currentStep:
              state.currentStep + 1,
          })),

        prevStep: () =>
          set((state) => ({
            currentStep:
              state.currentStep - 1,
          })),

        reset: () =>
          set({
            currentStep: 1,
            username: "",
            goals: [],
            activityLevel: "",
            onboardingCompleted: false,
          }),
      }),
      {
        name: "fittrack-onboarding",
      }
    )
  );