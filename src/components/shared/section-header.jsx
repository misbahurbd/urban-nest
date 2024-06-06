import PropTypes from "prop-types"

const SectionHeader = ({ title, subtitle }) => {
  return (
    <section className="mx-auto max-w-md space-y-2">
      <h3 className="text-2xl md:text-3xl text-neutral-800 font-bold text-center">
        {title}
      </h3>
      <p className="text-neutral-700 text-center">{subtitle}</p>
    </section>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
export default SectionHeader
