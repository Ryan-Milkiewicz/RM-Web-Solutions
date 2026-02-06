export default function Footer() {
  return (
    <footer className="bg-blue-950">
      <div className="h-16 flex items-center justify-center space-x-4">
        <span className="text-orange-500 text-md font-large">
          &copy; {new Date().getFullYear()} RM Web Solutions. All rights
          reserved.
        </span>

        <span className="text-orange-500 text-md font-large">|</span>

        <a
          href="mailto:info@rmwebsolutions.com"
          className="text-orange-500 text-md font-large hover:text-white transition"
        >
          info@rmwebsolutions.com
        </a>
      </div>
    </footer>
  );
}
