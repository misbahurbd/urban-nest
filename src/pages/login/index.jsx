import { useForm } from "react-hook-form"
import { loginFormSchema } from "../../validations"
import { zodResolver } from "@hookform/resolvers/zod"
import FormInput from "../../components/ui/form-input"
import { useContext, useState } from "react"
import { toast } from "sonner"
import { AuthContext } from "../../providers/auth-provider"
import { Link } from "react-router-dom"
import SocialLogin from "../../components/shared/social-login"
import { Helmet } from "react-helmet-async"

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
    mode: "onBlur",
  })

  const onSubmit = async values => {
    setIsLoading(true)
    const toastId = toast.loading("Login account...")
    try {
      await login(values)
      toast.success("Login successfuly!", { id: toastId })
    } catch (error) {
      console.log(error.code)
      let message
      switch (error.code) {
        case "auth/email-already-in-use":
          message = "The email address is already in use by another account."
          break
        case "auth/invalid-email":
          message = "The email address is not valid."
          break
        case "auth/invalid-password":
          message =
            "The provided password is invalid. It must be at least six characters."
          break
        case "auth/account-exists-with-different-credential":
          message =
            "An account already exists with this email. Please use a different sign-in method."
          break
        case "auth/popup-blocked":
          message = "The popup was blocked by the browser."
          break
        case "auth/popup-closed-by-user":
          message = "The popup was closed before completing the operation."
          break
        case "auth/unauthorized-domain":
          message = "This domain is not authorized for this operation."
          break
        case "auth/user-disabled":
          message = "The user account has been disabled."
          break
        case "auth/user-not-found":
          message =
            "No user found with this email. Please check the email address or sign up."
          break
        case "auth/invalid-credential":
          message = "Invalid credential. Please try again."
          break
        default:
          message = "Unable to login. Please try again."
          break
      }
      toast.error(message || "Unable to login", { id: toastId })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={loginForm.handleSubmit(onSubmit)}
      className="flex flex-col gap-2"
    >
      <Helmet>
        <title>Login - Urban Nest</title>
      </Helmet>
      <SocialLogin />
      <div className="flex items-center gap-3 text-neutral-400">
        <span className="flex-1 h-0.5 bg-neutral-100 block" />
        or
        <span className="flex-1 h-0.5 bg-neutral-100 block" />
      </div>
      <FormInput
        form={loginForm}
        name="email"
        label="Email"
        placeholder="Email address"
        type="email"
        disabled={isLoading}
      />
      <FormInput
        form={loginForm}
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        disabled={isLoading}
      />
      <button className="py-1.5 transition font-medium px-3 bg-achent hover:bg-achent/90 text-primary-foreground rounded mt-4">
        Login
      </button>

      <p className="mt-2 text-center text-sm text-neutral-600">
        Don&apos;t have an account?{" "}
        <Link
          className="transition underline hover:text-achent"
          to={"/register"}
        >
          Register
        </Link>
      </p>
    </form>
  )
}
export default LoginPage
