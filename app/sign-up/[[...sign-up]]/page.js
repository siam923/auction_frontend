import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center  py-12  ">
      <div className="max-w-md w-full space-y-8  ">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
