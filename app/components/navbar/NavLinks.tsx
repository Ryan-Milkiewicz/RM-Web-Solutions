import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="hidden sm:flex space-x-6">
        <Link href="#">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#services">Services</Link>
      <Link href="#contact">Contact</Link>
    </div>
  );
}