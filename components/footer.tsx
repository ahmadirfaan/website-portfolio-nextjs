import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-gray-800" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2rem)', paddingBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
      <Container>
        <p className="text-center text-gray-400" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
          © {new Date().getFullYear()} Ahmad Irfaan. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
