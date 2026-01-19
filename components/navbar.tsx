import Link from "next/link";
import { Container } from "./container";

export function Navbar() {
  return (
    <header className="py-6" style={{ paddingTop: 'clamp(1rem, 2vw, 1.5rem)', paddingBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
      <Container>
        <nav className="flex items-center justify-between">
          <span className="font-semibold" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>Ahmad Irfaan</span>

          <ul className="flex gap-8 text-gray-400" style={{ gap: 'clamp(1rem, 3vw, 2rem)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
            <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
            <li><a href="/about" className="hover:text-cyan-400">About</a></li>
            <li><a href="/services" className="hover:text-cyan-400">Services</a></li>
            <li><Link href="/projects" className="hover:text-cyan-400">Portfolio</Link></li>
            <li><a href="/contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

