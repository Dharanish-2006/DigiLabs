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
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "backdrop-blur-2xl bg-gradient-to-r from-white/40 via-white/20 to-white/5 dark:from-black/40 dark:via-black/20 dark:to-black/5 shadow-lg border-b border-white/30 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/hero-banner.png"
            alt="DigiLabs Logo"
            width={40}
            height={40}
            className="rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-purple-500/40 transition-all duration-300"
          />
          <span className="
            text-3xl font-extrabold tracking-tight 
            bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
            bg-clip-text text-transparent
            drop-shadow-sm group-hover:opacity-90
            transition
          ">
            DigiLabs
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 font-semibold">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-all 
                  ${
                    active
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-500"
                  }
                `}
              >
                {link.name}

                {/* Colorful underline for active link */}
                {active && (
                  <span className="
                    absolute -bottom-1 left-0 w-full h-[3px]
                    bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
                    rounded-full shadow-md
                  " />
                )}
              </Link>
            );
          })}

          <ModeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-[1001] p-3 rounded-xl 
          bg-white/60 dark:bg-black/50 backdrop-blur-lg 
          shadow-lg hover:shadow-purple-500/30 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className="
          bg-white/95 dark:bg-black/90 backdrop-blur-xl
          border-t border-white/20 dark:border-white/10
          flex flex-col gap-5 px-6 pt-6 pb-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-900 dark:text-gray-200 
              hover:text-purple-500 transition"
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
