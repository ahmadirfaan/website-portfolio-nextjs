"use client";

import Link from "next/link";
import { Container } from "./container";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "Ahmad Irfaan";
      case "/about":
        return "About Me";
      case "/services":
        return "Services";
      case "/projects":
        return "Portfolio";
      case "/contact":
        return "Contact";
      default:
        return "Ahmad Irfaan";
    }
  };

  return (
    <header className="py-3 sm:py-4 md:py-6 lg:py-8 sticky top-0 z-50 bg-[#0A192F]/95 backdrop-blur-sm border-b border-cyan-500/10">
      <Container>
        <nav className="flex items-center justify-between">
          <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">{getPageTitle()}</span>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-gray-400 text-sm lg:text-base xl:text-lg">
            <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-3 text-gray-400">
            <li>
              <Link href="/" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </Container>
    </header>
  );
}

