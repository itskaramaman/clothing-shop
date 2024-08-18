import Image from "next/image";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-5 border text-gray-600">
      <div>
        <Image
          height={100}
          width={100}
          className="w-36"
          src="/images/Header.png"
          alt="header"
        />
      </div>
      <ul className="flex space-x-10 ">
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-1 border border-gray-600 rounded-sm p-2">
          <Search className="w-5" />
          <input
            type="text"
            className="focus:border-none"
            placeholder="Search products"
          />
        </div>

        <ShoppingCart className="w-8" />
        <CircleUserRound className="w-8 " />
      </div>
    </nav>
  );
};

export default Navbar;
