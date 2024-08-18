import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <main className="flex justify-between items-center p-8 md:px-24 md:py-12 lg:px-32 lg:py-16">
      <div className="space-y-4">
        <h1 className="font-semibold  md:text-2xl lg:text-3xl">
          Join Our Newsletter
        </h1>
        <p className="text-xs md:text-sm text-gray-600">
          We love to surprise with ocasional gifts.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Input
          type="text"
          className="md:w-64"
          placeholder="Your email address"
        />
        <Button size="sm">Subscribe</Button>
      </div>
    </main>
  );
};

export default Newsletter;
