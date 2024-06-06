import { useState } from "react"
import { useParams } from "react-router-dom"
import CardCarousel from "../../components/shared/card-carousel"
import { LuBedDouble, LuMapPin, LuShowerHead } from "react-icons/lu"
import { PiGarageLight } from "react-icons/pi"
import { TfiRulerAlt2 } from "react-icons/tfi"
import { HiOutlineCalendarDays, HiOutlineMap } from "react-icons/hi2"
import { Helmet } from "react-helmet-async"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { HiOutlinePhotograph } from "react-icons/hi"
import { cn } from "../../utils"

const Property = () => {
  const params = useParams()
  const [isDataLoading, setIsDataLoading] = useState(true)
  const [property, setProperty] = useState({})
  const [header, setHeader] = useState("image")

  useState(() => {
    const fetchData = async () => {
      const res = await fetch("/db.json")
      const properties = await res.json()
      const data = properties.find(item => item.id == params.id)

      setProperty(data)
      setIsDataLoading(false)
    }
    fetchData()
  }, [params.id])

  if (isDataLoading) {
    return (
      <section className="flex-1 py-20 flex flex-col gap-4 justify-center items-center">
        <span className="loading loading-infinity loading-lg" />
        <p className="text-neutral-700">Loading...</p>
      </section>
    )
  }

  return (
    <article className="pb-20 sm:container">
      <Helmet>
        <title>{property.title} - Urban Nest</title>
      </Helmet>
      <div className="relative border">
        <div className="absolute z-10 flex flex-col gap-2 right-6 top-6">
          <button
            onClick={() => setHeader("image")}
            className={cn(
              "grid place-items-center size-8 rounded-md bg-black/60 text-white",
              header === "image" && "bg-achent/60"
            )}
          >
            <HiOutlinePhotograph className="size-6" />
          </button>
          <button
            onClick={() => setHeader("map")}
            className={cn(
              "grid place-items-center size-8 rounded-md bg-black/60 text-white",
              header !== "image" && "bg-achent/60"
            )}
          >
            <HiOutlineMap className="size-6" />
          </button>
        </div>
        {header == "image" ? (
          <CardCarousel images={property.images} />
        ) : (
          <div className="aspect-[5/4] w-full overflow-hidden">
            <MapContainer
              className="w-full h-full"
              center={[
                property.coordinates.latitude,
                property.coordinates.longitude,
              ]}
              zoom={10}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  property.coordinates.latitude,
                  property.coordinates.longitude,
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>
      <div className="bg-white space-y-4 py-8">
        <div className="container">
          <span className="text-xs bg-black/40 text-white uppercase px-1 py-0.5">
            For {property.status}
          </span>
          <h1 className="font-bold text-2xl">{property.title}</h1>
          <p className="flex text-sm font-light items-center">
            <LuMapPin className="mr-2" />
            {property.location.address}, {property.location.state},{" "}
            {property.location.state}, {property.location.country}
          </p>
        </div>
        <hr />
        <div className="container space-y-4">
          <h3 className="text-xl font-semibold">Overview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-3">
            <div className="">
              <p className="font-semibold text-lg">{property.property_type}</p>
              <p className="font-light text-sm">Property Type</p>
            </div>
            <div className="">
              <p className="font-semibold flex items-center text-lg">
                <LuBedDouble className="mr-2" /> {property.bedrooms}
              </p>
              <p className="font-light text-sm">Bedrooms</p>
            </div>
            <div className="">
              <p className="font-semibold flex items-center text-lg">
                <LuShowerHead className="mr-2" />
                {property.bathrooms}
              </p>
              <p className="font-light text-sm">Bathrooms</p>
            </div>
            <div className="">
              <p className="font-semibold flex items-center text-lg">
                <PiGarageLight className="mr-2" />1
              </p>
              <p className="font-light text-sm">Garage</p>
            </div>
            <div className="">
              <p className="font-semibold flex items-center text-lg">
                <TfiRulerAlt2 className="mr-2" />
                {property.area}
              </p>
              <p className="font-light text-sm">Sq Ft</p>
            </div>
            <div className="">
              <p className="font-semibold flex items-center text-lg">
                <HiOutlineCalendarDays className="mr-2" />
                {property.area}
              </p>
              <p className="font-light text-sm">Sq Ft</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container space-y-4">
          <h3 className="text-xl font-semibold">Description</h3>
          <p>{property.description}</p>
        </div>
      </div>
    </article>
  )
}
export default Property
