import { Link, NavLink } from "react-router-dom"
import BrandLogo from "./brand-logo"
import { LuMapPin, LuPhone } from "react-icons/lu"
import { navlinks } from "../../constants"
import { cn } from "../../utils"
import { useEffect, useRef } from "react"

const DesktopNavbar = () => {
  const navbar = useRef()
  const logo = useRef()

  useEffect(() => {
    const handlePosition = () => {
      if (window.scrollY > 80) {
        navbar.current?.classList?.add("fixed", "w-full", "top-0", "left-0")
        logo.current?.classList?.add("scale-100", "w-48")
      } else {
        navbar.current?.classList?.remove("fixed", "w-full", "top-0", "left-0")
        logo.current?.classList?.remove("scale-100", "w-48")
      }
    }

    window.addEventListener("scroll", handlePosition)
    return () => window.removeEventListener("scroll", handlePosition)
  }, [])

  return (
    <header className="z-50">
      <div className="container h-20 flex items-center justify-between">
        <Link
          to={"/"}
          className="hidden lg:flex "
        >
          <BrandLogo className="text-3xl" />
        </Link>
        <div className="flex items-center gap-6 w-full lg:w-auto justify-around">
          <div className="flex items-center gap-3">
            <LuPhone className="hidden lg:block size-8" />
            <div className="flex flex-col items-center lg:items-start">
              <Link
                to={"tel:+8801853644982"}
                className="text-neutral-800 font-semibold text-sm"
              >
                +880 1853-644 982
              </Link>
              <Link
                to={"mailto:info@ubernest.com"}
                className="text-neutral-800 text-sm"
              >
                info@ubernest.com
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <LuMapPin className="hidden lg:block size-8" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-neutral-800 font-semibold text-sm">Raynavar</p>
              <p className="text-neutral-800 text-sm">Sylhet, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LuPhone className="hidden lg:block size-8" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-neutral-800 font-semibold text-sm">
                9 am to 6 pm
              </p>
              <p className="text-neutral-800 text-sm">Monday to Friday</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={navbar}
        className="bg-primary hidden lg:block"
      >
        <nav className="container flex items-center bg-primary h-14">
          <Link
            ref={logo}
            className="transition-all block origin-left scale-0 whitespace-nowrap w-0"
          >
            <BrandLogo className="text-white text-2xl" />
          </Link>
          <ul className="flex items-center">
            {navlinks.map((link, index) => (
              <li key={link.href + "desktop"}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "h-14 transition flex items-center justify-center py-2 px-4 text-white font-medium hover:bg-secondary",
                      isActive && "bg-secondary",
                      index !== 0 && "border-l border-l-white/10"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center">
            <ul>
              <li>
                <Link className="h-14 px-6 py-2 font-medium text-white grid place-items-center hover:bg-secondary">
                  Register
                </Link>
              </li>
            </ul>
            <span className="block h-14 w-0.5 bg-white/10" />
            <ul>
              <li>
                <Link className="h-14 px-6 py-2 font-medium text-white grid place-items-center hover:bg-secondary">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default DesktopNavbar
