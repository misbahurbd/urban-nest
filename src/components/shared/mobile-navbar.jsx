import { Link, NavLink } from "react-router-dom"
import BrandLogo from "./brand-logo"
import { LuAlignLeft, LuUserCircle } from "react-icons/lu"
import { navlinks } from "../../constants"
import { cn } from "../../utils"
import { HiXMark } from "react-icons/hi2"
import { useEffect, useRef } from "react"

const MobileNavbar = () => {
  const navref = useRef()

  useEffect(() => {
    const handleNavPosition = () => {
      if (window.scrollY > 80) {
        navref.current.classList.add("fixed")
      } else {
        navref.current.classList.remove("fixed")
      }
    }

    window.addEventListener("scroll", handleNavPosition)

    return () => window.removeEventListener("scroll", handleNavPosition)
  }, [])

  return (
    <div className="lg:hidden z-50">
      <div className="drawer z-20">
        <input
          id="mobile-nav"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-side">
          <label
            htmlFor="mobile-nav"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="min-h-full w-full max-w-64 bg-base-200 text-neutral-800 flex flex-col gap-4 relative">
            <div className="p-4 flex items-center justify-between">
              <Link to={"/"}>
                <BrandLogo />
              </Link>
              <label
                htmlFor="mobile-nav"
                aria-label="close sidebar"
                className="size-8 grid place-items-center"
              >
                <HiXMark className="size-6" />
              </label>
            </div>
            <ul className="w-full">
              {navlinks.map((link, index) => (
                <li key={link.href + "mobile"}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        "w-full block px-4 py-2",
                        index != 0 && "border-t border-t-neutral-800/10",
                        isActive && "bg-secondary text-secondary-foreground"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <header
        ref={navref}
        className="w-full top-0 h-14 flex items-center bg-primary text-white backdrop-blur-sm shadow-sm"
      >
        <nav className="container flex items-center justify-between gap-3">
          <div className="flex-1">
            <label
              htmlFor="mobile-nav"
              className="size-8 flex items-center justify-center cursor-pointer"
            >
              <LuAlignLeft className="size-6" />
            </label>
          </div>
          <Link>
            <BrandLogo />
          </Link>
          <div className="flex-1 flex justify-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="grid place-items-center size-8"
              >
                <LuUserCircle className="size-6" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu shadow p-1 bg-base-100 text-neutral-800 rounded w-52"
              >
                <li>
                  <Link
                    className="rounded font-medium"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded font-medium"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default MobileNavbar
