import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-gray-100 p-8 md:px-24 md:py-12 lg:px-32 lg:py-16">
      <section className="flex justify-between">
        <div className="space-y-2">
          <Image
            src="/images/Header.png"
            alt="footer-image"
            width={100}
            height={100}
            className="h-10 w-36"
          />
          <p className="text-sm text-gray-600">
            This project is to showcase my NextJS skills
          </p>
          <div className="flex items-center gap-2">
            <FaGithub className="h-6 w-6" />
            <FaInstagram className="h-6 w-6" />
            <FaYoutube className="h-6 w-6" />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-between gap-10">
            <ul className="space-y-5 text-gray-600 text-sm">
              <li>FAQ</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="space-y-5 text-gray-600 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
            <ul className="space-y-5 text-gray-600 text-sm">
              <li>My Account</li>
              <li>Checkout</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-gray-600">Accepted Payments</h1>
          <div className="flex gap-5">
            <FaCcMastercard className="w-8 h-8" />
            <FaCcVisa className="w-8 h-8" />
            <FaCcAmex className="w-8 h-8" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
