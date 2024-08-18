import React from "react";
import ClothCard from "./ClothCard";

const BestSelling = () => {
  return (
    <main className="p-5 mt-10">
      <div className="text-center font-semibold text-2xl mb-5">
        <h1>BestSelling</h1>
      </div>
      <div className="space-y-8 md:flex md:flex-wrap md:justify-between md:w-10/12 lg:w-9/12 mx-auto">
        <ClothCard />
        <ClothCard />
        <ClothCard />
      </div>
    </main>
  );
};

export default BestSelling;
