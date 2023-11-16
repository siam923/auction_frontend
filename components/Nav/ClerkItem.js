import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import Notification from "./Notification";

const Clerk = () => {
  const { userId } = auth();

  return (
    <div className="flex items-center text-white">
      {!userId && (
        <>
          <Link href="/sign-in" className="text-gray-300 hover:text-white mr-4">
            Sign In
          </Link>
        </>
      )}
      {userId && (
        <div className="mr-4">
          <Notification />
        </div>
      )}
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Clerk;
