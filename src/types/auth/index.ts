import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export const SignUpSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password confirmation must be at least 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type SignUpFormType = z.infer<typeof SignUpSchema>;
