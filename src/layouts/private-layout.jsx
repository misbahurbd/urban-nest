import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../providers/auth-provider"

const PrivateLayout = () => {
  const { loading, user } = useContext(AuthContext)

  if (loading) {
    return (
      <div className="flex-1 py-20 flex flex-col gap-4 items-center justify-center">
        <span className="loading loading-infinity loading-lg" />
        <p className="text-neutral-700">Loading...</p>
      </div>
    )
  }

  if (!loading && !user) {
    return <Navigate to={"/login"} />
  }

  return <Outlet />
}
export default PrivateLayout
