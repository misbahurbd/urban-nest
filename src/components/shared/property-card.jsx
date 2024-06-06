import PropTypes from "prop-types"
import CardCarousel from "./card-carousel"
import { LuBedDouble, LuShowerHead } from "react-icons/lu"
import { TfiRulerAlt2 } from "react-icons/tfi"
import { Link } from "react-router-dom"

const PropertyCard = ({ property }) => {
  return (
    <article className="bg-white shadow-lg shadow-black/10 flex flex-col rounded-md overflow-hidden">
      <div className="relative ">
        <CardCarousel images={property.images} />
        <div className="absolute z-10 bottom-0 left-0 right-0 flex px-4 py-4">
          {property.status == "rent" ? (
            <div className="text-white">
              <p className="text-lg font-semibold">
                ${property.price.toLocaleString()}/mo
              </p>
            </div>
          ) : (
            <div className="text-white">
              <p className="text-lg font-semibold">
                ${property.price.toLocaleString()}
              </p>
              <p className="text-xs font-semibold">
                ${property.price / property.area}
                /sq ft
              </p>
            </div>
          )}
        </div>
        <span className="absolute block top-4 right-4 uppercase text-xs bg-black/40 z-10 text-white px-1 py-0.5">
          For {property.status}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-neutral-800">
            {property.title}
          </h2>
          <p className="text-sm text-neutral-600 font-light">
            {property.location.address}, {property.location.state},{" "}
            {property.location.city}, {property.location.country},
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="">
            <div className="flex items-center text-xl">
              {property.bedrooms}
              <LuBedDouble className="ml-2" />
            </div>
            <p className="text-xs font-light">Bedrooms</p>
          </div>
          <span className="block h-10 w-[1px] bg-neutral-300" />
          <div className="">
            <div className="flex items-center text-xl">
              {property.bathrooms}
              <LuShowerHead className="ml-2" />
            </div>
            <p className="text-xs font-light">Bathrooms</p>
          </div>
          <span className="block h-10 w-[1px] bg-neutral-300" />
          <div className="">
            <div className="flex items-center text-xl">
              {property.area}
              <TfiRulerAlt2 className="ml-2" />
            </div>
            <p className="text-xs font-light">Sq Ft</p>
          </div>
        </div>
      </div>
      <Link
        to={`/properties/${property.id}`}
        className="block transition text-center text-sm px-6 py-2 bg-achent text-white font-semibold hover:bg-secondary mt-auto"
      >
        View Property
      </Link>
    </article>
  )
}

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    amenities: PropTypes.array,
    area: PropTypes.number,
    bathrooms: PropTypes.number,
    bedrooms: PropTypes.number,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    description: PropTypes.string,
    facilities: PropTypes.array,
    images: PropTypes.array,
    location: PropTypes.shape({
      address: PropTypes.string,
      state: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    nearby_attractions: PropTypes.array,
    parking: PropTypes.string,
    price: PropTypes.number,
    property_type: PropTypes.string,
    segment_name: PropTypes.string,
    status: PropTypes.string,
    year_built: PropTypes.number,
  }),
}

export default PropertyCard
