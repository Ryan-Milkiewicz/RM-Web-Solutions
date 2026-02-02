import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/rm-web-solutions-logo.png"
                alt="RM Web Solutions Logo"
                width={150}
                height={50}
                className="cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden sm:flex space-x-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-orange-500 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-orange-500 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-orange-500 font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-orange-500 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
