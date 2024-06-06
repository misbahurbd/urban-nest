import { Swiper, SwiperSlide } from "swiper/react"

import PropTypes from "prop-types"
import SwiperNav from "../ui/swiper-next-btn"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import { cn } from "../../utils"

const CardCarousel = ({ images, className }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      className="relative"
    >
      <SwiperNav
        className="absolute w-full justify-between z-10 bg-green-400 top-1/2 -translate-y-1/2 bg-transparent"
        btnClassName="!bg-transparent"
        nextEle={<HiChevronRight className="size-8" />}
        prevEle={<HiChevronLeft className="size-8" />}
      />
      {images.map(img => (
        <SwiperSlide
          key={img}
          className={cn("aspect-[4/3] relative", className)}
        >
          <img
            src={img}
            alt="Product Image"
            className="block w-full h-full object-cover"
          />
          <span className="absolute w-full h-full left-0 top-0 bg-gradient-to-t from-black/80 to-black/0 to-40%" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

CardCarousel.propTypes = {
  images: PropTypes.array,
  className: PropTypes.string,
}
export default CardCarousel
