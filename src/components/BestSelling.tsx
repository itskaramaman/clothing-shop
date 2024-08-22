import React from "react";
import ClothCard from "./ClothCard";

const BestSelling = () => {
  return (
    <main className="p-5 mt-10">
      <div className="text-center font-semibold text-2xl mb-5">
        <h1>BestSelling</h1>
      </div>
      <div className="mt-8 md:flex md:flex-wrap md:justify-between md:w-10/12 mx-auto">
        <ClothCard
          badge="In Stock"
          price={35}
          title="Classic Monochrome Tees"
          imgSrc="/images/listing-image.png"
        />
        <ClothCard
          badge="In Stock"
          price={35}
          title="Classic Monochrome Tees"
          imgSrc="/images/listing-image.png"
        />
        <ClothCard
          badge="In Stock"
          price={35}
          title="Classic Monochrome Tees"
          imgSrc="/images/listing-image.png"
        />
      </div>
    </main>
  );
};

export default BestSelling;
