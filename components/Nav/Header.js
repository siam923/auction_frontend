import Link from "next/link";
import Clerk from "./ClerkItem";

const Header = ({ username }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700 text-white">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg font-bold text-white uppercase">GrabIt</div>
        </Link>
      </div>
      <Clerk />
    </nav>
  );
};

export default Header;
