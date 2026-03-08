import Image from "next/image";

type TechCardProps = {
  name: string;
  logo: string;
  alt: string;
};

export default function TechCard({ name, logo, alt }: TechCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Image
        src={logo}
        alt={alt}
        width={40}
        height={40}
        className="relative z-10 object-contain"
      />
      <p className="relative z-10 font-semibold text-gray-800 text-sm tracking-wide">
        {name}
      </p>
    </div>
  );
}
