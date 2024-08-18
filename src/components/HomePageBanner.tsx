import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TruckIcon,
  AwardIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import BestSelling from "./BestSelling";

const HomePageBanner = () => {
  return (
    <main>
      <div className="bg-gray-50 md:h-96 p-32 flex justify-between">
        <div className="space-y-3">
          <h1 className="text-3xl">Fresh Arrival Online</h1>
          <p className="text-sm text-gray-600">
            Discover our Newest Collection Today
          </p>
          <Button>
            View Collection <ArrowRight />
          </Button>
        </div>

        <div className="bg-gray-100 h-96 w-96 rounded-full relative">
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={100}
            height={100}
            className="top-0 left-0 bottom-0 right-0 m-auto w-60"
          />
        </div>
      </div>
      <section className="w-8/12 flex mt-32 mx-auto items-center justify-between gap-4">
        <div className="space-y-2">
          <TruckIcon className="w-12 h-12 bg-gray-100 p-2 rounded-full" />
          <h5 className="font-semibold text-sm">Free Shipping</h5>
          <p className="text-slate-600 text-xs">
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>

        <div className="space-y-2">
          <AwardIcon className="w-12 h-12 bg-gray-100 p-2 rounded-full" />
          <h5 className="font-semibold text-sm">Satisfaction Guarantee</h5>
          <p className="text-slate-600 text-xs">
            Shop confidently with our Satisfaction Gaurantee: Love it or get
            refund.
          </p>
        </div>

        <div className="space-y-2">
          <ShieldCheckIcon className="w-12 h-12 bg-gray-100 p-2 rounded-full" />
          <h5 className="font-semibold text-sm">Secure Payment</h5>
          <p className="text-slate-600 text-xs">
            Upgrade your style today and get free shipping on all orders!
            Don&apos;t miss out.
          </p>
        </div>
      </section>
      <BestSelling />
    </main>
  );
};

export default HomePageBanner;
