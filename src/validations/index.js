import { z } from "zod"

export const registerFormSchema = z
  .object({
    photoUrl: z.string().min(1, { message: "Photo url is required" }),
    name: z
      .string({ required_error: "Name is required" })
      .min(1, { message: "Name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, { message: "Password is required" }),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(1, { message: "Confirm password is required" }),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: "Confirm password not match!",
    path: ["confirmPassword"],
  })

export const updateProfileSchema = z.object({
  displayName: z.string().min(1, { message: "Name is required" }),
  photoURL: z.string().min(1, { message: "Photo url is required" }),
})

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
})
