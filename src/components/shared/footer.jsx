import { LuMail, LuMapPin, LuPhone } from "react-icons/lu"
import BrandLogo from "./brand-logo"
import { Link } from "react-router-dom"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="text-primary-foreground">
      <div className="bg-secondary">
        <div className="container flex flex-col sm:flex-row sm:flex-wrap gap-6 py-12 space-y-4">
          <div className="space-y-3 sm:grow lg:flex-[2] md:mr-20">
            <BrandLogo className="text-primary-foreground" />
            <p className="text-sm text-neutral-200 leading-normal">
              At Urban Nest, we redefine luxury living with exceptional real
              estate offerings. Our bespoke services cater to discerning clients
              seeking premier properties that epitomize elegance, comfort, and
              modern sophistication. Discover your perfect sanctuary with Urban
              Nest, where your dream home awaits.
            </p>
          </div>
          <div className="space-y-3 flex-1">
            <h4 className="text-2xl font-semibold">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <Link className="flex items-center">
                  <LuPhone className="mr-2" />
                  +880 1853-644 982
                </Link>
              </li>
              <li>
                <p className="flex items-center">
                  <LuMapPin className="mr-2" />
                  Raynagar, Sylhet, Bangladesh
                </p>
              </li>
              <li>
                <Link className="flex items-center">
                  <LuMail className="mr-2" />
                  info@urbannest.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 flex-1">
            <h4 className="text-2xl font-semibold">Quick Link</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/about"}
                  className="flex items-center"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/properties"}
                  className="flex items-center"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact-us"}
                  className="flex items-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container flex items-center justify-center py-6">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to={"https://www.facebook.com/misbahurbd"}
                className="flex items-center font-medium"
                target="_blank"
              >
                <FaFacebookF className="mr-2 size-[0.9em]" />
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.github.com/misbahurbd"}
                className="flex items-center font-medium"
                target="_blank"
              >
                <FaGithub className="mr-2 size-[0.9em]" />
                GitHub
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/misbahurbd"}
                className="flex items-center font-medium"
                target="_blank"
              >
                <FaLinkedin className="mr-2 size-[0.9em]" />
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer
