import { z } from "zod";

export const studentSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string().min(1, "Name is required"),
  age: z.number().int().positive("Age must be positive"),
  grade: z.string().min(1, "Grade is required"),
  email: z.string().email("Invalid email address"),
  enrolledAt: z.string().datetime({ message: "Must be a valid datetime string" }),
});

export type Student = z.infer<typeof studentSchema>;
