import PropTypes from "prop-types"
import { useState } from "react"
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

const FormInput = ({
  form,
  name,
  label,
  placeholder,
  type = "text",
  disabled,
}) => {
  const [selectedType, setSelectedType] = useState(type)

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="font-medium text-sm"
      >
        {label}
      </label>
      <div className="relative">
        <input
          className="px-3 w-full py-1.5 transition border outline-none rounded ring-0 ring-achent focus:ring-2"
          id={name}
          type={selectedType}
          placeholder={placeholder}
          {...form.register(name, { required: true })}
          disabled={disabled}
          autoComplete="off"
        />
        {type === "password" && (
          <button
            tabIndex={-1}
            type="button"
            onClick={() =>
              setSelectedType(type =>
                type === "password" ? "text" : "password"
              )
            }
            className="absolute transition grid place-items-center size-8 bg-neutral-100 hover:bg-neutral-200 right-1 top-1/2 -translate-y-1/2 rounded"
          >
            {selectedType === "password" ? (
              <HiOutlineEye />
            ) : (
              <HiOutlineEyeOff />
            )}
          </button>
        )}
      </div>
      {form.formState.errors[name] && (
        <p className="text-xs text-red-500">
          {form.formState.errors[name].message}
        </p>
      )}
    </div>
  )
}

FormInput.propTypes = {
  form: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string,
}
export default FormInput
