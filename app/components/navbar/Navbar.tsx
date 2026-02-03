import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/rm-web-solutions-logo.png"
                alt="RM Web Solutions Logo"
                width={200}
                height={200}
                className="cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop*/}
          <NavLinks />

          {/* Hamburger Menu */}
          <MobileMenu />
          
        </div>
      </div>
    </nav>
  );
}
