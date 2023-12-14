import Link from "next/link";
import Clerk from "./ClerkItem";

const Header = ({ username }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-gradient-to-r from-blue-600 to-blue-900 text-white">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <div className="text-lg font-bold text-white uppercase hover:text-gray-300 transition duration-200 ease-in-out">
            GrabIt
          </div>
        </Link>
        <Link href="/items">
          <div className="font-bold text-white hover:text-gray-300 transition duration-200 ease-in-out">
            Items
          </div>
        </Link>
        <Link href="/results">
          <div className="font-bold text-white hover:text-gray-300 transition duration-200 ease-in-out">
            My Results
          </div>
        </Link>
      </div>
      <Clerk />
    </nav>
  );
};

export default Header;
