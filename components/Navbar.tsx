"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-white/10 dark:bg-black/20 border-b border-white/30 dark:border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/hero-banner.png"
            width={42}
            height={42}
            alt="DigiLabs Logo"
            className="
              rounded-xl shadow-lg 
              group-hover:scale-110 
              group-hover:shadow-purple-500/50 
              transition-all duration-300
            "
          />

          <span className="
            text-3xl font-extrabold 
            bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
            text-transparent bg-clip-text
            tracking-tight drop-shadow-md
            group-hover:opacity-90
            transition
          ">
            DigiLabs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-semibold">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative text-lg transition-all 
                  ${
                    active
                      ? "text-purple-400 drop-shadow-sm"
                      : "text-white/90 hover:text-pink-400"
                  }
                `}
              >
                {link.name}

                {/* Neon Gradient Underline */}
                {active && (
                  <span className="
                    absolute -bottom-1 left-0 w-full h-[3px]
                    bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
                    rounded-full shadow-[0_0_10px_rgba(255,0,160,0.7)]
                  "></span>
                )}
              </Link>
            );
          })}

          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="
            md:hidden p-3 rounded-xl
            bg-white/20 dark:bg-black/30 
            backdrop-blur-xl border border-white/20
            shadow-lg hover:shadow-purple-500/40 
            transition-all
          "
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${open ? "max-h-80" : "max-h-0"}
        `}
      >
        <div className="
          flex flex-col gap-5 px-6 py-6 
          bg-white/10 dark:bg-black/40 backdrop-blur-2xl 
          border-t border-white/20 dark:border-white/10
          shadow-xl
        ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                text-xl font-medium 
                text-white/90 hover:text-purple-400 
                transition-all
              "
            >
              {link.name}
            </Link>
          ))}

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
