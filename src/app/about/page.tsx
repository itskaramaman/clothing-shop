import Image from "next/image";
import { GiCoffeeCup } from "react-icons/gi";

const AboutPage = () => {
  return (
    <main>
      <div className="relative bg-gray-900 h-60">
        <Image
          src="/images/karamjeet-linkedIn.jpeg"
          alt="creator-img"
          width={100}
          height={100}
          className="absolute right-32 md:right-24 -bottom-28 ring-4 ring-white h-60 w-60 rounded-full"
        />
      </div>

      <div className="w-10/12 pt-32 lg:w-9/12 mx-auto md:p-8">
        <h1 className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text text-2xl lg:text-3xl">
          Karamjeet Ecommerce Website
        </h1>
        <div className="space-y-2 mt-5 md:mt-10">
          <p className="text-sm text-gray-800">Hi There👋, I am Karamjeet!</p>
          <p className="text-sm text-gray-800">
            Software Developer since 2019, passionate about creating user
            friendly, scalable SAAS applications.
          </p>
          <p className="text-sm text-gray-800">
            Hire me to make your ideas come live
          </p>
        </div>
        <ul className="space-y-2 mt-5">
          <li className="text-gray-800 text-sm">
            <span className="font-semibold">For inquiries: </span>
            <a
              className="text-blue-600"
              href="mailto:singhkaramjeetaman@gmail.com"
            >
              singhkaramjeetaman@gmail.com
            </a>
          </li>

          <li className="text-gray-800 text-sm">
            <span className="font-semibold">Portfolio: </span>
            <a
              target="_blank"
              className="text-blue-600"
              href="https://karamjeet-singh.netlify.app/"
            >
              Karamjeet Singh
            </a>
          </li>

          <li className="text-gray-800 text-sm">
            <span className="font-semibold">My LinkedIn: </span>
            <a
              target="_blank"
              className="text-blue-600"
              href="https://www.linkedin.com/in/karamjeet-singh-jandu/"
            >
              Karamjeet Singh Jandu
            </a>
          </li>
        </ul>

        <div className="mt-5 flex gap-2 items-center">
          <GiCoffeeCup className="h-10 w-10" />
          <i className="text-gray-800">Buy me Coffee</i>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
