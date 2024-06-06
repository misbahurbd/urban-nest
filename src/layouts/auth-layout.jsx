import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../providers/auth-provider"

const AuthLayout = () => {
  const { loading, user } = useContext(AuthContext)

  if (loading) {
    return (
      <section className="flex-1 py-20 flex flex-col gap-4 justify-center items-center">
        <span className="loading loading-infinity loading-lg" />
        <p className="text-neutral-700">Loading...</p>
      </section>
    )
  }

  if (!loading && user) return <Navigate to={"/profile"} />

  return (
    <section className="flex-1 flex flex-col justify-center">
      <div className="container space-y-6 py-12">
        <div className="w-full max-w-sm mx-auto">
          <Outlet />
        </div>
      </div>
    </section>
  )
}
export default AuthLayout
