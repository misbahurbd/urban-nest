import { useSwiper } from "swiper/react"
import PropTypes from "prop-types"
import { cn } from "../../utils"

const SwiperNav = ({ className, btnClassName, nextEle, prevEle }) => {
  const swiper = useSwiper()
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        className={cn(
          "block px-4 p-1.5 transition bg-achent hover:bg-primary text-primary-foreground",
          btnClassName
        )}
        onClick={() => swiper.slidePrev()}
      >
        {prevEle || "Prev"}
      </button>
      <button
        className={cn(
          "block px-4 p-1.5 transition bg-achent hover:bg-primary text-primary-foreground",
          btnClassName
        )}
        onClick={() => swiper.slideNext()}
      >
        {nextEle || "Next"}
      </button>
    </div>
  )
}

SwiperNav.propTypes = {
  className: PropTypes.string,
  btnClassName: PropTypes.string,
  nextEle: PropTypes.node,
  prevEle: PropTypes.node,
}
export default SwiperNav
