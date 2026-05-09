"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { personalDetailsSchema } from "@/lib/validation";

import { useOnboardingStore } from "@/store/onboarding-store";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const genders = [
  "Male",
  "Female",
  "Other",
];

type FormData = z.infer<
  typeof personalDetailsSchema
>;

export default function PersonalDetailsStep() {
  const { nextStep, prevStep } =
    useOnboardingStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
      isValid,
    },
  } = useForm<FormData>({
    resolver: zodResolver(
      personalDetailsSchema
    ),
    mode: "onChange",

    defaultValues: {
      gender: "Male",
    },
  });

  const selectedGender =
    watch("gender");

  const onSubmit = () => {
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Personal details
        </h2>

        <p className="mt-3 text-zinc-400">
          Help us personalize your
          wellness experience.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* DOB */}
        <div>
          <Label className="mb-2 block text-zinc-300">
            Date of Birth
          </Label>

          <Input
            type="date"
            {...register("dateOfBirth")}
            className="h-12 border-white/10 bg-white/5 text-white"
          />

          {errors.dateOfBirth && (
            <p className="mt-2 text-sm text-red-400">
              {
                errors.dateOfBirth
                  .message
              }
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <Label className="mb-3 block text-zinc-300">
            Gender
          </Label>

          <div className="flex flex-wrap gap-3">
            {genders.map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() =>
                  setValue(
                    "gender",
                    gender,
                    {
                      shouldValidate: true,
                    }
                  )
                }
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                  selectedGender ===
                  gender
                    ? "border-violet-500 bg-violet-500/20 text-white"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>

          <input
            type="hidden"
            {...register("gender")}
          />
        </div>

        {/* Height & Weight */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Height */}
          <div>
            <Label className="mb-2 block text-zinc-300">
              Height (cm)
            </Label>

            <Input
              type="number"
              placeholder="175"
              {...register("height")}
              className="h-12 border-white/10 bg-white/5 text-white"
            />

            {errors.height && (
              <p className="mt-2 text-sm text-red-400">
                {errors.height.message}
              </p>
            )}
          </div>

          {/* Weight */}
          <div>
            <Label className="mb-2 block text-zinc-300">
              Weight (kg)
            </Label>

            <Input
              type="number"
              placeholder="70"
              {...register("weight")}
              className="h-12 border-white/10 bg-white/5 text-white"
            />

            {errors.weight && (
              <p className="mt-2 text-sm text-red-400">
                {errors.weight.message}
              </p>
            )}
          </div>
        </div>
      </div>

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
          type="submit"
          disabled={!isValid}
          className={`${
            isValid
              ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90"
              : "cursor-not-allowed bg-zinc-800 text-zinc-500"
          }`}
        >
          Continue
        </Button>
      </div>
    </form>
  );
}