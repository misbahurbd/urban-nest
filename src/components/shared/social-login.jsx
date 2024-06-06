import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth"
import { auth } from "../../firebase/config"
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai"
const google = new GoogleAuthProvider()
const github = new GithubAuthProvider()

const SocialLogin = () => {
  const handleLogin = async provider => {
    await signInWithPopup(auth, provider)
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => handleLogin(google)}
        className="flex items-center transition rounded-md text-center px-4 py-2 gap-2 justify-center font-semibold bg-neutral-100 hover:bg-achent hover:text-primary-foreground"
      >
        <AiOutlineGoogle className="size-6" /> Continue with Google
      </button>
      <button
        type="button"
        onClick={() => handleLogin(github)}
        className="flex items-center transition rounded-md text-center px-4 py-2 gap-2 justify-center font-semibold bg-neutral-100 hover:bg-achent hover:text-primary-foreground"
      >
        <AiOutlineGithub className="size-6" /> Continue with Github
      </button>
    </div>
  )
}
export default SocialLogin
