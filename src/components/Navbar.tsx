import Image from "next/image";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center space-y-2 py-2 md:flex-row md:justify-around md:items-center md:p-5 border text-gray-600">
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
        <li>
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Categories
          </Link>
        </li>
        <li>
          <Link className={buttonVariants({ variant: "ghost" })} href="/about">
            About
          </Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-1 border border-gray-600 rounded-sm p-2 sm:w-60 lg:w-96">
          <Search className="w-5" />
          <input
            type="text"
            className="focus:outline-none text-sm w-full"
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
