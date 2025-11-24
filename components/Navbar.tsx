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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/60 dark:bg-black/40 shadow-lg border-b border-white/20 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/hero-banner.png"
            alt="DigiLabs Logo"
            width={38}
            height={38}
            className="rounded-xl shadow-md group-hover:scale-110 transition"
          />
          <span
            className="
    text-3xl font-bold tracking-tight 
    bg-gradient-to-r from-blue-700 to-purple-700 
    bg-clip-text text-transparent
    transition-all duration-300
    group-hover:opacity-90 group-hover:translate-y-[1px]
  "
          >
            DigiLabs
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition relative ${
                pathname === link.href
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }`}
            >
              {link.name}

              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              )}
            </Link>
          ))}

          <ModeToggle />
        </nav>

        {/* Mobile Menu Button - Fixed Overlap Issue */}
        <button
          className="md:hidden relative z-[1001] p-2 rounded-lg bg-white/60 dark:bg-black/40 backdrop-blur-lg shadow"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full z-[1000] bg-white/95 dark:bg-black/90 backdrop-blur-xl border-t border-white/20 dark:border-white/10 flex flex-col gap-4 px-5 pt-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1 text-gray-900 dark:text-gray-200 hover:text-blue-500 transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
