import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const FashionParadiseBanner = () => {
  return (
    <main className="bg-gray-100 flex justify-between items-center p-8 md:px-24 md:py-12 lg:px-32 lg:py-16">
      <div className="space-y-4">
        <h1 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Browse Our Frashion Paradise!
        </h1>
        <p className="text-sm text-gray-600">
          Step into a world of style and explore our diverse collection of
          clothing categories
        </p>
        <Button>
          Start Browsing <ArrowRight />
        </Button>
      </div>
      <div>
        <Image
          src="/images/category-image.png"
          alt="fashion-banner"
          width={100}
          height={100}
          className="w-60 rounded-lg"
        />
      </div>
    </main>
  );
};

export default FashionParadiseBanner;
