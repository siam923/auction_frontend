import { SignIn } from "@clerk/nextjs"
const SignInPage = () => {
  return (
    <div className="flex items-center justify-center  py-12  ">
      <div className="max-w-md w-full space-y-8  ">
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage;