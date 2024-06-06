import HeroSlider from "./components/hero-slider"
import LatestPropertyList from "./components/latest-property-list"
import { Helmet } from "react-helmet-async"

const HomePage = () => {
  return (
    <div className="space-y-14">
      <Helmet>
        <title>Urban Nest - Your Real Estate Partner</title>
      </Helmet>
      <HeroSlider />
      <LatestPropertyList />
    </div>
  )
}
export default HomePage
