import { useForm } from "react-hook-form"
import { registerFormSchema } from "../../validations"
import { zodResolver } from "@hookform/resolvers/zod"
import FormInput from "../../components/ui/form-input"
import { useContext, useState } from "react"
import { toast } from "sonner"
import { AuthContext } from "../../providers/auth-provider"
import { Link } from "react-router-dom"
import SocialLogin from "../../components/shared/social-login"
import { Helmet } from "react-helmet-async"

const RegisterPage = () => {
  const { register } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const registerForm = useForm({
    resolver: zodResolver(registerFormSchema),
    mode: "onBlur",
  })

  const onSubmit = async values => {
    setIsLoading(true)
    const toastId = toast.loading("Creating account...")
    try {
      await register(values)
      toast.success("Register successfuly!", { id: toastId })
    } catch (error) {
      console.log(error.code)
      let message
      switch (error.code) {
        case "auth/email-already-in-use":
          message = "Email already used"
          break
        case "auth/invalid-email":
          message = "Invalid email address"
          break
        default:
          message = "Unable to register"
          break
      }
      toast.error(message, { id: toastId })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={registerForm.handleSubmit(onSubmit)}
      className="flex flex-col gap-2"
    >
      <Helmet>
        <title>Register - Urban Nest</title>
      </Helmet>
      <SocialLogin />
      <div className="flex items-center gap-3 text-neutral-400">
        <span className="flex-1 h-0.5 bg-neutral-100 block" />
        or
        <span className="flex-1 h-0.5 bg-neutral-100 block" />
      </div>
      <FormInput
        form={registerForm}
        name="photoUrl"
        label="Photo url"
        placeholder="Photo url"
        disabled={isLoading}
      />
      <FormInput
        form={registerForm}
        name="name"
        label="Name"
        placeholder="Name"
        disabled={isLoading}
      />
      <FormInput
        form={registerForm}
        name="email"
        label="Email"
        placeholder="Email address"
        type="email"
        disabled={isLoading}
      />
      <FormInput
        form={registerForm}
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        disabled={isLoading}
      />
      <FormInput
        form={registerForm}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm password"
        type="password"
        disabled={isLoading}
      />
      <button className="py-1.5 transition font-medium px-3 bg-achent hover:bg-achent/90 text-primary-foreground rounded mt-4">
        Register
      </button>
      <p className="mt-2 text-center text-sm text-neutral-600">
        Already have an account?{" "}
        <Link
          className="transition underline hover:text-achent"
          to={"/login"}
        >
          Login
        </Link>
      </p>
    </form>
  )
}
export default RegisterPage
