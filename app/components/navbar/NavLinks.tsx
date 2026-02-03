import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="hidden sm:flex space-x-6 font-bold">
      <Link
        className="text-orange-500 hover:text-orange-700 transition"
        href="#home"
      >
        Home
      </Link>
      <Link
        className="text-orange-500 hover:text-orange-700 transition"
        href="#about"
      >
        About
      </Link>
      <Link
        className="text-orange-500 hover:text-orange-700 transition"
        href="#services"
      >
        Services
      </Link>
      <Link
        className="text-orange-500 hover:text-orange-700 transition"
        href="#contact"
      >
        Contact
      </Link>
    </div>
  );
}
