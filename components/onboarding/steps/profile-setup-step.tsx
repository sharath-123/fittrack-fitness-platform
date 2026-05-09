"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useOnboardingStore } from "@/store/onboarding-store";

export default function ProfileSetupStep() {
  const [notifications, setNotifications] =
    useState(true);

  const [preview, setPreview] =
    useState<string | null>(null);

  const {
    username,
    setUsername,
    prevStep,
    completeOnboarding,
  } = useOnboardingStore();

  const [bio, setBio] =
    useState("");

  const router = useRouter();

  const isValid =
    username.trim().length > 0 &&
    bio.trim().length > 0;

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Complete your profile
        </h2>

        <p className="mt-3 text-zinc-400">
          Personalize your FitTrack experience.
        </p>
      </div>

      <div className="space-y-6">
        {/* Avatar Upload */}
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-8 text-center">
          <input
            type="file"
            accept="image/*"
            id="profile-upload"
            className="hidden"
            onChange={(e) => {
              const file =
                e.target.files?.[0];

              if (file) {
                const imageUrl =
                  URL.createObjectURL(file);

                setPreview(imageUrl);
              }
            }}
          />

          <label
            htmlFor="profile-upload"
            className="cursor-pointer"
          >
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="h-24 w-24 rounded-full border border-white/10 object-cover"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-3xl">
                👤
              </div>
            )}
          </label>

          <h3 className="mt-5 text-lg font-semibold text-white">
            Upload Profile Picture
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Click to upload your profile image
          </p>

          <label
            htmlFor="profile-upload"
            className="mt-5 cursor-pointer rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition-all hover:bg-white/10"
          >
            Choose File
          </label>
        </div>

        {/* Username */}
        <div>
          <Label className="mb-2 block text-zinc-300">
            Username
          </Label>

          <Input
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            placeholder="@fittrackuser"
            className="h-12 border-white/10 bg-white/5 text-white"
          />
        </div>

        {/* Bio */}
        <div>
          <Label className="mb-2 block text-zinc-300">
            Short Bio
          </Label>

          <Textarea
            value={bio}
            onChange={(e) =>
              setBio(e.target.value)
            }
            placeholder="Tell us about your fitness journey..."
            className="min-h-[120px] border-white/10 bg-white/5 text-white"
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div>
            <h4 className="font-semibold text-white">
              Enable Notifications
            </h4>

            <p className="mt-1 text-sm text-zinc-400">
              Get workout reminders and progress updates.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setNotifications(
                !notifications
              )
            }
            className={`relative h-7 w-14 rounded-full transition-all ${notifications
              ? "bg-gradient-to-r from-violet-500 to-cyan-500"
              : "bg-zinc-700"
              }`}
          >
            <div
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${notifications
                ? "left-8"
                : "left-1"
                }`}
            />
          </button>
        </div>

        {/* Success State */}
        <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6 text-center">
          <div className="text-5xl">
            🎉
          </div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Welcome to FitTrack!
          </h3>

          <p className="mt-3 text-zinc-300/80">
            Your onboarding experience is complete.
            You're ready to start your fitness journey.
          </p>
        </div>
      </div>

      {/* Validation Message */}
      {!isValid && (
        <p className="mt-4 text-sm text-red-400">
          Please complete all required fields.
        </p>
      )}

      <Button
        type="button"
        disabled={!isValid}
        onClick={() => {
          completeOnboarding();

          router.push("/dashboard");
        }}
        className={`${isValid
            ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90"
            : "cursor-not-allowed bg-zinc-800 text-zinc-500"
          }`}
      >
        Launch Dashboard
      </Button>
    </div>
  );
}