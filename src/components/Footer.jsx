import LogoWhite from "../assets/logo-white.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
        {/* --- Logo and Description --- */}
        <div className="flex flex-col gap-4">
          <img src={LogoWhite} alt="The Kenyan Heart" className="h-10" />
          <p className="text-sm max-w-sm">
            The Kenyan Heart — empowering communities and protecting rights across Kenya.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/programs" className="hover:text-primary">Programs</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">info@thekenyanheart.org</p>
          <p className="text-sm mt-2">P.O. Box 00000, Nairobi, Kenya</p>
        </div>

        {/* --- Follow Us Section --- */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <p className="text-sm mb-3">Join us on social media:</p>
          <div className="flex gap-4 text-lg">
            <a
              href="https://facebook.com/thekenyanheart"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/thekenyanheart"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/thekenyanheart"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com/@thekenyanheart"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="text-center py-4 text-xs bg-[#0f0f0f]">
        © {new Date().getFullYear()} The Kenyan Heart. All rights reserved.
      </div>
    </footer>
  );
}
