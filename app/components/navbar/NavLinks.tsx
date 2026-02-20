import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="hidden sm:flex space-x-6 font-bold">
      <Link
        className="text-white hover:text-orange-500 transition"
        href="/#home"
      >
        Home
      </Link>
      <Link
        className="text-white hover:text-orange-500 transition"
        href="/#about-us"
      >
        About
      </Link>
      <Link
        className="text-white hover:text-orange-500 transition"
        href="/#services"
      >
        Services
      </Link>
      <Link
        className="text-white hover:text-orange-500 transition"
        href="/contact-us"
      >
        Contact
      </Link>
    </div>
  );
}
