import ClothCard from "@/components/ClothCard";
import Link from "next/link";

const ListingPage = () => {
  return (
    <main className="w-11/12 my-10 mx-auto flex gap-5 justify-between">
      <div className="w-3/12 bg-gray-50 border p-5 block">
        <h1 className="text-gray-600">Categories</h1>
      </div>
      <div className="w-9/12">
        <h1 className="text-gray-600">Showing 12 of 36</h1>
        <div className="flex flex-wrap justify-between">
          <Link className="mb-12" href={`/product/${"productId"}`}>
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
      </div>
    </main>
  );
};

export default ListingPage;
