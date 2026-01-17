import Link from "next/link";
import { Container } from "./container";

export function Navbar() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <span className="text-lg font-semibold">Ahmad Irfaan</span>

          <ul className="flex gap-8 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
            <li><Link href="/projects" className="hover:text-cyan-400">Portfolio</Link></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

