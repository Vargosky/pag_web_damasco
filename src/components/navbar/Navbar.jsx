'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-[#F29325] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#6d2e46]">
          <Link href="/">Pastelería Damasco</Link>
        </h2>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6 text-[#6d2e46]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          <Link href="/" className="text-[#6d2e46] hover:text-white transition">Inicio</Link>
          <Link href="/nosotros" className="text-[#6d2e46] hover:text-white transition">Nosotros</Link>
          <Link href="/productos" className="text-[#6d2e46] hover:text-white transition">Productos</Link>
          <Link href="/contacto" className="text-[#6d2e46] hover:text-white transition">Contacto</Link>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#fff0f5]">
          <Link href="/" onClick={handleLinkClick} className="block text-[#6d2e46] hover:text-white">Inicio</Link>
          <Link href="/nosotros" onClick={handleLinkClick} className="block text-[#6d2e46] hover:text-white">Nosotros</Link>
          <Link href="/productos" onClick={handleLinkClick} className="block text-[#6d2e46] hover:text-white">Productos</Link>
          <Link href="/contacto" onClick={handleLinkClick} className="block text-[#6d2e46] hover:text-white">Contacto</Link>
        </div>
      )}
    </header>
  );
}
