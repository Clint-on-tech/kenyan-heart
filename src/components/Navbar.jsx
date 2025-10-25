import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="The Kenyan Heart" className="h-10 w-auto" />
          <span className="text-lg font-heading font-bold text-primary">
            The Kenyan Heart
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/programs" className="hover:text-primary">
            Programs
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
          <a
            href="#get-involved"
            className="ml-4 bg-primary text-white px-4 py-2 rounded-full text-sm hover:opacity-95"
          >
            Get Involved
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-primary focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-inner transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-sm font-medium">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/programs"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            Programs
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            Contact
          </Link>
          <a
            href="#get-involved"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:opacity-95"
          >
            Get Involved
          </a>
        </div>
      </div>
    </nav>
  );
}
