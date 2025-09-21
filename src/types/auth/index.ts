import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export const SignUpSchema = z.object({
  email: z.string().min(2, {
    message: "",
  }),
  username: z.string().min(2, {
    message: "",
  }),
  password: z.string().min(6, {
    message: "",
  }),
  confirmPassword: z.string().min(6, {
    message: "",
  }),
});

export type SignUpFormType = z.infer<typeof SignUpSchema>;
