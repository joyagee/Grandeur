import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      // Show footer only when reaching near bottom (100px tolerance)
      if (scrollPosition >= pageHeight - 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`transition-all duration-700 ${
        showFooter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-black text-white py-10 w-full`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-4"> Granduer</h2>
          <p className="text-gray-400 text-sm">
            Where style meets expression — discover the latest trends in men’s,
            women’s, and children’s fashion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/newarrivals" className="hover:text-white">New Arrivals</Link></li>
            <li><Link to="/womencloths" className="hover:text-white">Women</Link></li>
            <li><Link to="/mencloths" className="hover:text-white">Men</Link></li>
            <li><Link to="/childrencloths" className="hover:text-white">Children</Link></li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href="joychayi66@gmail.com" className="hover:text-white">support@granduer.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Granduer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;