import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const ClothCard = () => {
  return (
    <div className="bg-gray-50 sm:min-w-[210px] md:min-w-[280] lg:min-w-[320px] shadow-lg">
      <Image
        className="w-full object-cover"
        width={100}
        height={100}
        src="/images/white-tshirt.png"
        alt="cloth"
      />
      <div className="p-3">
        <h3 className="font-semibold mt-2">Classic Black Tee</h3>
        <div className="flex gap-5">
          <Badge variant="outline">In Stock</Badge>
          <p className="text-sm text-gray-600">$35.00</p>
        </div>
      </div>
    </div>
  );
};

export default ClothCard;
