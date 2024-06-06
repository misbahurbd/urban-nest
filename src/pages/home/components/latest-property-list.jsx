import { useEffect, useState } from "react"
import SectionHeader from "../../../components/shared/section-header"
import PropertyCard from "../../../components/shared/property-card"
import PropertyCardSkelton from "../../../components/shared/property-card-skelton"

const LatestPropertyList = () => {
  const [dataLoading, setDataLoading] = useState(true)
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/db.json")
      const data = await res.json()
      setProperties(data)
      setDataLoading(false)
    }
    fetchData()
  }, [])

  return (
    <section className="py-4">
      <div className="container space-y-12">
        <SectionHeader
          title="Our Latest Listing"
          subtitle="Explore our latest listing"
        />
        <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataLoading ? (
            <>
              {Array.from({ length: 9 }).map((_, i) => (
                <PropertyCardSkelton key={i + "ske"} />
              ))}
            </>
          ) : (
            <>
              {properties.map(property => (
                <PropertyCard
                  key={property.id + "property"}
                  property={property}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
export default LatestPropertyList
