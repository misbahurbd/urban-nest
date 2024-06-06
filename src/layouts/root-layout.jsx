import { Outlet, useLocation } from "react-router-dom"
import MobileNavbar from "../components/shared/mobile-navbar"
import DesktopNavbar from "../components/shared/desktop-navbar"
import { useEffect, useRef } from "react"
import Footer from "../components/shared/footer"

const RootLayout = () => {
  const mainRef = useRef()
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        mainRef.current?.classList?.add("pt-14")
      } else {
        mainRef.current?.classList?.remove("pt-14")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNavbar />
      <MobileNavbar />
      <main
        ref={mainRef}
        className="grow flex flex-col"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default RootLayout
