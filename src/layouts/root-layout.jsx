import { Outlet } from "react-router-dom"
import MobileNavbar from "../components/shared/mobile-navbar"
import DesktopNavbar from "../components/shared/desktop-navbar"
import { useEffect, useRef } from "react"

const RootLayout = () => {
  const mainRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        mainRef.current?.classList?.add("pt-14", "lg:pt-16")
      } else {
        mainRef.current?.classList?.remove("pt-14", "lg:pt-16")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNavbar />
      <MobileNavbar />
      <main
        ref={mainRef}
        className="h-[200vh]"
      >
        <Outlet />
      </main>
    </div>
  )
}
export default RootLayout
