"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import ProgressBar from "./progress-bar";

import AccountStep from "./steps/account-step";
import PersonalDetailsStep from "./steps/personal-details-step";
import FitnessGoalsStep from "./steps/fitness-goals-step";
import ActivityLevelStep from "./steps/activity-level-step";
import ProfileSetupStep from "./steps/profile-setup-step";

import { useOnboardingStore } from "@/store/onboarding-store";

export default function OnboardingLayout() {
  const { currentStep, nextStep } =
    useOnboardingStore();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-20 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl md:p-10">
        {/* Progress */}
        <ProgressBar
          currentStep={currentStep}
        />

        {/* Step Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <>
                {currentStep === 1 && (
                  <AccountStep
                    onValid={nextStep}
                  />
                )}

                {currentStep === 2 && (
                  <PersonalDetailsStep />
                )}

                {currentStep === 3 && (
                  <FitnessGoalsStep />
                )}

                {currentStep === 4 && (
                  <ActivityLevelStep />
                )}

                {currentStep === 5 && (
                  <ProfileSetupStep />
                )}
              </>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}