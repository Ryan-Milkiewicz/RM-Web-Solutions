export default function Footer() {
  return (
    <footer className="bg-blue-950">
      <div className="h-16 flex items-center justify-center space-x-2">
        <span className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} RM Web Solutions. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
