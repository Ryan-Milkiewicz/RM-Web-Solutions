import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t-orange-500 border-t-3">
      <div className="py-4 px-4 flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0 text-center">
        <span className="text-orange-500 text-md font-semibold">
          &copy; {new Date().getFullYear()} RM Web Solutions. All rights
          reserved.
        </span>

        <span className="text-orange-500 text-md font-semibold hidden sm:inline">
          |
        </span>

        <span className="flex items-center text-orange-500 text-md font-semibold">
          <HiOutlineLocationMarker className="mr-1" />
          Wynantskill, NY
        </span>

        <span className="text-orange-500 text-md font-semibold hidden sm:inline">
          |
        </span>

        <a
          href="mailto:info@rmwebsolutions.com"
          className="flex items-center text-orange-500 text-md font-semibold hover:text-white transition"
        >
          <MdAlternateEmail className="mr-1" />
          info@rmwebsolutions.com
        </a>
      </div>
    </footer>
  );
}
