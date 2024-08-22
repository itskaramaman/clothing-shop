"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BsThreeDots } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import ClothCard from "@/components/ClothCard";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const [title, setTitle] = useState("Classic Monochrome Tees");
  const [price, setPrice] = useState(35);
  const [badge, setBadge] = useState("In Stock");
  const [colors, setColors] = useState("");
  const [description, setDescription] =
    useState(`Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.
The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.`);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState("4.2K stars");

  return (
    <main className="w-11/12 mx-auto">
      <section className="flex gap-10 p-20">
        <div className="bg-gray-100 w-4/12">
          <Image
            src="/images/listing-image.png"
            width={100}
            height={100}
            alt="listing-image"
            className="w-11/12 mx-auto"
          />
        </div>
        <div className="w-8/12 space-y-2">
          <h1 className="font-semibold text-2xl">{title}</h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{reviews}</Badge>
            <Badge variant="outline">{badge}</Badge>
          </div>
          <p className="text-gray-700">${Number(price).toFixed(2)}</p>
          <div className="my-5">
            <h3 className="text-gray-700 ">Available Colors</h3>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-300 cursor-pointer hover:ring-2"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:ring-2"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:ring-2"></div>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-gray-700 ">Available Size</h3>
            <div className="flex gap-2">
              <Button variant="ghost" className="border border-gray-300">
                S
              </Button>
              <Button variant="ghost" className="border border-gray-300">
                M
              </Button>
              <Button variant="ghost" className="border border-gray-300">
                L
              </Button>
              <Button variant="ghost" className="border border-gray-300">
                XL
              </Button>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-gray-700 ">Quantity</h3>
            <div className="flex">
              <Button
                variant="secondary"
                disabled={quantity <= 1}
                onClick={() => setQuantity((prev) => --prev)}
              >
                -
              </Button>
              <Input
                className="w-10 ring-0 !focus:ring-0 !focus:border-none !focus:outline-none !focus:shadow-none "
                value={quantity}
              />
              <Button
                variant="secondary"
                onClick={() => setQuantity((prev) => ++prev)}
              >
                +
              </Button>
            </div>
          </div>
          <Button className="px-12">Add to Cart</Button>
        </div>
      </section>

      <section className="flex gap-10 justify-between p-20 items-center">
        <div className="w-4/12 space-y-2 text-center">
          <h3 className="text-gray-600 flex items-center gap-1 cursor-pointer">
            <BsThreeDots />
            Details
          </h3>
          <h3 className="text-gray-600 flex items-center gap-1 cursor-pointer">
            <FaRegStar />
            Reviews
          </h3>
        </div>
        <div className="w-8/12">
          <h3 className="text-gray-600">{description}</h3>
        </div>
      </section>

      <section className="p-20">
        <h1 className="font-semibold text-2xl">You might also like</h1>
        <p className="text-gray-600">Similar products</p>
        <div className="flex justify-between">
          <Link className="mb-12" href="/">
            <ClothCard
              badge="In Stock"
              price={35}
              title="Classic Monochrome Tees"
              imgSrc="/images/listing-image.png"
            />
          </Link>
          <Link className="mb-12" href="/">
            <ClothCard
              badge="In Stock"
              price={35}
              title="Classic Monochrome Tees"
              imgSrc="/images/listing-image.png"
            />
          </Link>
          <Link className="mb-12" href="/">
            <ClothCard
              badge="In Stock"
              price={35}
              title="Classic Monochrome Tees"
              imgSrc="/images/listing-image.png"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
