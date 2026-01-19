import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-4 sm:py-5 md:py-6 lg:py-8">
      <Container>
        <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
          © {new Date().getFullYear()} Ahmad Irfaan. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
