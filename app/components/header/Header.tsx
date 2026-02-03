import Image from "next/image";
import ButtonWithSwoosh from "./ButtonSwoosh";

export default function Header() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 items-center">
      <div className="space-y-2 mb-16">
        <h3 className="text-orange-500 text-2xl font-bold">
          Professional Web Solutions
        </h3>
        <h3 className="text-gray-800 text-2xl font-bold">
          To Boost your Business
        </h3>
        <p className="font-medium text-gray-500">
          We design and develop modern websites and custom software solutions
          that help your business stand out, streamline operations, and turn
          ideas into real results.
        </p>
        <ButtonWithSwoosh />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/banner-image.jpg"
          alt="Banner Image"
          width={450}
          height={450}
          className="cursor-pointer object-contain"
          priority
        />
      </div>
    </section>
  );
}
