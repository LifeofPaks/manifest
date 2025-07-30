import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // You can use Heroicons or any icon library
import HeroBg from "../../assets/hero/hero.png"; // adjust path as needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileNav = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <div
      className="z-10 max-w-[1400px] !px-4 md:!px-[90px] !py-[12px] flex items-center justify-between shadow-md text-white rounded-full !mx-auto h-[64px] relative"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(255,255,255,0.10), rgba(255,255,255,0.10)),
          linear-gradient(0deg, rgba(255,255,255,0.12), rgba(255,255,255,0.12)),
          url(${HeroBg}),
          linear-gradient(180deg, rgba(255,255,255,0.07) 31.25%, rgba(153,153,153,0.04) 173.75%)
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray",
      }}
    >
      <h1 className="font-[500] text-lg">Manifest & Company</h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8">
        <a className="cursor-pointer">Home</a>
        <a href="#services" className="cursor-pointer">
          Our Services
        </a>
        <a href="#team" className="cursor-pointer">
          Our Team
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact Us
        </a>
      </ul>

      {/* Desktop Button */}
      <button
        className="hidden md:block border border-[#DA6300] rounded"
        style={{ padding: "9px 17px 10.19px 17px" }}
      >
        Book a Demo
      </button>

      {/* Hamburger Icon */}
      <div
        className="md:hidden z-20"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-[#1e1e1e] text-white !py-6 !px-4 flex flex-col gap-4 md:hidden rounded-b-xl shadow-lg">
          <a className="cursor-pointer" onClick={closeMobileNav}>Home</a>
          <a href="#services" className="cursor-pointer" onClick={closeMobileNav}>
            Our Services
          </a>
          <a href="#team" className="cursor-pointer" onClick={closeMobileNav}>
            Our Team
          </a>
          <a href="#contact" className="cursor-pointer" onClick={closeMobileNav}>
            Contact Us
          </a>
          <button
            className="border border-[#DA6300] rounded mt-4 w-full text-center"
            style={{ padding: "9px 17px 10.19px 17px" }} onClick={closeMobileNav}
          >
            Book a Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
