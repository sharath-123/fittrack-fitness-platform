import { z } from "zod";

export const accountSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),

    email: z.string().email("Enter a valid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const personalDetailsSchema = z.object({
  dateOfBirth: z.string().min(1, "Date of birth required"),

  height: z.string().min(1, "Height required"),

  weight: z.string().min(1, "Weight required"),
});