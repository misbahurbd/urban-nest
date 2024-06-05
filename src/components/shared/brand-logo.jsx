import { GiMushroomHouse } from "react-icons/gi"
import PropTypes from "prop-types"
import { cn } from "../../utils"

const BrandLogo = ({ mode, className }) => {
  return (
    <span
      className={cn(
        "flex items-center gap-1.5 text-2xl",
        mode ? (mode === "light" ? "text-neutral-800" : "text-white") : "",
        className
      )}
    >
      <GiMushroomHouse className="size-[1em]" />
      <span className="font-bold">Urban Nest</span>
    </span>
  )
}

BrandLogo.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]),
  className: PropTypes.string,
}

export default BrandLogo
