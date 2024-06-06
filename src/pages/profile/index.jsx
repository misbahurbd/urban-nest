import { useContext, useState } from "react"
import { AuthContext } from "../../providers/auth-provider"
import { LuFileEdit } from "react-icons/lu"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateProfileSchema } from "../../validations"
import FormInput from "../../components/ui/form-input"
import { toast } from "sonner"

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { user, updateUserProfile } = useContext(AuthContext)

  const updateProfileForm = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      displayName: user.displayName,
      photoURL: user.photoURL,
    },
  })

  const onUpdate = async values => {
    setIsLoading(true)
    const toastId = toast.loading("Updating profile..")
    try {
      await updateUserProfile(values)
      toast.success("Profile Update Successfully!", { id: toastId })
    } catch (error) {
      toast.error("Unable to update profile", { id: toastId })
    } finally {
      setIsLoading(false)
      setIsEditing(false)
    }
  }

  if (!user) return null

  return (
    <section className="py-20">
      <Helmet>
        <title>{user?.displayName || "User Profile"} - Urban Nest</title>
      </Helmet>
      <div className="container">
        <div className="w-full max-w-lg mx-auto space-y-4">
          <div className="relative size-28 sm:size-40 rounded-md mx-auto overflow-hidden">
            <img src={user.photoURL} />
          </div>
          <div className="flex items-center flex-col gap-4 justify-between">
            <div className="text-center ">
              <h1 className="font-semibold text-lg">{user.displayName}</h1>
              <p className="text-sm text-neutral-500">{user.email}</p>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center bg-neutral-200 px-4 py-2 rounded-md text-sm font-medium"
              >
                <LuFileEdit className="mr-2" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <form
                onSubmit={updateProfileForm.handleSubmit(onUpdate)}
                className="flex flex-col space-y-2"
              >
                <FormInput
                  form={updateProfileForm}
                  label="Photo URL"
                  name="photoURL"
                  placeholder="Photo url"
                  disabled={isLoading}
                />
                <FormInput
                  form={updateProfileForm}
                  label="Name"
                  name="displayName"
                  placeholder="Name"
                  disabled={isLoading}
                />
                <button
                  disabled={isLoading}
                  type="submit"
                  className="transition bg-achent hover:bg-primary text-primary-foreground px-4 py-2 font-medium rounded-md"
                >
                  Save
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProfilePage
