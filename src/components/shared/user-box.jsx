import { useContext } from "react"
import { AuthContext } from "../../providers/auth-provider"
import { Link } from "react-router-dom"

const UserBox = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className=" h-8 flex items-center justify-center gap-2"
      >
        <img
          className="block size-8 rounded-full object-cover"
          src={user.photoURL || "/img/avatar.webp"}
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu shadow p-1 bg-base-100 text-neutral-800 rounded w-52"
      >
        <div className="px-4 py-1">
          <h4>{user.displayName}</h4>
          <p className="text-sm text-neutral-500">{user.email}</p>
        </div>
        <li>
          <Link
            className="rounded font-medium"
            to={"/profile"}
          >
            Profile
          </Link>
        </li>
        <li>
          <button
            className="rounded font-medium"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}
export default UserBox
