'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-[#F29325] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-[#6d2e46]">Pastelería Damasco</h1>
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
          <a href="/" className="text-[#6d2e46] hover:text-white transition">Inicio</a>
          <a href="#nosotros" className="text-[#6d2e46] hover:text-white transition">Nosotros</a>
          <a href="/productos" className="text-[#6d2e46] hover:text-white transition">Productos</a>
          <a href="#contacto" className="text-[#6d2e46] hover:text-white transition">Contacto</a>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#fff0f5]">
          <a href="/" className="block text-[#6d2e46] hover:text-white">Inicio</a>
          <a href="#nosotros" className="block text-[#6d2e46] hover:text-white">Nosotros</a>
          <a href="/productos" className="block text-[#6d2e46] hover:text-white">Productos</a>
          <a href="#contacto" className="block text-[#6d2e46] hover:text-white">Contacto</a>
        </div>
      )}
    </header>
  );
}
