import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface IClothCard {
  title: string;
  imgSrc: string;
  price: number;
  badge: "In Stock" | "Out of Stock";
}

const ClothCard = ({ title, imgSrc, price, badge }: IClothCard) => {
  return (
    <div className="bg-gray-50 sm:min-w-[210px] md:min-w-[280] lg:min-w-[320px] shadow-lg">
      <Image
        className="w-full object-cover"
        width={100}
        height={100}
        src={imgSrc}
        alt="cloth"
      />
      <div className="p-3">
        <h3 className="font-semibold mt-2">{title}</h3>
        <div className="flex gap-5">
          <Badge variant="outline">{badge}</Badge>
          <p className="text-sm text-gray-600">${Number(price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ClothCard;
