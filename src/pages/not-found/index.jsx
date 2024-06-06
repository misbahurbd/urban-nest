import { HiOutlineExclamationTriangle } from "react-icons/hi2"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section>
      <div className="container py-20 flex flex-col gap-8 items-center justify-center">
        <HiOutlineExclamationTriangle className="size-36" />
        <h1 className="font-bold text-3xl">Page Not Found</h1>
        <Link
          to={"/"}
          className="block px-4 py-2 font-medium rounded-md bg-neutral-200 hover:bg-neutral-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
export default NotFoundPage
