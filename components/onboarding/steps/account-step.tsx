"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { accountSchema } from "@/lib/validation";

import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = z.infer<typeof accountSchema>;

interface Props {
  onValid: () => void;
}

export default function AccountStep({
  onValid,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    onValid();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Create your account
        </h2>

        <p className="mt-3 text-zinc-400">
          Start your wellness journey with FitTrack.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <Label className="mb-2 block text-zinc-300">
            Full Name
          </Label>

          <Input
            {...register("fullName")}
            placeholder="John Doe"
            className="h-12 border-white/10 bg-white/5 text-white"
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label className="mb-2 block text-zinc-300">
            Email
          </Label>

          <Input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className="h-12 border-white/10 bg-white/5 text-white"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <Label className="mb-2 block text-zinc-300">
            Password
          </Label>

          <Input
            {...register("password")}
            type="password"
            placeholder="••••••••"
            className="h-12 border-white/10 bg-white/5 text-white"
          />

          {errors.password && (
            <p className="mt-2 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <Label className="mb-2 block text-zinc-300">
            Confirm Password
          </Label>

          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="••••••••"
            className="h-12 border-white/10 bg-white/5 text-white"
          />

          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-400">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {/* Continue Button */}
      <button
        type="submit"
        disabled={!isValid}
        className={`mt-10 h-12 w-full rounded-full font-medium transition-all ${
          isValid
            ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90"
            : "cursor-not-allowed bg-zinc-800 text-zinc-500"
        }`}
      >
        Continue
      </button>
    </form>
  );
}