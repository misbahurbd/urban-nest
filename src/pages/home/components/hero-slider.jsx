import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, A11y } from "swiper/modules"
import { LuBedDouble, LuShowerHead } from "react-icons/lu"
import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2"
import { TfiRulerAlt2 } from "react-icons/tfi"
import { Link } from "react-router-dom"

import SwiperNav from "../../../components/ui/swiper-next-btn"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const HeroSlider = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/db.json")
      const resData = await res.json()
      setData(resData)
    }
    fetchData()
  }, [])

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Pagination, Navigation, A11y]}
    >
      {data.slice(0, 3).map(data => (
        <SwiperSlide key={data.id + "slide"}>
          <div className="relative w-full h-full py-24 md:py-0 md:aspect-[5/2]">
            <img
              src={data.images[0]}
              className="absolute w-full h-full top-0 left-0 object-cover object-center"
            />
            <div className="container relative h-full flex items-center">
              <div className="bg-base-200 p-8 pb-16 rounded-md w-full mx-auto md:mx-0 max-w-md md:max-w-xl space-y-2 relative overflow-hidden">
                <div className="flex items-start flex-col md:flex-row gap-y-4 gap-x-2 justify-between">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold text-lg">{data.title}</h2>
                    <p className="text-sm font-light">
                      {`${data.location.address}, ${data.location.state}, ${data.location.city}, ${data.location.country}`}
                    </p>
                  </div>
                  <div>
                    {data.status == "rent" ? (
                      <div className="flex flex-col md:items-end space-y-0.5">
                        <span className="font-bold text-lg">
                          $
                          {data.price.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                          /mo
                        </span>
                        <span className="text-sm font-medium">
                          $
                          {(data.price / (data.area / 1000)).toLocaleString(
                            undefined,
                            {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }
                          )}
                          /sq ft
                        </span>
                      </div>
                    ) : (
                      <span className="font-bold text-lg">
                        $
                        {data.price.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4 !mt-6">
                  <div className="flex gap-1 items-center">
                    <LuBedDouble className="mr-1 size-[1.2em]" />
                    <span className="font-semibold">{data.bedrooms}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <LuShowerHead className="mr-1 size-[1.2em]" />
                    <span className="font-semibold">{data.bathrooms}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <TfiRulerAlt2 className="mr-1 size-[1.2em]" />
                    <span className="font-semibold">{data.area}</span>
                    <span className="font-normal">sq ft</span>
                  </div>
                </div>
                <p className="font-bold">{data.property_type}</p>
                <Link
                  to={`/properties/${data.id}`}
                  className="block rounded-tl absolute right-0 bottom-0 px-4 py-2 bg-achent hover:bg-primary text-primary-foreground font-medium text-sm"
                >
                  View Property
                </Link>
                <SwiperNav
                  className="absolute left-0 bottom-0 gap-0 bg-transparent"
                  btnClassName={"px-4"}
                  nextEle={<HiMiniArrowRight className="size-6" />}
                  prevEle={<HiMiniArrowLeft className="size-6" />}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default HeroSlider
