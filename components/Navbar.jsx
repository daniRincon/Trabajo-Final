import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#inicio",         label: "Inicio" },
  { href: "#subtema-1",      label: "Explícito vs Tácito" },
  { href: "#subtema-2",      label: "Innovación y Cultura" },
  { href: "#subtema-3",      label: "Trabajo Colaborativo" },
  { href: "#subtema-4",      label: "Aprendizaje" },
  { href: "#fuentes",        label: "Fuentes" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection,setActiveSection]= useState("inicio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link href="#inicio" className={`flex items-center gap-2 font-bold text-lg transition-colors ${scrolled ? "text-primary-700" : "text-white"}`}>
          <span className="text-2xl">🧩</span>
          <span className="hidden sm:inline">GC</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? scrolled
                      ? "bg-primary-100 text-primary-700"
                      : "bg-white/20 text-white"
                    : scrolled
                      ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      : "text-white hover:bg-white/20"
                }`}
                onClick={() => setActiveSection(link.href.replace("#", ""))}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
          onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white shadow-lg border-t border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
