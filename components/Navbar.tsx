"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".navbar-logo",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".nav-link",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Testimonies", href: "#testimonies" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/20 dark:border-white/5 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <Link href="/#home" onClick={(e) => handleNavClick(e, "#home")} className="navbar-logo flex items-center gap-3 group">
          <Image src="https://res.cloudinary.com/samueladexcloudinary/image/upload/v1778069021/Untitled_10_dce73h.png" alt="Logo" width={70} height={50} className="rounded-[100%] object-cover" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link semibold text-sm tracking-wide transition-colors hover:text-primary-400 ${scrolled ? "text-slate-600 dark:text-slate-300" : "text-slate-200"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="nav-link bg-primary-500 hover:bg-primary-400 text-white px-8 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(1,125,208,0.4)]"
          >
            Join Us
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden focus:outline-none ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-panel border-t border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-900 dark:text-white semibold text-lg hover:text-primary-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
