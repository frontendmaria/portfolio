import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="text-sm font-semibold tracking-wide">
          Maria
        </div>

        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a href="#hero" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}