import { Helmet } from "react-helmet-async"

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <Helmet>
        <title>Contact - Urban Nest</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl mb-6 text-center">
          Have questions or want to get in touch? Fill out the form below and we
          will get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
